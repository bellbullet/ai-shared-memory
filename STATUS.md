# STATUS

最終更新: 2026-07-15

Workspace 全体の現在地を一覧するファイル。

詳細は `PROJECTS/`、`AI_DRAWERS.md`、`NOTES/` を参照する。

## Workspace

- Version: `1.1.0`
- Root: `<workspace-root>`
- Active projects: `<workspace-root>\Projects`
- Shared knowledge: `<workspace-root>\ai-shared-memory`
- Public knowledge site: https://bellbullet.github.io/ai-shared-memory/
- Deployment: GitHub Pages / GitHub Actions (`main` push)
- Archive: `<workspace-root>\Archive`
- Sandbox: `<workspace-root>\Sandbox`
- Shared reusable material: `<workspace-root>\Shared`

## Active Projects

| Project | Status | Metadata |
| --- | --- | --- |
| AIRI | Planning / research | `PROJECTS/AIRI.md` |
| GameFreezeSentinel | Local Python project; tests available | `PROJECTS/GameFreezeSentinel.md` |
| KomiReader | Local-first reader; Vite / React | `PROJECTS/KomiReader.md` |
| MahjongFirstDiscard | Static site; GitHub / Vercel workflow | `PROJECTS/MahjongFirstDiscard.md` |
| OciMinecraftJavaServer | Terraform infrastructure project | `PROJECTS/OciMinecraftJavaServer.md` |
| ScreenshotStitcher | Local screenshot stitching MVP; tests available | `PROJECTS/ScreenshotStitcher.md` |
| WebcamFaceDemo | Local Python demo; tests available | `PROJECTS/WebcamFaceDemo.md` |
| XImageBot | Python API bot; secrets local-only | `PROJECTS/XImageBot.md` |

## Research / Knowledge Areas

| Area | Location |
| --- | --- |
| AI / LLM / agents | `NOTES/AI.md`, `AI_DRAWERS.md` |
| AI coding operations / agent collaboration | `AI_DRAWERS.md`, `NOTES/AI_Coding_Patterns.md` |
| Claude Code / Codex architecture | `references/CLAUDE_CODE_MAP.md`, `AI_DRAWERS.md` |
| Creative / media tools | `AI_DRAWERS.md` |
| Self-host tools | `AI_DRAWERS.md`, `NOTES/HomeLab.md` |
| Solar / home energy | `NOTES/Solar.md` |
| Vehicles | `NOTES/Vehicles.md` |

## Ideas

- Amazon セール検知システム → `AI_DRAWERS.md`
- Other unsorted ideas → `INBOX.md`

## Knowledge Health

| Check | State | Next action |
| --- | --- | --- |
| Public knowledge site | Live on GitHub Pages; initial deployment verified on 2026-07-15 | Recheck the Actions run and public URL after site-related changes |
| Entry points | Synced on 2026-07-13 | Recheck after structure, version, or read-order changes |
| `INBOX.md` | Existing OSS batch plus the 2026-07-15 X-derived candidates remain grouped by role and risk | Promote only after the recorded license, permission, external transmission, and runtime gates are cleared |
| `AI_DRAWERS.md` | 90 entries / 11 categories / 12 cross-groups; single-file layout retained | Consider splitting only when retrieval or maintenance degrades |
| `PROJECTS/` | 8 metadata files | Refresh when project Goal / Status / Stack / Next Tasks change |
| `NOTES/` | 8 files, including compatibility files | Review duplication and stale summaries during monthly review |
| Pending decisions | 2 open items | Resolve or defer explicitly in `DECISIONS.md` when adopted |

## Active Reuse Trials

| Candidate | State | First target | Gate |
| --- | --- | --- | --- |
| VitePress / GitHub Pages | Adopted | ai-shared-memory | Keep the repository base path, local build, and public-safe content checks |
| Ponytail / Minimal Implementation Policy | Adopted as policy | All development work | No automatic package installation |
| Memory Consolidation / Dream Review | Adopted | ai-shared-memory | Run only at documented triggers |
| reviewable-html-workbench | Planned | ai-shared-memory / `OUTPUTS/` | Start when a reviewable HTML artifact exists |
| agmsg | Planned | ScreenshotStitcher | Public-safe small trial; verify Git Bash, SQLite path, and permissions |

Detailed records and decisions: `TRIALS.md`

### Next Memory Review

Run a Memory Review when any of these becomes true:

- 20〜30 new links accumulate after the current INBOX batch is processed.
- Entry-point files disagree on version, read order, structure, or current focus.
- Similar entries or stale states make `AI_DRAWERS.md`, `PROJECTS/`, or `NOTES/` harder to search.
- A major workspace or project structure change occurs.

## Decisions Dashboard

### Today's Decisions

- 未設定

### Pending Decisions

- OKF frontmatter の小規模試験を v1.2 以降で行うか → `OKF.md`
- `OUTPUTS/` を Git 管理する成果物置き場としてどこまで使うか → `OUTPUTS/README.md`

### Blocked

- 未設定

### Waiting AI

- 未設定

### Waiting Human

- 未設定

## Operating State

- Start file: `PROJECT_START.md`
- Workspace rules: `WORKSPACE.md`
- AI behavior rules: `AGENTS.md`
- Current focus: `CURRENT.md`
- Search index: `AI_INDEX.md`
- Trial records: `TRIALS.md`
- Review checklist: `REVIEW.md`
- Output artifacts: `OUTPUTS/README.md`
- Lessons learned: `LESSONS_LEARNED.md`
- Decisions: `DECISIONS.md`
- Change history: `CHANGELOG.md`

## Update Rule

Update this file when:

- active projects are added, archived, or renamed
- a project moves from idea to active work
- an important research area becomes active
- the workspace lifecycle files change
