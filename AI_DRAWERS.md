# AI_DRAWERS.md

最終更新: 2026-07-02

このファイルは ChatGPT・Codex・Claude・Gemini 等へ共有する技術レーダー兼ナレッジ保管庫です。

## 目的

- OSS、AI 技術、開発ツール、研究対象、個人開発アイデアを分類する。
- 新しい GitHub リンクや公開論文を、複数 AI が再利用できる形で残す。
- 導入候補、研究対象、アイデアを混同しない。

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

- 未設定

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

- 未設定

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

- 未設定

⸻

## Agent / Orchestration

AI エージェント、長期記憶、複数 LLM 協調、ルーティング、オーケストレーター系をまとめる。

関連グループ:

- MiMo-Code / Headroom / OpenFugu / AI-Safeter FUGU は「AIを管理するAI」の研究候補。
- OpenFugu は実装・統合寄り、AI-Safeter FUGU は最適化手法寄り、Headroom は記憶・コンテキスト管理寄り。

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

- 未設定

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

- 未設定

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

- 未設定

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

- 未設定

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

- 未設定

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

- 未設定

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

- 未設定

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

### HyperFrames

URL:
https://github.com/heygen-com/hyperframes

分類:

- Creative
- Video
- Agent Tooling

概要:

- HeyGen のオープンソース動画生成エンジン。
- HTML を書いて video を render する、agent 向け動画生成 workflow の研究候補。

用途:

- AI video generation
- HTML to video
- agent-driven creative workflow
- OpenCut / PPT Master / OUTPUTS との比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 実運用より先に、生成品質、依存関係、ローカル実行性、ライセンス境界を確認する。

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

- 未設定

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

- 未設定

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

- 未設定

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

- 未設定

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

- 未設定

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

状態:

- 導入推奨

優先度:

- 未設定

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

- Notion 代替候補。

用途:

- Notion 代替
- ローカル管理

状態:

- 将来導入

優先度:

- 未設定

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

### tomari-guruguru

URL:
https://github.com/rotejin/tomari-guruguru

概要:

- 内容確認待ちの調査候補。

用途:

- 未整理

状態:

- 調査保留

優先度:

- 未設定

⸻

### reviewable-html-workbench

URL:
https://github.com/u-ichi/reviewable-html-workbench

概要:

- HTML レビュー支援候補。

用途:

- HTML レビュー支援

状態:

- 調査保留

優先度:

- 未設定

⸻

### k16shikano gist

URL:
https://gist.github.com/k16shikano/fd287c3133457c4fd8f5601d34aa817d

概要:

- 内容確認待ちの gist。

用途:

- 未整理

状態:

- 内容確認待ち

優先度:

- 未設定

⸻

## Reference Sites

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
- VoxCPM
- VTuber体験場
- OpenCut

用途:

- AI コンパニオン、音声認識、音声表現、表情・アバター表現、配信・動画導線。

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
- Claude Code運用ミス7選
- Memory Consolidation / Dream Review
- The Hitchhiker's Guide to Agentic AI

用途:

- AI コーディング運用改善、専門エージェント役割設計、multi-model review、agentic system reference、skill routing、最小実装、長期文脈管理、作業分割、セキュリティレビュー、記憶整理。

### Document Automation

- PPT Master
- OUTPUTS
- Stirling PDF
- kurashino-daicho

用途:

- Markdown / PDF / DOCX から編集可能な成果物を生成し、repo 内の原本と人間向け出力を分離する。台帳、PDF、CSV、印刷出力付き local-first アプリの設計参考も含む。

### Knowledge Management

- Google OKF
- AI_INDEX
- PROJECT_START
- CURRENT
- STATUS
- Memory Consolidation / Dream Review
- The Hitchhiker's Guide to Agentic AI
- Hermes Agent

用途:

- AI が読みやすい共有知識ベース、メタデータ、LLM Wiki、ナレッジ検索、定期的な記憶統合、agent memory / skill memory の接続設計。

### Creative Pipeline

- OpenCut
- yt-dlp
- Whisper
- HyperFrames
- MoneyPrinterTurbo
- VoxCPM

用途:

- 動画取得、音声抽出、文字起こし、動画編集、動画生成、音声生成。

### AI Workspace / Integrations

- LibreChat
- Agentic Inbox
- Nango
- agency-agents
- Hermes Agent

用途:

- 複数 AI UI、AI メール、外部 API 連携、専門エージェント役割設計、messaging gateway、scheduled automation。

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

### 導入推奨

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

### 次に試す

- Homepage
- n8n
- OpenCut
- PPT Master

### 将来導入

- Immich
- AppFlowy
- LibreChat
- Nango

### 将来候補

- Firecrawl
- Humation Swift

### 必要時利用

- yt-dlp

### 保留

- Reactive Resume
- Fincept Terminal
- MoneyPrinterTurbo
- Flowsint
- anthropics/skills

### 調査保留・内容確認待ち

- tomari-guruguru
- reviewable-html-workbench
- k16shikano gist

### 参考資料

- VTuber体験場
- Claude Code運用ミス7選
- Memory Consolidation / Dream Review
- The Hitchhiker's Guide to Agentic AI
- Hermes Agent

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
