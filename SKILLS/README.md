# SKILLS

最終更新: 2026-06-30

作業種別ごとの詳細ルールを置く場所。

`AGENTS.md` は全タスク共通ルールと routing に絞り、詳細手順は必要になった skill file だけ読む。

## Skill Routing

- PowerShell / Windows path / workspace checks → `PowerShell.md`
- Python / `.venv` / pytest / packaging → `Python.md`
- Git root / branch / commit / push / missing `.git` → `Git.md`
- External article / OSS / paper / source verification → `Research.md`
- Security review / release gate / risky code changes → `Security.md`

## Rules

- Public-safe information only.
- Keep each skill focused on repeatable operational guidance.
- Do not duplicate full project-specific knowledge; link to `PROJECTS/` instead.
- Do not put secrets, credentials, private logs, or local-only sensitive details here.
- If a rule must be enforced mechanically, prefer scripts, CI, tests, or checklists over prose.
