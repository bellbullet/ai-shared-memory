# LESSONS_LEARNED

運用で起きた問題、原因、対策を残すファイル。

公開可能な情報だけを書く。秘密情報、認証情報、個人情報、端末固有ログは記録しない。

## 2026-06-27

### Long-running AI sessions drift unless context is externalized

Problem:

- Long conversations can accumulate stale assumptions, hidden context, and unfinished implementation state.
- If a session is compacted during active implementation, the next AI may continue with partial or distorted context.
- Large tasks become hard to resume when the plan exists only in chat.

Cause:

- Long-term context was treated as conversation state instead of durable project state.
- Big work was not always split into explicit, resumable steps.

Countermeasure:

- Keep long-term context in files such as `CURRENT.md`, `PROJECTS/`, `NOTES/`, `AI_DRAWERS.md`, and project docs.
- For large tasks, create or update `PLAN.md` before implementation when a durable step list would help.
- Split sessions when the task meaningfully changes.
- Avoid compacting during active implementation; compact or hand off at a natural boundary.

Scope:

- AI coding operations across Codex, Claude Code, ChatGPT, Gemini, and similar agents.

Related References:

- Claude Code運用ミス7選: https://qiita.com/tehito/items/356e5f1dba112a075be1

### PowerShell が user home から始まり、project root を誤認しやすい

Problem:

- PowerShell が `<user-home>` から始まることがある。
- AI が現在ディレクトリを推測すると、project root ではない場所で `pip install -e .` や pytest を実行しようとする。

Cause:

- shell prompt と実際の project root を分けて確認していなかった。

Countermeasure:

- `Working Directory Policy` を追加した。
- PowerShell コマンド提示時は必ず先に `cd <project path>` を示す。
- 作業開始時に Working Directory / Git Root / Runtime / `.venv` を確認する。
- ユーザーのホームディレクトリを project root として扱わない。

Scope:

- All projects under `<workspace-root>`.

### Moved workspace can leave stale `.venv` and Git assumptions

Problem:

- Project move from old workspace paths can leave stale `.venv` interpreter references.
- Empty or missing `.git` can create confusion about Git root.

Cause:

- Workspace path changed, but runtime and Git assumptions were reused.

Countermeasure:

- Use `<workspace-root>` as workspace root.
- Re-detect Git root from the target project directory.
- Recreate `.venv` only after showing the exact target path.
- Do not run `git init` or reconnect remote automatically.

Scope:

- Python projects and moved project folders.

### Project-specific details drift if stored in workspace README

Problem:

- Runtime versions, pytest results, and Git status change per project.
- Putting those details in workspace-level README creates maintenance churn.

Cause:

- Stable workspace rules and changing project metadata were mixed.

Countermeasure:

- Keep `README_WORKSPACE.md` and `WORKSPACE.md` focused on stable rules.
- Put project-specific runtime, Git, test, and deploy notes under `PROJECTS/`.

Scope:

- ai-shared-memory and workspace documentation.

## 2026-07-02

### Shared memory becomes noisy without periodic consolidation

Problem:

- `INBOX.md`, `AI_DRAWERS.md`, `NOTES/`, and `PROJECTS/` can accumulate duplicate links, stale status, relative dates, and overlapping explanations.
- A knowledge base that only grows can become harder for AI agents to search and reuse.

Cause:

- New knowledge is added incrementally during sessions, but consolidation is a separate maintenance activity.
- Similar tools, articles, and operating patterns often arrive at different times and are easy to record in multiple places.

Countermeasure:

- Run a periodic Memory Review when many links accumulate, after major workspace changes, or during monthly review.
- Merge duplicates, remove stale references, convert relative dates to absolute dates, and update `AI_INDEX.md`.
- Keep the input files intact until reviewed; make consolidation changes as small logical diffs.
- Treat automated or AI-generated consolidation as a proposal, not as accepted truth.

Scope:

- `ai-shared-memory`, ChatGPT Projects sources, and any shared AI memory repository.
