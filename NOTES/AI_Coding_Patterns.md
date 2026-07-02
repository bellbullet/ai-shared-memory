# AI Coding Patterns

最終更新: 2026-07-02

## Purpose

- AI coding agents を安定運用するための設計パターンを整理する。
- `AGENTS.md` を肥大化させず、必要な知識を適切なファイルへ分離する。

## Sources

- AGENTS.md と Skills: https://zenn.dev/green_tea/articles/d310e5cf809190
- Claude Code運用ミス7選: https://qiita.com/tehito/items/356e5f1dba112a075be1
- Google OKF: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
- Ponytail: https://github.com/DietrichGebert/ponytail
- deepsec: https://github.com/vercel-labs/deepsec
- Anthropic Dreams: https://platform.claude.com/docs/en/managed-agents/dreams
- dream-skill: https://github.com/grandamenium/dream-skill
- Auto-Dreamer: https://arxiv.org/abs/2605.20616

## Pattern: Thin AGENTS, Routed Skills

Keep `AGENTS.md` for:

- global rules
- public safety
- read order
- routing to other files
- update policy

Move task-specific details to:

- `SKILLS/PowerShell.md`
- `SKILLS/Python.md`
- `SKILLS/Git.md`
- `SKILLS/Research.md`
- `SKILLS/Security.md`

Project-specific knowledge remains in `PROJECTS/`.

Cross-project knowledge remains in `NOTES/`.

Executable enforcement should live in scripts, CI, tests, or checklists rather than prose.

## Pattern: File-Based Context

Do not rely on long chat history for durable context.

Use:

- `CURRENT.md`
- `STATUS.md`
- `PROJECTS/`
- `NOTES/`
- `PLAN.md`
- `LESSONS_LEARNED.md`

## Pattern: Memory Consolidation / Dream Review

Durable memory needs periodic consolidation, not only accumulation.

Use this pattern when:

- `INBOX.md` has many unresolved links or ideas
- `AI_DRAWERS.md` has duplicate or overlapping entries
- `PROJECTS/` or `NOTES/` contain stale runtime, Git, or status details
- relative dates such as "today" or "yesterday" appear in durable files
- the same operational lesson appears in multiple places
- a large workspace or project structure change has happened

Review order:

1. `INBOX.md`
2. `AI_DRAWERS.md`
3. `NOTES/AI.md`
4. `NOTES/AI_Coding_Patterns.md`
5. `PROJECTS/*.md`
6. `AI_INDEX.md`
7. `CURRENT.md`
8. `STATUS.md`

Actions:

- move unsorted links into `AI_DRAWERS.md`, `NOTES/`, or `PROJECTS/`
- merge duplicate descriptions
- replace stale status with current status
- convert relative dates into absolute dates
- remove references to nonexistent files, commands, or flags after checking the repo
- add missing lookup terms to `AI_INDEX.md`
- record changed decisions in `DECISIONS.md`
- record structure or operating-rule changes in `CHANGELOG.md`

Safety rules:

- Treat source files as evidence; do not overwrite them blindly.
- Make small logical diffs so changes can be reviewed or reverted.
- Do not add the review history itself to durable knowledge files unless it changes future behavior.
- If consolidation output is uncertain, ask the user instead of inventing a resolution.

## Pattern: Reuse Before Build

Before writing new code, check:

- standard library
- native platform features
- existing dependencies
- existing project code
- shared workspace knowledge
- `AI_DRAWERS.md`

## Pattern: Release Gate

For high-risk or public changes:

1. tests / lint / typecheck
2. security review when needed
3. manual review
4. fix
5. commit / push / release

## AI Instructions

- Treat this file as design guidance, not a mandatory execution checklist.
- For actual task rules, route to `SKILLS/`.
- Keep `AGENTS.md` concise over time.
