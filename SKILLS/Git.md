# Git Skill

最終更新: 2026-06-30

Use when work involves Git root detection, missing `.git`, commits, pushes, branches, remotes, or publishing.

## Required Practices

- Start from the intended project directory.
- Confirm Git root before assuming repository state.
- Preserve existing history and remotes.
- Do not run `git init`, add remotes, delete `.git`, or rewrite history without explicit user confirmation.
- If Git root is missing, report cause and recommended recovery path before acting.

## Checks

```powershell
cd <workspace-root>\Projects\<project-name>
git rev-parse --show-toplevel
git status --short
git remote -v
```

## Missing Git Root Flow

1. Confirm current directory.
2. Check whether `.git` exists nearby.
3. Decide whether Git is likely needed.
4. If local-only, report that.
5. If Git is needed, ask before init, clone, remote repair, or delete.

## Commit / Push

- Summarize changed files before committing.
- Do not include secrets, `.env`, generated junk, caches, or local logs.
- Commit only after the user asks or confirms.
- Push only after the user asks or confirms.
