# Operations MOC

最終更新: 2026-07-25

リポジトリ運用、AIの読み順、Knowledge Scan、昇格判断、セキュリティ、定期レビューへの案内です。

## AIの読み順

1. [PROJECT_START](../PROJECT_START.md)
2. [WORKSPACE](../WORKSPACE.md)
3. [STATUS](../STATUS.md)
4. [AGENTS](../AGENTS.md)
5. [CURRENT](../CURRENT.md)
6. [AI_INDEX](../AI_INDEX.md)
7. 必要な[SKILLS](../SKILLS/README.md)
8. 作業対象ファイル

[OBSIDIAN_HOME](../OBSIDIAN_HOME.md)は人間向けの閲覧入口であり、この読み順を置き換えません。

## Knowledge Scanと昇格

```text
候補発見
  -> INBOX
  -> 一次情報・license・権限・公開安全性を確認
  -> AI_DRAWERS / NOTES / PROJECTSへ分類
  -> AI_INDEXへ検索導線を追加
  -> 実作業で試した場合はTRIALSへ記録
  -> 判断をDECISIONS / LESSONS_LEARNEDへ還元
```

- 未整理候補: [INBOX](../INBOX.md)
- 技術レーダー: [AI_DRAWERS](../AI_DRAWERS.md)
- 試用結果: [TRIALS](../TRIALS.md)
- 設計判断: [DECISIONS](../DECISIONS.md)
- 運用の教訓: [LESSONS_LEARNED](../LESSONS_LEARNED.md)
- 検索索引: [AI_INDEX](../AI_INDEX.md)

採用・試用・保留・却下は、話題性ではなく再利用条件とリスクで判断します。

## Git運用

- Git root、branch、upstream、既存変更を作業前に確認する。
- 変更対象を限定し、`git add .`を避ける。
- 自動push、force push、history rewriteを行わない。
- 公開前にdiff、build、link、secret、local pathを確認する。
- 詳細: [Git Skill](../SKILLS/Git.md)

## セキュリティ

- 公開可能な知識だけを保存する。
- Raw conversation、認証情報、個人情報、ローカル絶対パスを保存しない。
- 大きい変更や公開前は[SECURITY_REVIEW](../SECURITY_REVIEW.md)を使う。
- Raw / processed分離は[Conversation archive design](../references/CONVERSATION_ARCHIVE_DESIGN.md)を参照する。

## 定期レビューと変更履歴

- Workspace health check: [REVIEW](../REVIEW.md)
- 現在の状態: [STATUS](../STATUS.md)
- 現在の焦点: [CURRENT](../CURRENT.md)
- 変更履歴: [CHANGELOG](../CHANGELOG.md)
- Obsidian導入前調査: [Obsidian integration audit](../references/OBSIDIAN_INTEGRATION_AUDIT.md)

MOCは案内層です。状態や判断の正本を複製しすぎず、詳細は既存ファイルへリンクします。
