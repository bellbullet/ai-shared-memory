# Research Skill

最終更新: 2026-07-29

Use when work involves external articles, GitHub repositories, OSS, papers, standards, tools, or source verification.

## Required Practices

- Prefer primary sources for technical claims.
- If using a secondary source, record it as secondary and separate it from the primary source.
- Do not over-adopt a new tool from a single article.
- Classify durable findings into the right file:
  - OSS / tools / papers / reference sites → `AI_DRAWERS.md` or `INBOX.md`
  - workspace design patterns → `NOTES/`
  - adopted architecture decisions → `DECISIONS.md`
  - operational lessons → `LESSONS_LEARNED.md`

## Knowledge Scan

Before adding new research:

1. `AI_INDEX.md`
2. `AI_DRAWERS.md`
3. relevant `NOTES/`
4. relevant `PROJECTS/`
5. `INBOX.md`

## Recording Rules

- Include URL.
- Separate summary, use case, state, priority, and related files.
- Do not store private account data or non-public operational details.
- Update `AI_INDEX.md` when the item should be found later by keyword.
- Update `CHANGELOG.md` when structure or operating rules changed.

## Knowledge Quality Gate

長期保存または実装判断へ使う前に、次を確認する。

1. Source: 一次情報、公式repository、公式document、原論文を優先できているか。
2. Canonical location: 同じ知識の正本がどのfileか明確か。
3. Freshness: version、date、status、price、licenseなど変化しやすい情報を固定しすぎていないか。
4. Duplication: `AI_INDEX.md`、`AI_DRAWERS.md`、`INBOX.md`、関連noteに重複や矛盾がないか。
5. Retrieval: 名前だけでなく用途や問題から検索できる導線があるか。
6. Access: public repoへ保存してよい情報で、権限や秘密情報の境界が明確か。
7. Evidence: 採用、性能、互換性を主張する場合、再確認できるsourceまたはTrial結果があるか。

不確かな候補は断定せず、`INBOX.md`または`TRIALS.md`へ置く。
既存の正本がある場合は説明を複製せず、linkと用途だけを追加する。
