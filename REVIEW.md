# REVIEW

最終更新: 2026-06-29

定期的に見直す項目をまとめるファイル。

このファイルは作業ログではなく、workspace health check のチェックリストとして使う。

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

## Review Notes

見直しで出た運用改善は、必要に応じて `LESSONS_LEARNED.md` または `CHANGELOG.md` に移す。
