---
type: project
status: active
created: "2026-08-21"
updated: "2026-10-22"
tags: [x, bookmarks, codex, cloudflare, d1]
source:
  - https://github.com/FxEmbed/FxEmbed
  - https://github.com/sytelus/xarchive
  - https://github.com/zendegani/XClipper
visibility: public
---

# Link Bookmark Shelf

最終更新: 2026-10-22

## Goal

- X投稿と一般のHTTPSリンクをPC・スマホから整理し、価値ある情報をASMへの反映候補として確認する。
- D1から明示的に書き出したJSONをCodexが読み、タグ付け・要約・調査候補抽出に使う。

## Status

- 現行READMEではv0.5.0。Cloudflare D1が唯一の正本で、JSON Exportは`schemaVersion: 3`。旧`data/bookmarks.json`は移行前バックアップと互換確認用。
- AI提案と確定分類を分離し、人間が確認した場合だけASM候補へ反映する。Remote環境はCloudflare Accessで利用者を限定する。
- XのログインCookie取得、ブックマーク一覧の自動取得、X側への追加・削除は対象外。
- このメモの更新はREADMEとの照合のみ。Remoteの稼働状態や実データは検証していない。

## Stack

- Cloudflare Workers / D1 / Access
- ブラウザ用HTML / CSS / JavaScript
- FxTwitterによる公開投稿補完とURL-onlyフォールバック
- Google Sheet Queueの明示取込、D1からのJSON / Markdown Export
- Local Worker / Local D1をRemoteから分離した開発環境

## Next Tasks

- 明示的にExportされた候補だけを読み、ASM内の既存項目との重複を確認する。
- AI提案を自動確定せず、人間による候補確定・審査・ASM登録の境界を維持する。
- アプリ変更時は本体READMEとAI分類仕様を確認し、このメモへ公開可能な変更だけを反映する。

## Related Notes

- X Bookmark Shelf本体: `Projects/x-bookmark-shelf`
- `Shared/X-AI-Bookmarks/README.md` の手動X URL→Codex調査運用
- MindCacheのXアーカイブ正規化は設計参考に留め、MindCache本体には変更を加えない

## Reuse Candidates

- FxEmbed / FxTwitter API — 投稿IDから公開投稿メタデータを補完する。非公式APIのためURL-onlyフォールバックを残す。
- xarchive — ローカルJSON・フォルダ付きブックマーク書き出しの参考。Xの内部GraphQL依存は本体へ移植しない。
- XClipper — ローカルMarkdown/JSON出力と手動URL移送の参考。source-available条件は採用時に再確認する。
