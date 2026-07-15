# AI_DRAWERS.md

最終更新: 2026-07-15

このファイルは ChatGPT・Codex・Claude・Gemini 等へ共有する技術レーダー兼ナレッジ保管庫です。

## 目的

- OSS、AI 技術、開発ツール、研究対象、個人開発アイデアを分類する。
- 新しい GitHub リンクや公開論文を、複数 AI が再利用できる形で残す。
- 導入候補、研究対象、アイデアを混同しない。

## v1.1 Snapshot

- 登録項目: 90
- 主カテゴリ: 11
- 横断グループ: 12
- 管理方式: 後方互換性を保つため、v1.1 では単一ファイルを維持する。
- 重点領域: Agent / Orchestration、AI Coding Operations、Knowledge Management、Creative Pipeline、Self Host / Tools。
- 最近の追加: X発見候補から Backlog.md、halo-record、loopeng-bootstrap、Graphify、Codex運用3件、Edge / Local AI 4件、制作支援2件を一次情報確認後に統合。
- 未整理項目と次回レビュー条件は `STATUS.md`、分類前リンクは `INBOX.md` を参照する。

カテゴリ別ファイル分割は、検索性や保守性が単一ファイルでは不足した時点で検討し、v1.1 では行わない。

## 引き出し早見表

- `AI`: AI 利用基盤、RAG、音声認識、AI 向けドキュメント。
- `Agent / Orchestration`: AI エージェント、長期記憶、LLM ルーティング、複数 AI 協調。
- `LLM`: モデル本体、モデルコレクション、ローカル LLM 調査。
- `Development`: 開発支援、SDK、コンテナ、審査、API。
- `Creative`: 動画、音声、アバター、メディア制作。
- `Self Host`: 自宅サーバー、セルフホスト、ローカルサービス。
- `Research`: 論文、実験的技術、内容確認待ちの調査対象。
- `Reference Sites`: 何度も参照する学習サイト、技術サイト。
- `Ideas`: 個人開発案、まだプロジェクト化していない構想。

## 追加ルール

新規項目は原則として次の形にする。

```markdown
### Name

URL:（なければ `未設定`）

概要:

用途:

状態:

優先度:
```

分類が曖昧な場合は `INBOX.md` に一時保存する。

推奨カテゴリ:

- AI
- Agent / Orchestration
- LLM
- Development
- GPU / HPC
- Scientific Computing / Rust AI
- Creative
- Self Host
- Research
- Reference Sites
- Ideas

状態の例:

- Trial
- Adopted
- 条件付き採用
- 不採用
- 導入推奨
- 導入検討
- 次に試す
- 将来導入
- 将来候補
- 研究対象
- 必要時利用
- 保留
- 調査保留
- 内容確認待ち
- 開発アイデア

優先度の例:

- ★★★★★
- ★★★★☆
- ★★★☆☆
- 未設定

## Trial Promotion

登録項目を実際に試した場合は、詳細を `TRIALS.md` に記録する。

評価後、必要に応じてエントリへ次を追加する。

```markdown
使用実績:

結果:
- 有効 / 条件付き有効 / 不採用 / 未評価

再利用条件:
```

`AI_DRAWERS.md` には判断要約だけを残し、長い実行ログや一時的な調査過程は置かない。

⸻

## AI

### DESIGN.md

URL:
https://github.com/google-labs-code/design.md

概要:

- AI 向けにデザインルールを共有するためのドキュメント運用候補。

用途:

- AI 向けデザインルール共有
- UI 設計標準化

状態:

- 研究対象

優先度:

- ★★★★☆

⸻

### Firecrawl

URL:
https://github.com/firecrawl/firecrawl

概要:

- AI / RAG 向けの Web データ収集基盤候補。

用途:

- AI 向け Web データ収集
- RAG 構築

状態:

- 将来候補

優先度:

- ★★★★☆

⸻

### PixelRAG

URL:
https://github.com/StarTrail-org/PixelRAG

分類:

- AI
- RAG
- Visual Retrieval
- Knowledge Management
- AI Coding Operations

概要:

- Web ページ、PDF、画像をスクリーンショットとしてレンダリングし、画像タイル上で検索する pixel-native RAG。
- HTML / PDF のテキスト抽出では失われやすい表、グラフ、図、レイアウト、インフォグラフィックなどの視覚構造を保持して検索できる。
- `pixelshot` CLI、FAISS index、FastAPI search API、Claude Code plugin / pixelbrowse skill を含む。
- Qwen3-VL-Embedding をスクリーンショットデータで LoRA fine-tune している。

用途:

- visual RAG 研究
- PDF / Web page / UI screenshot retrieval
- AI agent にページの見た目を読ませる workflow
- `ai-shared-memory` や技術資料の図表検索研究
- Claude Code / Codex 周辺の screenshot-based browsing 比較

関連:

- Firecrawl
- Google OKF
- Memory Consolidation / Dream Review
- Claude Code
- Oracle
- Stirling PDF
- PPT Master

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- text RAG の代替というより、表、図、レイアウトが重要な文書向けの補完技術として見る。
- index サイズ、GPU / CPU 負荷、ローカル運用時のストレージ、PDF レンダリング品質を確認する。
- v0.3.0 では PDF 対応、wide-page 2D tiling、macOS / Apple Silicon MPS、Windows / macOS Chrome discovery などが追加されている。
- 公開メモリに private documents、API key、内部資料、認証情報を含めない。

⸻

### Open Notebook

URL:
https://github.com/lfnovo/open-notebook

分類:

- AI
- Knowledge Management
- Self Host
- NotebookLM Alternative

概要:

- NotebookLM 代替を目指す、privacy-focused な open source notebook / research workspace。
- source、notes、AI assistant を組み合わせ、学習・調査・資料整理に使える。

用途:

- NotebookLM 代替候補
- AI-assisted research notebook
- 学習・調査メモの整理
- local-first / self-hosted knowledge workspace 研究

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- notebook 内の private documents、API key、会話ログ、個人メモは公開メモリに記録しない。
- `ai-shared-memory` とは役割が近いため、導入する場合は GitHub 原本運用との住み分けを確認する。

⸻

### Google OKF

URL:
https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing

参考:
https://zenn.dev/knowledgesense/articles/14a874a9f423bb

分類:

- Knowledge Management
- LLM Wiki
- Metadata

概要:

- Google Cloud が提案した、AI が読みやすいナレッジ管理のための Open Knowledge Format。
- Markdown ファイルに YAML frontmatter を付け、知識の type、title、description、resource、tags、timestamp などを機械的に扱いやすくする。
- v0.1 段階のため、現時点では全体採用ではなく研究対象として監視する。

用途:

- AI Shared Memory
- Metadata
- LLM Wiki
- Knowledge Base
- RAG / agent context

関連:

- `OKF.md`
- `PROJECT_START.md`
- `CURRENT.md`
- `STATUS.md`
- `AI_INDEX.md`

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- まだ採用決定ではない。`DECISIONS.md` には入れず、`OKF.md` で採用候補として監視する。
- v1.1 以降で `CURRENT.md`、`PROJECT_START.md`、`STATUS.md` など数ファイルだけに YAML frontmatter を試験導入するか検討する。

⸻

### Whisper

URL:
https://github.com/openai/whisper

概要:

- OpenAI の音声認識モデル。

用途:

- 音声認識
- 字幕生成
- 文字起こし

状態:

- 導入推奨

優先度:

- ★★★★★

⸻

### small-vlm-sop-check

URL:
https://github.com/shure-dev/small-vlm-sop-check

分類:

- Local AI
- VLM / Video Analysis
- SOP / Safety

概要:

- 一人称作業動画をフレーム単位で説明し、手順書への準拠を小型VLMで判定・可視化する実験リポジトリ。
- 生成モデルと決定的なルール判定を分離する設計が、監査可能な現場AIの参考になる。

用途:

- 外部送信を避けたい現場動画分析
- SOP逸脱検知と評価データ設計
- WebcamFaceDemoなどのローカル映像処理との比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- MIT License。参照実装はApple Silicon向けMLX、既定1fpsで、正式な精度評価は未完了。
- 現場映像には個人情報や機密情報が含まれ得るため、保存・同意・閲覧権限を先に決める。

⸻

### OpenLive

URL:
https://github.com/katipally/openlive

分類:

- Local AI
- Realtime Voice / Vision
- WebGPU

概要:

- 音声区間検出、音声認識、ターン検出、音声合成をオンデバイスで扱い、任意のLLMへ音声・カメラ・画面入力を接続するOSS。
- 音声ループをローカルに保ちながら、LLM部分を差し替える境界設計が参考になる。

用途:

- AIRI / AI companionの音声・視覚入力
- ローカル優先のリアルタイム対話
- Whisper、VoxCPM、WebcamFaceDemoとの比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- MIT License。LLM接続にはprovider設定やAPI keyが必要になる場合があり、音声以外の送信範囲を個別確認する。
- カメラ・画面共有、マイク、モデルproxyの権限境界を確認してから試す。

⸻

## Agent / Orchestration

AI エージェント、長期記憶、複数 LLM 協調、ルーティング、オーケストレーター系をまとめる。

関連グループ:

- MiMo-Code / Headroom / OpenFugu / AI-Safeter FUGU は「AIを管理するAI」の研究候補。
- OpenFugu は実装・統合寄り、AI-Safeter FUGU は最適化手法寄り、Headroom は記憶・コンテキスト管理寄り。

### Claude Code Architecture Map

URL:
https://docs.anthropic.com/en/docs/claude-code/overview

分類:

- Agent / Orchestration
- AI Coding
- Reference
- Security
- Context Management

概要:

- Claude Codeを、モデル、ランタイム、Tool、Subagent、Skill、Plugin、MCP、安全制御、実行環境に分けて整理した概念地図。
- 個々の機能名を暗記する資料ではなく、新機能を適切なレイヤーへ分類するための参照資料。
- Codexなど他のコーディングエージェントとの概念比較にも利用する。

用途:

- Claude Code公式Docsの索引
- Claude CodeとCodexの概念比較
- `CLAUDE.md`、Rules、Skills、Hooksの使い分け
- AIエージェントの権限設計
- PluginやMCP導入時の安全確認

関連:

- `references/CLAUDE_CODE_MAP.md`
- Anthropic Claude Code公式ドキュメント
- Codex
- MCP
- AI Shared Memory

状態:

- 参照資料

優先度:

- ★★★★★

注意:

- 機能、モデル、Tool数、契約別仕様は更新されるため、公式情報で都度確認する。
- X記事は発見経路であり、一次情報としては扱わない。
- PluginやMCPはコード実行や外部接続を含み得るため、導入前に権限、依存関係、Hook、送信先を監査する。

⸻

### agmsg

URL:
https://github.com/fujibee/agmsg

分類:

- Agent / Orchestration
- AI Coding Operations
- Multi-Agent Collaboration
- Local-first
- SQLite

概要:

- Claude Code、Codex、Gemini CLI、GitHub Copilot CLIなどのCLI AIエージェント間で、共有ローカルSQLiteデータベースを介してメッセージをやり取りするOSS。
- daemon、ネットワーク、brokerを置かない薄いtransportとして設計され、メッセージ履歴はSQLiteに保持される。
- MCPやSubagentの代替ではなく、異なるCLIエージェントの独立したpeer sessionを連携させるための仕組み。

用途:

- Codex実装後にClaude Codeへレビュー依頼を送る実験
- Architect / Reviewer / Security / Writerなどの役割分担
- 複数CLIエージェント間のローカル連絡
- 長時間作業の完了通知、レビュー依頼、引き継ぎ
- `ai-shared-memory` の共有知識とリアルタイム連絡の役割分離研究

関連:

- agency-agents
- Oracle
- OpenFugu
- Agentic Inbox
- Claude Code
- Codex
- Gemini CLI
- `references/CLAUDE_CODE_MAP.md`

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 同一マシンまたは同じ共有SQLiteファイルへ安全にアクセスできる環境を前提とする。別PC連携や認証済みメッセージングの代替としては扱わない。
- Windows実装はBash script群をGit Bash経由で動かす。PowerShellで裸の`bash`を使うとWSL側の別`$HOME`・別DBを参照する可能性があるため、Git Bashの実行パスを明示する。
- Codexの`monitor`連携はREADME上でbeta / experimentalとして説明されている。まずは`turn`または手動確認を含む小規模な検証から始める。
- agent間メッセージ、SQLite履歴、Hook設定に非公開コード、秘密情報、認証情報、個人情報を含めない。導入前にscripts、Hooks、書き込み先、spawn時の権限・sandbox設定を監査する。
- Tuttiは共有ワークスペース、agmsgはpeer session間の薄いメッセージtransport、`openai/codex-plugin-cc`はClaude CodeからCodexへの委譲に特化する。

⸻

### Backlog.md

URL:
https://github.com/MrLesk/Backlog.md

分類:

- Agent / Planning
- Markdown-native Workflow
- Local-first

概要:

- Gitリポジトリ内のMarkdownを正本にし、タスク・Kanban・AIエージェント向け指示を同じ履歴で管理するOSS。
- 「仕様レビュー → 計画レビュー → 実装レビュー」と「1タスク = 1コンテキスト = 1PR」の分割パターンが再利用しやすい。

用途:

- `PLAN.md`とセッション境界の改善
- 人間とAIのタスク引き継ぎ
- AI-PLC / pm-skillsとの役割比較

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- MIT License。サーバー、アカウント、テレメトリなしで使えるが、任意MCPやCLI導入時は書込み範囲を確認する。
- AI-PLCは目標から検証までの4段階ライフサイクル、pm-skillsはPM判断フレームワーク群、Backlog.mdは日々の実行単位とGit履歴を担う。

⸻

### Graphify

URL:
https://github.com/Graphify-Labs/graphify

分類:

- Agent / Codebase Knowledge Graph
- RAG / Code Intelligence

概要:

- コード、SQL、shell、文書、論文、画像、動画を解析し、AIコーディング支援から問い合わせ可能な知識グラフへ変換する。
- アプリ、DB、インフラを同じグラフで扱う設計が、大規模リポジトリの再読コスト削減に向く。

用途:

- コードベース理解と依存関係探索
- Rowboat / Claudianとの知識ワークスペース比較
- PixelRAGとの検索表現比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- MIT License。取り込み対象、保存先、増分更新、埋め込み・モデル呼出しの外部送信有無を導入前に確認する。
- Graphifyはコード中心の知識グラフ、Rowboatは個人作業情報のローカルMarkdownグラフ、ClaudianはObsidian vault内のエージェントUIという役割差がある。

⸻

### halo-record

URL:
https://github.com/bkuan001/halo-record

分類:

- Agent Audit
- Tamper Evidence / Hash Chain

概要:

- ツール呼出し、モデル呼出し、データアクセス、承認を追記型ハッシュチェーンへ記録する参照実装。
- エージェントの自己申告ではなく、第三者が後から検証できる証跡層を分離する。

用途:

- エージェント実行証跡
- 承認・データアクセス履歴の検証
- loopeng-bootstrapの実行ループとの責務分離

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- Apache-2.0、依存なし。外部witnessは件数とhead hashだけを保持できる。
- 認証・認可や監査合格を自動保証する製品ではない。記録内容に秘密情報を含めない設計が必要。

⸻

### loopeng-bootstrap

URL:
https://github.com/fumihito/loopeng-bootstrap

分類:

- Agent / Auditable Loop
- Durable Memory / OKF

概要:

- Codex / Claude Codeを監査可能な自律ループとして運用するBootstrap。
- 決定的なRun Report、アラート、検証済みトランザクションによるLLMWiki更新を組み合わせる。

用途:

- 長時間エージェント作業の完了判定
- protected path変更やjournal漏れのレビュー
- `OKF.md`、`TRIALS.md`、halo-recordとの比較

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- MIT License、Python 3.10以上。任意コード・shell・ファイル更新を伴う実行ループとして、導入前に保護パス、rollback、承認境界を監査する。
- halo-recordは改ざん検知可能な証跡層、loopeng-bootstrapは証跡を含む監査可能な実行・受入ループを担う。

⸻

### MiMo-Code

URL:
https://github.com/XiaomiMiMo/MiMo-Code

概要:

- Xiaomi 製 AI コーディングエージェント。

用途:

- AI コーディングエージェント研究
- Claude Code 比較研究

状態:

- 研究対象

優先度:

- ★★★☆☆

⸻

### Headroom

URL:
https://github.com/chopratejas/headroom

概要:

- 長期記憶とコンテキスト管理の研究候補。

用途:

- 長期記憶
- コンテキスト管理

状態:

- 研究対象

優先度:

- ★★★★☆

⸻

### open-genai

URL:
https://github.com/hirokawaguchi/open-genai

概要:

- デジタル庁のガバメント AI「源内（GENAI）」を OpenAI 互換 API やローカル LLM で利用するための非公式プロジェクト。
- 既定は Ollama の OpenAI 互換 API を使い、vLLM / LM Studio / OpenAI など任意の互換サーバへ切り替え可能。
- RAG、文字起こし、画像生成、チーム単位ナレッジなどをローカル環境で扱う構成の研究候補。

用途:

- OpenAI 互換 API
- ローカル LLM
- Ollama 連携
- AI 基盤研究
- 源内 OSS 研究

関連:

- デジタル庁 源内 OSS
- Ollama
- OpenFugu
- Headroom
- AIRI

状態:

- 研究対象

優先度:

- ★★★★☆

⸻

### OpenFugu

URL:
https://github.com/trotsky1997/OpenFugu

概要:

- Sakana AI の Fugu アーキテクチャを参考にしたオープンソース実装。
- 複数の LLM を協調させ、ルーティングや統合を行うオーケストレーター研究プロジェクト。

用途:

- ローカル LLM の協調
- AI エージェント研究
- MoE・ルーティング実験

状態:

- 研究対象

優先度:

- ★★★★☆

⸻

### AI-Safeter / FUGU

URL:
https://github.com/AI-Safeter/FUGU

概要:

- Sakana Fugu の基盤研究で用いられる TRINITY 関連の最適化アルゴリズム（Sep-CMA-ES）の研究用実装。
- LLM 本体ではなく、オーケストレーションの最適化手法に焦点を当てる。

用途:

- AI ルーティング研究
- エージェント最適化
- Fugu 内部理解

状態:

- 研究対象

優先度:

- ★★★☆☆

メモ:

- `Agent / Orchestration` グループ内で OpenFugu と対で確認する。

⸻

### agency-agents

URL:
https://github.com/msitarzewski/agency-agents

分類:

- Agent / Orchestration
- AI Coding Operations
- Prompt Engineering

概要:

- Claude Code、Codex、Cursor、Gemini CLI などに導入できる専門 AI エージェント人格・ワークフロー集。
- README では 232 specialized agents、16 divisions、MIT License と説明されている。
- 各エージェントは Identity、Mission、Workflow、Deliverables、Success Metrics などを持つ構造化された Markdown prompt として扱える。

用途:

- Claude Code / Codex の専門レビュー担当を増やす
- `AGENTS.md` / `SKILLS/` / `AI_PROFILES.md` 設計の参考にする
- Security Review、UI Review、Documentation Review、Reality Check などの専門担当を少数導入する
- 作業前に呼び出す専門家モードのテンプレートとして試す

関連:

- Claude Code
- Codex
- Cursor
- Gemini CLI
- `AI_PROFILES.md`
- `SKILLS/`

状態:

- 導入検討

優先度:

- ★★★★☆

メモ:

- 全エージェントを一括導入せず、Frontend Developer、Security Engineer、Reality Checker、Technical Writer など少数を選んで試す。
- 役割が増えすぎると選択コストが上がるため、`AI_PROFILES.md` や `SKILLS/` に吸収できる型だけを採用候補にする。

⸻

### Hermes Agent

URL:
https://github.com/NousResearch/hermes-agent

Docs:
https://hermes-agent.nousresearch.com/docs/

分類:

- Agent / Orchestration
- AI Coding Operations
- Skills
- Knowledge Management
- Automation
- AI Workspace / Integrations

概要:

- Nous Research による自己改善型 AI agent。
- 経験から skill を作成・改善し、memory、過去会話検索、messaging gateway、cron automation、subagent 並列化、複数 terminal backend を統合する。
- Skills は必要時に読み込む on-demand knowledge document として扱われ、progressive disclosure と agentskills.io open standard 互換を重視する。
- `~/.hermes/skills/` を primary source of truth として扱い、bundled / optional / hub-installed / agent-created skills を管理する。

用途:

- AI agent runtime 研究
- Skills / `SKILL.md` 運用比較
- AI Shared Memory と agent memory の接続研究
- ChatGPT / Codex / Claude Code / Gemini CLI の skill routing 設計比較
- messaging gateway / scheduled automation / subagent workflow 研究

関連:

- `AGENTS.md`
- `PROJECT_START.md`
- `SKILLS/`
- `NOTES/AI_Coding_Patterns.md`
- Memory Consolidation / Dream Review
- anthropics/skills
- agency-agents
- Oracle
- deepsec

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- いきなり常用導入せず、まず Docs と optional skills catalog を読み、skill 構造、権限境界、agent-managed skill の更新管理を確認する。
- optional skills では security-unbroker が privacy / security skill の代表例として参考になるが、名前、住所、電話、メール、親族などの実データは `ai-shared-memory` に記録しない。
- agent skill ecosystem には credential theft、backdoor、data exfiltration などのリスクが報告されているため、導入前に skill 本体、参照ファイル、scripts、required environment variables をレビューする。
- API key、token、cookie、webmail session、個人情報、broker opt-out 対象情報は公開メモリに記録しない。
- 参考: https://arxiv.org/abs/2605.28588

⸻

### TradingAgents

URL:
https://github.com/TauricResearch/TradingAgents

分類:

- Agent / Orchestration
- Finance
- Multi-Agent

概要:

- Multi-Agents LLM Financial Trading Framework。
- 複数の LLM agent を使い、金融市場分析、投資判断、取引判断の研究を行うためのフレームワーク。

用途:

- multi-agent workflow 研究
- 金融分析 agent の設計参考
- decision log / analyst / trader / risk manager などの役割分担研究

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 実取引導入ではなく、multi-agent 設計と金融分析 workflow の研究対象として扱う。
- API key、取引口座、投資判断ログなどは公開メモリに記載しない。

⸻

### Agentic Inbox

URL:
https://github.com/cloudflare/agentic-inbox

分類:

- Agent / Orchestration
- Email
- Self Host

概要:

- Cloudflare Workers 上で動く、AI agent 付きの self-hosted email client。
- メールを AI workspace の入口に置く設計の参考候補。

用途:

- AI inbox / email assistant 研究
- Cloudflare Workers agent app 研究
- AI Workspace の通知・メール入口設計

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 実メール内容、アカウント情報、認証情報は公開メモリに記載しない。
- `NOTES/AI_Workspace_Ideas.md` の「AI を入口に置く」設計思想と接続できる。

⸻

## LLM

### Susono Model

URL:
https://huggingface.co/collections/puwaer/susono-model

概要:

- 日本語向けモデル集。

用途:

- 日本語向けモデル調査
- ローカル LLM 研究

状態:

- 研究対象

優先度:

- ★★★☆☆

⸻

### awesome-free-llm-apis

URL:
https://github.com/mnfst/awesome-free-llm-apis

分類:

- LLM
- API Providers
- Free Tier
- Reference Sites
- AI Workspace / Integrations

概要:

- 無料枠がある LLM API をまとめた awesome list。
- Provider API と inference provider を分け、base URL、代表モデル、context、rate limit、無料枠条件を一覧化している。
- OpenAI SDK compatible endpoint を優先しており、AI Workspace や個人開発での provider 選定、fallback 検討に使える。
- trial credits や期間限定 promo ではなく、permanent free tiers を主対象にしている。

用途:

- 無料枠 LLM API 調査
- OpenAI SDK compatible endpoint 比較
- AI Workspace の provider / fallback 候補調査
- ローカル LLM で足りない処理の外部 API 候補確認
- Codex / Claude Code / 個人開発での低コスト実験

状態:

- 参考資料

優先度:

- ★★★★☆

メモ:

- 無料枠、rate limit、対象モデル、商用利用可否は変わりやすいため、利用前に各 provider の公式ドキュメントで確認する。
- API key、token、アカウント情報、prompt 内容、利用ログは公開メモリに記載しない。
- 無料枠では prompt が provider 側に保存、審査、学習利用される可能性があるため、センシティブ情報や非公開コードには使わない。
- OpenRouter、LibreChat、GitHub Models、Cloudflare Workers AI などの provider / gateway / UI 選定の入口として扱う。

⸻

### Buzz

URL:
https://github.com/chidiwilliams/buzz

分類:

- AI
- Transcription
- Creative
- Local-first

概要:

- OpenAI Whisper を使い、個人 PC 上で音声の文字起こし・翻訳を行うオフライン transcription アプリ。

用途:

- オフライン文字起こし
- 音声メモ、動画、会議録のテキスト化
- Whisper GUI / local transcription workflow の比較

状態:

- 導入検討

優先度:

- ★★★★☆

メモ:

- 実音声、会議録、個人情報、非公開会話の内容は公開メモリに記録しない。

⸻

## Development

### Greenlight

URL:
https://github.com/RevylAI/greenlight

概要:

- App Store 審査チェックの研究候補。

用途:

- App Store 審査チェック

状態:

- 研究対象

優先度:

- ★★★☆☆

⸻

### NASA SpaceWasm

URL:
https://github.com/nasa/spacewasm

分類:

- Development
- WebAssembly
- Rust
- Safety Critical
- Embedded

概要:

- NASA の `nasa/spacewasm` による、宇宙機上で WebAssembly 1.0 バイナリを解釈する Rust 製インタプリタ。
- 高速化よりも、固定メモリ、決定的なメモリ使用、ストリーミングデコード、検証しやすい実装を重視する。
- Wasm のデコーダ / バリデータとインタプリタを備え、組み込み・航空宇宙・高信頼システム向けの実装例として参照できる。

用途:

- Safety-critical WebAssembly 研究
- Rust 製組み込みランタイムの設計理解
- サンドボックス化されたプラグイン実行基盤の比較
- WebAssembly / Embedded / Flight Software の学習
- 決定性・固定メモリ・ストリーミング実行の設計参考

関連:

- Rust
- WebAssembly
- Wasmtime
- Wasmi
- wasm3
- DLR-FT/wasm-interpreter

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- Apache-2.0 ライセンス。README の要件、対応する Wasm 機能、組み込み時の imported functions を確認してから利用する。
- 一般的な高速サーバー向け Wasm ランタイムの代替ではなく、安全性・予測可能性・リソース制約を重視する用途の実装例として扱う。
- 宇宙機や安全クリティカル用途への適合を、このリポジトリの記述だけで保証したり認証済みと断定したりしない。

⸻

### Ponytail

URL:
https://github.com/DietrichGebert/ponytail

分類:

- AI Coding
- Development Workflow

概要:

- AI コーディングエージェントに「必要以上にコードを書かない」という設計思想を与えるスキル。
- 既存コード、標準ライブラリ、ネイティブ機能、導入済み依存で足りるかを先に確認し、最後に最小限の実装へ進む。

用途:

- Reuse Before Build
- シンプル設計
- 不要な抽象化防止
- コード削減
- レビュー

関連:

- ai-shared-memory
- `AGENTS.md`
- `PROJECT_START.md`
- OpenFugu
- Headroom

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- そのまま導入するより、まず `AGENTS.md` と `PROJECT_START.md` の基本ルールへ思想を取り込む。
- 信頼境界、データ損失対策、セキュリティ、アクセシビリティは削減対象にしない。

⸻

### deepsec

URL:
https://github.com/vercel-labs/deepsec

分類:

- AI Coding
- Security

概要:

- Codex / Claude などの AI エージェントを利用してコードベースをセキュリティレビューするための AI ハーネス。
- 通常の SAST だけでは見つけにくい、文脈依存の認証、認可、入力検証、権限、データフローの問題を AI に調査させる。

用途:

- AI Security Review
- Vulnerability Scan
- Pull Request Review
- Secure Coding
- Release Gate

関連:

- Codex
- Claude
- Semgrep
- CodeQL
- `SECURITY_REVIEW.md`

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- 全作業で毎回実行するのではなく、公開 GitHub、大きい PR、認証・Webhook・コマンド実行・ファイル処理・アップロード処理、リリース前の節目で検討する。
- AI 調査は時間とコストがかかるため、pytest や通常レビューの代替ではなく、重要変更の追加チェックとして扱う。

⸻

### Nango

URL:
https://github.com/NangoHQ/nango

分類:

- Development
- API Integration
- AI Tooling

概要:

- AI を使って product integrations を構築するためのオープンソース API integration platform。
- SaaS / API 連携、OAuth、外部サービス統合を扱う基盤候補。

用途:

- 外部サービス連携
- API integration 基盤
- AI Workspace の Slack / GitHub / Calendar / Email 連携研究
- webhook / OAuth まわりの設計参考

状態:

- 将来候補

優先度:

- ★★★★☆

メモ:

- 導入時は OAuth token、API key、webhook secret、接続先設定を公開メモリに記録しない。
- AIRI や AI Workspace が複数外部サービスを扱う段階で再評価する。

⸻

### anthropics/skills

URL:
https://github.com/anthropics/skills

分類:

- AI Coding Operations
- Skills
- Prompt Engineering

概要:

- Anthropic の Agent Skills 公開リポジトリ。
- Claude Code / agent workflow 向け skill の構成や配布形式を確認するための参照枠。

用途:

- `SKILLS/` 設計の参考
- task-specific rules の分離方法確認
- Claude Code / Codex skill 運用比較

状態:

- 保留

優先度:

- ★★★☆☆

メモ:

- ai-shared-memory ではすでに `SKILLS/` 思想を取り込んでいるため、今すぐ導入ではなく参照枠として扱う。

⸻

### Oracle

URL:
https://github.com/steipete/oracle

分類:

- AI Coding Operations
- Development Workflow
- MCP
- Multi-model Review

概要:

- prompt と関連ファイルを bundle し、GPT / Gemini / Claude など別 AI へ文脈つきで相談できる CLI / MCP ツール。
- API 実行、browser automation、手動コピペ用の render/copy、multi-model panel、ChatGPT Project Sources 追加支援に対応する。
- Codex skill と MCP server としても使える設計。

用途:

- Codex / Claude Code / Cursor 作業中のセカンドオピニオン
- bug investigation、architecture review、release readiness audit
- `ai-shared-memory` や project docs を明示的に bundle して別 AI へ相談する
- ChatGPT Project Sources 管理の補助

関連:

- Codex
- Claude Code
- Cursor
- MCP
- ChatGPT Projects
- `CHATGPT_PROJECT_SOURCE.md`
- `AI_INDEX.md`

状態:

- 調査候補

優先度:

- ★★★★★

メモ:

- まずは `--render --copy` の手動 bundle 用途から試す。
- API key、browser cookie、browser automation、remote token、Project Sources 操作は秘密情報と権限に注意する。
- browser automation は便利だが、安定性と権限境界を確認してから使う。

⸻

### pxpipe

URL:
https://github.com/teamchong/pxpipe

Reference:
https://www.seangoedecke.com/text-tokens-as-image-tokens/

分類:

- AI Coding Operations
- Token Optimization
- Context Compression
- Claude Code

概要:

- Claude Code などの巨大な入力文脈をローカルプロキシで画像化し、入力トークン削減を狙う TypeScript 製ツール。
- system prompt、tool docs、古い履歴などの bulky context を PNG に変換し、dense text を image token として扱わせる。
- README では Fable 5 向けに調整され、dense context で大きな token / cost 削減が出ると説明されている。
- Sean Goedecke の記事では、この発想を optical compression / text-as-image prompts として整理している。

用途:

- Claude Code の長文 context 削減
- AI coding agent の token cost 最適化
- context compression 研究
- tool docs / system prompt 肥大化対策の比較候補

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- lossy な方式なので、ID、hash、secret、正確な数値、パス、契約情報など byte-exact recall が必要な情報は画像化に任せない。
- prompt cache、要約、session boundary、Thin AGENTS / Routed Skills と比較して使い分ける。
- まずは実運用投入ではなく、Claude Code / Fable 系の token 削減研究として扱う。
- secret、token、cookie、`.env` 実値、個人情報、契約情報は公開メモリに記録しない。

⸻

### Fincept Terminal

URL:
https://github.com/Fincept-Corporation/FinceptTerminal

分類:

- Development
- Finance
- Analytics

概要:

- オープンソースの金融分析 terminal / finance application。
- market analytics、investment research、economic data tools を扱う。

用途:

- 金融分析 UI / terminal 研究
- TradingAgents など金融 agent の比較候補

状態:

- 保留

優先度:

- ★★☆☆☆

メモ:

- AI Workspace 本体からは距離があるため、金融分析や投資研究を本格化する場合に再評価する。

⸻

### Flowsint

URL:
https://github.com/reconurge/flowsint

分類:

- Development
- OSINT
- Security

概要:

- cybersecurity analysts / investigators 向けの graph-based investigation platform。
- visual、flexible、extensible な調査グラフを扱う。

用途:

- OSINT 調査
- セキュリティ調査 workflow
- graph-based investigation UI 研究

状態:

- 保留

優先度:

- ★★☆☆☆

メモ:

- OSINT 用途は扱う情報の公開可否が重要。実調査データや個人情報は公開メモリに残さない。

⸻

### Puppet

URL:
https://github.com/puppetlabs/puppet

分類:

- Development
- Infrastructure as Code
- Configuration Management
- HomeLab

概要:

- Linux / Unix / Windows の構成管理をコード化する老舗 OSS。
- ユーザー、パッケージ、サービス、設定ファイルなどの状態を宣言的に定義し、自動管理する。
- 個人 HomeLab では Ansible より重めだが、構成管理、DevOps、大規模運用の学習対象として有用。

用途:

- HomeLab 構成管理研究
- サーバー初期設定の再現性向上
- Terraform / Ansible / Docker Compose との比較
- `OciMinecraftJavaServer` などインフラ系 project の運用設計参考

関連:

- HomeLab
- Terraform
- Ansible
- Docker Compose
- `PROJECTS/OciMinecraftJavaServer.md`
- `NOTES/HomeLab.md`

状態:

- 研究対象

優先度:

- ★★★☆☆

メモ:

- すぐ導入より、Ansible / Terraform / Docker Compose との役割比較として扱う。
- manifest に secret、token、private path、実アカウント情報を含めない。

⸻

### PPT Master

URL:
https://github.com/hugohe3/ppt-master

分類:

- Development Workflow
- Creative
- Document Automation

概要:

- PDF、DOCX、Markdown、URL などの素材から、AI エージェント経由で編集可能な PowerPoint（`.pptx`）を生成するローカルワークフロー / スキル。
- 画像貼り付け型ではなく、PowerPoint 上で編集できるネイティブ要素、図形、テキスト、チャートとして出力することを重視する。
- Claude Code、Cursor、VS Code + Copilot、Codex CLI などの AI IDE / CLI エージェント内で使うハーネスとして位置付けられている。

用途:

- Markdown / PDF から PPTX 生成
- 技術メモの資料化
- 提案資料作成
- レポートのスライド化
- Codex / Claude Code / Cursor 連携
- `OUTPUTS/` への成果物生成

関連:

- Codex
- Claude Code
- AI Shared Memory
- `OUTPUTS/README.md`
- Stirling PDF
- OpenCut

状態:

- 次に試す

優先度:

- ★★★★☆

メモ:

- 一発で完成資料を作る魔法ではなく、編集可能な叩き台を作って PowerPoint で直すための道具として扱う。
- 出力品質はモデル、入力素材、テンプレート、利用者の PowerPoint 編集ワークフローに依存する。

⸻

### reviewable-html-workbench

URL:
https://github.com/u-ichi/reviewable-html-workbench

分類:

- AI Coding Operations
- Document Automation
- Development Workflow
- Review Workflow
- Claude Code
- Codex CLI

概要:

- Claude Code / Codex CLI 向けに、agent が生成した HTML 文書をレビュー可能にする plugin。
- HTML preview 上で本文や画像を選択し、インラインコメントを残せる。
- agent はコメントを読み取り、分類、返信、解決済みコメントの反映、再 render まで行える。
- `visual-html-renderer`、`reviewable-design-doc`、`plan-preview` の skill を含む。

用途:

- agent-generated document review
- HTML report / design doc review
- Codex / Claude Code の成果物レビュー
- `OUTPUTS/` に置く人間向け成果物の確認
- Markdown / PDF / PPTX 生成前のレビュー用 HTML 中間成果物

関連:

- PPT Master
- OUTPUTS
- PixelRAG
- Oracle
- Claude Code
- Codex CLI
- Document Automation
- AI Coding Operations

状態:

- 次に試す

優先度:

- ★★★★★

メモ:

- chat 上の「ここ直して」より、HTML 上の正確な範囲コメントとしてレビューを残せる点が強い。
- preview server、Tailscale、browser comment、generated HTML を扱うため、公開前レビューでは private document、内部資料、個人情報、API key、token、`.env` 実値を含めない。
- まずは `ai-shared-memory` の調査まとめや比較表を reviewable HTML 化する用途で試す。

⸻

### Apple Container

URL:
https://github.com/apple/container

概要:

- Apple 公式コンテナ環境。

用途:

- Apple 公式コンテナ環境
- Docker 代替候補

状態:

- 研究対象

優先度:

- ★★★☆☆

⸻

### Amazon Creators API SDK

URL:
https://github.com/mrmishmash/amazon_creators_api

概要:

- Amazon Creators API を利用するための非公式 SDK。
- 旧 PA-API の後継 API を利用し、商品情報・価格・画像などを取得できる。

用途:

- セール監視
- 商品検索
- 価格履歴取得
- アフィリエイト支援

前提:

- Amazon Creators API 利用資格が必要
- 過去30日以内に一定数以上の発送実績など利用条件あり

状態:

- 研究対象

優先度:

- ★★★★☆

⸻

### ccc-usage-dashboard

URL:
https://github.com/cero-t/ccc-usage-dashboard

分類:

- Codex / Claude Code
- Observability
- Local Dashboard

概要:

- 利用量、トークン、推定コスト、クォータ、帰属情報を分けて表示するローカルダッシュボード。
- OTLPログから長時間エージェント作業の消費量とエラーを振り返る観測層として使える。

用途:

- Codex / Claude Codeの利用量観測
- モデル別・タスク別コストの振り返り
- codex-hygieneとの責務比較

状態:

- 導入検討

優先度:

- ★★★★☆

メモ:

- Apache-2.0。既定はlocalhost待受で履歴をローカルDBへ保存する。
- 生OTLPログにはプロンプト由来情報が含まれ得るため、LAN公開、保持期間、DBアクセスを監査する。
- ccc-usage-dashboardは利用量観測、codex-hygieneはコンテキスト・ツール面の監査を担う。

⸻

### codex-model-routing-guard

URL:
https://github.com/vida994/codex-model-routing-guard

分類:

- Codex
- Hook / Model Routing
- Safety

概要:

- 選択中モデルが作業内容に明確に不向きな場合だけ確認を促す、助言専用のローカルhook。
- モデルを自動変更せず、高リスク作業での人間確認を残す保守的パターン。

用途:

- セキュリティ、決済、並行処理、データ変更時のモデル選択確認
- 小タスクと高リスクタスクのルーティング基準

状態:

- 導入検討

優先度:

- ★★★★☆

メモ:

- MIT License、Python 3.9以上。ネットワーク通信、会話履歴読取り、テレメトリなしとREADMEに記載。
- OpenAI公式ポリシーではなく作者のヒューリスティック。Hook導入前に判定条件とローカル状態保存を監査する。

⸻

### codex-hygiene

URL:
https://github.com/sunflower-of-parchman/codex-hygiene

分類:

- Codex
- Context Audit
- Tool Surface / Telemetry

概要:

- Codex Desktopのコンテキスト、ツール面、MCP / app / skill可用性、長期goalのスコープを点検するコミュニティskill。
- 利用量の増加を、tool availability、snapshot再利用、長いthread replayなどへ分解して調べる。

用途:

- 長期タスクのコンテキスト肥大化調査
- MCP / plugin / skill棚卸し
- ccc-usage-dashboardとの比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- MIT License。ローカルSQLiteを読み取るため、対象DB、取得列、出力範囲を導入前にレビューする。
- OpenAI公式skillではない。公開メモリへテレメトリやローカルパスを転記しない。

⸻

### openai/codex-plugin-cc

URL:
https://github.com/openai/codex-plugin-cc

分類:

- Agent / Orchestration
- Claude Code Plugin
- Codex Delegation

概要:

- Claude CodeからCodexへレビュー、実装、デバッグ、セッション引き継ぎ、バックグラウンド作業を委譲するOpenAI公式プラグイン。
- Claudeを判断・統合側、Codexを別実行セッションとして使う役割分担の公式実装例。

用途:

- Claude CodeからCodexへの明示的委譲
- adversarial review / rescue / transfer
- Tutti / agmsg / codex-firstとの比較

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- Apache-2.0。Node.js 18.18以上と、ChatGPT契約またはOpenAI API key、既存Codex認証・設定を利用する。
- 長時間レビューゲートは使用枠を消費する。認証情報、subprocess、background session、書込み権限を試用前に確認する。

⸻

### drawio-ai-kit

URL:
https://github.com/sparklabx/drawio-ai-kit

分類:

- Agent Skill
- Diagram / Architecture
- Validation

概要:

- 実在するdraw.ioステンシルID、宣言的レイアウト、構造検証、視覚セルフチェックを組み合わせる図解生成キット。
- AIが存在しないIDを生成する失敗を、ground truthと検証工程で抑える設計が再利用しやすい。

用途:

- AWS / Azure / GCP / Databricks / BPMN構成図
- AI生成図の構造検証
- Excalidrawとの役割比較

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- MIT License、zero dependencies。公式クラウドアイコンは別の利用条件を持ち得るため、再配布時に確認する。
- skill / CLIが生成・実行するファイルとコマンドを導入前に監査する。

⸻

### LiteRT.js

URL:
https://github.com/google-ai-edge/LiteRT/tree/main/litert/js

分類:

- Edge AI
- Browser Runtime
- WebGPU / WASM

概要:

- Google AI EdgeのLiteRTモデルをブラウザ内でWASMまたはWebGPU実行する公式JavaScriptランタイム。
- 入力をサーバーへ送らないWeb AIと、TensorFlow.jsとのGPU共有の基盤候補。

用途:

- ブラウザ内ローカル推論
- WebGPU対応UI
- onnx2tfで変換したモデルの実行先

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- Apache-2.0。WebGPU未対応演算はWASMまたはCPUへフォールバックし、大規模モデルはWASMメモリ上限で失敗し得る。
- ブラウザ互換性、モデル配布ライセンス、初回ダウンロード容量を個別確認する。

⸻

### onnx2tf

URL:
https://github.com/PINTO0309/onnx2tf

分類:

- Edge AI
- Model Conversion
- ONNX / LiteRT / TFLite

概要:

- ONNXからLiteRT / TFLite / TensorFlow、PyTorch各形式へ変換し、LiteRTからPyTorchへの逆変換も扱うモデル変換ツール。
- LiteRT.jsなどの実行ランタイムへモデルを渡す前段の変換・互換性検証に位置付ける。

用途:

- Edge向けモデル変換
- ONNX経由の移植パイプライン
- LiteRT.jsとの変換→実行関係

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- MIT License。対応形式が広く、演算・量子化・入出力の差異が生じ得るため、実モデルごとの数値比較が必要。
- 変換時の任意Python実行、依存パッケージ、モデルライセンスを確認する。

⸻

## GPU / HPC

### CuPy

URL:
https://github.com/cupy/cupy

概要:

- NumPy / SciPy 互換の GPU 数値計算ライブラリ。
- CPU 向け NumPy コードを GPU へ移行しやすく、`numpy` を `cupy` に置き換える感覚で扱えるケースがある。
- NVIDIA CUDA と AMD ROCm に対応するが、AMD ROCm の対応状況は環境ごとの事前確認が必要。

用途:

- GPU 数値計算
- 行列演算高速化
- AI 前処理
- 科学技術計算
- 画像処理

関連:

- NumPy
- SciPy
- PyTorch
- RAPIDS
- AIRI
- Whisper

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- AIRI、Whisper 周辺処理、画像処理、Embedding 後のクラスタリングや類似検索など、大量配列処理の高速化候補。
- Radeon / ROCm 環境では、対象 OS・ROCm バージョン・CuPy wheel の対応状況を導入前に確認する。

⸻

## Scientific Computing / Rust AI

### SciRS2

URL:
https://github.com/cool-japan/scirs

概要:

- Scientific Computing and AI in Rust。
- Rust 製の NumPy / SciPy / scikit-learn 互換を目指す大規模科学計算基盤。
- Python ラッパーではなく、Rust ネイティブで科学計算・機械学習・信号処理・画像処理などを扱う方向性。

用途:

- Rust AI
- 数値計算
- 機械学習
- 信号処理
- HPC

関連:

- CuPy
- PyTorch
- Burn
- Candle
- Ollama

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- CuPy は Python / GPU アクセラレーション寄り、SciRS2 は Rust ネイティブ科学計算基盤寄り。
- Rust 製 AI スタックを育てる場合の中核候補。
- 関連候補: Burn、Candle、OxiLLaMa、OxiCUDA。

⸻

## Creative

### OpenCut

URL:
https://github.com/OpenCut-app/OpenCut

概要:

- OSS 動画編集ツール。

用途:

- OSS 動画編集
- CapCut 代替候補

状態:

- 次に試す

優先度:

- ★★★★☆

⸻

### Excalidraw

URL:
https://github.com/excalidraw/excalidraw

分類:

- Creative
- Knowledge Management
- Diagramming
- Whiteboard

概要:

- 手描き風の図解、ワイヤーフレーム、フローチャート、ホワイトボードを作れる virtual whiteboard。

用途:

- 技術メモの図解
- AI workflow / architecture の可視化
- 学習ノート、設計メモ、README 図解
- `NOTES/` や `PROJECTS/` の補助図作成

状態:

- 導入推奨

優先度:

- ★★★★★

メモ:

- private diagram、内部構成、認証情報、非公開資料のスクリーンショットは公開メモリに記録しない。

⸻

### yt-dlp

URL:
https://github.com/yt-dlp/yt-dlp

概要:

- 動画取得と音声抽出の定番ツール。

用途:

- 動画取得
- 音声抽出
- Whisper 連携

状態:

- 必要時利用

優先度:

- ★★★★☆

⸻

### Humation

URL:
https://github.com/humation-labs/humation

概要:

- AI 生成ではなく、手描きイラストパーツを組み合わせて決定論的（deterministic）な「かわいいアバター」を生成するオープンソースエンジン。
- ローカル動作で API 不要。
- SVG ベースのため軽量で再現性が高い。

用途:

- プロフィールアイコン
- AI エージェント
- ゲームキャラクター
- コミュニティサービス

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- AIRI などの AI アプリで、AI 画像生成を使わず軽量・高速・一貫したアバターを表示したい場合の有力候補。

⸻

### Humation Swift

URL:
https://github.com/humation-labs/humation-swift

概要:

- Humation を Swift で利用するための SDK。
- iOS・macOS など Apple プラットフォームへ簡単に組み込める。

用途:

- iPhone アプリ
- macOS アプリ
- visionOS
- SwiftUI

状態:

- 将来候補

優先度:

- ★★★☆☆

⸻

### Anime2.5DRig

URL:
https://852wa.github.io/Anime2.5DRig/

分類:

- Creative
- Avatar
- 2.5D Rig
- AI Companion / AIRI

概要:

- パーツ分け PSD をブラウザにドロップし、自動リグ、まばたき、口パク、カメラ追従、マウス追従、髪物理などをその場で試せる 2.5D アバターデモ。
- `face` / `eyewhite` / `irides` / `eyelash` / `mouth_open` / `front hair` などの PSD レイヤー命名規約を前提にする。
- Live2D ほど重い制作工程に入る前の、軽量なアバター表現・AI companion 表示の研究候補。

用途:

- AI companion avatar
- AIRI 表情・口パク・髪揺れ表現
- PSD ベースの軽量 2.5D アバター実験
- Live2D / Humation / VTuber体験場との比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- PSD レイヤー命名規約に依存するため、see-through などのレイヤー分解技術と組み合わせられるか確認する。
- キャラクター画像、PSD、配信素材の権利と利用許諾を確認する。

⸻

### see-through

URL:
https://github.com/shitagaki-lab/see-through

分類:

- Research
- Creative
- Anime Layer Decomposition
- 2.5D Avatar
- AI Companion / AIRI

概要:

- Single-image Layer Decomposition for Anime Characters。
- 1枚のアニメキャラクター画像を、髪、顔、目、服、アクセサリなど最大23の意味的レイヤーへ分解し、PSDとして出力する研究プロジェクト。
- SIGGRAPH 2026 Conference Proceedings に conditionally accepted と記載されている。

用途:

- 1枚絵から PSD 素材を作る
- Anime2.5DRig / Live2D / AIRI 向け素材化
- アニメキャラの 2.5D モデル化
- レイヤー分解・深度推定・セグメンテーション研究

状態:

- 最優先研究対象

優先度:

- ★★★★★

メモ:

- 生成・分解した画像の権利、キャラクター利用許諾、二次利用範囲に注意する。
- ローカル実行時は VRAM、CUDA / ROCm、PyTorch 依存関係を確認する。
- Anime2.5DRig と組み合わせると、1枚絵から動く 2.5D アバターへの流れを作れる可能性がある。

⸻

### tomari-guruguru

URL:
https://github.com/rotejin/tomari-guruguru

分類:

- Creative
- Avatar
- PNGTuber
- AITuber
- AI Companion / AIRI
- OBS

概要:

- マウスに追従して25方向に振り向き、音声に合わせて口パク・まばたきするブラウザアバター。
- `トマリぐるぐる` はマウス追従でキャラクターがこちらを見るシンプル版。
- `トマリトーク` はマイク入力または音声ファイルに合わせて口パクするトーク版。
- 5×5方向差分と、目開閉・口3段階の6状態画像を切り替えて表情を作る。

用途:

- AI companion / AIRI の軽量アバター表現
- AITuber の立ち絵アバター研究
- AI生成キャラ画像からの表情差分アバター作成
- マウス追従・視線追従・口パクの実験
- Live2D前の低コスト試作

関連:

- PuruPuruPNGTuber
- MotionPNGTuber
- Humation
- VTuber体験場
- VoxCPM
- AIRI

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- コードは MIT License だが、キャラクター画像・音声・生成素材は MIT 対象外。素材の商用利用や他プロジェクト流用は禁止のため、`ASSET_LICENSE.md` を確認する。
- 自作キャラで使うには 5×5 角度シートを6枚用意し、スライス生成する必要がある。
- PuruPuruPNGTuber と合わせて、軽量 PNGTuber / AITuber 表現の比較対象として扱う。

⸻

### HyperFrames

URL:
https://github.com/heygen-com/hyperframes

分類:

- Creative
- Video
- Agent Tooling

概要:

- HTML / CSS / mediaとseek可能なanimationから決定的なMP4をrenderする、agent向けオープンソース動画生成エンジン。
- Codex、Claude Code、Cursor、Gemini CLIなどで使える制作skillを同梱し、plan、lint、preview、renderを一つのループにする。

用途:

- AI video generation
- HTML to video
- agent-driven creative workflow
- OpenCut / ChatCut / BlenderMCP / PPT Master / OUTPUTS との比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- Apache-2.0。生成品質、render依存、素材ライセンス、生成物の権利を実運用前に確認する。
- HyperFramesはコード生成型動画、ChatCutはOAuth経由の編集ソフト連携、BlenderMCPは任意Python実行を含む3D制作連携という役割差がある。

⸻

### claude-real-video

URL:
https://github.com/HUANGCHIHHUNGLeo/claude-real-video

分類:

- Creative
- Video Analysis
- AI Coding Operations
- Knowledge Management

概要:

- Claude や任意の LLM が動画内容を扱えるように、動画を重要フレーム、transcript、`MANIFEST.txt` に変換するローカルツール。
- 固定 fps ではなく scene-change detection と dedup により、意味のあるフレームを抽出する。
- URL とローカルファイルに対応し、yt-dlp、ffmpeg、Whisper を利用する。
- `--why` で分析目的を manifest に含め、`--kb` で dated markdown note として保存できる。

用途:

- 動画内容の要約
- YouTube / SNS 動画の構成分析
- bug repro 動画の確認
- 講義・解説動画のノート化
- Creative Pipeline の入力素材化
- ai-shared-memory への動画由来知識の整理

状態:

- 次に試す

優先度:

- ★★★★☆

メモ:

- ローカル処理できる点は強いが、LLM に渡す frames / transcript には動画内の個人情報や非公開情報が含まれる可能性がある。
- `--cookies` は認証済み動画向けだが、cookie 実値や取得手順、private content は公開メモリに記録しない。
- 著作権・利用規約上、権利のある動画や公開動画の範囲で使う。
- crv Pro への導線があるため、無料版と有料版の機能境界は導入前に再確認する。

⸻

### VoxCPM

URL:
https://github.com/OpenBMB/VoxCPM

分類:

- Creative
- Voice
- TTS

概要:

- multilingual speech generation、creative voice design、voice cloning を扱う TTS / voice model 系プロジェクト。
- AIRI や AI companion の音声表現候補。

用途:

- TTS
- voice cloning research
- AI companion voice
- AIRI / avatar workflow

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 声の権利、同意、なりすまし、公開利用の境界を必ず確認する。
- 実在人物の声を無断で模倣する用途には使わない。

⸻

### MoneyPrinterTurbo

URL:
https://github.com/harry0703/MoneyPrinterTurbo

分類:

- Creative
- Video
- Automation

概要:

- AI LLM を使って短動画を一括生成するツール。
- short video automation の参考候補。

用途:

- short video generation
- creative automation
- OpenCut / HyperFrames との比較

状態:

- 保留

優先度:

- ★★☆☆☆

メモ:

- 品質、著作権、素材ライセンス、量産運用のリスク確認が必要。
- すぐ導入ではなく、動画生成 workflow を調査するときの比較候補。

⸻

### Reactive Resume

URL:
https://github.com/AmruthPillai/Reactive-Resume

概要:

- 履歴書作成・ポートフォリオ補助ツール。

用途:

- 履歴書作成
- ポートフォリオ補助

状態:

- 保留

優先度:

- ★★★☆☆

⸻

### Recordly

URL:
https://github.com/webadderallorg/Recordly

分類:

- Creative
- Video
- Demo
- Screen Recording

概要:

- 画面録画と編集を一体化し、ズーム、カーソル演出、背景、フレームなどを使って polished demo video を作る desktop app。
- macOS、Windows、Linux 向けの screen recording / demo production 候補。

用途:

- app demo video
- tutorial / walkthrough 作成
- Codex で作った app の説明動画
- OpenCut / HyperFrames / OUTPUTS との比較

状態:

- 次に試す

優先度:

- ★★★★☆

メモ:

- 録画に private window、個人情報、API key、terminal output、未公開コードが映り込まないよう確認する。

⸻

### VCamdroid

URL:
https://github.com/darusc/VCamdroid

分類:

- Creative
- Webcam
- Android
- Windows
- Video Streaming

概要:

- Android スマホを Windows の仮想 Web カメラとして使うための OSS。
- Windows 側は DirectShow / Softcam、Android 側は Camera2 / OpenGL / MediaCodec / RTSP を使い、Zoom、OBS、Discord、Teams などから通常の Web カメラとして扱える。
- USB / ADB 接続と Wi-Fi 接続に対応する。

用途:

- スマホカメラの Web カメラ化
- OBS / 配信 / ビデオ会議
- WebcamFaceDemo や AI companion のカメラ入力候補
- Android camera streaming / virtual webcam 研究

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- Windows 管理者権限、DirectShow filter 登録、ADB、Firewall 設定が絡むため、導入時は安全な検証環境で試す。
- Android 端末相性や接続不具合の Issue があるため、本番用途では DroidCam / Camo / OBS Virtual Camera / VDO.Ninja などとの比較が必要。
- 実カメラ映像や個人情報を含むログは公開メモリに記録しない。

⸻

### PhotoGIMP

URL:
https://github.com/Diolinux/PhotoGIMP

分類:

- Creative
- Image Editing
- GIMP

概要:

- GIMP 3+ を Photoshop 風の UI / shortcuts / workflow に寄せる patch。

用途:

- GIMP の操作性改善
- 画像編集 workflow の補助
- README / OUTPUTS 用の軽い画像加工

状態:

- 必要時利用

優先度:

- ★★★☆☆

メモ:

- 導入前に対応 GIMP version と patch 適用範囲を確認する。

⸻

### Qwen Image Edit Pixel Perfect nodes

URL:
https://github.com/oron1208/comfyui_qwen_edit_pixel_perfect

分類:

- Creative / ComfyUI
- Image Editing
- Registration / Mask Preservation

概要:

- Qwen-Image-Edit-2511で起きる画素ずれとマスク外改変を補正するComfyUIカスタムノード。
- 事前クロップと、AKAZE + RANSACによる後段位置合わせを比較できる。

用途:

- 線画・固定部分を保つ画像編集
- マスク外のハッシュ一致を使う合成検証
- ComfyUI編集パイプラインの再現性改善

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- MIT License。後段補正はOpenCVが必要。事前クロップは依存なしだが端が切れる場合がある。
- ComfyUI custom nodeはPythonコードを実行するため、依存とファイルアクセスを導入前に監査する。

⸻

## Self Host

### Homepage

URL:
https://github.com/gethomepage/homepage

概要:

- ホームラボ向け統合ダッシュボード。

用途:

- 統合ダッシュボード
- サービス監視

状態:

- 次に試す

優先度:

- ★★★★☆

⸻

### Immich

URL:
https://github.com/immich-app/immich

概要:

- Google Photos 代替候補。

用途:

- Google Photos 代替
- AI 顔認識
- 自動バックアップ

状態:

- 将来導入

優先度:

- ★★★★☆

⸻

### n8n

URL:
https://github.com/n8n-io/n8n

概要:

- ワークフロー自動化ツール。

用途:

- ワークフロー自動化
- AI 連携

状態:

- 次に試す

優先度:

- ★★★★☆

⸻

### LocalSend

URL:
https://github.com/localsend/localsend

概要:

- ローカルネットワーク向けファイル転送ツール。

用途:

- AirDrop 代替
- Windows / iPhone / Android 間転送

状態:

- 導入推奨

優先度:

- ★★★★☆

⸻

### Stirling PDF

URL:
https://github.com/Stirling-Tools/Stirling-PDF

概要:

- セルフホスト可能な PDF 編集ツール。

用途:

- PDF 編集
- OCR
- 結合
- 分割
- 学習資料や文書アーカイブの PDF 加工

状態:

- 導入推奨

優先度:

- ★★★★★

⸻

### kurashino-daicho

URL:
https://github.com/uzura89/kurashino-daicho

分類:

- Self Host
- Local-first
- Personal Data
- Document Automation
- Life Admin

概要:

- 資産・契約台帳を作って印刷するための、ログイン不要・サーバー非保持の静的ブラウザツール。
- 銀行、カード、サブスク、保険、年金、不動産、アカウントなどの所在一覧を整理できる。
- 終活・相続準備、サブスク解約準備、家庭内の契約整理に使える。
- ユーザーデータはブラウザ内で完結し、サーバーDB、認証、外部API送信、LLM利用を持たない設計。

用途:

- 資産・契約・サブスクの棚卸し
- 終活 / 相続準備
- 家庭内の契約一覧作成
- local-first / privacy-first な静的 Web アプリ設計の参考
- PDF / CSV 出力付き台帳アプリの設計参考

技術:

- Next.js Pages Router
- TypeScript
- Tailwind CSS
- IndexedDB
- pdf-lib
- papaparse

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 秘匿情報や実際の資産・契約内容は `ai-shared-memory` に記録しない。
- 参考にする場合は、設計思想、公開コード、local-first 方針だけを保存対象にする。
- 個人利用時も、パスワードや認証情報そのものは入力しない運用が安全。

⸻

### LibreChat

URL:
https://github.com/danny-avila/LibreChat

分類:

- Self Host
- AI UI
- Multi-Model Chat

概要:

- self-hosted ChatGPT clone / AI chat UI。
- Agents、MCP、Skills、Anthropic、OpenAI、Gemini、OpenRouter など複数 provider と model switching を扱う。

用途:

- 複数 AI を 1 画面で扱う UI 研究
- AI Workspace frontend 参考
- self-hosted AI chat
- MCP / Skills / multi-provider workflow の比較

状態:

- 将来候補

優先度:

- ★★★★☆

メモ:

- 今すぐ置き換えではなく、AI Workspace の UI / multi-model routing 研究として扱う。
- user auth、provider API key、conversation data は公開メモリに記録しない。

⸻

### AppFlowy

URL:
https://github.com/AppFlowy-IO/AppFlowy

概要:

- Notion 代替候補。projects、wikis、teams、AI collaborative workspace を扱う open source workspace。

用途:

- Notion 代替
- ローカル管理
- AI collaborative workspace 研究

状態:

- 将来導入

優先度:

- ★★★★☆

⸻

### Calibre

URL:
https://github.com/kovidgoyal/calibre

分類:

- Knowledge Management
- eBook
- Learning / Research Workflow

概要:

- eBook の管理、変換、閲覧、編集、端末連携を行う定番 ebook manager。

用途:

- eBook / 技術書 / 教材管理
- EPUB / PDF など学習資料の整理
- local library workflow 研究

状態:

- 導入推奨

優先度:

- ★★★★☆

メモ:

- 購入履歴、個人ライブラリ、DRM 回避、非公開ファイル名は公開メモリに記録しない。

⸻

### Anki

URL:
https://github.com/ankitects/anki

分類:

- Learning
- Knowledge Management
- Spaced Repetition

概要:

- 間隔反復で暗記・学習を支援する smart flashcard program。

用途:

- 学習メモの再利用
- 技術知識、語学、資格学習の flashcard 化
- `ai-shared-memory` の知識から復習カードを作る workflow 研究

状態:

- 導入推奨

優先度:

- ★★★★☆

メモ:

- 個人学習履歴、カード内容、同期アカウント情報は公開メモリに記録しない。

⸻

### Zotero

URL:
https://github.com/zotero/zotero

分類:

- Research
- Knowledge Management
- Reference Management

概要:

- 研究資料を収集、整理、注釈、引用、共有するための文献管理ツール。

用途:

- 論文・記事・技術資料の管理
- 引用情報整理
- `AI_DRAWERS.md` / `NOTES/` の出典管理 workflow 研究

状態:

- 導入推奨

優先度:

- ★★★★★

メモ:

- private library、個人メモ、未公開資料、同期アカウント情報は公開メモリに記録しない。

⸻

### Paperless-ngx

URL:
https://github.com/paperless-ngx/paperless-ngx

分類:

- Self Host
- Document Archive
- Knowledge Management
- OCR

概要:

- 紙文書や PDF を scan / index / archive し、検索可能な document management system として管理する self-hosted ツール。

用途:

- 書類アーカイブ
- OCR / tag / full-text search
- 家庭内・研究資料・業務文書の整理 workflow 研究

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- 実書類、住所、契約、見積、個人情報、スキャン画像は公開メモリに記録しない。

⸻

### ONLYOFFICE Docs

URL:
https://github.com/ONLYOFFICE/DocumentServer

分類:

- Self Host
- Document Automation
- Office Suite

概要:

- docs、sheets、slides、forms、PDF を扱う collaborative online office suite。
- Office Open XML formats とリアルタイム共同編集に対応する。

用途:

- Google Docs / Office 代替候補
- self-hosted document editing
- `OUTPUTS/` の docx / xlsx / pptx 編集環境候補

状態:

- 将来候補

優先度:

- ★★★★☆

メモ:

- 実文書、契約、見積、個人情報、共有リンク、認証情報は公開メモリに記録しない。

⸻

### Odysseus

URL:
https://github.com/pewdiepie-archdaemon/odysseus

分類:

- AI Workspace / Integrations
- Self Host
- Knowledge Management

概要:

- self-hosted AI workspace。
- ローカルまたは self-hosted な AI 作業環境の比較候補として扱う。

用途:

- self-hosted AI workspace 研究
- AI Workspace UI / integrations 比較
- Linux / Docker 寄りの運用候補確認

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- Windows 環境での実運用前に、対応 OS、Docker 構成、認証、データ保存場所を確認する。
- API key、会話ログ、workspace data、認証情報は公開メモリに記録しない。

⸻

## Research

### Terrain Diffusion

URL:
https://github.com/xandergos/terrain-diffusion

概要:

- 世界初の学習済みプロシージャル地形生成器。
- InfiniteDiffusion の仕組みを利用し、無限に拡張可能な地形を決定論的（deterministic）に生成する。

用途:

- Minecraft Mod
- オープンワールドゲーム
- シミュレーション
- AI ワールド生成研究

特徴:

- 学習済み AI による無限ワールド生成
- シードだけで世界を完全再現
- ランダムアクセス対応
- テレポートが O(1)
- ステートレス設計
- マルチプレイヤー対応しやすい
- 永続ストレージ不要
- VRAM 約 1.5GB
- RTX 3090 Ti 1枚で高速生成

関連リンク:

- Project: https://xandergos.github.io/terrain-diffusion/
- Paper: https://arxiv.org/abs/2512.08309
- Minecraft Mod: https://modrinth.com/mod/terrain-diffusion

状態:

- 最優先研究対象

優先度:

- ★★★★★

⸻

### InfiniteDiffusion

URL:
https://arxiv.org/abs/2512.08309

概要:

- 従来の Autoregressive 方式では難しかった「無限世界」を、決定論・ランダムアクセス・ステートレス設計で実現する拡散モデル技術。
- 「Perlin Noise のようなプロシージャル生成」と「Diffusion Model」を融合した方向性。

用途:

- 無限世界生成研究
- プロシージャル生成研究
- 生成AIとゲーム開発の接続

技術ポイント:

- Training-free
- Random Access
- Deterministic
- Distributed Friendly
- Multiplayer Friendly
- Seed Only Sharing

状態:

- 最優先研究対象

優先度:

- ★★★★★

⸻

## Reference Sites

### japanese-tech-writing / k16shikano gist

URL:
https://gist.github.com/k16shikano/fd287c3133457c4fd8f5601d34aa817d

分類:

- Reference Sites
- AI Coding Operations
- Writing
- Japanese Technical Writing
- Skills
- Prompt Engineering

概要:

- LLM に日本語の技術文書・書籍原稿を書かせるときの文章規範 skill。
- 整形、一文一行、段落と論証の構成、論証の厳密さ、読み手の負荷、視点と語り、演出の抑制、LLM っぽい空句の禁止、冗長の排除を扱う。
- 人間向けの一般文章作法というより、LLM に悩ましい日本語を生成させないための規範として使う。

用途:

- 日本語技術文書の推敲
- README / NOTES / PROJECTS の文章品質改善
- AI 出力の論理点検
- LLM っぽい冗長表現の削減
- `SKILLS/` や writing skill 設計の参考

関連:

- `SKILLS/`
- `NOTES/AI_Coding_Patterns.md`
- Claude Code運用ミス7選
- Memory Consolidation / Dream Review
- AI Coding Operations

状態:

- 参考資料

優先度:

- ★★★★★

メモ:

- そのまま全ルールを `AGENTS.md` に入れると肥大化するため、必要なら `SKILLS/Writing.md` のような作業別ルールとして分離する。
- `ai-shared-memory` の公開 Markdown を整えるとき、特に「段落と論証の構成」「論証の厳密さ」「冗長の排除」を優先して参照する。
- Gist / skill の内容を取り込む場合は、ライセンスと原文の扱いを確認し、丸写しではなく参照リンクと運用方針として残す。

⸻

### OpenAI Prompting

URL:
https://learn.chatgpt.com/docs/prompting

分類:

- Reference Sites
- Prompt Engineering
- AI Coding Operations

概要:

- ChatGPT、ChatGPT Work、Codex で使えるプロンプト設計の公式入門。
- 大きな作業では、目的（Goal）、必要な背景情報（Context）、期待する形式（Output）、守る条件や確認事項（Boundaries）を明示する考え方を整理している。
- 短い依頼では必要な項目だけを使い、作業の手順を過度に固定せず、求める結果から伝える方針を示す。

用途:

- Codex / ChatGPT の依頼文改善
- `PROJECT_START.md` や `PROJECTS/` の作業依頼テンプレート設計
- Task / Context / Output / Boundaries の整理
- `ai-shared-memory` の情報源と指示欄の設計参考

関連:

- `PROJECT_START.md`
- `CHATGPT_PROJECT_SOURCE.md`
- `CHATGPT_PROJECT_INSTRUCTIONS.md`
- `NOTES/AI_Coding_Patterns.md`
- `SKILLS/README.md`

状態:

- 参考資料

優先度:

- ★★★★★

メモ:

- OpenAI 公式の現行ガイドとして参照する。製品やモデルの挙動に関する断定は、必要に応じて最新の公式資料で再確認する。
- 公開メモリには API key、token、個人情報、非公開コード、実際の利用ログを記録しない。

⸻

### VTuber体験場

URL:
https://fugi-himitsukichi.net/vtuber_taikenjou/

概要:

- VTuber制作・配信に関する知識やツールを体系的にまとめた個人運営の情報サイト。
- Live2D、3D、配信環境、機材、ソフトなどを幅広く扱う。

用途:

- AIRI の UI 検討
- VTuber 制作学習
- Live2D 調査
- 配信環境構築
- AI コンパニオンの音声・表情連動や見せ方の参考

関連:

- Humation
- OpenCut
- Whisper
- AIRI

状態:

- 参考資料

優先度:

- ★★★★☆

メモ:

- AI コンパニオンを VTuber のように自然に見せるための、キャラクター表現・配信ソフト構成・Live2D 運用の参考候補。
- 関連論文: https://arxiv.org/abs/2503.00842

⸻

### Claude Code運用ミス7選

URL:
https://qiita.com/tehito/items/356e5f1dba112a075be1

分類:

- Reference Sites / AI Coding Operations

概要:

- Claude Code を効率よく使うための運用記事。
- 巨大な `CLAUDE.md`、全部盛り MCP、長時間同一セッション、実装途中 compact などを避けるべき運用ミスとして整理している。
- 長期文脈は会話ではなくファイルに永続化し、作業単位ごとに計画・分割する考え方の参考。

用途:

- Codex / Claude Code 運用改善
- `PROJECT_START.md` 改善
- `AGENTS.md` 改善
- `LESSONS_LEARNED.md` 改善
- AI 作業分割ルールの参考

状態:

- 参考資料

優先度:

- ★★★★☆

メモ:

- 長期文脈は会話ではなくファイルへ永続化する。
- 大きな作業は `PLAN.md` に分解してから進める。
- タスクが変わったらセッションを分ける。
- 実装途中の compact / 圧縮は避け、区切りで行う。

⸻

### The Hitchhiker's Guide to Agentic AI

URL:

- https://arxiv.org/abs/2606.24937
- https://arxiv.org/pdf/2606.24937

分類:

- Reference Sites
- Agent / Orchestration
- Knowledge Management
- AI Coding Operations
- Research

概要:

- Haggai Roitman による Agentic AI の大型リファレンス。
- arXiv:2606.24937v1、2026-06-22 submitted、PDF は 603 pages、Version 1.2.2。
- LLM 基礎、GPU / 分散学習、RLHF / DPO / GRPO、reasoning、評価、RAG、memory、MCP、A2A、multi-agent、agent UI、production deployment までを扱う。
- Agentic AI を、観測、推論、tool use、外部 action、反復、human oversight を含む production system として整理している。

用途:

- AI Workspace 設計
- agent orchestration 研究
- RAG / memory / MCP / A2A の体系理解
- ai-shared-memory の設計改善
- agent evaluation / safety / observability の参考

関連:

- OpenFugu
- Headroom
- agency-agents
- Oracle
- Memory Consolidation / Dream Review
- `NOTES/AI_Coding_Patterns.md`

状態:

- 参考資料

優先度:

- ★★★★★

メモ:

- 全文通読より、Part V Agentic AI、quick reference、failure modes、future directions を優先確認する。
- multimodal や domain-specific deployment は主対象外として扱う。

⸻

### Memory Consolidation / Dream Review

URL:

- https://platform.claude.com/docs/en/managed-agents/dreams
- https://github.com/grandamenium/dream-skill
- https://arxiv.org/abs/2605.20616

分類:

- AI Coding Operations
- Knowledge Management
- Agent Memory

概要:

- AI 共有メモリに蓄積した情報を、定期的に重複排除、矛盾解消、陳腐化除去、索引更新する運用パターン。
- Anthropic Dreams の「入力を変更せず、出力を別 memory store として生成し、レビュー後に採用する」考え方を、git ベースの `ai-shared-memory` に手動適用する。
- `grandamenium/dream-skill` は Claude Code 向けに 4-phase consolidation を skill 化した参考実装。
- Auto-Dreamer は、セッションごとの記録を小さく再利用可能な記憶へオフライン統合する研究。

用途:

- `INBOX.md` / `AI_DRAWERS.md` / `NOTES/` / `PROJECTS/` が肥大化したときの棚卸し
- 相対日付、古い手順、重複リンク、矛盾した判断の整理
- 会話ログ由来の一時メモを、再利用可能な知識へ圧縮する
- `AI_INDEX.md` と `REVIEW.md` の更新

関連:

- `NOTES/AI_Coding_Patterns.md`
- `REVIEW.md`
- `LESSONS_LEARNED.md`
- `AI_INDEX.md`

状態:

- 採用候補

優先度:

- ★★★★★

メモ:

- 自動実行ではなく、レビュー前提の手動運用として扱う。
- 入力非破壊、論理単位ごとの小さな差分、ユーザーレビュー後の採用を原則にする。
- hallucination 混入を避けるため、統合結果は既存ファイル、リンク、日付、現在の repo 状態で検証する。

⸻

## Ideas

### Amazon セール検知システム

URL:
未設定

概要:

- Amazon の欲しい物リストや指定カテゴリを定期巡回し、価格下落・ポイント還元・タイムセールを自動検知するダッシュボード案。

用途:

- セール監視
- 値下げ通知
- ポイント還元率表示
- 価格推移可視化

機能案:

- お気に入り商品の監視
- 値下げ通知
- ポイント還元率表示
- Keepa 連携
- Discord 通知
- LINE 通知
- メール通知
- 価格推移グラフ
- カテゴリ別フィルター

利用技術:

- Amazon Creators API
- Codex
- Python
- Next.js
- SQLite / PostgreSQL

状態:

- 開発アイデア

優先度:

- ★★★★★

⸻

## 横断グループ

### AI Companion / AIRI

- Whisper
- Humation
- Humation Swift
- Anime2.5DRig
- see-through
- tomari-guruguru
- VoxCPM
- VTuber体験場
- OpenCut
- VCamdroid

用途:

- AI コンパニオン、音声認識、音声表現、表情・アバター表現、2.5D アバター素材化、カメラ入力、配信・動画導線。

### Agent / Orchestration

- MiMo-Code
- Headroom
- OpenFugu
- AI-Safeter / FUGU
- agency-agents
- Hermes Agent
- The Hitchhiker's Guide to Agentic AI

用途:

- 複数 AI 協調、AI エージェント、長期記憶、ルーティング最適化、専門エージェント役割設計、自己改善型 agent runtime。

### AI Coding Operations

- Ponytail
- deepsec
- agency-agents
- Hermes Agent
- anthropics/skills
- Oracle
- pxpipe
- PixelRAG
- reviewable-html-workbench
- claude-real-video
- Claude Code運用ミス7選
- Memory Consolidation / Dream Review
- japanese-tech-writing / k16shikano gist
- The Hitchhiker's Guide to Agentic AI

用途:

- AI コーディング運用改善、専門エージェント役割設計、multi-model review、reviewable HTML artifact、video-to-LLM preprocessing、Japanese technical writing skill、agentic system reference、skill routing、token optimization、context compression、screenshot-based browsing、最小実装、長期文脈管理、作業分割、セキュリティレビュー、記憶整理。

### Document Automation

- PPT Master
- OUTPUTS
- reviewable-html-workbench
- Stirling PDF
- kurashino-daicho
- Paperless-ngx
- ONLYOFFICE Docs

用途:

- Markdown / PDF / DOCX から編集可能な成果物を生成し、repo 内の原本と人間向け出力を分離する。台帳、PDF、CSV、OCR、印刷出力、文書アーカイブ付き local-first / self-hosted アプリの設計参考も含む。

### Knowledge Management

- Open Notebook
- Excalidraw
- Calibre
- Anki
- Zotero
- Paperless-ngx
- AppFlowy
- Google OKF
- AI_INDEX
- PROJECT_START
- CURRENT
- STATUS
- Memory Consolidation / Dream Review
- The Hitchhiker's Guide to Agentic AI
- Hermes Agent
- PixelRAG
- japanese-tech-writing / k16shikano gist
- claude-real-video

用途:

- AI が読みやすい共有知識ベース、メタデータ、LLM Wiki、ナレッジ検索、visual retrieval、動画由来知識のノート化、学習・研究資料整理、日本語技術文書の品質改善、定期的な記憶統合、agent memory / skill memory の接続設計。

### Creative Pipeline

- Excalidraw
- Recordly
- PhotoGIMP
- OpenCut
- yt-dlp
- Whisper
- Buzz
- Anime2.5DRig
- see-through
- tomari-guruguru
- HyperFrames
- claude-real-video
- MoneyPrinterTurbo
- VoxCPM
- VCamdroid

用途:

- 図解、画像編集、画面録画、動画取得、音声抽出、文字起こし、動画解析、動画編集、動画生成、音声生成、2.5D アバター、レイヤー分解、仮想 Web カメラ。

### Learning / Research Workflow

- Open Notebook
- Zotero
- Paperless-ngx
- Calibre
- Anki
- Excalidraw
- Buzz

用途:

- 学習、研究、文献管理、教材管理、間隔反復、オフライン文字起こし、図解作成を組み合わせた個人知識基盤。

### AI Workspace / Integrations

- LibreChat
- Agentic Inbox
- Nango
- agency-agents
- Hermes Agent
- awesome-free-llm-apis
- Open Notebook
- AppFlowy
- Odysseus

用途:

- 複数 AI UI、AI メール、外部 API 連携、LLM provider / fallback 調査、AI notebook / workspace、専門エージェント役割設計、messaging gateway、scheduled automation。

### Self Host / Tools

- Homepage
- LibreChat
- Immich
- n8n
- Stirling PDF
- AppFlowy
- Paperless-ngx
- ONLYOFFICE Docs
- Odysseus
- Nango

用途:

- 自宅サーバー、ローカルサービス、文書管理、AI workspace、外部 API 統合の self-host 候補。

### Finance / Investigation

- TradingAgents
- Fincept Terminal
- Flowsint

用途:

- 金融 multi-agent、金融分析 terminal、OSINT / graph investigation の研究候補。

### Amazon Sale Monitoring

- Amazon Creators API SDK
- Amazon セール検知システム

用途:

- 商品情報取得、価格監視、セール通知、アフィリエイト支援。

### Infinite World Generation

- Terrain Diffusion
- InfiniteDiffusion

用途:

- 無限ワールド生成、プロシージャル生成、Minecraft Mod、ゲーム開発研究。

⸻

## 優先順位

### 最優先研究対象

- Terrain Diffusion
- InfiniteDiffusion
- see-through

### 導入推奨

- Excalidraw
- Calibre
- Anki
- Zotero
- LocalSend
- Whisper
- Stirling PDF

### 導入検討

- Ponytail
- deepsec
- agency-agents
- Hermes Agent
- TradingAgents
- Agentic Inbox
- VoxCPM
- Oracle
- Open Notebook
- Buzz
- Paperless-ngx

### 次に試す

- Homepage
- n8n
- OpenCut
- PPT Master
- reviewable-html-workbench
- claude-real-video
- Recordly

### 将来導入

- Immich
- AppFlowy
- LibreChat
- Nango

### 将来候補

- Firecrawl
- Humation Swift
- ONLYOFFICE Docs

### 必要時利用

- yt-dlp
- PhotoGIMP

### 保留

- Reactive Resume
- Fincept Terminal
- MoneyPrinterTurbo
- Flowsint
- anthropics/skills

### 参考資料

- japanese-tech-writing / k16shikano gist
- VTuber体験場
- Claude Code運用ミス7選
- Memory Consolidation / Dream Review
- The Hitchhiker's Guide to Agentic AI
- Hermes Agent
- pxpipe
- PixelRAG
- awesome-free-llm-apis
- Open Notebook

### 研究対象

- DESIGN.md
- Google OKF
- Greenlight
- MiMo-Code
- Apple Container
- Headroom
- open-genai
- CuPy
- SciRS2
- Susono Model
- OpenFugu
- AI-Safeter / FUGU
- Amazon Creators API SDK
- Humation
- kurashino-daicho
- Odysseus
- VCamdroid
- Anime2.5DRig
- tomari-guruguru

### 開発アイデア

- Amazon セール検知システム

⸻

## AIへの指示

このファイルを読んだ AI は以下を理解すること。

- ユーザーは新しい OSS や AI 技術を継続収集している。
- 導入候補、研究対象、開発アイデアを区別する。
- 新しい GitHub リンクが提示された場合は適切なカテゴリへ分類する。
- 単体カテゴリだけでなく `横断グループ` も確認する。
- 類似ツールがあれば比較候補として提案する。
- 重複ツールは整理対象として指摘する。
- 不確かな分類は `INBOX.md` に置く。
