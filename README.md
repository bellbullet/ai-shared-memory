# ai-shared-memory

Current version: **1.1.0** (2026-07-13)

`ai-shared-memory` は、AI と人間が共有して使う Markdown ベースの知識ベースです。
ChatGPT・Codex・Claude・Gemini など複数の AI が共通で参照できる、公開前提の外部記憶として運用します。

会話だけに残りやすい知識、OSS、AI 技術、設計メモ、プロジェクト概要を Markdown と Git で管理し、後から検索・再利用できる形にします。
GitHub型 AI Shared Memory / LLM Wiki / 軽量 Second Brain として位置づけています。
Notion や Obsidian のような個人知識管理の考え方も参考にしていますが、Obsidian 専用の vault ではありません。

## v1.1 - Consolidated Memory Architecture

v1.1 は、知識を集めるだけでなく、AI が検索・比較・再利用しやすい状態を維持するための更新です。

- 入口情報、現在地、索引、ChatGPT Projects 用情報源を同じスナップショットへ同期する。
- `AI_DRAWERS.md` は後方互換性を保つため単一ファイルを維持し、冒頭で規模・重点領域・最近の追加を確認できるようにする。
- `STATUS.md` と `REVIEW.md` で stale な入口、未整理 INBOX、Project metadata、Pending Decision、次回 Memory Review 条件を確認する。
- `references/` に、公式情報を読むための長期参照用マップを置く。
- `TRIALS.md` で登録済み候補を試用し、結果を採用・継続・専門用途・保留へ戻す。

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
├─ VERSION
├─ PROJECT_START.md
├─ WORKSPACE.md
├─ STATUS.md
├─ AGENTS.md
├─ AI_PROFILES.md
├─ CURRENT.md
├─ AI_INDEX.md
├─ TRIALS.md
├─ CHATGPT_PROJECT_SOURCE.md
├─ CHATGPT_PROJECT_INSTRUCTIONS.md
├─ LOCAL_ENVIRONMENT.example.md
├─ LESSONS_LEARNED.md
├─ DECISIONS.md
├─ REVIEW.md
├─ SECURITY_REVIEW.md
├─ OKF.md
├─ CHANGELOG.md
├─ INBOX.md
├─ AI_DRAWERS.md
├─ references/
│  └─ CLAUDE_CODE_MAP.md
├─ OUTPUTS/
│  └─ README.md
├─ SKILLS/
│  ├─ README.md
│  ├─ PowerShell.md
│  ├─ Python.md
│  ├─ Git.md
│  ├─ Research.md
│  └─ Security.md
├─ PROJECTS/
│  ├─ AIRI.md
│  ├─ GameFreezeSentinel.md
│  ├─ KomiReader.md
│  ├─ MahjongFirstDiscard.md
│  ├─ OciMinecraftJavaServer.md
│  ├─ ScreenshotStitcher.md
│  ├─ WebcamFaceDemo.md
│  └─ XImageBot.md
├─ NOTES/
│  ├─ AI.md
│  ├─ AI_Coding_Patterns.md
│  ├─ AI_Workspace_Ideas.md
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

1. [PROJECT_START.md](PROJECT_START.md) - 作業開始チェックリスト
2. [WORKSPACE.md](WORKSPACE.md) - ワークスペース地図、ディレクトリ役割、作業開始時の確認
3. [STATUS.md](STATUS.md) - workspace 全体の現在地
4. [AGENTS.md](AGENTS.md) - AI 向け運用ルール
5. [CURRENT.md](CURRENT.md) - 現在の焦点、待ち、次の行動
6. [AI_INDEX.md](AI_INDEX.md) - 関連ファイル索引
7. 必要な [SKILLS](SKILLS) - 作業種別ごとの詳細ルール
8. 作業対象ファイル - `AI_DRAWERS.md` / `PROJECTS/*.md` / `NOTES/*.md`
9. [TRIALS.md](TRIALS.md) - 登録済み候補を試す場合の実績・判断・再利用条件
10. [INBOX.md](INBOX.md) - 未整理の新規リンクやアイデア
11. [SECURITY_REVIEW.md](SECURITY_REVIEW.md) - 必要に応じてリリース前・大きい変更のセキュリティレビュー
12. [OKF.md](OKF.md) - 必要に応じて Open Knowledge Format の採用候補メモ

## ファイルの役割

- [PROJECT_START.md](PROJECT_START.md): AI が最初に読む作業開始チェックリスト。
- [VERSION](VERSION): 現在のリポジトリバージョン。
- [WORKSPACE.md](WORKSPACE.md): ワークスペース地図。
- [STATUS.md](STATUS.md): workspace 全体の現在地。
- [AGENTS.md](AGENTS.md): 複数 AI 向けの編集・運用ルール。
- [AI_PROFILES.md](AI_PROFILES.md): AI ごとの得意領域と振り分け目安。
- [CURRENT.md](CURRENT.md): 現在の焦点、待ち、次の行動。
- [AI_INDEX.md](AI_INDEX.md): プロジェクト、ノート、技術項目の索引。
- [TRIALS.md](TRIALS.md): 登録済み候補の試用結果、採用判断、再利用条件。
- [CHATGPT_PROJECT_SOURCE.md](CHATGPT_PROJECT_SOURCE.md): ChatGPT Projects の情報源に貼るための要約。
- [CHATGPT_PROJECT_INSTRUCTIONS.md](CHATGPT_PROJECT_INSTRUCTIONS.md): ChatGPT Projects の指示欄に貼るための短い運用ルール。
- [LOCAL_ENVIRONMENT.example.md](LOCAL_ENVIRONMENT.example.md): Git 管理しないローカル環境設定の公開用テンプレ。
- [LESSONS_LEARNED.md](LESSONS_LEARNED.md): 運用で学んだ問題、原因、対策。
- [DECISIONS.md](DECISIONS.md): 重要な設計判断と採用理由。
- [REVIEW.md](REVIEW.md): 定期レビュー用チェックリスト。
- [SECURITY_REVIEW.md](SECURITY_REVIEW.md): 大きい変更、公開前、リリース前のセキュリティレビュー手順。
- [OKF.md](OKF.md): Open Knowledge Format の採用候補、利点、リスク、試験導入案。
- [CHANGELOG.md](CHANGELOG.md): 構成変更・運用ルール変更の履歴。
- [INBOX.md](INBOX.md): 整理前のリンク、アイデア、調査候補。
- [AI_DRAWERS.md](AI_DRAWERS.md): OSS・AI・開発ツールの技術レーダー。
- [references](references): 公式ドキュメントを読むための概念地図や長期参照資料。
- [OUTPUTS](OUTPUTS): Markdown 原本から生成した PDF、PowerPoint、Excel、画像などの成果物。
- [SKILLS](SKILLS): PowerShell、Python、Git、Research、Security など作業種別ごとの詳細ルール。
- [PROJECTS](PROJECTS): プロジェクトごとの目的、状態、次の作業。
- [NOTES](NOTES): プロジェクトから独立した技術メモ。
- [TEMPLATES](TEMPLATES): 新規 Project / Note の雛形。

## Reuse Lifecycle

```text
検索・候補発見
    ↓
Knowledge Scanで最大3候補を選ぶ
    ↓
実作業で試す
    ↓
TRIALS.mdへ結果を記録
    ↓
AI_DRAWERS / LESSONS_LEARNED / DECISIONSへ判断を戻す
    ↓
次の作業で再利用
```

候補を見つけただけでは採用扱いにしない。使わなかった候補も、理由が判断に役立つ場合は Knowledge Scan に残す。


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
