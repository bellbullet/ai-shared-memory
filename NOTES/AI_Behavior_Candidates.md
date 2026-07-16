# AI Behavior Candidates

最終更新: 2026-07-16

## Purpose

- AI が調査、比較、要約、レビュー、計画、技術文書作成を行うときの思考・出力品質を改善する候補を保管する。
- これは prompt 集でも、全作業へ強制するルールでもない。候補の出典、期待する振る舞い、再利用条件を比較するための準備ノートとする。

## Current Candidates

### Japanese Technical Writing

- Source: `AI_DRAWERS.md` の `japanese-tech-writing / k16shikano gist`
- Expected behavior: 論証の明確さ、読者負荷、冗長表現、根拠と推測の区別を意識して、日本語技術文書を整える。
- Reuse: README、NOTES、PROJECTS、調査結果、設計メモの推敲。
- Status: Candidate。必要になれば `SKILLS/` の作業別ルールとして検討する。

### Goal, Context, Output, Boundaries

- Source: `AI_DRAWERS.md` の `OpenAI Prompting`、`NOTES/AI_Coding_Patterns.md`
- Expected behavior: 依頼の目的、背景、出力形式、変更境界を明確にして、必要な情報だけで作業を始める。
- Reuse: 調査、実装、比較、レビュー、成果物作成。
- Status: Candidate。既存の `PROJECT_START.md` と `AGENTS.md` のKnowledge Scanおよび作業境界と整合するかを観察する。

## Candidate Template

```markdown
### Name

- Source:
- Expected behavior:
- Reuse:
- Status: Candidate / Trial / Adopted / Archived
- Evidence:
```

## Promotion Criteria

- 3〜5件の再利用可能な候補が集まり、役割の重複と用途の違いを説明できる。
- 実際の作業で出力品質、判断品質、または再利用性への効果を確認する。
- 強制する必要があるものだけを `AGENTS.md`、`SKILLS/`、scripts、CI、checklistsへ分ける。候補を一括で共通ルールへ昇格させない。
- 昇格時は、候補の置き場を `AI Behavior` または `AI Behavior Library` とするかを、その時点の利用実績に基づいて決める。

## Related Files

- Technical radar: `AI_DRAWERS.md`
- Existing AI coding patterns: `NOTES/AI_Coding_Patterns.md`
- Task rules and routing: `PROJECT_START.md`, `AGENTS.md`, `SKILLS/`
- Trial evidence: `TRIALS.md`
- Retrieval routes: `AI_INDEX.md`

## AI Instructions

- 事実として記録する出典内容と、このworkspace向けの運用提案を分ける。
- 新規候補は、出典、使う作業、期待する変化が揃うまで強制ルールにしない。
- 既存文書を更新する場合は、候補全体を一般ルール化するのではなく、確認済みで必要な部分だけを最小差分で反映する。
