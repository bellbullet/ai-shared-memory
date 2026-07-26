# Obsidian Integration Audit

調査日: 2026-07-25

## Scope

Obsidian対応前のコミット済み作業コピーを読み取り調査した。別の既存作業ツリーにあった未コミット変更は変更・複製していない。

## 構成

- 調査対象ファイル: 64
- Markdown: 55
- 主要ディレクトリ: `NOTES/`、`OUTPUTS/`、`PROJECTS/`、`public/`、`references/`、`SKILLS/`、`TEMPLATES/`
- 公開サイト: VitePress / GitHub Pages
- Obsidian設定: `.obsidian/`なし
- Template: `TEMPLATES/PROJECT_TEMPLATE.md`、`TEMPLATES/NOTE_TEMPLATE.md`

## Link調査

- Markdown link: 78
- 外部URL link: 14
- Wiki link: 0
- 実在しない相対link: 0
- 大文字小文字だけが異なるlink: 0
- 同一pathの大文字小文字衝突: 0

`README.md`にはdirectoryそのものを指すlinkがある。これはGitHubでは有効で、directory内の`README.md`または一覧へ移動するため、link切れとして扱わない。

既存の内部参照の多くはバッククォート内のpathであり、ObsidianのBacklinksやGraphのedgeにはならない。全ファイルを一括変換すると差分と後方互換リスクが大きいため、既存本文は変更せず、HomeとMOCで実linkを追加する。

## 孤立と索引

Markdown linkだけでinbound linkを数えると、VitePress用のroot / folder `index.md`と`README.md`が孤立に見える。ただしVitePress設定、GitHubのrepository root、directory表示から参照されるため、運用上の孤立ではない。

索引には役割の異なる重なりがある。

- `AI_INDEX.md`: AIと人間の検索routingの正本
- `index.md`と各directoryの`index.md`: VitePress表示用
- `README.md`: Repository説明とGitHub入口

Obsidian MOCはこれらを置き換えず、閲覧用の補助入口に限定する。

## File nameとWindows互換性

- Windows禁止文字、予約名、末尾の空白・dot: 0
- 大文字小文字衝突: 0
- 日本語file name: 0
- 既存Markdownのline ending: CRLF
- UTF-8で日本語本文を読み取り可能

新規file nameはASCIIとし、relative pathは`/`区切りのMarkdown linkを使用する。日本語file nameを禁止する必要はないが、将来追加する場合はGitHub、Windows、Obsidianの3環境でlinkを確認する。

## GitHubとObsidianの表示差

- 既存本文は標準Markdown中心で、Wiki link、callout、Mermaidへの依存はない。
- VitePress用`index.md`はYAMLとHTMLを含み、ObsidianのHomeには適さない。
- ObsidianのWiki linkはGitHubで通常のlinkにならないため、新規Home / MOCでは標準Markdown linkを使用する。
- PropertiesはYAMLとしてGitHubでも読めるが、全既存fileへの一括導入は行わない。

## `.gitignore`とprivate情報

変更前の`.gitignore`は`.env`、local environment、node modules、VitePress生成物、主要OS/editor fileを除外していたが、Obsidian workspace、cache、plugin data、Raw conversation、private note用の明示除外はなかった。

軽量なpattern scanでは、private key、GitHub token、AWS access key、値入りの一般的secret、email addressを検出しなかった。公開用example内にplaceholderのWindows home pathが1件あるが、実usernameや実local pathではない。

Pattern scanは完全な機密検査ではない。公開前のhuman reviewとGitHub secret scanningなどを併用する。

## Obsidian / CLI

変更前の調査時点ではObsidian本体と`obsidian` commandを検出できず、version確認、Vault起動、CLI登録は実施できなかった。その後、Obsidian Desktop 1.12.7を導入し、実機確認を行った。

公式Obsidian CLIはObsidian 1.12で導入され、Windowsでは1.12.7以降のinstallerとアプリ側のCLI有効化が必要である。Install済みversionを確認できる端末でだけ有効化し、非公式CLIの代替installは行わない。

## 変更方針

- Repository rootをそのままVaultとして開く。
- `.obsidian/`は共有可能な最小設定だけを管理する。
- Workspace、cache、plugin本体・端末固有dataはGit管理しない。
- Community pluginは0件で開始する。
- Daily Notesは無効、Canvas / Graphは利用可能だが中心機能にしない。
- 標準Markdown link、Backlinks、Outgoing Links、Properties、Templatesを使う。
- Raw conversationとprivate noteはrepository外へ分離する。

## 実装後の環境確認

- Obsidian Desktop 1.12.7のinstallを確認した。
- Windows用の`Obsidian.com` redirectorが同梱されていることを確認した。
- Repository rootをVaultとして開き、`OBSIDIAN_HOME.md`のreading viewと標準Markdown link、Backlinks、Live Preview表示を確認した。
- Settingsから公式CLIを有効化し、PATH登録成功を確認した。既存terminalでは再起動前のため`obsidian`名は未反映だが、同梱redirectorから`version`と`help`が成功した。
- CLIのread-only確認では検索、未解決link、孤立note、community plugin、templateの照会が成功した。Community pluginは0件だった。
- `node_modules/`とVitePressのcache / build出力はObsidianの除外fileに設定し、検索・link候補・Graphのnoiseを避けた。
- VitePress 1.6.4 buildは新規linkを含めて成功した。

新しく開くterminalでは`obsidian version`と`obsidian help`を使用できる。CLIからの更新系commandは、対象fileとGit差分を確認してから限定的に使う。
