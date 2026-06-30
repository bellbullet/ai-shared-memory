# OKF

最終更新: 2026-06-30

Open Knowledge Format の採用候補メモ。

このファイルは採用決定ではなく、監視と将来検討のための整理です。

## Sources

- Primary: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
- Secondary: https://zenn.dev/knowledgesense/articles/14a874a9f423bb

## Summary

OKF は Google Cloud が提案した、AI と人間の両方が読めるナレッジ共有フォーマット。

基本形:

- directory of Markdown files
- YAML frontmatter
- normal Markdown body
- Markdown links between concepts
- optional index / log files

Google Cloud の説明では、OKF v0.1 は Markdown files with YAML frontmatter を中心にした軽量な仕様で、少数の構造化フィールドを検索可能にすることを狙う。

## Candidate Frontmatter

ai-shared-memory で試す場合の最小候補。

```yaml
---
type: workspace-status
title: STATUS
description: Current operating state for the Codex workspace.
tags:
  - codex
  - workspace
  - ai-shared-memory
status: active
timestamp: 2026-06-30T00:00:00+09:00
---
```

## Potential Benefits

- AI がファイル名だけでなく、type / tags / status で役割を判定しやすくなる。
- `PROJECT_START.md`、`CURRENT.md`、`STATUS.md`、`PROJECTS/*.md` の検索性が上がる。
- 将来、OKF 互換ツールや LLM Wiki 系ツールと接続しやすくなる。
- Markdown のままなので、GitHub 表示と人間の編集体験を維持できる。

## Risks

- v0.1 段階で、仕様や慣習が変わる可能性がある。
- 全ファイルへ一括導入すると、メンテナンス負荷と形式揺れが増える。
- AI が OKF を特別扱いするとは限らない。
- frontmatter の項目を増やしすぎると、本文よりメタデータ管理が目的化する。

## Adoption Position

Status: monitor

Decision:

- Do not convert the whole repository now.
- Do not record this as an adopted architecture decision yet.
- Keep it in `AI_DRAWERS.md` and this file as a research candidate.

## Possible v1.1 Experiment

Small pilot only:

1. Add minimal YAML frontmatter to `CURRENT.md`.
2. Add minimal YAML frontmatter to `STATUS.md`.
3. Add minimal YAML frontmatter to `PROJECT_START.md`.
4. Evaluate whether AI handoff and search become clearer.
5. If useful, define a small shared schema for `PROJECTS/*.md`.

## Minimal Schema Candidate

Use few fields.

```yaml
---
type:
title:
description:
tags:
status:
timestamp:
---
```

Avoid adding fields unless they are used by search, routing, or review.

## Review Questions

- Does frontmatter improve AI routing in practice?
- Does it reduce ambiguity compared with filename-only routing?
- Can humans maintain it without friction?
- Which files actually benefit from metadata?
- Should `PROJECTS/*.md` use a stricter schema than global files?

## Related Files

- `PROJECT_START.md`
- `CURRENT.md`
- `STATUS.md`
- `AI_INDEX.md`
- `AI_DRAWERS.md`
