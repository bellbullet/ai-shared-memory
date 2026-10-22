# ASM Entry Point

This file is the stable entry point for this shared-memory repository.
It is a routing and traceability layer, not a background memory service.

## Required scan for a workspace task

Before a non-trivial implementation or investigation:

1. Confirm the active working directory and Git root.
2. Read this file.
3. Read `CURRENT.md` for active state and `AI_INDEX.md` for routing.
4. Read only the relevant files under `PROJECTS/` and `NOTES/`.
5. Read `AI_DRAWERS.md` when the task concerns a radar, tool, or external candidate.
6. Read the target project's `AGENTS.md`, README, and relevant source files.

When the target is this repository itself, also follow the repository order in
`PROJECT_START.md`: `WORKSPACE.md`, `STATUS.md`, `AGENTS.md`, `CURRENT.md`,
`AI_INDEX.md`, and then the task-specific files.

## Minimum trace

Before changing files, record the files actually read. Use this compact form in
the task report, terminal note, or handoff:

```text
ASM scan
- entry: ai-shared-memory/ASM_ENTRY.md
- state: ai-shared-memory/CURRENT.md
- index: ai-shared-memory/AI_INDEX.md
- relevant: <PROJECTS/NOTES paths, or none>
- project: <target AGENTS/README paths>
```

Do not claim that ASM was consulted without listing the paths. If a file is
missing or stale, report that fact and use a newer, verified source instead of
silently treating the stale file as current.

## Source roles

- `CURRENT.md`: active focus, blockers, and next actions.
- `AI_INDEX.md`: keyword and topic routing.
- `PROJECTS/`: public-safe project summaries and links to related notes.
- `NOTES/`: cross-project durable knowledge.
- `AI_DRAWERS.md`: tool and technology radar.
- `INBOX.md` / `TRIALS.md`: unclassified candidates and trial outcomes.

These files are public-safe Markdown. Do not add secrets, private
conversation content, personal data, local credentials, or generated runtime
state.

## Scope and verification

This entry point is automatically in scope only when the task is working under
the configured workspace root and the parent instructions are followed. A task
in a different workspace must read it explicitly if ASM is intended to be used.

The read-only health check is:

```powershell
cd <workspace-root>\<project>
& <workspace-root>\Shared\tools\asm\Verify-ASMContext.ps1 -ProjectPath (Get-Location).Path
```

The checker validates paths, freshness signals, and Git context. It cannot
prove that an AI model actually read a file; the minimum trace above is the
behavioral evidence for that.
