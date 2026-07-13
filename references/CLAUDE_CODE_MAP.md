# Claude Code Architecture Map

最終確認: 2026-07

## 位置づけ

この文書は、Claude Code の機能を暗記するための完全ガイドではない。
Anthropic 公式ドキュメントを読むときに、各機能をどの概念レイヤーへ分類するかを示すスナップショットである。

機能名、モデル名、Tool 数、既定値、契約別仕様、利用可能な実行面は更新されるため、利用時は公式ドキュメントを再確認する。
X、Qiita、Zenn などは発見経路や補助資料として扱い、一次情報の根拠にはしない。

## 概念レイヤー

### Model

推論、コード理解、計画、Tool 呼び出しの判断を担うモデル層。
モデルのファミリー名やエイリアス、既定モデル、利用可能な推論設定は変化するため、固定的な一覧として管理しない。

### Runtime

モデルとローカルまたはリモートの実行環境を仲介する Claude Code 本体。
会話状態、コンテキスト、Tool 呼び出し、許可確認、セッション操作、拡張機能との接続を統合する。

### Built-in Tools

ファイルの読み取り・検索・編集、Shell コマンド、Web、Agent、その他の組み込み機能など、Claude Code が実際の作業を行うための操作面。
正確な Tool 名や数はバージョン・設定・実行面で変わり得るため、ここではカテゴリとして扱う。

### Subagents

メインの会話とは別のコンテキストで、探索、計画、実装、レビューなどの一部を担当する補助エージェント。
組み込みの補助エージェントと、ユーザーやチームが定義するカスタムエージェントを区別する。

### CLAUDE.md / Rules / Memory

- `CLAUDE.md`: プロジェクト、ユーザー、組織の前提や作業上のガイダンス。
- `.claude/rules/`: パスや用途に応じて適用する詳細ルール。
- Memory: セッションやプロジェクトをまたいで再利用する情報。

これらはモデルが参照するコンテキストであり、OS 権限や完全な強制機構そのものではない。
絶対に禁止したい操作は、Permission、Hook、Sandbox、コンテナ、VM、OS 権限、CI など適切な制御面でも守る。

### Skills

再利用可能な手順、専門知識、作業ルールを必要なときに読み込む仕組み。
Skill は通常、既存の Tool や実行環境を使ってどう作業するかを説明するものであり、単独で新しいOS権限を付与するものではない。

### Plugins

Skills、Subagents、Hooks、MCP 設定、スクリプトなど、複数の拡張要素をまとめて配布する単位。
Plugin は文章だけとは限らず、コード実行や外部接続を含み得るため、導入前にマニフェスト、スクリプト、Hook、依存関係、ネットワーク先、権限要求を監査する。

### MCP

Model Context Protocol。外部サービス、データベース、ファイル、API、業務システムなどのToolやデータソースを接続するための標準プロトコル。
MCP Server は信頼境界の内側に置かれるとは限らない。提供元、ソースコード、権限、認証情報の扱い、送信データを確認する。

### Permission / Hooks / Sandbox

- Permission: Tool 実行やファイル操作などを承認・拒否する制御。
- Hooks: 特定のライフサイクルやTool呼び出しに連動して処理を実行する仕組み。
- Sandbox: ファイル、プロセス、ネットワークなどの実行範囲を隔離・制限する仕組み。

文章で「しないでください」と書くことと、機械的に禁止することは別である。
危険な操作、秘密情報、外部ネットワーク、破壊的コマンドは、複数の制御層を組み合わせて扱う。

### Session / Checkpoint / Worktree

- Session: 会話、Tool 呼び出し、結果、作業状態をまとめた作業単位。
- Checkpoint: Claude Code のファイル編集や会話を戻すための復元補助。
- Worktree: Git の作業ツリーを分離して、複数の作業やAgentの変更を隔離する仕組み。

Checkpoint は Git、バックアップ、データベースのトランザクション、外部サービスのロールバックの代わりにはならない。
Bash、API、Database、Git Push、Deploy、公開処理などの副作用は別途管理する。

### 実行面

Claude Code は CLI だけでなく、IDE、デスクトップ、Web、CI、SDK など複数の実行面から利用できる。
実行面によって、利用可能な認証、Tool、権限、バックグラウンド処理、外部Provider、管理設定が異なる場合がある。
同じ機能名でも、実行面・組織設定・Providerをまたいで同一動作だと仮定しない。

## 基本エージェントループ

Claude Code の作業は、次の反復として理解するとよい。

```text
目的と境界条件を受け取る
        ↓
必要なコンテキストを集める
        ↓
計画し、次の行動を選ぶ
        ↓
Permission / Hook / Sandbox を通過する
        ↓
Tool、Subagent、MCPなどで実行する
        ↓
結果、ログ、テスト、実環境を検証する
        ↓
不足や失敗があれば、調査・計画・実行へ戻る
        ↓
完了条件を満たしたら、変更と判断を記録する
```

コードが生成されたことではなく、ビルド、テスト、型、起動、ユーザー操作、既存機能への影響などの完了条件を確認したことを成果とする。

## Tool / Skill / Plugin / MCP の違い

| 概念 | 主な役割 | 注意点 |
| --- | --- | --- |
| Tool | ファイル、Shell、Web、Agentなどの具体的な操作 | 実行権限や副作用を確認する |
| Skill | 作業手順や専門知識を再利用する | 文章だけで禁止事項を強制できるとは限らない |
| Plugin | 複数の拡張要素をまとめて配布する | コード、Hook、実行ファイル、外部接続を監査する |
| MCP | 外部Tool・データソースへ接続する | Serverの信頼性、権限、送信データを確認する |

## CLAUDE.md の役割と限界

`CLAUDE.md` は、プロジェクトの前提、規約、コマンド、検証方法、作業方針を伝えるためのコンテキストである。
薄く保ち、詳細な作業手順は Skills やプロジェクト文書へ分けると管理しやすい。

ただし、`CLAUDE.md` はOSの強制ポリシーやセキュリティ境界ではない。
秘密情報の読み取り、危険なShell、外部送信、破壊的操作などは Permission、Hook、Sandbox、OS権限、CI、レビューで防ぐ。

## Claude Code と Codex の概念対応

これは機能の同一性を保証する対応表ではなく、考え方を比較するための目安である。

| Claude Code | Codexで近い概念 | 位置づけ |
| --- | --- | --- |
| `CLAUDE.md` | `AGENTS.md`、Project指示 | 作業前提とルール |
| `.claude/rules/` | `SKILLS/`、対象範囲別の手順 | 詳細ルールの分離 |
| Built-in Tools | Shell、編集、Web、Apps / Connectors | 実行手段 |
| Subagents | Subagents、並列ワーカー | 作業の分担 |
| Skills | Codex Skills | 再利用可能な手順と知識 |
| Plugins | Codex Plugins | 拡張要素の配布単位 |
| MCP | MCP、Apps / Connectors | 外部Toolとデータソース接続 |
| Permission / Sandbox | 承認、Sandbox、権限設定 | 操作の制御 |
| Session / Checkpoint | Thread、作業セッション、Git | 状態と復元の管理 |
| Worktree | Git Worktree | ファイル変更の分離 |
| Auto Memory / Project Memory | Memory、共有Markdown | 長期的な再利用情報 |

## 変化しやすい項目

次の情報は、この地図に固定的な数字や断定として追加しない。

- モデル名、モデルエイリアス、既定モデル、モデルの世代
- Tool、Subagent、Skill、Pluginの数や内訳
- Effort、Fast mode、実験機能、内部評価名
- 契約、Provider、地域、組織設定ごとの利用可否
- CLI / IDE / Desktop / Web / CI / SDK ごとの差異
- セッション保存、Checkpoint、Memory、Worktreeの細かな実装

これらは、利用時点のAnthropic公式ドキュメント、CLIリファレンス、設定・料金・Provider別資料で確認する。
確認できない固有名詞は、公式確認前に概念地図へ追加しない。

## 公式ドキュメント

- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Getting started](https://docs.anthropic.com/en/docs/claude-code/getting-started)
- [Common workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
- [CLI reference](https://docs.anthropic.com/en/docs/claude-code/cli-usage)
- [Memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- [Skills](https://docs.anthropic.com/en/docs/claude-code/skills)
- [Plugins](https://docs.anthropic.com/en/docs/claude-code/plugins)
- [MCP](https://docs.anthropic.com/en/docs/claude-code/mcp)
- [Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks)
- [Permissions and IAM](https://docs.anthropic.com/en/docs/claude-code/iam)
- [Security](https://docs.anthropic.com/en/docs/claude-code/security)
- [Worktrees](https://docs.anthropic.com/en/docs/claude-code/worktrees)

## 確認手順

Claude Codeの新機能や記事を調査するときは、次の順番で確認する。

1. 機能名を概念レイヤーへ分類する。
2. Anthropic公式DocsとCLIリファレンスで存在を確認する。
3. 実行面、Provider、契約、権限による差異を確認する。
4. 変化しやすい数字や既定値を共有メモリへ固定しない。
5. セキュリティ境界と副作用を確認する。
6. 長期的に有用な概念だけを `AI_DRAWERS.md` と `AI_INDEX.md` へ登録する。
