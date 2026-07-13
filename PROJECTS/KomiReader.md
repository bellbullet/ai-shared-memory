# KomiReader

最終更新: 2026-07-13

## Goal

- Local-first comic and ebook reader。
- CBZ / CBR / CB7 / CBT / ZIP / RAR / 7Z / TAR / PDF / EPUB を扱う Web reader。

## Status

- Vite / React / TypeScript project。
- Build output can be served as a static site.
- Git 管理は推奨。ただし local workspace では `.git` 未検出。

## Stack

- Vite
- React
- TypeScript
- Dexie
- pdfjs-dist
- epubjs
- libarchive.js
- @zip.js/zip.js

## AI Instructions

- 作業開始時に Working Directory / Git Root / Node.js / package manager を確認する。
- File System Access API の検証は、必要に応じて real browser で確認する。
- `node_modules/`、`dist/`、browser local storage の内容は Git 管理対象にしない。
- ユーザーの実ライブラリやローカル本棚パスを公開メモリに記載しない。

## Test / Verification

- `npm.cmd run build`
- UI / folder import の確認は browser で行う。

## Git Notes

- Source、public assets、README、package lock は Git 管理推奨。
- `.git` がない場合は、勝手に `git init` せず、remote repo の有無を確認する。

## Next Tasks

- Git 管理する場合は repository 方針を確認する。
- folder import と archive reader まわりは real sample で検証する。

## Related Notes

- `NOTES/AI.md`

## Reuse Candidates

- Ponytail / Minimal Implementation Policy - browser標準機能と既存reader依存を優先する。
- reviewable-html-workbench - UIや設計文書をHTML成果物としてレビューする場合。
- deepsec - archive展開、local file処理、path境界を大きく変更する場合。
