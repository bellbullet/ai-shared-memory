# REVIEW

最終更新: 2026-07-13

定期的に見直す項目をまとめるファイル。

このファイルは作業ログではなく、workspace health check のチェックリストとして使う。

## Knowledge Health

- [ ] `README.md`、`CHATGPT_PROJECT_SOURCE.md`、`CURRENT.md`、`STATUS.md` の version・日付・構成が一致している
- [ ] `VERSION` と `CHANGELOG.md` の最新リリース表記が一致している
- [ ] `INBOX.md` の件数と、分類を始める条件が `STATUS.md` に見える
- [ ] `PROJECTS/` と `NOTES/` に更新待ち・重複・後方互換ファイルがないか確認した
- [ ] Pending Decision、Blocked、Waiting AI、Waiting Human が現在の状態を表している
- [ ] `references/` の索引が `README.md`、`AI_INDEX.md`、必要な情報源ファイルにある
- [ ] ChatGPT Projects の添付情報源が必要な更新後に差し替えられている
- [ ] `TRIALS.md` のPlanned項目、結果、判断、再利用条件が現在の状態を表している

## Monthly Review

- [ ] `CURRENT.md` が現在の焦点、待ち、次の行動を表している
- [ ] `INBOX.md` に未整理項目が溜まりすぎていない
- [ ] `AI_DRAWERS.md` のカテゴリ、状態、優先度が破綻していない
- [ ] `PROJECTS/` の active project 情報が古くなっていない
- [ ] `NOTES/` の重複や後方互換ファイルを確認した
- [ ] `AI_INDEX.md` に最近よく探す語句が追加されている
- [ ] `LESSONS_LEARNED.md` に繰り返したくない失敗が記録されている
- [ ] `DECISIONS.md` に重要な設計判断と理由が記録されている
- [ ] `SECURITY_REVIEW.md` の release gate と review checklist が古くなっていない
- [ ] `CHANGELOG.md` に構成変更や運用ルール変更が記録されている
- [ ] Memory Review が必要なほど `INBOX.md`、`AI_DRAWERS.md`、`NOTES/`、`PROJECTS/` が肥大化していない

## Project Review

- [ ] Project README と `PROJECTS/<name>.md` の役割が分かれている
- [ ] Runtime version、test command、deploy command が対象プロジェクト側にある
- [ ] Git root の有無が確認されている
- [ ] `.env`、tokens、state、logs、generated files が Git 管理対象から外れている
- [ ] 大きい変更、公開前、リリース前では `SECURITY_REVIEW.md` を確認している
- [ ] 作業開始時に `PROJECT_START.md` の Required Checks を実施している

## Knowledge Review

- [ ] 新しい OSS / paper / tool は `AI_DRAWERS.md` または `INBOX.md` に入っている
- [ ] 新しい GitHub link は会話だけに残さず分類されている
- [ ] 特定プロジェクトに関係する知識は `PROJECTS/` へ接続されている
- [ ] 横断的な知識は `NOTES/` に整理されている
- [ ] よく使うキーワードは `AI_INDEX.md` の Quick Lookup に追加されている
- [ ] 試用した候補の結果が `TRIALS.md` にあり、必要な判断が `AI_DRAWERS.md` / `LESSONS_LEARNED.md` / `DECISIONS.md` に戻っている

## Memory Review

次の場合に実施する。

- [ ] 新規リンク、OSS、paper、AI記事が 20〜30 件程度たまった
- [ ] 大きな workspace / project 構成変更があった
- [ ] `AI_DRAWERS.md` や `NOTES/` に似た説明が増えている
- [ ] 相対日付、古い手順、存在しないファイル参照が見つかった
- [ ] 入口ファイルの version、日付、構成、読み順に不一致が見つかった

実施内容:

- [ ] `INBOX.md` を `AI_DRAWERS.md` / `NOTES/` / `PROJECTS/` へ分類した
- [ ] 重複説明を統合した
- [ ] 古い状態や相対日付を現在の絶対日付つき情報に直した
- [ ] 存在しないファイル、コマンド、フラグへの参照を確認した
- [ ] `AI_INDEX.md` の検索語を更新した
- [ ] 変更を小さな論理単位に分け、レビュー可能にした

## Review Notes

見直しで出た運用改善は、必要に応じて `LESSONS_LEARNED.md` または `CHANGELOG.md` に移す。
