# ai-shared-memory

GitHub型 AI Shared Memory / LLM Wiki / 軽量 Second Brain。

このリポジトリは Obsidian そのものではありません。Obsidian 的な Second Brain の考え方を取り入れつつ、ChatGPT・Codex・Claude・Gemini など複数の AI が共通で参照できる、公開前提の外部記憶として運用します。

## 目的

- 複数 AI が最初に読む共有知識ベースを作る。
- OSS、GitHub、AI 技術、設計思想、学習内容、公開論文、プロジェクト概要を整理する。
- 一時的なメモを `INBOX.md` に置き、整理後に `AI_DRAWERS.md` / `PROJECTS/` / `NOTES/` へ移す。
- 公開してよい情報だけを長期保存する。

## これは何ではないか

- Obsidian vault そのものではない。
- 個人情報・認証情報・契約情報を保存する場所ではない。
- ローカル端末の詳細ログや秘密メモの置き場ではない。

Private 情報が必要な場合は、別の private repository またはローカル専用メモで管理する。

## 構成

```text
ai-shared-memory/
├─ README.md
├─ AGENTS.md
├─ CURRENT.md
├─ INBOX.md
├─ AI_DRAWERS.md
├─ PROJECTS/
│  ├─ AIRI.md
│  ├─ GameFreezeSentinel.md
│  └─ XImageBot.md
├─ NOTES/
│  ├─ AI.md
│  ├─ HomeLab.md
│  ├─ Solar.md
│  ├─ SolarPower.md
│  ├─ Vehicles.md
│  └─ VehiclePlan.md
└─ TEMPLATES/
   ├─ PROJECT_TEMPLATE.md
   └─ NOTE_TEMPLATE.md
```

## 読む順番

AI は原則として次の順で読む。

1. [CURRENT.md](CURRENT.md) - 現在の焦点、待ち、次の行動
2. [AGENTS.md](AGENTS.md) - AI 向け運用ルール
3. 作業対象ファイル - `AI_DRAWERS.md` / `PROJECTS/*.md` / `NOTES/*.md`
4. [INBOX.md](INBOX.md) - 未整理の新規リンクやアイデア

## ファイルの役割

- [CURRENT.md](CURRENT.md): AI が最初に読む現在地。
- [AGENTS.md](AGENTS.md): 複数 AI 向けの編集・運用ルール。
- [INBOX.md](INBOX.md): 整理前のリンク、アイデア、調査候補。
- [AI_DRAWERS.md](AI_DRAWERS.md): OSS・AI・開発ツールの技術レーダー。
- [PROJECTS](PROJECTS): プロジェクトごとの目的、状態、次の作業。
- [NOTES](NOTES): プロジェクトから独立した技術メモ。
- [TEMPLATES](TEMPLATES): 新規 Project / Note の雛形。

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

## 更新用プロンプト

```text
引き出し追加
https://github.com/xxxx/yyyy
```

```text
引き出し整理
```

```text
PROJECTS に追加
<project name>
```

```text
NOTES に追加
<topic>
```

## 運用方針

- Public Knowledge のみ保存する。
- 事実、推測、アイデアを混ぜない。
- 出典がある場合は URL を残す。
- 不確かな情報は `INBOX.md` に置き、整理後に移動する。
- 既存ファイルの意味を壊さず、後方互換性を保つ。
