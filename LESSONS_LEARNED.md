# LESSONS_LEARNED

AI Shared Memory を運用する中で得た、複数 AI 向けの再利用可能な教訓を記録します。

## Claude / Codex 運用

- 長期文脈は会話ではなくファイルへ永続化する。
- 大きな作業は `PLAN.md` に分解してから進める。
- タスクが変わったらセッションを分ける。
- 実装途中の compact / 圧縮は避け、作業の区切りで行う。

## Related References

- Claude Code運用ミス7選: https://qiita.com/tehito/items/356e5f1dba112a075be1
