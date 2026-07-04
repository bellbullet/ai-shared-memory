# Python Skill

最終更新: 2026-06-30

Use when work involves Python projects, virtual environments, dependencies, packaging, tests, or Python runtime repair.

## Required Practices

- Read `pyproject.toml` first when present.
- Respect `requires-python`.
- Use the project `.venv` if it exists and starts correctly.
- Recreate `.venv` only when broken or explicitly needed.
- Show the exact `.venv` path before deletion or recreation.
- Prefer `python -m pytest` inside the active environment.

## Environment Checks

```powershell
cd <workspace-root>\Projects\<project-name>
git rev-parse --show-toplevel
python --version
python -c "import sys; print(sys.executable)"
```

If `.venv` is used:

```powershell
.\.venv\Scripts\Activate.ps1
python --version
python -c "import sys; print(sys.executable)"
```

## Dependency Install

- If `pyproject.toml` exists, inspect it before choosing install command.
- If `requirements.txt` exists, inspect it before installing.
- If both exist, choose based on project structure and document the choice.

## Test Reporting

Report:

- Working directory
- Python executable
- `.venv` path
- Install command used
- pytest presence
- pytest result
