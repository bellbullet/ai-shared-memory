# LOCAL_ENVIRONMENT.example.md

This file is an example for local machine settings.

Copy it to `LOCAL_ENVIRONMENT.md` and fill in real local values on your machine.
`LOCAL_ENVIRONMENT.md` is intentionally ignored by Git.

Do not commit real usernames, private paths, API keys, tokens, cookies, `.env` values, or machine-specific logs.

## Windows

```yaml
workspace_root: <workspace-root>
projects_dir: <workspace-root>\Projects
shared_memory_repo: <workspace-root>\ai-shared-memory
user_home: C:\Users\<username>
```

## PowerShell

Move to the target project before running commands.

```powershell
cd <workspace-root>\Projects\<project-name>
```

Do not treat the user's home directory as a project root unless explicitly requested.
