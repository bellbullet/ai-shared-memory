# AI Workspace Ideas

最終更新: 2026-06-30

## Purpose

- AI を作業の入口に置く workspace design の考え方を整理する。
- Markdown / Git repository を原本とし、人間向け成果物をそこから生成する運用を検討する。

## Summary

- 原本は repository に置く。
- PowerPoint、Excel、PDF、画像などは成果物として扱う。
- AI はアプリや情報源の前段に立ち、今日の判断点、保留、次の行動を整理する。
- 人間は実行作業ではなく、採用判断、優先順位、例外判断に集中する。

## Source

- https://note.com/cuon/n/nc1bc97c22892

## Key Ideas

### AI As Front Door

従来:

```text
App / GitHub / Calendar / Slack / Mail
↓
Human
↓
AI
```

目標:

```text
App / GitHub / Calendar / Slack / Mail / Repo
↓
AI
↓
Human decision
```

AI は情報を集約し、次のような判断材料を返す。

- Today's Decisions
- Pending Decisions
- Blocked
- Waiting AI
- Waiting Human
- Release / review gates

### Repository As Source Of Truth

原本:

- meeting notes
- research
- PoC
- design notes
- CVE / security review notes
- scripts
- project metadata
- decisions

成果物:

- PDF
- PowerPoint
- Excel
- PNG
- exported reports

成果物は `OUTPUTS/` に置き、原本 Markdown から生成できる状態を目指す。

### Human Role

AI に任せる:

- 調査
- 実装候補の整理
- 既存知識の検索
- テストとレビュー候補
- セキュリティチェック候補
- 成果物生成

人間が行う:

- 採用判断
- 優先順位
- 公開可否
- コストやリスクの受け入れ
- 例外判断

## Possible Workspace Changes

- `OUTPUTS/` を成果物置き場として追加する。
- `STATUS.md` に Today's Decisions / Pending Decisions / Blocked / Waiting AI を追加する。
- `DECISIONS.md` の記録形式を Decision / Reason / Alternatives / Chosen / Review Date に寄せる。
- AIRI では、将来的に `CURRENT.md`、`STATUS.md`、GitHub、Calendar、Mail、Slack などを統合し、今日の判断点を出す入口にする。

## Related Files

- `STATUS.md`
- `DECISIONS.md`
- `PROJECT_START.md`
- `OUTPUTS/README.md`
- `PROJECTS/AIRI.md`

## AI Instructions

- この記事はツール紹介ではなく、AI workspace design の思想として扱う。
- `AI_DRAWERS.md` ではなく `NOTES/` に置く。
- 具体的な連携や自動化は、実装候補として分けて扱う。
- 非公開の業務情報、メール内容、Slack内容、個人情報は記載しない。
