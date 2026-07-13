# GameFreezeSentinel

最終更新: 2026-07-13

## Goal

- Windows 11 上でゲーム中のフリーズ、異常終了、予兆調査を支援する診断ツール。
- HWiNFO センサー、Windows event log、SQLite、Markdown report、task tray wrapper を組み合わせる。

## Status

- Python project。
- Local workspace では `.venv` 再作成と pytest 成功を確認済み。
- Git 管理は推奨。ただし local workspace では `.git` 未検出。

## Stack

- Python `>=3.14`
- `matplotlib`
- `Pillow`
- `pystray`
- SQLite
- pytest

## AI Instructions

- 作業開始時に Working Directory / Git Root / Python / `.venv` を確認する。
- `.venv` を activate した後は `py -3.14` ではなく、その環境の `python` を使う。
- 診断結果と推測を分けて記録する。
- 個人情報、端末固有ログ、ローカルパス、認証情報は公開メモリに貼らない。
- runtime data、logs、reports、diagnostics は Git 管理対象にしない。

## Test / Verification

- `python -m pytest`
- 2026-06-27 時点の確認: 20 tests passed。

## Git Notes

- Source、tests、docs は Git 管理推奨。
- `.git` がない場合は、勝手に `git init` せず、既存 remote の有無と復旧方針をユーザーに確認する。

## Next Tasks

- Git 管理する場合は repository 方針を確認する。
- tray / monitor / report の変更時は README の起動手順も同時に更新する。

## Related Notes

- `NOTES/AI.md`

## Reuse Candidates

- Ponytail / Minimal Implementation Policy - 既存の診断・report・tray機能を優先する。
- deepsec - command実行、path処理、権限、公開前の高リスク変更で検討する。
- Oracle - 原因不明のWindows診断や設計判断でセカンドオピニオンが必要な場合。
