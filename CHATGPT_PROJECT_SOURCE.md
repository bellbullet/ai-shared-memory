# ChatGPT Project Source

最終更新: 2026-07-02

ChatGPT Projects の「情報源」に貼るための ai-shared-memory 要約。

Repository:

- https://github.com/bellbullet/ai-shared-memory

## Purpose

`ai-shared-memory` は、ChatGPT、Codex、Claude、Gemini など複数 AI が共通で参照する公開前提の知識ベースです。

目的:

- OSS、GitHub、AI 技術、設計思想、学習内容、公開論文、プロジェクト概要を整理する。
- 会話だけに残りやすい知識を Markdown / Git repository に永続化する。
- 新しい GitHub link、OSS、paper、tool、AI 記事を分類し、後から再利用できるようにする。
- 公開してよい情報だけを保存する。

## How To Use In ChatGPT Projects

- Project instructions should include the short operating rules from `CHATGPT_PROJECT_INSTRUCTIONS.md`.
- Project sources should include this file, not only the GitHub repository URL.
- When repository details are needed, use the read order below and prefer the current files in the repository.
- If ChatGPT cannot access the repository contents directly, use this file as the stable summary and ask the user to provide specific files when needed.

## Read Order

Use this order for normal work:

1. `PROJECT_START.md` - start checklist and required checks
2. `WORKSPACE.md` - workspace root and directory roles
3. `STATUS.md` - current workspace state and decision dashboard
4. `AGENTS.md` - shared AI operating rules
5. `CURRENT.md` - current focus and next actions
6. `AI_INDEX.md` - reverse lookup and routing index
7. `SKILLS/` - task-specific rules, only when needed
8. Target files - `AI_DRAWERS.md`, `PROJECTS/*.md`, `NOTES/*.md`, etc.
9. `INBOX.md` - unsorted public links, tools, ideas, papers

Optional, when relevant:

- `SECURITY_REVIEW.md` - security review and release gate
- `OKF.md` - Open Knowledge Format adoption candidate
- `OUTPUTS/README.md` - generated artifacts such as PDF, pptx, xlsx, images

## Main Files

- `README.md`: repository overview and structure.
- `PROJECT_START.md`: first file to read for a new task.
- `WORKSPACE.md`: workspace map and root rules.
- `STATUS.md`: active projects, research areas, pending decisions, blocked/waiting state.
- `AGENTS.md`: shared AI behavior rules.
- `CURRENT.md`: current focus, waiting items, next actions.
- `AI_INDEX.md`: keyword and file routing index.
- `AI_DRAWERS.md`: technical radar for OSS, AI tools, papers, research targets, ideas.
- `INBOX.md`: temporary holding area for unsorted public links and ideas.
- `PROJECTS/`: public-safe project metadata.
- `NOTES/`: cross-project knowledge and design ideas.
- `SKILLS/`: task-specific operating rules for PowerShell, Python, Git, Research, and Security.
- `LESSONS_LEARNED.md`: reusable operational lessons.
- `DECISIONS.md`: design decisions and rationale.
- `REVIEW.md`: periodic review checklist.
- `CHANGELOG.md`: structure and operating-rule changes.

## New Link / OSS / Paper / AI Article Rules

When the user provides a new GitHub link, OSS, paper, tool, or AI article:

1. Check whether the information is public-safe.
2. Determine the correct destination:
   - Tool / OSS / paper / reference site / idea -> `AI_DRAWERS.md` or `INBOX.md`
   - Workspace or AI operating pattern -> `NOTES/`
   - Project-specific information -> `PROJECTS/<name>.md`
   - Reusable operational lesson -> `LESSONS_LEARNED.md`
   - Adopted design decision -> `DECISIONS.md`
   - Security workflow -> `SECURITY_REVIEW.md`
   - Task-specific procedure -> `SKILLS/`
3. If classification is unclear, use `INBOX.md`.
4. Update `AI_INDEX.md` when the item should be discoverable later.
5. Update `CHANGELOG.md` when structure or operating rules change.
6. Keep facts, assumptions, and ideas separated.

## Save

It is acceptable to save:

- OSS and GitHub repositories
- technical memos
- AI knowledge
- design ideas
- public architecture notes
- public learning notes
- public papers
- public project summaries

## Do Not Save

Do not save:

- API keys
- tokens
- cookies
- webhooks
- `.env` values
- credentials
- private contract details
- estimates or financial terms
- addresses
- phone numbers
- personal information
- local machine-specific detailed logs
- private account data

## Update Suggestion Rule

If a conversation contains durable, public-safe knowledge that would be useful later, suggest reflecting it into `ai-shared-memory`.

When suggesting an update, state:

- target file
- reason
- short proposed summary

Do not commit or push unless the user explicitly confirms.

## Recommended Project Sources

Minimum:

- CHATGPT_PROJECT_SOURCE.md
- PROJECT_START.md
- AI_INDEX.md
- CURRENT.md
- STATUS.md

For GitHub / OSS intake:

- AI_DRAWERS.md
- INBOX.md

For periodic memory review:

- REVIEW.md
- NOTES/AI_Coding_Patterns.md
- LESSONS_LEARNED.md

## Source Version

Source version:

- Updated: 2026-07-02
- Repo: bellbullet/ai-shared-memory
- Recommended with commit: current main after the 2026-07-02 Memory Review update
