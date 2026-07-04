# PowerShell Skill

最終更新: 2026-06-30

Use when work involves Windows PowerShell, local paths, workspace checks, or command snippets for the user.

## Required Practices

- Always confirm the working folder before running or presenting commands.
- Do not treat the user's home directory as a project root unless explicitly requested.
- Use absolute paths when paths matter.
- Start user-facing command snippets with `cd <project path>`.
- Use `<workspace-root>` and `<project-name>` placeholders in public docs.
- Keep actual workspace roots, usernames, and machine-specific paths in `LOCAL_ENVIRONMENT.md`, which is not Git-managed.
- Prefer native PowerShell cmdlets for filesystem operations.
- For cleanup, quarantine or archive when deletion is ambiguous.

## Command Format

```powershell
# 1. Working folder
cd <workspace-root>\Projects\<project-name>

# 2. Runtime, if needed
.\.venv\Scripts\Activate.ps1

# 3. Command
python -m pytest

# 4. Expected result
# tests pass
```

## Checks

- Working Directory
- Git Root
- Runtime
- `.venv`, if Python

## Avoid

- Guessing the current directory.
- Showing commands without a working folder.
- Deleting outside the target workspace without explicit confirmation.
- Printing `.env`, tokens, secrets, or credential values.
