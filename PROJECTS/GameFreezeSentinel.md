# GameFreezeSentinel

最終更新: 2026-07-29

## Goal

- Windows 11 上でゲーム中のフリーズ、異常終了、予兆調査を支援する診断ツール。
- HWiNFO センサー、Windows event log、SQLite、Markdown report、task tray wrapper を組み合わせる。

## Status

- Python project。
- 常駐 monitor、ログオン時の task tray 起動、HWiNFO センサー取得、Windows event log の記録、Markdown report を実装。
- センサー値を取得できない場合は、推測値で補わず report にデータ欠損として明示する。
- 新規の Kernel-Power Event ID 41 を記録した後、対象レコードに対応する crash report を自動生成する。手動操作できないハードフリーズ後でも、次回起動後の監視で記録できる設計。
- System Error / Critical と限定したアプリ障害は周辺証拠として収集する。単一イベントから根本原因を自動断定しない。
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
- Event ID 41、unexpected shutdown、driver event は時系列上の証拠であり、単独で原因と断定しない。
- 個人情報、端末固有ログ、ローカルパス、認証情報は公開メモリに貼らない。
- runtime data、logs、reports、diagnostics は Git 管理対象にしない。

## Test / Verification

- `python -m pytest`
- `python -m pip check`
- 2026-07-29 時点の確認: `pip check` 成功、24 tests passed。

## Git Notes

- Source、tests、docs は Git 管理推奨。
- `.git` がない場合は、勝手に `git init` せず、既存 remote の有無と復旧方針をユーザーに確認する。

## Next Tasks

- Git 管理する場合は repository 方針を確認する。
- tray / monitor / report の変更時は README の起動手順も同時に更新する。
- 次回の再起動または障害後に、自動生成 report の保存と内容を実機確認する。

## Related Notes

- `NOTES/AI.md`

## Reuse Candidates

- Ponytail / Minimal Implementation Policy - 既存の診断・report・tray機能を優先する。
- deepsec - command実行、path処理、権限、公開前の高リスク変更で検討する。
- Oracle - 原因不明のWindows診断や設計判断でセカンドオピニオンが必要な場合。
