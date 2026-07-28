# AIRI

最終更新: 2026-07-16

## Goal

- AIRI をローカルで調査・開発し、Web / Desktop / Minecraft 連携を安全に検証できる状態にする。

## Status

- Local checkout organized / setup pending
- 正式な作業場所: `<workspace-root>\Projects\AIRI`
- Git履歴と `origin` は保持済み。
- 再生成可能な巨大依存フォルダーは移設対象から除外し、ソースとローカル差分を保全した。

## Stack

- Node.js 24.13.x
- pnpm 10.33.0
- TypeScript / Vue 3 / Vite / Electron
- Vitest / ESLint / Turborepo
- Mineflayer Minecraft integration（deprecated path。将来はFabric runtime予定）

## AI Instructions

- 作業前に対象リポジトリの `AGENTS.md` を読む。
- 未確認の仕様を事実として補完しない。
- `.env.local`、API key、token、ローカル接続情報をGitへ追加しない。
- 既存のGit履歴、remote、未コミット差分を保持する。
- package単位の `pnpm -F` コマンドで検証範囲を絞る。

## Current Local Findings

- `services/minecraft/.env` は追跡対象だが、ローカルでは空。upstream templateとの差分は45行削除。
- `services/minecraft/.env.local` は存在し、Git ignoredのまま旧checkoutから同一内容で保全済み。値は公開メモへ記録しない。
- `integrations/vscode/vscode-airi/package.json` はmodified表示だが内容差分なし。改行コード由来の可能性が高い。
- `node_modules`、`.cache`、`.turbo` は再生成物のため新しい作業場所へコピーしていない。Robocopyの単純集計はpnpm junctionを反復追跡して約240GBと表示したが、リンクを追わない集計は約12.5GBであり、240GBは物理使用量ではない。
- 入れ子になっていた同一commitの二重cloneは削除せずArchiveへ隔離済み。

## Next Tasks

- pnpm 10.33.0 を利用可能にして依存関係を再構築する。
- Minecraft用の追跡 `.env` template と、保全済み `.env.local` の役割を確認する。
- Ollama model、Minecraft endpoint、AIRI WebSocket endpointを確認する。
- `pnpm -F @proj-airi/minecraft-bot` で限定的にtypecheck / test / startを検証する。
- 動作確認後、旧checkoutをArchiveへ移すか削除候補にする。

## Related Notes

- `NOTES/AI.md`
- `AI_DRAWERS.md`

## Reuse Candidates

- Whisper / audio pipeline
- Humation / avatar interaction research
- Anime2.5DRig / see-through / OpenFugu avatar workflow
