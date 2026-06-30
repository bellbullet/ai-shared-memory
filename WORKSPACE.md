# WORKSPACE

最終更新: 2026-07-01

このファイルは AI が作業前に読むワークスペース地図です。

## Workspace Root

- `D:\Codex`

この Windows 環境では `D:\Codex` を Codex のメイン作業場として扱います。

## Directory Layout

| Path | Role |
| --- | --- |
| `D:\Codex\Projects` | Active な開発プロジェクト |
| `D:\Codex\ai-shared-memory` | AI 間で共有する公開可能な知識ベース |
| `D:\Codex\Archive` | 完了・重複・不確実な素材。read-mostly |
| `D:\Codex\Sandbox` | 一時実験・検証・使い捨て作業 |
| `D:\Codex\Shared` | 複数プロジェクトで再利用するスクリプト・テンプレート・素材 |

## Read Order

作業開始時は原則として次の順で読む。

1. `PROJECT_START.md`
2. `WORKSPACE.md`
3. `STATUS.md`
4. `AGENTS.md`
5. `CURRENT.md`
6. `AI_INDEX.md`
7. 必要に応じて `SKILLS/`
8. 作業対象プロジェクトの `AGENTS.md` または README
9. 必要に応じて `PROJECTS/` / `NOTES/` / `AI_DRAWERS.md`

## Rules

- 新規プロジェクトは原則 `D:\Codex\Projects\<project-name>` に置く。
- `C:\Users\keiya` をプロジェクトルートとして扱わない。
- `D:\.codex` は旧場所として扱い、明示がない限り新規作業には使わない。
- PowerShell コマンドを提示する前に、必ず `cd <project path>` を示す。
- 作業開始時に Working Directory / Git Root / Runtime / `.venv` を確認する。
- 削除が曖昧な場合は、削除ではなく `Archive` への移動や quarantine を優先する。
- プロジェクト固有の情報は `PROJECTS/` または対象プロジェクトの README に置く。

## Project Metadata

個別プロジェクトの Python、Git、pytest、deploy、注意点は `PROJECTS/` に分離する。

ワークスペース全体の固定ルールは、この `WORKSPACE.md` と `D:\Codex\README_WORKSPACE.md` に置く。
