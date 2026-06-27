# AGENTS.md

このファイルは ChatGPT・Codex・Claude・Gemini など、複数 AI がこのリポジトリを扱うための共通ルールです。

## 目的

このリポジトリは GitHub型 AI Shared Memory / LLM Wiki / 軽量 Second Brain です。

Obsidian 的な Second Brain の考え方を取り入れつつ、GitHub 上で公開運用できる知識ベースとして管理します。

## AI が読む順番

1. `CURRENT.md`
2. `AGENTS.md`
3. 作業対象ファイル
4. `INBOX.md`
5. 必要に応じて `AI_DRAWERS.md` / `PROJECTS/` / `NOTES/`

`CURRENT.md` は最優先で読むこと。現在の焦点、待ち、次の行動を把握してから編集する。

## 編集ルール

- 公開情報のみ扱う。
- 事実、推測、アイデアを分けて書く。
- 出典 URL がある場合は残す。
- 未確認情報は断定しない。
- 既存の見出し構造と後方互換性をできるだけ維持する。
- 大きな再分類を行う場合は、元の情報を失わない。
- 整理前の情報は `INBOX.md` に置いてよい。

## 保存してよい情報

- OSS
- GitHub リポジトリ
- 技術メモ
- AI 知識
- 設計思想
- アーキテクチャ
- 学習内容
- 公開論文
- プロジェクト概要

## 保存しない情報

- API キー
- Token
- Cookie
- Webhook
- 契約内容
- 見積金額
- 住所
- 電話番号
- ローカルパス
- 個人情報
- 認証情報

## PROJECTS の扱い

`PROJECTS/` は個別プロジェクトの公開可能な概要を置く場所。

各ファイルは最低限、次を持つ。

- Goal
- Status
- Stack
- AI Instructions
- Next Tasks
- Related Notes

新規作成時は `TEMPLATES/PROJECT_TEMPLATE.md` を使う。

## NOTES の扱い

`NOTES/` はプロジェクトから独立した知識ベース。

例:

- `AI.md`
- `HomeLab.md`
- `Solar.md`
- `Vehicles.md`

新規作成時は `TEMPLATES/NOTE_TEMPLATE.md` を使う。

## AI_DRAWERS の扱い

`AI_DRAWERS.md` は OSS、AI 技術、開発ツール、研究対象、個人開発アイデアの技術レーダー。

各項目は原則として次を持つ。

- 概要
- 用途
- 状態
- 優先度

推奨カテゴリ:

- AI
- Agent
- LLM
- Development
- Creative
- Self Host
- Research
- Ideas

## 新規知識追加時のルール

1. 公開可能か確認する。
2. URL、概要、用途、状態、優先度を分ける。
3. 分類が明確なら `AI_DRAWERS.md` / `PROJECTS/` / `NOTES/` に追加する。
4. 分類が曖昧なら `INBOX.md` に追加する。
5. 重複や類似ツールがあれば、比較候補としてメモする。
