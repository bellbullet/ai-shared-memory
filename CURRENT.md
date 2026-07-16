# CURRENT

最終更新: 2026-07-16

このファイルは `PROJECT_START.md`、`WORKSPACE.md`、`STATUS.md`、`AGENTS.md` の後に読む現在地です。

## Current Focus

- AI Hub Lite Phase 01は公開後チェックまで完了。静的Hubを実際に使い、Status、Last Updated、Next Actionの更新負荷を観察する。
- Phase 02は利用実績を確認してから、AI Shared MemoryのMarkdownをビルド時に読む小さな生成スクリプトとして検討する。API統合は追加しない。
- v1.1 Consolidated Memory Architecture として、収集済み知識を検索・比較・再利用しやすい状態に保つ。
- README、ChatGPT Projects 用情報源、現在地、索引、レビュー条件を同じスナップショットへ同期する。
- 新規リンクや未整理アイデアは `INBOX.md` または `AI_DRAWERS.md` に入れ、分類済み知識は `AI_INDEX.md` から辿れるようにする。
- 公式情報を読むための概念地図や長期参照資料は `references/` に置く。
- ChatGPT Projects の情報源には、GitHub URL だけでなく `CHATGPT_PROJECT_SOURCE.md` の要約と必要な個別ファイルを使う。
- 登録済み候補は Knowledge Scan で最大3つまで選び、試用結果を `TRIALS.md` に戻す。

## Waiting

- `INBOX.md` の GitHub OSS 基礎体力セットを段階的に分類する。
- 既存 `PROJECTS/` と `NOTES/` の更新時期・重複・後方互換ファイルを定期レビューする。
- `AI_DRAWERS.md` の単一ファイル運用が検索性を損なう段階に達したかを継続観察する。
- reviewable-html-workbench と agmsg の小規模Trialを、適切な公開可能タスクができた時点で実施する。

## Next Actions

- AI Hub Liteを数日使い、手動更新が負担になった項目と更新頻度を`TRIALS.md`へ戻す。
- Phase 02へ進む場合は、Status、Last Updated、Next ActionだけをMarkdownから取得し、Portal専用の手入力JSONは増やさない。
- 作業開始時は `PROJECT_START.md` → `WORKSPACE.md` → `STATUS.md` → `AGENTS.md` → `CURRENT.md` → `AI_INDEX.md` の順に確認する。
- 関連ファイルを探すときは `AI_INDEX.md` を参照する。
- workspace の健康状態と次回 Memory Review 条件は `STATUS.md` と `REVIEW.md` で確認する。
- 再利用候補を試したら `TRIALS.md` に結果・判断・再利用条件を記録する。
- 作業種別ごとの詳細ルールが必要な場合だけ `SKILLS/` を読む。
- 新規 Project は `TEMPLATES/PROJECT_TEMPLATE.md` から作る。
- 新規 Note は `TEMPLATES/NOTE_TEMPLATE.md` から作る。
- 公開に適さない情報はこのリポジトリに書かない。
