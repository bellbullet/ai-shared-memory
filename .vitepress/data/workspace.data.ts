import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { extname, join } from 'node:path'
import { defineLoader } from 'vitepress'

export interface WorkspaceStatsData {
  projects: number
  notes: number
  trials: number
  radar: number
}

export interface LatestUpdate {
  date: string
  text: string
}

export interface AdoptedTrial {
  date: string
  name: string
}

export interface TrialQueueItem {
  name: string
  target: string
  purpose: string
}

export interface WorkspaceDashboardData {
  version: string
  updatedAt: string
  stats: WorkspaceStatsData
  latestUpdates: LatestUpdate[]
  adoptedTrials: AdoptedTrial[]
  trialQueue: TrialQueueItem[]
}

const repoRoot = fileURLToPath(new URL('../..', import.meta.url))
const noteExclusions = new Set(['index.md', 'SolarPower.md', 'VehiclePlan.md'])
const radarCategories = new Set([
  'AI',
  'Agent / Orchestration',
  'LLM',
  'Development',
  'GPU / HPC',
  'Scientific Computing / Rust AI',
  'Creative',
  'Self Host',
  'Research',
  'Reference Sites',
  'Ideas'
])

function fail(message: string): never {
  throw new Error(`[workspace dashboard] ${message}`)
}

function normalize(markdown: string): string {
  return markdown.replace(/\r\n/g, '\n')
}

function plainText(markdown: string): string {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*|~~/g, '')
    .trim()
}

function extractSection(markdown: string, heading: string): string {
  const lines = normalize(markdown).split('\n')
  const start = lines.findIndex((line) => line === `## ${heading}`)

  if (start < 0) fail(`${heading} section was not found`)

  const endOffset = lines.slice(start + 1).findIndex((line) => line.startsWith('## '))
  const end = endOffset < 0 ? lines.length : start + 1 + endOffset
  return lines.slice(start + 1, end).join('\n')
}

async function countMarkdownFiles(directory: string, exclusions: Set<string>): Promise<number> {
  const entries = await readdir(join(repoRoot, directory), { withFileTypes: true })
  const count = entries.filter(
    (entry) => entry.isFile() && extname(entry.name).toLowerCase() === '.md' && !exclusions.has(entry.name)
  ).length

  if (count === 0) fail(`${directory} did not contain any countable Markdown files`)
  return count
}

function parseLatestUpdates(markdown: string): LatestUpdate[] {
  const updates: LatestUpdate[] = []
  let currentDate = ''

  for (const line of normalize(markdown).split('\n')) {
    const heading = line.match(/^## (.+)$/)
    if (heading) {
      currentDate = heading[1].match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? ''
      continue
    }

    const item = line.match(/^- (.+)$/)
    if (item && currentDate) {
      updates.push({ date: currentDate, text: plainText(item[1]) })
      if (updates.length === 5) break
    }
  }

  if (updates.length < 5) fail(`CHANGELOG.md yielded only ${updates.length} of 5 required updates`)
  return updates
}

function countRadarItems(markdown: string): number {
  const seenCategories = new Set<string>()
  let section = ''
  let count = 0

  for (const line of normalize(markdown).split('\n')) {
    const category = line.match(/^## (.+)$/)
    if (category) {
      section = category[1].trim()
      if (radarCategories.has(section)) seenCategories.add(section)
      continue
    }

    if (/^### .+/.test(line) && radarCategories.has(section)) count += 1
  }

  const missing = [...radarCategories].filter((category) => !seenCategories.has(category))
  if (missing.length > 0) fail(`AI_DRAWERS.md is missing radar categories: ${missing.join(', ')}`)
  if (count === 0) fail('AI_DRAWERS.md yielded no radar entries')
  return count
}

function parseTrialQueue(markdown: string): TrialQueueItem[] {
  const rows = extractSection(markdown, 'Trial Queue')
    .split('\n')
    .filter((line) => /^\|.*\|$/.test(line.trim()))
    .map((line) => line.trim().slice(1, -1).split('|').map((cell) => cell.trim()))

  if (rows.length < 3 || rows[0].join('|') !== 'Candidate|First target|Purpose|State') {
    fail('TRIALS.md Trial Queue table has an unexpected structure')
  }

  const items = rows.slice(2).map((cells) => {
    if (cells.length !== 4) fail('TRIALS.md Trial Queue contains a malformed row')
    return { name: plainText(cells[0]), target: plainText(cells[1]), purpose: plainText(cells[2]), state: cells[3] }
  })

  const planned = items
    .filter((item) => item.state === 'Planned')
    .map(({ name, target, purpose }) => ({ name, target, purpose }))

  if (planned.length === 0) fail('TRIALS.md Trial Queue contains no Planned items')
  return planned
}

function parseTrialRecords(markdown: string): { count: number; adopted: AdoptedTrial[] } {
  const section = extractSection(markdown, 'Trial Records')
  const matches = [...section.matchAll(/^### (\d{4}-\d{2}-\d{2}) (.+)$/gm)]

  if (matches.length === 0) fail('TRIALS.md contains no dated Trial Records')

  const records = matches.map((match, index) => {
    const start = (match.index ?? 0) + match[0].length
    const end = index + 1 < matches.length ? matches[index + 1].index : section.length
    const body = section.slice(start, end)
    const decision = body.match(/^判断:\s*\n\n?-\s*(.+)$/m)?.[1]?.trim()

    if (!decision) fail(`TRIALS.md record "${match[2]}" has no parseable decision`)
    return { date: match[1], name: match[2].trim(), decision }
  })

  return {
    count: records.length,
    adopted: records
      .filter((record) => record.decision === 'Adopted')
      .map(({ date, name }) => ({ date, name }))
  }
}

export async function loadWorkspaceData(): Promise<WorkspaceDashboardData> {
  const [changelog, drawers, trials, versionSource, projects, notes] = await Promise.all([
    readFile(join(repoRoot, 'CHANGELOG.md'), 'utf8'),
    readFile(join(repoRoot, 'AI_DRAWERS.md'), 'utf8'),
    readFile(join(repoRoot, 'TRIALS.md'), 'utf8'),
    readFile(join(repoRoot, 'VERSION'), 'utf8'),
    countMarkdownFiles('PROJECTS', new Set(['index.md'])),
    countMarkdownFiles('NOTES', noteExclusions)
  ])

  const version = versionSource.trim()
  if (!/^\d+\.\d+\.\d+$/.test(version)) fail(`VERSION has an unexpected value: "${version}"`)

  const latestUpdates = parseLatestUpdates(changelog)
  const trialRecords = parseTrialRecords(trials)
  const adoptedTrials = trialRecords.adopted
  if (adoptedTrials.length === 0) fail('TRIALS.md contains no Adopted Trial Records')

  return {
    version,
    updatedAt: latestUpdates[0].date,
    stats: {
      projects,
      notes,
      trials: trialRecords.count,
      radar: countRadarItems(drawers)
    },
    latestUpdates,
    adoptedTrials,
    trialQueue: parseTrialQueue(trials)
  }
}

export default defineLoader({
  watch: ['CHANGELOG.md', 'AI_DRAWERS.md', 'TRIALS.md', 'VERSION', 'PROJECTS/*.md', 'NOTES/*.md'],
  load: loadWorkspaceData
})
