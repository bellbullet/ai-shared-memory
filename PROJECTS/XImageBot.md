# XImageBot

最終更新: 2026-06-27

## Goal

- 指定した X account の新しい投稿から画像付き投稿を抽出し、未取得画像を保存する Python bot。
- X API v2 Bearer Token を使う設計。認証なし scraping は採用しない。

## Status

- Python project。
- Local workspace では `.venv` 作成、`pip install -e .`、import 成功を確認済み。
- pytest 対象ファイルは未検出。
- Git 管理は推奨。ただし local workspace では `.git` 未検出。

## Stack

- Python `>=3.12`
- 現行 Windows 環境では Python 3.14 を使用
- `python-dotenv`
- `requests`

## AI Instructions

- API token、account 固有情報、`.env` の実値を公開メモリに記載しない。
- `.env.example` のような sample 値だけ扱う。
- 作業開始時に Working Directory / Git Root / Python / `.venv` を確認する。
- `images/`、`data/`、`logs/` は runtime output として扱う。

## Test / Verification

- pytest ファイルは現時点で未検出。
- smoke check は `import x_image_bot` または CLI の dry/config check を使う。

## Git Notes

- Source と README は Git 管理推奨。
- `.env`、`.venv/`、`images/`、`data/`、`logs/` は Git 管理対象にしない。
- `.git` がない場合は、勝手に `git init` せず、private/local/remote の方針をユーザーに確認する。

## Next Tasks

- Git 管理する場合は private repo か local-only かを確認する。
- pytest を追加するなら config parsing と storage state の unit test から始める。

## Related Notes

- `NOTES/AI.md`
- `AI_DRAWERS.md`
