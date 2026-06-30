# AI_PROFILES

最終更新: 2026-06-27

複数 AI を使い分けるための軽量な役割メモ。

これは固定の能力表ではなく、作業を振り分けるときの目安として使う。

## ChatGPT

Good at:

- 企画
- 要件整理
- レビュー
- 文章化
- アイデアの比較

Use when:

- 方向性を決めたい
- 複数案を整理したい
- 説明、レビュー、意思決定の補助が必要

## Codex

Good at:

- 実装
- 修正
- ローカル検証
- テスト実行
- ファイル整理
- workspace operations

Use when:

- repository や local project を直接編集したい
- PowerShell、Git、Python、Node.js、Terraform などを実行して検証したい
- `PROJECT_START.md` に従って作業を end-to-end で進めたい

## Claude

Good at:

- 長文設計
- 大きな文書整理
- 仕様レビュー
- 構造化された議論

Use when:

- 設計文書や仕様書を深く整理したい
- 長い context を読み込んで方針化したい
- prose-heavy な review が必要

## Gemini

Good at:

- Web 調査
- 広めの情報収集
- 比較候補探し
- multimodal review

Use when:

- 最新情報や外部情報を確認したい
- 画像、動画、Web ページなどを含む調査をしたい
- 候補を広く集めたい

## Routing Rule

作業を始める AI は、まず `PROJECT_START.md` を読む。

そのうえで、必要に応じて次を判断する。

- 実装と検証が中心 → Codex
- 企画、レビュー、判断が中心 → ChatGPT
- 長文設計や仕様整理が中心 → Claude
- 最新情報、外部調査、multimodal 確認が中心 → Gemini

どの AI を使う場合でも、公開可能情報のみを `ai-shared-memory` に保存する。
