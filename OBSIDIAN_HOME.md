# Obsidian Home

最終更新: 2026-07-25

このVaultは、複数AIと人間が共有する公開前提のMarkdown知識ベースを、Obsidianから閲覧・編集するための入口です。

正本はGitHubリポジトリ内の既存Markdownです。Obsidian専用の知識ベースへ移行したものではなく、Obsidianがなくても従来どおり利用できます。

## 初めて開いたとき

1. [README](README.md)で目的と公開範囲を確認する。
2. [PROJECT_START](PROJECT_START.md)から既存の読み順に従う。
3. 現在地は[STATUS](STATUS.md)と[CURRENT](CURRENT.md)で確認する。
4. キーワードから探す場合は[AI_INDEX](AI_INDEX.md)を使う。
5. 編集前にGitの差分を確認し、private情報を入れない。

## 現在地

- [Workspace全体の状態](STATUS.md)
- [現在の焦点と次の行動](CURRENT.md)
- [重要な判断](DECISIONS.md)
- [変更履歴](CHANGELOG.md)

## 案内

- [プロジェクトMOC](MOC/PROJECTS.md)
- [AI・ツールMOC](MOC/AI_AND_TOOLS.md)
- [運用MOC](MOC/OPERATIONS.md)
- [プロジェクト一覧](PROJECTS/index.md)
- [ノート一覧](NOTES/index.md)
- [調査候補](INBOX.md)
- [試用中・試用済みツール](TRIALS.md)
- [技術レーダー](AI_DRAWERS.md)
- [長期参照資料](references/index.md)

## AI向け入口

- [作業開始チェックリスト](PROJECT_START.md)
- [Workspace地図](WORKSPACE.md)
- [AI共通ルール](AGENTS.md)
- [検索索引](AI_INDEX.md)
- [作業別Skills](SKILLS/README.md)

新しい入口を追加しても、AIの既存読み順は変更しません。AIは引き続き`PROJECT_START.md`から読み始めます。

## セキュリティ

このリポジトリには公開可能な情報だけを保存します。

保存しないもの:

- APIキー、token、Cookie、認証情報、`.env`の実値
- 個人情報、住所、電話番号、契約情報
- ローカル絶対パス、端末固有設定、秘密ログ
- ChatGPT、Claude Code、Codex、Geminiなどの会話生ログ
- privateな日記やObsidian Syncの認証情報

会話履歴は公開リポジトリ外のprivateなRaw archiveに置き、公開可能な要約だけを昇格します。詳細は[会話アーカイブ設計](references/CONVERSATION_ARCHIVE_DESIGN.md)を参照してください。

## Obsidianの基本操作

- `Ctrl+P`: Command palette
- `Ctrl+O`: Quick switcher
- `Ctrl+Shift+F`: Vault全体を検索
- Backlinks / Outgoing Links: 現在のノートと他ノートの接続を確認
- Templates: `TEMPLATES/`の雛形を新規ノートへ挿入
- Properties: 新規ノートのYAML Propertiesを表示・編集

新規ノートは既定で`NOTES/`へ保存されます。未整理のURLや短い候補は、従来どおり[INBOX.md](INBOX.md)へ追記してください。添付ファイルは`ATTACHMENTS/`へ保存されますが、公開可能性とライセンスを確認してからGit管理します。

## Git同期時の注意

1. 編集前に`git status --short --branch`を確認する。
2. pull前後の競合を確認し、自動mergeや自動pushに依存しない。
3. `git diff`で本文、設定、添付ファイルを確認する。
4. 対象ファイルだけをstageし、秘密情報チェック後にcommitする。
5. `.obsidian/workspace*.json`、cache、pluginの端末固有データをcommitしない。

コミュニティプラグインは初期状態で導入していません。候補と判断理由は[Obsidianプラグイン調査](references/OBSIDIAN_PLUGIN_REVIEW.md)にあります。
