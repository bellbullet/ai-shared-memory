# AI_DRAWERS.md

最終更新: 2026-07-31

このファイルは ChatGPT・Codex・Claude・Gemini 等へ共有する技術レーダー兼ナレッジ保管庫です。

## 目的

- OSS、AI 技術、開発ツール、研究対象、個人開発アイデアを分類する。
- 新しい GitHub リンクや公開論文を、複数 AI が再利用できる形で残す。
- 導入候補、研究対象、アイデアを混同しない。

## v1.1 Snapshot

- 登録項目: 147
- 主カテゴリ: 11
- 横断グループ: 12
- 管理方式: 後方互換性を保つため、v1.1 では単一ファイルを維持する。
- 重点領域: Agent / Orchestration、AI Coding Operations、Knowledge Management、Creative Pipeline、Self Host / Tools。
- 最近の追加: X投稿の候補を一次情報で再評価し、code-review-graph、mattpocock/skills、音声・配信・3D・動画系8件を用途と安全条件つきで統合した。star増加数、未検証の金融主張、高リスク用途は採用根拠にしなかった。
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

### speech-to-speech

URL:
https://github.com/huggingface/speech-to-speech

分類:

- AI
- Local Voice Agent
- Realtime Speech
- AI Companion / AIRI
- Modular Pipeline

概要:

- Hugging Faceが公開する、VAD、STT、LLM、TTSを交換可能な部品として接続するリアルタイム音声対話フレームワーク。
- Silero VAD、Whisper系STT、llama.cppによるlocal LLM、Qwen3-TTSなどを組み合わせられる。
- 特定のキャラクター用途に限定されたアプリではなく、音声エージェントを構成・比較するための汎用基盤。

用途:

- AIRI / AI companionのlocal voice loop研究
- VAD、STT、LLM、TTSの役割分離と差し替え
- OpenLive、Whisper、VoxCPM、VOICEVOXとの比較
- local-firstなリアルタイム音声会話

状態:

- 研究対象

優先度:

- ★★★★★

License:

- Apache-2.0

メモ:

- X投稿で紹介された「4モデルが15GB VRAMに収まる」「即時hot swap」という構成固有の値は、公式READMEでは確認できない。model、量子化、backend、同時常駐条件を固定して実測する。
- Windows、AMD Radeon / ROCm、CPU fallback、正確な遅延とVRAM使用量は導入前に確認する。
- マイク音声、会話内容、話者情報、model providerへの送信範囲を確認し、実データを公開メモリへ保存しない。

⸻

## Agent / Orchestration

AI エージェント、長期記憶、複数 LLM 協調、ルーティング、オーケストレーター系をまとめる。

### Orca

URL:
https://github.com/stablyai/orca

分類:

- Agent / Orchestration
- AI Coding Operations
- Parallel Worktree
- Mobile Companion

概要:

- Codex、Claude Codeなどターミナルで動くコーディングエージェントを、独立したGit worktreeで並列実行・比較・レビューするデスクトップ環境。
- Windows、macOS、Linuxに対応し、モバイル companionから進捗確認、完了通知、追加指示を行える。
- worktree、Diff注釈、組み込みブラウザのDesign Mode、SSH worktreeを一つの作業面にまとめる。

用途:

- 同一タスクを複数エージェントへ分けた実装・レビュー比較
- 長時間のコーディング作業をiPhoneから監督
- worktreeを使った変更の隔離と採用案の選別
- PocketTableなどGit管理済みプロジェクトの並列検証

関連:

- agmsg
- Tutti
- Backlog.md
- Codex
- Claude Code
- AI Coding Operations

状態:

- 導入検討

優先度:

- ★★★★☆

メモ:

- ChatGPT内のCodex会話を引き継ぐものではなく、PC上で別途起動するCLIエージェントを管理する環境として扱う。
- 最初は公開リポジトリのcloneで、worktree分離・モバイル通知・Diffレビューだけを確認する。private project、認証情報、外部接続権限は初回試用へ含めない。
- MIT License。モバイル連携、利用量表示、Computer Useを使う場合は送信範囲とテレメトリ設定を確認する。

⸻
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

### Kura

URL:
https://github.com/nomadoor/Kura

Guide:
https://comfyui.nomadoor.net/ja/notes/kura-krea2-lora-training/

分類:

- Agent / Orchestration
- Creative / LoRA Training
- File-First Experiment Workspace
- Human Approval / Reproducibility

概要:

- AI agentが操作するLoRA学習・画像比較のexperiment workspace。trainer本体ではなく、AI-ToolkitとMusubi Tunerを束ねる薄い管理層。
- dataset、`run.yaml`、固定した実行plan、artifact、比較画像、人間の評価を通常ファイルへ残し、学習条件と判断を次回の実験へ再利用する。
- local DockerまたはRunPodで学習し、ComfyUIでcheckpoint比較をrenderできる。実行前にagentが前提、resource、trade-offをplanとして提示し、人間の明示承認後に実行する。

用途:

- LoRA学習の再現可能な実験管理
- agent提案とhuman approvalを分離したGPU job運用
- checkpoint / prompt比較とundertraining・overtraining判定
- `loopeng-bootstrap`、`halo-record`、`TRIALS.md`との実験監査設計比較

状態:

- 研究対象

優先度:

- ★★★★★

License:

- Kura source: MIT

メモ:

- 2026-07-18公開の初期release `0.1.0`。設計は有用だが、backend更新への追従、失敗回復、Windowsでの実運用安定性は未検証。
- Kura自身はMITだが、backend、base model、LoRA、dataset、生成assetのlicenseは別に確認する。記事のKrea 2例では、codeはApache-2.0、weightはKrea 2 Community Licenseであり、同一条件ではない。
- Krea 2 Community Licenseは、商用利用を全社年商100万USD未満に限定し、それ以上はenterprise licenseを要求する。派生model配布時の名称・notice・license継承と、deployment時の適切なcontent filteringも条件になる。
- local実行はDocker、NVIDIA GPU、任意code・shell、model download、大容量storage、ComfyUI directoryへのfile操作を伴う。remote実行はRunPod API key、GPU課金、dataset upload、pod停止・lease管理を伴う。
- `.env.local`のRunPod / Hugging Face tokenを公開repoへ入れない。monitorはread-onlyとし、agentの開始・停止・設定変更権限と分離する。
- `halo-record`は改ざん検知可能な証跡、`loopeng-bootstrap`は汎用agentの実行・受入ループ、KuraはGPU学習experimentのplan・artifact・人間評価をfile-firstで束ねる役割。

Official Links:

- Krea 2 source: https://github.com/krea-ai/krea-2
- Krea 2 Raw model card: https://huggingface.co/krea/Krea-2-Raw
- Krea 2 license: https://www.krea.ai/krea-2-licensing

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

### Yorishiro

URL:
https://github.com/sktkkoo/Yorishiro

分類:

- Agent / Orchestration
- AI Coding
- AI Companion / AIRI
- VRM
- Presence Harness

概要:

- Claude CodeやCodexなどのAI coding agentへ、VRM characterが暮らす視覚的な空間とterminalを与えるdesktop application。
- AIを単なるchat paneではなく、身体と居場所を持つ存在として見せる`Presence Harness`の設計例。
- Claude Codeを主対象とし、Codex integrationはexperimentalとして案内されている。

用途:

- AI companionとcoding agentの統合研究
- AIRI、Codex pet、VRM terminalの比較
- task stateやagent activityの視覚表現
- presence、character、workspaceを接続するUI研究

状態:

- 次に試す

優先度:

- ★★★★★

License:

- MIT（source code）

メモ:

- 現在はmacOS向け。Windowsはruntimeが不安定として非対応、Linux版も案内されていないため、現在のWindows workspaceでは対応状況を監視する。
- repositoryのMIT licenseとは別に、Yorishiroの名称とlogoにはtrademark上の制約がある。
- Codex support、session data、terminal command、file accessの権限境界を確認してから試す。

⸻

### OmniRoute

URL:
https://github.com/diegosouzapw/OmniRoute

分類:

- Agent / Orchestration
- AI Coding Operations
- LLM Gateway
- Context Compression
- MCP / A2A

概要:

- 複数のLLM providerとmodelを一つのendpointへ集約する、MIT LicenseのAI gateway。
- quota-aware fallback、Claude Code / Codex等のcoding agent連携、MCP / A2A、token・context compressionを提供する。

用途:

- 複数providerの切り替えとfallbackの研究
- Claude Code / Codexのprovider routing比較
- token消費とcontext compressionの試用
- MCP / A2Aを含むAI gateway設計の参照

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- providerのAPI key、prompt、ログ、外部送信先を導入前に確認する。
- 公式READMEのprovider数、model数、削減率は更新され得るため、固定値として扱わない。
- 無料枠やfallbackがあっても、利用規約、データ保持、課金境界をproviderごとに確認する。

⸻

### pi

URL:
https://github.com/earendil-works/pi

分類:

- Agent / Orchestration
- AI Coding Operations
- Multi-provider LLM
- CLI / TUI

概要:

- unified LLM API、agent loop、tool calling、state management、TUI、coding agent CLIをまとめたMIT Licenseのagent toolkit。
- `pi-ai`、`pi-agent-core`、`pi-coding-agent`などのパッケージに分かれ、複数providerを使うagent runtimeの構成を参照できる。

用途:

- Codex / Claude Codeと異なるagent runtimeの比較
- multi-provider LLM APIとagent loopの研究
- 自分用coding agent CLIを組み立てる場合の部品調査
- TUIとtool callingを含むローカルagent設計の参照

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 既存のCodex運用を置き換える前に、agent loop、state、tool権限、provider設定を個別に比較する。
- API key、会話履歴、source codeの外部送信条件は実行前に確認する。

⸻

### AstrBot

URL:
https://github.com/AstrBotDevs/AstrBot

分類:

- Agent / Orchestration
- Self Host
- AI Workspace / Integrations
- Messaging / Chatbot
- Knowledge Management

概要:

- 複数のIM platform、LLM、plugin、MCP、Skills、knowledge base、WebUIを統合するAI agent assistant / development framework。
- agent sandbox、context compression、self-hosted model service連携を含む、会話入口とagent実行基盤の統合例。

用途:

- AI companion / chatbotのself-host構成研究
- Telegram、Slack、Discordなどのメッセージ入口とagentの接続比較
- plugin、MCP、knowledge base、sandboxの統合設計調査
- AI Workspace PortalやAIRIの将来連携候補

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- AGPL-3.0

メモ:

- plugin、shell、sandbox、WebUI、各messaging platformのcredential境界を導入前に監査する。
- private message、個人情報、API key、token、会話ログを公開メモリへ保存しない。
- AGPL-3.0と外部plugin・model・platformのライセンスを分けて確認する。

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

### Inkling

Category:

- LLM

Tags:

- Thinking Machines Lab
- Mira Murati
- Open-weight LLM
- Mixture-of-Experts
- Multimodal
- Reasoning effort
- Agentic coding

Official Links:

- Announcement: https://thinkingmachines.ai/news/introducing-inkling/
- Model card: https://thinkingmachines.ai/model-card/inkling/
- Hugging Face weights: https://huggingface.co/thinkingmachines/Inkling
- Model Acceptable Use Policy: https://thinkingmachines.ai/model-acceptable-use-policy/

License:

- Apache-2.0. The official Model Acceptable Use Policy also applies to access and use of the model materials.

概要:

- Thinking Machines Lab, Inc. が2026-07-15に公開した汎用マルチモーダル・オープンウェイトモデル。Thinking Machines Labの共同創業者兼CEOであるMira Murati氏は、OpenAIの元CTO。
- 975B total / 41B active parameters のsparse MoE decoder-only transformer。各tokenは256 expert中6 expertと、常時有効な2 shared expertsへroutingされる。
- 入力はtext、image、audio、出力はtext。最大context lengthは1M tokens。

effort:

- 推論時のthinking effortを制御し、性能とtoken efficiencyのバランスを調整できる。公式ベンチマーク表はeffort=0.99で報告されている。

公式ベンチマーク（公開時点）:

- HLE text only: 29.7%
- SWE-bench Verified: 77.6%
- Terminal Bench 2.1 (best harness): 63.8%
- IFBench: 79.8%
- ForecastBench Brier Index: searchなし 61.1 +/- 0.79、searchあり 63.7 +/- 0.82。ForecastBenchの結果は2026-06-30から2026-07-13に、公開checkpointとは異なるcheckpointで得たものと公式が注記している。

用途:

- オープンウェイトLLM、MoE、長context、multimodal reasoningの研究
- agentic / tool-use systems、coding assistant、chatbot、RAG applicationの基盤候補
- Tinkerまたは第三者inference providerを介したfine-tuning / inferenceの検討

強み:

- text、image、audioをnativeに扱う汎用モデルとして公開され、open weightsによるresearch、fine-tuning、third-party integrationを想定している。
- controllable thinking effortとMoEにより、taskごとの性能、token使用量、latencyの調整を狙う設計。

制約:

- foundation modelとしてhallucination、instruction-following failure、長いmulti-turn conversationでの性能低下、training data由来のbiasがあり得るとモデルカードに記載されている。
- 高リスク用途ではhuman oversight、用途別評価、application layerのsafeguardsが必要。公開ウェイトであってもModel Acceptable Use Policyを確認する。

ローカル実行:

- BF16 checkpointは最低2TB、NVFP4 checkpointは最低600GBのaggregate VRAMを公式が要件としている。単一GPU向けモデルではなく、対応GPU clusterとSGLang、vLLM、TokenSpeed、Unsloth、Hugging Faceなどのinference frameworkが必要。
- 対応GPU、quantization、runtime、OSの互換性はリリース後も変化し得るため、導入前に公式model cardと各runtimeの最新documentationを確認する。

Inkling-Small:

- 276B total / 12B active parametersのMoEモデルをpreviewとして同時公開。公式発表時点ではtesting中で、full weightsはtesting完了後に公開予定とされている。

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- 公開時点の仕様、ベンチマーク、提供形態を記録した参照項目。モデル、checkpoint、runtime、third-party availabilityは変更されるため、利用時は公式情報を再確認する。
- 比較候補: DeepSeek、Qwen、Gemma、Llama、Nemotron。
- 今後確認: Inkling-Smallのfull weights公開、GGUF、Ollama、LM Studio、MLXの対応状況、およびvLLMを含む各runtimeの対応バージョンと実行要件。

⸻

### ktransformers

URL:
https://github.com/kvcache-ai/ktransformers

分類:

- LLM
- Local AI
- GPU / HPC
- CPU-GPU Heterogeneous Computing
- Research

概要:

- CPUとGPUのheterogeneous computingを使い、大規模LLMのinferenceとfine-tuningを効率化する研究プロジェクト。
- `kt-kernel`を基盤に、inferenceとSFTの利用経路を提供するApache-2.0 Licenseの実装。

用途:

- consumer hardwareでの大規模LLM実行研究
- VRAMとsystem memoryを組み合わせたinference設計の比較
- DeepSeek、Qwenなどの大規模model向けruntime調査
- local LLM / edge AIの性能評価候補

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- 対応GPU、CUDA、driver、PyTorch、modelごとの要件を公式documentationで確認する。
- AMD / ROCmや現在のWindows環境でそのまま動くとは仮定しない。
- model weights、quantization、datasetのlicenseと、実行時に必要な外部downloadを分けて確認する。

⸻

### Gemma 4

Category:

- LLM
- Local AI
- Edge AI
- Multimodal

Tags:

- Google DeepMind
- Open-weight LLM
- Mixture-of-Experts
- On-device AI
- Function calling
- Structured JSON
- Vision
- Audio

Official Links:

- Announcement: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/
- Model card: https://ai.google.dev/gemma/docs/core/model_card_4
- Hugging Face models: https://huggingface.co/google

License:

- Apache-2.0。モデル、量子化物、派生物を利用する場合も、取得元のmodel cardと配布条件を個別に確認する。

概要:

- Google DeepMindが2026-04-02に公開したオープンモデル群。現行model cardではE2B、E4B、12B Unified、26B A4B MoE、31B Denseの5サイズで、reasoning、agentic workflow、function calling、structured JSON、system instructionを想定する。
- 全モデルが画像と動画を扱い、E2B / E4B / 12B Unifiedは音声入力にも対応する。edge modelは128K、larger modelは最大256K context、140以上の言語で事前学習されている。

用途:

- オフラインのlocal AI assistant、coding assistant、RAG、tool-use agentの基盤候補
- Android、Raspberry Pi、Jetson Orin Nanoなどのedge multimodal研究
- LiteRT-LM、Transformers、llama.cpp、MLX、Ollama、vLLMなどのruntime比較

制約:

- model weightsと量子化物のdownloadが必要。runtime、quantization、対応hardware、実測RAM / VRAMは配布形式ごとに確認する。
- Googleのlaunch blogでは、26B / 31Bの非量子化BF16は単一80GB H100を想定し、consumer GPUでは量子化版を使う。E2B / E4Bはedge向けだが、端末別性能を保証する記述ではない。
- 公開ベンチマークは用途別の品質、安全性、言語性能を保証しないため、採用前に対象taskと日本語で評価する。

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- LiteRT.jsはbrowser実行runtime、onnx2tfはmodel変換、Gemma 4は実行対象となるmodel familyという役割差で整理する。
- E2B / E4BをAIRIや端末内multimodal assistantへ接続する場合は、音声・画像のlocal処理範囲とfallback時の外部送信を分離して評価する。

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

### code-review-graph

URL:
https://github.com/tirth8205/code-review-graph

分類:

- Development
- Code Intelligence
- MCP
- Static Analysis
- Local First

概要:

- Tree-sitterでcodebaseを解析し、function、class、import、call関係などの永続graphをlocalに構築するMIT licenseのcode intelligence tool。
- MCP、CLI、GitHub Actionから変更の影響範囲、関連test、review対象を絞り、AI agentへ必要なcontextを渡すことを目的とする。
- 公式benchmarkは、単純な全corpus比較と現実的なgrep baselineを区別し、小さな変更ではgraph responseの方が大きくなる場合や、impact評価の循環性も明記している。

用途:

- 大規模・複数言語repositoryでの変更影響調査
- AI code reviewへ渡すcontextの絞り込み
- PRのrisk、関連function、test gapの補助確認
- ScreenshotStitcherなどcode主体projectでの小規模trial

状態:

- 有望・実試用候補

優先度:

- ★★★★★

注意:

- graph構築とqueryはlocal-firstだが、MCP clientが外部LLMを使う場合、取得されたsource contextはmodel providerへ送信され得る。「local-first」をcode全体の外部送信禁止と同義にしない。
- benchmarkの削減率を固定値として転用せず、対象repository、query、変更規模、grep / `rg` baselineと比較する。
- 初回trialは機密性のないcode主体repositoryで行い、生成cache、index保存場所、MCP権限、CI comment権限、更新時のdependency差分を確認する。

関連:

- `TRIALS.md` — 実際に試した時点でtoken量、検索精度、false positive、index時間を記録する。
- `PROJECTS/ScreenshotStitcher.md`
- `SKILLS/Research.md`

⸻

### mattpocock/skills

URL:
https://github.com/mattpocock/skills

分類:

- Development
- Agent Skills
- AI Coding Operations
- TDD
- Code Review

概要:

- 要件の聞き取り、domain modeling、仕様化、ticket分割、TDD、bug診断、code review、handoffなどを、小さく組み合わせ可能なagent skillとして公開するMIT licenseのcollection。
- Claude Code pluginとしてbundle購読する方法と、skills.sh経由でprojectへcopyして編集する方法がある。CodexなどAgent Skills互換環境にも対応する。
- process全体をframeworkへ明け渡すより、必要なengineering disciplineをskill単位で組み合わせる設計を重視する。

用途:

- `grill-with-docs`の要件・用語・ADR整理pattern研究
- `diagnosing-bugs`と`code-review`の検証loop比較
- `tdd`、`to-spec`、`handoff`の既存workspace運用への部分統合
- AI agent向けskill設計と呼び出し境界の参考資料

状態:

- 有望・選別採用

優先度:

- ★★★★★

注意:

- collection全体を自動installせず、採用候補の`SKILL.md`、script、tool呼び出し、外部service、file変更範囲を個別にreviewする。
- managed pluginは作者の更新へ追従するため、再現性が必要なprojectでは確認済みcommitを固定し、必要なskillだけをrepository内へ取り込む。
- 既存の`AGENTS.md`、`SKILLS/Git.md`、`SKILLS/Research.md`、Codex built-in skillと責務・命令が競合しないか比較する。
- skillの説明は品質保証ではない。実projectでacceptance criteria、test、diff reviewを通し、成果物を検証する。

関連:

- `SKILLS/README.md`
- `SKILLS/Git.md`
- `SKILLS/Research.md`
- `TRIALS.md` — 個別skillを実際に試した時点で再利用判断を記録する。

⸻

### Have I Been Pwned

URL:
https://haveibeenpwned.com/

分類:

- Development
- Security
- Reference Service

概要:

- メールアドレスが既知のデータ侵害に含まれるかを確認し、新しい侵害の通知を受け取れるサービス。
- Pwned Passwordsは、パスワード全体や完全なhashを送らず、SHA-1 hashの先頭5文字だけを照合するk-anonymity方式を提供する。

用途:

- 公開済み侵害データへの露出確認
- パスワード再利用リスクの確認
- 認証機能でのPwned Passwords API活用調査

状態:

- 有望・必要時利用

優先度:

- ★★★★★

注意:

- 「現在hackされているか」を診断するサービスではなく、既知の侵害データに含まれるかを確認するもの。
- パスワードはWeb検索欄へ直接入力せず、公式のPwned Passwords方式と利用手順を確認する。

⸻

### VirusTotal

URL:
https://www.virustotal.com/

分類:

- Development
- Security
- Malware Analysis

概要:

- file、URL、domain、IP address、file hashを複数のsecurity engineと関連情報で調査するサービス。
- hashや公開URLの評判確認、疑わしい公開sampleの初期triageに利用できる。

用途:

- file hashとURLの初期調査
- malware検知結果の横断確認
- security incidentの補助情報収集

状態:

- 条件付き採用

優先度:

- ★★★★☆

注意:

- 通常の公開scanへ機密file、未公開code、顧客data、個人情報をuploadしない。Private Scanningは別機能・別条件。
- 単一engineの判定や検知数だけで安全・危険を断定せず、source、signature、挙動を追加確認する。

⸻

### regex101

URL:
https://regex101.com/

分類:

- Development
- Regular Expressions
- Debugging

概要:

- 複数のregex flavorに対応し、match結果、capture group、説明、performance情報を対話的に確認できるdebugger。

用途:

- regular expressionの作成と検証
- test caseの共有
- flavor差とbacktrackingの調査

状態:

- 注意付き・必要時利用

優先度:

- ★★★☆☆

注意:

- access token、password、個人情報、非公開logなどをsample textへ貼り付けない。
- 保存・共有linkを作る場合は、test dataが公開可能なdummy dataだけであることを確認する。

⸻

### ExplainShell

URL:
https://explainshell.com/

Source:
https://github.com/idank/explainshell

分類:

- Development
- Shell
- Reference Service

概要:

- shell commandを解析し、対応するman pageの説明をargument単位で表示するGPL-3.0のWeb service。

用途:

- 未知のshell commandとoptionの初期理解
- man pageを読む入口
- command reviewの補助

状態:

- 注意付き・必要時利用

優先度:

- ★★★☆☆

注意:

- token、credential、内部host名、private path、顧客名を含むcommandを外部serviceへ送らない。
- 表示結果を実行許可とはみなさず、対象OSのman pageと公式documentで確認してから実行する。

⸻

### tldraw

URL:
https://github.com/tldraw/tldraw

分類:

- Development
- Infinite Canvas
- React SDK

概要:

- React向けのinfinite canvas SDKと、共同編集可能なcanvas appを構築するためのtoolkit。
- starter kitにはMIT licenseのものがある一方、SDK本体のproduction利用にはtldraw license keyが必要。

用途:

- diagram、whiteboard、visual editorのprototype
- AIとcanvasを組み合わせたinterface研究
- self-host構成とrealtime collaborationの調査

状態:

- ライセンス確認付き・導入検討

優先度:

- ★★★☆☆

注意:

- 「無料のOSS whiteboard」と一括りにせず、SDK、starter kit、sync機能ごとのlicenseと料金条件を確認する。
- production採用前にlicense key、self-host範囲、data保存先、共同編集backendを確定する。

⸻

### OfficeCLI

URL:
https://github.com/iOfficeAI/OfficeCLI

分類:

- Development
- Document Automation
- AI Coding Operations
- Office Documents

概要:

- Word、Excel、PowerPointの.docx、.xlsx、.pptxを、Office本体なしで作成・読取・編集できるAIエージェント向けCLI。
- 単一バイナリにHTML／PNGレンダリングとプレビューを含み、生成後に見た目を確認して修正するループを作れる。
- Windowsを含む主要OS向けバイナリを提供する。

用途:

- Markdown原本からの文書・表・スライド生成
- 既存Officeファイルの構造確認と一括編集
- agent-generated documentのレンダリング検証
- OUTPUTS、PPT Master、reviewable-html-workbenchとのDocument Automation比較

関連:

- PPT Master
- reviewable-html-workbench
- Stirling PDF
- OUTPUTS/README.md

状態:

- 次に試す

優先度:

- ★★★★★

メモ:

- Apache-2.0。PPT Masterはスライド設計・制作手順、OfficeCLIはOfficeファイル操作とレンダリング検証を担うため、置換ではなく補完関係として扱う。
- 初回は使い捨ての公開可能な.pptx／.xlsxで、生成、編集、HTML／PNG表示、Microsoft Officeでの互換性を確認する。
- 自動更新を含む実行バイナリとして、導入時は配布元、更新設定、対象ファイル範囲を確認する。

⸻
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

### book-to-skill

URL:
https://github.com/virgiliojr94/book-to-skill

分類:

- AI Coding Operations
- Agent Skills
- Knowledge Management
- Document Processing

概要:

- 技術書、文書folder、複数sourceを、必要な章だけon-demandで参照できるAgent Skillへ変換するMIT Licenseのtool。
- PDF、EPUB、DOCX、Markdown、HTMLなどを抽出し、`SKILL.md`、章別note、glossary、patterns、cheatsheetを生成する。
- GitHub Copilot CLI、Amp、Claude Codeなど、Agent Skills形式を読むhostでの利用を想定する。

用途:

- 所有権または利用権のある技術資料を再利用可能なskillへ整理する
- project docs、runbook、公開仕様、open-license資料のon-demand参照
- 長い資料を毎sessionでcontextへ投入する運用との比較
- `SKILLS/`、Knowledge Scan、Reuse Before Buildの強化候補

状態:

- 次に試す

優先度:

- ★★★★★

メモ:

- converter本体はMIT Licenseだが、入力する書籍や文書の著作権・利用条件は別である。第三者著作物から生成したskillは原則privateに保ち、再配布しない。
- extractionはlocalでも、cloud modelを使うagentへ本文を渡す場合はproviderのdata termsが適用される。private資料や社内文書は送信境界を確認する。
- 生成された`SKILL.md`と章別noteは、誤要約、命令文、prompt injection、危険なscriptを含み得るものとして人間がreviewし、sandboxで試す。
- 最初のtrialは、自作資料、公開仕様、または明確なopen licenseを持つ資料に限定する。

⸻

### Superpowers

URL:
https://github.com/obra/superpowers

分類:

- AI Coding Operations
- Development Workflow
- Skills
- TDD / Subagent Review

概要:

- 要件の具体化、設計承認、実装計画、red / green TDD、subagentによる実装とレビューをcomposable skillとしてまとめた開発方法論。
- Codex App / CLIを含む複数のcoding agent harnessへ同じ工程を移植できる点が、skill routingと開発loopの比較材料になる。

用途:

- `PROJECT_START.md`、`PLAN.md`、`AGENTS.md`の工程設計との比較
- spec-first、TDD、実装後レビューの再利用可能な分割
- 長時間agent作業の承認点とsubagent境界の研究

状態:

- 導入検討

優先度:

- ★★★★☆

メモ:

- MIT License。
- 自動trigger、plugin導入、subagent駆動を前提にするため、既存運用へ丸ごと追加せず、skill単位で指示内容・shell実行・書込み範囲を監査する。
- `loopeng-bootstrap`が監査可能な実行・受入・memory更新loopを重視するのに対し、Superpowersは要件確認からTDD・subagent reviewまでの開発方法論を重視する。

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

### ChatGPT Sites

Official Links:

- Help Center: https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites
- OpenAI Academy: https://openai.com/academy/chatgpt-sites/

分類:

- Development
- AI Coding Operations
- Document Automation
- AI Workspace / Integrations
- Site Generation

概要:

- ChatGPTのWorkまたはCodexから、interactive websiteやlightweight appを作成、preview、version保存、deploy、共有できるpublic beta機能。
- dashboard、project tracker、internal portal、reportなど、AI Hub Liteと近い小規模な業務サイトを会話から作る用途を想定する。

運用パターン:

- 最初は対象者と1つの課題を限定し、private previewで確認する。
- live更新の前にversionを保存し、deploy後は生成URL、公開範囲、実コンテンツを別セッションで検証する。
- audience設定とsite内authenticationは別の制御として扱い、forms、sign-in、file、link、個人情報、secretを公開前に確認する。

制約:

- public betaで、plan、region、workspace policy、rollout、利用上限に依存する。上限到達時は新規作成、storage追加、高利用siteの公開継続に制約が出る場合がある。
- すべてのdeployment URLはproduction URL。preview確認なしのdeployを行わない。
- prompt、conversation context、upload / reference file、site code、storage、metadata、logなどがホスト運用に使われ得る。Free / Go / Plus / Proではdata control設定により会話が学習利用される可能性があるため、秘密情報や権限のない情報を渡さない。

状態:

- 導入検討

優先度:

- ★★★★★

メモ:

- Google AI StudioでのAI Hub Lite運用と比較し、生成速度だけでなくversion、公開範囲、custom domain、data control、公開後検証を評価する。
- beta仕様は変わりやすいため、利用時はHelp Centerと画面内表示を再確認する。

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
- GPT-5.6のOpenAI公式区分はSolがflagship、Terraがbalanced、Lunaがfastest / most affordableという能力・コストtierであり、固定的なplanner / executor roleではない。個別投稿にある「Solで計画、Lunaで実行」は運用例として扱い、task risk、必要context、latency、cost、verification gateで選択する。

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

### Squoosh

URL:
https://squoosh.app/

Source:
https://github.com/GoogleChromeLabs/squoosh

分類:

- Creative
- Image Optimization
- Local Processing

概要:

- browser上で画像format、quality、resize条件を比較しながら圧縮できるApache-2.0のWeb app。
- 画像処理はlocal device上で行われ、画像自体はserverへ送信されない。

用途:

- Web公開前の画像圧縮
- formatと画質・file sizeの比較
- screenshotやdocument assetの軽量化

状態:

- 有望・導入推奨

優先度:

- ★★★★★

注意:

- 利用統計にはGoogle Analyticsが使われるため、完全なoffline toolとして扱う場合はrepositoryからのlocal利用も検討する。
- 元画像を保持し、圧縮後の可読性とartifactを目視確認する。

⸻

### Photopea

URL:
https://www.photopea.com/

分類:

- Creative
- Browser Image Editor
- PSD

概要:

- PSDを含む複数formatをbrowserで編集できる画像editor。
- 公式privacy説明では、開いたfileはdevice上で処理され、serverへ送信されない。

用途:

- PSDの閲覧と軽微な編集
- software installが難しい環境での画像編集
- format変換と簡易asset作成

状態:

- 注意付き・条件付き採用

優先度:

- ★★★★☆

注意:

- account、広告、cookie、payment情報は画像fileのlocal処理とは別に扱われる。
- AI機能や外部resourceを使う場合は通信先と利用条件を再確認し、機密画像はoffline editorを優先する。

⸻

### Hallmark

URL:
https://github.com/Nutlope/hallmark

分類:

- Creative
- UI Design
- AI Coding Operations
- Agent Skills

概要:

- Claude Code、Cursor、Codex向けのUIデザインskill。新規UI生成、既存画面の監査、再設計、参考URLやスクリーンショットからのデザイン研究を扱う。
- テーマ、構造、配色、タイポグラフィ、レイアウトの指針と自己監査を通じて、AI生成UIが同じ見た目へ収束する問題を避けることを目指す。

用途:

- PocketTableのゲーム画面・対戦導線のUI改善
- Bellbullet WorkspaceのデスクトップUIの差別化
- 既存実装のdesign auditと改善指示
- Apple風UIを含む既存デザインskillとの比較

関連:

- DESIGN.md
- Apple design skill
- ChatGPT Sites
- Bellbullet Workspace
- PocketTable

状態:

- 次に試す

優先度:

- ★★★★★

メモ:

- MIT License。デザイン品質は自動保証されないため、生成結果を実機とブラウザで確認し、アクセシビリティと既存ブランド要件を優先する。
- studyで私的画面、認証画面、非公開資料を扱う場合は、送信先と利用条件を確認する。参照デザインは模倣ではなく構造・余白・配色の研究に留める。

⸻

### Amicro

URL:
https://github.com/Subhan-code/Amicro--Micro-transitions-

公式サイト:
https://amicro.vercel.app

分類:

- Development
- React UI
- Micro-interactions
- shadcn/ui Registry

概要:

- Motionを使ったReact向けmicro-interaction、transition component、card layoutのコレクション。
- CLIまたはshadcn/ui registryから必要なcomponent、hook、spring presetを個別にsourceへ追加できる。
- React 18 / 19、Tailwind CSS 3 / 4に対応し、Node.js 18以上を要件とする。

用途:

- button、loading、entrance transition、hover effect、card interactionの実装
- Next.js / React / Vite projectのUI motion試作
- shadcn/uiを使うprojectでのinteraction component候補
- AI生成UIへ最小限のfeedbackとtransitionを追加する

状態:

- 次に試す

優先度:

- ★★★★☆

メモ:

- MIT License。
- CLIとregistryはremote sourceをprojectへ追加するため、実行前に対象component、依存関係、追加先、accessibility、reduced-motion対応を確認する。
- componentを一括導入せず、必要なinteractionだけを選び、既存design systemと性能要件に合うか実画面で検証する。

⸻

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

### Camera Camera Camera

URL:
https://camera-camera-camera.com/

Demo:
https://camera-camera-camera.com/room/demo

Developers:
https://camera-camera-camera.com/developers

分類:

- Creative
- Avatar
- Video Call
- Talk Video / Podcast
- VRM / VRoid Hub
- WebRTC
- AI Companion / AITuber

概要:

- 顔や部屋をカメラで送らず、声に反応する3Dアバターで最大4人の通話や対談動画を作れるブラウザサービス。
- アプリやゲスト登録なしで人同士のルームに参加でき、手持ちのVRMファイルとVRoid Hubのモデルにも対応する。
- 話者に合わせたカット割り、リップシンク、端末内でのクリップ生成に対応する。
- 開発者向けBot APIでは、AIキャラクターやAITuberがPCM16 24kHz音声をWebSocketで送受信し、相手の文字起こし、字幕、表情イベントを扱える。

用途:

- 顔出しなしのアバター通話
- VTuber対談、ポッドキャスト、インタビュー収録
- AIRIやAIキャラクターを人との通話へ参加させる実験
- VRM / VRoid Hubを使ったブラウザアバター体験
- WebRTC通話とAIボット接続の構成比較

状態:

- 次に試す

優先度:

- ★★★★★

メモ:

- 人同士の音声はWebRTCで暗号化され、通常はP2Pで送受信される。TURN利用時も暗号化されたまま中継され、サービスは復号・録音・保存しないと説明されている。
- ボット通話では音声が暗号化WebSocket経由で接続先ボットへ送られ、ボット運営者が音声、文字起こし、応答を処理・保存する場合がある。接続先のポリシー確認が必要。
- カメラ映像は使用せず、アバター映像と録画クリップは端末内で生成される。クリップを公開・共有する場合は、全参加者の同意が必要。
- Bot APIキーの発行にはログインが必要。公開仕様では1ルームにつき人間1人とボット1体、セッション発行はキーあたり10回/分とされている。
- ホスト型サービスであり、公開ソースやOSSライセンスは確認できていない。利用条件、API仕様、無料範囲は利用前に公式ページで再確認する。
- アップロードするVRMの利用条件と `avatarPermission` を確認し、会話内容、音声、個人情報、APIキーを公開メモリへ記録しない。

Official Links:

- Bot API: https://camera-camera-camera.com/docs/api.md
- Privacy: https://camera-camera-camera.com/privacy
- Terms: https://camera-camera-camera.com/terms

⧻

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

### AivisSpeech Engine

URL:
https://github.com/Aivis-Project/AivisSpeech-Engine

分類:

- Creative
- Voice
- TTS
- Local API
- AI Companion / AIRI

概要:

- VOICEVOX ENGINE 互換を目指す、日本語音声合成のローカル HTTP サーバー。`/audio_query` と `/synthesis`、`/speakers` を使い、AIVMX 形式の Style-Bert-VITS2 系音声モデルを扱う。
- Windows の既定ポートは `10101`。AivisSpeech デスクトップアプリに同梱される engine を利用でき、モデルごとに話者・スタイル・ライセンス情報を確認できる。

用途:

- AI companion / Codex 完了通知のローカル音声
- 日本語の感情表現・話者スタイル選択
- VOICEVOX 互換クライアントの声モデル差し替え

状態:

- 次に試す

優先度:

- ★★★★★

License:

- Engine: LGPL-3.0 または別ライセンス。音声モデルの利用条件は個別に確認する。

メモ:

- CPU 推論に対応するが、初回は既定モデルと BERT モデルの download を伴う。Codex 通知のような短文では、起動済み engine の localhost API だけに接続する構成が扱いやすい。
- `intonationScale` は AivisSpeech では話者スタイルの感情表現の強さを表す。上げ過ぎると不自然になるため、モデルごとに短文で試聴して決める。
- 公開時は、選んだ音声モデルのクレジット・用途制限を確認する。実在人物の声を無断で模倣しない。

⸻

### VOICEVOX ENGINE

URL:
https://github.com/VOICEVOX/voicevox_engine

分類:

- Creative
- Voice
- TTS
- Local API
- AI Companion / AIRI

概要:

- 日本語音声合成のローカル HTTP サーバー。`/audio_query` で読みとパラメータを作り、`/synthesis` で WAV を生成する。話者スタイル ID は `/speakers` から取得する。
- 既定ポートは `50021`。話速、音高、抑揚をクエリ上で調整できる。

用途:

- Codex 完了通知など短い日本語読み上げ
- AivisSpeech と共通クライアントでの声・話し方比較
- AI companion / AITuber のローカル TTS 試作

状態:

- 次に試す

優先度:

- ★★★★★

License:

- Engine: LGPL-3.0 または別ライセンス。各キャラクター音声・クレジット・利用条件は別途確認する。

メモ:

- `speaker` は `/speakers` が返す各スタイルの ID を指定する互換名。音声を使う前に、選択する話者スタイルの規約を確認する。
- localhost で起動した engine だけへ接続し、音声テキストや生成音声を外部サービスへ送らない構成にできる。

⸻

### Irodori-TTS

URL:
https://github.com/Aratako/Irodori-TTS

Model:
https://huggingface.co/Aratako/Irodori-TTS-500M-v3

Server:
https://github.com/Aratako/Irodori-TTS-Server

分類:

- Creative
- Voice
- TTS
- Voice Design
- AI Companion / AIRI

概要:

- Flow Matchingベースの日本語TTS。500M v3は参照音声によるzero-shot voice cloning、emojiによる感情・話し方・効果音制御、生成音声へのSilentCipher watermarkを扱う。
- 600M v3 VoiceDesignは、本文、参照音声、自然言語captionを組み合わせて声質と感情・話し方を分離制御する。
- CLI、Gradio UI、OpenAI互換server、LoRA fine-tuning、speaker inversionを用意する。公式 server は `POST /v1/audio/speech` と `GET /health` を提供する。

用途:

- AIRI / AI companionの日本語音声表現
- AITuberの感情・話者・演技制御
- local TTS / voice design研究
- VoxCPM、VOICEVOX、Style-Bert-VITS2との比較

状態:

- 研究対象

優先度:

- ★★★★☆

メモ:

- sourceと公式v3 model cardはMIT。ただしmodel cardは、本人の明示同意がない実在人物のvoice clone / impersonation、deepfake、誤情報目的の利用を禁止している。
- 500M / 600Mのmodel download、Python / PyTorch、GPU / VRAM、Hugging Face依存を導入前に確認する。公式 server は CPU backend も用意するが、実用的な推論には CUDA / ROCm GPU を推奨している。今回はdownload・実行していない。
- v1とv2 / v3でcheckpoint・preprocessing互換性がなく、`main`はv3系。再現時はcode tagとmodel versionを固定する。
- 日本語専用で、複雑な漢字の読みやemoji / caption制御は不安定な場合がある。reference audioとcaptionの条件が矛盾すると品質が崩れる可能性がある。
- VoiceDesignClonerはIrodori-TTS / Qwen3-TTSを使って教師データ生成とLoRA学習まで束ねるGUIであり、本項目は基盤model / training・inference codeとして区別する。

⸻

### MOSS-SoundEffect-v2.0

URL:
https://huggingface.co/OpenMOSS-Team/MOSS-SoundEffect-v2.0

Repository:
https://github.com/OpenMOSS/MOSS-TTS/tree/main/moss_soundeffect_v2

Demo:
https://huggingface.co/spaces/OpenMOSS-Team/MOSS-SoundEffect-v2.0

分類:

- Creative
- Audio / Sound Effects
- Text-to-Audio
- Diffusion Transformer / DiT
- Flow Matching
- Creative Pipeline

概要:

- OpenMOSS Teamによる、自然言語から非音声の効果音を生成するオープンウェイトtext-to-audio model。
- 1.3B parameterのDiffusion TransformerをFlow Matchingで学習し、DAC VAEとQwen3 text encoderを組み合わせる。
- 英語・中国語のpromptに対応し、環境音、都市音、動物、人物動作、短い音楽的・打楽器的clipを48 kHz、最大30秒で生成する。
- v1の8B discrete-token autoregressive `MossTTSDelay`を置き換える、continuous-latent系のv2 modelとして公開されている。

用途:

- 動画、ゲーム、配信、デモ向けの効果音・環境音生成
- OpenCut / HyperFramesなどCreative Pipeline用の音響素材作成
- text-to-audio、Diffusion Transformer、Flow Matchingの研究
- 英語・中国語promptによる効果音生成の比較

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- Apache-2.0

メモ:

- 公式model cardはPython 3.12、PyTorch 2.9、CUDA 12.8系のisolated environment、`bfloat16`とCUDA deviceを案内する。DiT accelerationに`torch.compile`とTriton CUDA Graphを使い、初回compileには数分かかる場合がある。
- 公式情報に正確なVRAM要件、Windows、AMD Radeon / ROCm、CPUのみでの実用性は明記されていない。ローカル導入前に対応環境とdisk / VRAM使用量を確認する。
- v1とv2はarchitectureと専用Python環境が異なる。top-level MOSS-TTS環境とは互換性がないため、versionと環境を分離する。
- 生成音を公開・商用利用する場合は、prompt、元素材、第三者の権利、利用先の規約を確認する。実在の音源や権利物を再現する目的では使わない。

Official Links:

- Model card: https://huggingface.co/OpenMOSS-Team/MOSS-SoundEffect-v2.0/blob/main/README.md
- Source repository: https://github.com/OpenMOSS/MOSS-TTS

⸻

### Text-To-VRMA

URL:
https://github.com/Kirakun0328/text-to-vrma

分類:

- Creative
- VRM / VRMA
- Text-to-Motion
- AI Character
- AITuber / AIRI

概要:

- テキスト指示からVRM向けbody motionと表情を生成し、VRM Animation形式の`.vrma`としてpreview・保存するMIT Web / Electron tool。
- OpenAI APIまたはdesktop版のCodex CLIを使うLLM keyframe engineと、NVIDIA ARDYをlocal実行するfull-body motion engineを選択できる。
- ARDY modeはlocal translation / Llama 3 text encoder / motion diffusionを組み合わせ、waypoint、連続動作分割、VRM retarget、足滑り補正を扱う。

用途:

- AIRI / AITuberのbody motion生成
- VRM character、game、配信向けVRMA asset作成
- text-to-motionとLLM keyframe生成の比較
- 2d2vrm等で作ったavatar assetへmotionを付与するpipeline研究

状態:

- 研究対象

優先度:

- ★★★★★

メモ:

- sourceはMIT。公式READMEはsource codeと、同梱VRM・ARDY・Llama 3・FuguMT等のthird-party asset / model licenseを分離している。
- LLM modeはOpenAI APIへのprompt送信と利用料を伴う。API keyはlocalStorage保存と説明されているため、browser profile、XSS、共有端末、data sharing設定を含めて導入前に監査する。
- desktop版のCodex modeはChatGPT login済みCodex CLIの認証を再利用し、logoutがPC全体のCodex CLI login状態へ影響する。利用条件と組織policyも確認する。
- ARDY setupはPython、PowerShell / shell installer、約20GBのmodel download、約35GBのdisk、local server、任意code実行を伴う。今回はinstall・download・実行していない。
- 作者本人のv1.1.0 release投稿で、ARDY / waypoint、多言語UI、VRM game・配信・AITuber用途を確認した。ただしX上の性能主張ではなくGitHub README / LICENSE / third-party noticeを正本とする。
- `2d2vrm`は静止画からVRM asset、本項目はtextからVRMA motion、`AITuberKit`はLLM / TTS / 配信を束ねるintegration layerとして役割を分ける。

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

### Wakapippi Vocal Remover Extension

Official Links:

- Chrome: https://chromewebstore.google.com/detail/wakapippi-vocal-remover-e/mfdkjbkokfdnegolbddbacaafcekijgf
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/wakapippi-vocal-remover/

分類:

- Creative
- Audio Separation
- Browser Extension
- WebGPU
- Local-first

概要:

- 再生中のWeb動画の音声を、ブラウザ内でボーカルと伴奏へリアルタイム分離するChrome / Firefox extension。
- UVR-MDX-NETをWebGPUでon-device実行し、ボーカルと伴奏のmix量、noise reductionを調整できる。

用途:

- 歌唱、楽器、耳コピー練習
- 動画音声のlocal separation
- Creative Pipeline向けの音源確認
- WebGPUによるon-device audio inferenceの研究

状態:

- 次に試す

優先度:

- ★★★★☆

License:

- Firefox Add-ons表示: Apache-2.0

メモ:

- Chrome 113以降とWebGPUが必要。低性能GPUでは正常動作しない場合があり、複数動画・複数tabでの同時使用は非対応。
- Firefox版は全website上のdata access権限を要求する。developerはdata collectionなしと申告しているが、導入前に権限とprivacy policyを確認する。
- 投稿ではopen sourceと説明されているが、配布ページからsource repositoryは特定できていない。正式なsource URLを確認後にlicense表記を再確認する。
- 分離音源の公開・配信・再利用は原著作物の権利を確認し、私的利用の範囲を越えない。

⸻

### 四葉公ラボ 配信ペット

URL:
https://shibakou-lab.jp/settings

分類:

- Creative
- Streaming
- Hosted Tool
- YouTube
- Viewer Engagement

概要:

- 配信中のreaction、comment、新規channel登録などを成長条件にし、視聴者と一緒にpetを育てる配信画面向けservice。
- 任意画像やGIFを設定し、levelや進化段階に応じて見た目を変える用途を想定する。

用途:

- YouTube配信のviewer engagement
- OBS browser source向けの演出候補
- 配信pet、成長演出、community participationの研究
- Codex petやAITuberの配信連携比較

状態:

- 次に試す

優先度:

- ★★★☆☆

License:

- 未確認

メモ:

- 設定画面ではYouTube loginが必要で、member向け機能の判定にはDiscord連携を使うと表示される。
- public source repository、source license、event dataの保存期間、OAuth scopeは確認できていないため、OSSではなくhosted serviceとして扱う。
- 導入前にYouTube / Discordの権限、privacy policy、OBS公開画面に出る情報を確認し、test accountで試す。

⸻

### img2threejs

Official Links:

- Repository: https://github.com/img2threejs/img2threejs
- Showcase: https://img2threejs.github.io/img2threejs-showcase/

分類:

- Creative
- Image to 3D
- Three.js
- AI Coding Operations
- Agent Skills

概要:

- 参照画像のオブジェクトを、プリミティブ、手続き型シェーダー、生成ジオメトリだけで構成したコード専用のThree.jsモデルへ再構成するAgent Skill。
- TypeScriptの`THREE.Group` factoryを生成し、pivot、socket、colliderなどの階層を含むアニメーション対応のモデルとして扱う。
- `blockout`から`optimization`までの段階的な工程と、Pythonによる決定的な検証・品質ゲートを組み合わせる。
- Claude Code、Codex、OpenCodeで利用でき、特定のエージェントに依存しない構成を採る。

用途:

- 参照画像からの手続き型Three.jsモデル作成
- AI生成画像・プロダクト画像のWebGL素材化
- アニメーション可能な3Dアセットのコード生成
- AI coding agentによる3D制作と品質確認の研究
- `Creative Pipeline` と `OUTPUTS/` の中間成果物作成

状態:

- 次に試す

優先度:

- ★★★★☆

License:

- Apache-2.0

メモ:

- 公式READMEでは、フォトグラメトリやメッシュ抽出ではなく、参照画像からのコードによる再構成として説明されている。
- ハードサーフェスの物体に向き、人物は写実的な本人再現ではなくスタイル化された再構成として扱う。
- 参照画像は自分が権利を持つもの、または利用許諾のあるものに限定する。生成されたTypeScript、実行スクリプト、依存関係を確認してから動かす。
- 単一画像では見えない面や寸法の推定が必要になるため、ブラウザ描画、アニメーション階層、品質ゲートの結果を確認する。
- `animede/image-3d`、`dotneet/image-to-3d`、`LingBot-Map`とは、コード専用のThree.js再構成、画像からの3D asset化、動画からの3D再構成という役割の違いで区別する。

⸻

### animede 3D Character Pipeline

Official Links:

- Diffusion frontend: https://github.com/animede/diffusers-server
- Image to 3D: https://github.com/animede/image-3d
- Auto rig / VRM: https://github.com/animede/rig-service

分類:

- Creative
- Image Generation
- Image to 3D
- Auto Rig
- VRM
- Creative Pipeline

概要:

- 画像・動画生成、画像からの3D asset生成、humanoid auto-rig / VRM出力を3つのrepositoryでつなぐcharacter production pipeline。
- `diffusers-server`は複数の画像・動画modelをFastAPI / Web UIから扱い、`image-3d`はSTL / 3MF / GLB / OBJ、`rig-service`はrigged model / VRMを出力する。
- `image-3d`の既定設定はmock generatorであり、実際のHunyuan3D生成には追加設定とmodelが必要。

用途:

- AI生成characterから3D / VRM assetを作るworkflow研究
- AIRI、AITuber、game characterの素材生成
- image generation、3D generation、auto-rigの分離設計
- see-through、Anime2.5DRig、Text-To-VRMAとの比較

状態:

- 研究対象

優先度:

- ★★★★★

License:

- `diffusers-server`: Apache-2.0
- `image-3d`: repository licenseの確認が必要
- `rig-service`: PolyForm Small Business License

メモ:

- `diffusers-server`は48GB-class GPU、`image-3d`はshape 16GB / texture 32GB程度のNVIDIA CUDA環境を案内する。modelごとのlicenseとdownload条件は別に確認する。
- PolyForm Small Business Licenseは一般的なOSI open-source licenseではない。利用規模、商用利用、配布条件を確認する。
- Windows + AMD Radeon / ROCmでの動作は公式の主経路ではないため、現在のlocal環境へ直接導入せず構成研究から始める。

⸻

### AKARI Video

Official Links:

- Website: https://akari-oss.app/
- GitHub: https://github.com/akari-video

分類:

- Creative
- Video Editing
- AI Coding Operations
- Local-first
- Agentic Workflow

概要:

- `edit.json`を編集状態の正本とし、Claude CodeやCodexなどの外部coding agentから動画編集操作を行うAI-native video editor。
- application自体にAI modelを内蔵せず、local media analysis、agentによる変更提案、human approvalを分離する。
- Public Betaとして公開されている。

用途:

- Codex / Claude Codeによる動画編集
- agent-readableな編集状態とapproval gateの研究
- OpenCut、HyperFrames、PPT MasterとのCreative Pipeline比較
- OUTPUTS向け動画成果物の作成

状態:

- 次に試す

優先度:

- ★★★★★

License:

- Open source。利用するrepositoryごとのlicenseを導入前に確認する。

メモ:

- 現在はmacOS Apple Silicon向けで、Windows版はComing Soon。現在のWindows workspaceでは対応を待つ。
- X投稿の「最大8割自動化」はpotentialの説明で、公式の再現可能なbenchmarkとしては扱わない。
- media file、analysis result、外部agentへ渡すcontext、agentが実行するcommandの範囲を確認する。

⸻

### VoiceDenoiser

URL:
https://github.com/reinehonoka/VoiceDenoiser

分類:

- Creative
- Voice
- Dataset Preparation
- Denoising
- Local Tool

概要:

- TTS、RVC、SoVITSなどの学習用音声datasetへ、noise reduction、normalize、silence trimを一括適用するlocal tool。
- DeepFilterNetまたはResemble Enhanceを選択でき、途中再開とGradio GUIを備える。

用途:

- local TTS / voice conversion向けdataset整備
- VoxCPM、Irodori-TTS、VOICEVOX関連の音声前処理
- 大量音声のnoise reductionとvolume normalization
- 処理前後の音質・発話欠損比較

状態:

- 次に試す

優先度:

- ★★★★☆

License:

- MIT

メモ:

- Python 3.10以降、Windows / Linux対応。CPUでも動作するが低速で、公式はNVIDIA GPUを推奨する。AMD accelerationは確認できていない。
- 最初は権利確認済みの少量音声をcopyして使い、原本を保持したまま処理前後のnoise、発話欠損、音量差を比較する。
- voice dataset、話者情報、private recording、生成結果の実体は公開メモリへ保存しない。

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

### takos

URL:
https://github.com/tako0614/takos

公式製品ページ:
https://corp.takos.jp/products/takos/

分類:

- AI
- AI Workspace / Integrations
- Agent / Orchestration
- Self Host

概要:

- チャット、AIエージェント、会話の記憶、追加アプリを同じ画面にまとめる、自分で置き場所を選べるAIワークスペース。
- 会話・ファイルの保存先を利用者が選び、文書、表計算、ストレージ、Gitホスティングなどを必要なときに追加できる設計。

状態:

- 研究対象

優先度:

- ★★★★★

License:

- AGPL-3.0-only（公式製品ページ、GitHub metadata）

メモ:

- 開発中。実行前にagent権限、memoryの保存先、追加アプリの外部接続、モデルprovider、自己ホスト手順を確認する。

⸻

### takosumi

URL:
https://github.com/tako0614/takosumi

公式製品ページ:
https://corp.takos.jp/products/takosumi/

分類:

- Development
- Infrastructure as Code
- Self Host
- AI Workspace / Integrations

概要:

- Gitに置いたOpenTofu / Terraform定義を実行し、変更内容、実行履歴、復元ポイントを管理するOpenTofuコントロールプレーン。
- OSS版を自分のサーバーで運用でき、同じ仕組みのhosted版としてTakosumi Cloudも提供する。

状態:

- 次に試す

優先度:

- ★★★★★

License:

- AGPL-3.0-only（公式製品ページ、GitHub metadata）

メモ:

- OpenTofu / Terraformの実行権限、cloud credential、state、変更履歴の保存先を確認してから試す。定義にsecretを直接書かない。

⸻

### yurucommu

URL:
https://github.com/tako0614/yurucommu

公式製品ページ:
https://corp.takos.jp/products/yurucommu/

分類:

- Self Host
- Community SNS
- ActivityPub
- Knowledge Management

概要:

- コミュニティ単位で場所を持ち、投稿、リアクション、ダイレクトメッセージ、ストーリーを扱うActivityPub対応SNS。
- 単体で自己ホストでき、`takos`へアプリとして追加できる。`yurumeet`と共通基盤を使う。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- AGPL-3.0-only（公式製品ページ。GitHub metadataは`Other`）

メモ:

- federation、moderation、media storage、個人情報、メール・通知、管理者権限を導入前に確認する。repository metadataとLICENSE本文が一致するか再確認する。

⸻

### yurumeet

URL:
https://github.com/tako0614/yurumeet

公式製品ページ:
https://corp.takos.jp/products/yurumeet/

分類:

- Self Host
- Messaging
- Voice / Video
- Community

概要:

- ダイレクトメッセージとコミュニティチャットを中心に、音声通話とビデオ通話を扱うメッセージングアプリ。
- `yurucommu`と同じ基盤を使い、同じサーバーへ接続する構成ではアカウントを使い分けられる。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- AGPL-3.0-only（公式製品ページ。GitHub metadataは`Other`）

メモ:

- 開発中。WebRTC、メディア・通知、アカウント、community federation、サーバー公開範囲を確認してから試す。

⸻

### takos-office

URL:
https://github.com/tako0614/takos-office

分類:

- Document Automation
- Self Host
- AI Workspace / Integrations
- MCP

概要:

- 文書、スライド、表計算をひとつにまとめた、`takos`へ追加できるself-hostable Officeアプリ。
- GitHub descriptionではagent-native via MCPのdocument / slide / sheet workerとして説明されている。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- GPL-3.0-only（公式製品ページ。GitHub metadataは`Other`）

メモ:

- `OUTPUTS/`、OfficeCLI、PPT Masterとの比較候補。MCP tool、ファイル保存、agentが変更できる範囲を導入前に監査する。

⸻

### takos-computer

URL:
https://github.com/tako0614/takos-computer

分類:

- Self Host
- Development
- Browser Automation
- AI Workspace / Integrations

概要:

- ブラウザの中で使える作業用のマシンとして、`takos`へ追加できるアプリ。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- MIT（公式製品ページ、GitHub metadata）

メモ:

- browser、filesystem、clipboard、network、credentialの権限境界を確認する。agentへ接続する場合は実行可能な操作を限定する。

⸻

### takos-storage

URL:
https://github.com/tako0614/takos-storage

分類:

- Self Host
- Storage
- AI Workspace / Integrations

概要:

- `takos`へ追加できる、ファイルを置いておくためのstorageアプリ。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- AGPL-3.0-only（公式製品ページ。GitHub metadataは`Other`）

メモ:

- 保存先、暗号化、共有範囲、バックアップ、削除、agentからの読み書き権限を確認する。実ファイルや個人情報は共有メモリへ入れない。

⸻

### takos-git

URL:
https://github.com/tako0614/takos-git

分類:

- Development
- Git Hosting
- Self Host
- AI Workspace / Integrations

概要:

- `takos`へ追加できる、自分たちで持つGit hosting service。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- AGPL-3.0-only（公式製品ページ。GitHub metadataは`Other`）

メモ:

- repository、account、webhook、SSH key、OAuth、backup、公開範囲を確認する。既存GitHub remoteの代替として即導入しない。

⸻

### yurucommu-core

URL:
https://github.com/tako0614/yurucommu-core

分類:

- Self Host
- ActivityPub
- API
- Shared Library

概要:

- `yurucommu`と`yurumeet`が共有するActivityPub、API、databaseの基盤。
- GitHub descriptionでは、yurucommu ActivityPub serverおよびAPI SDKとして説明されている。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- AGPL-3.0-only（公式製品ページ。GitHub metadataは`Other`）

メモ:

- server、API、database、federation、アカウントデータの境界を確認する。上位clientと個別に導入可否を判断する。

⸻

### terraform-provider-takoform

URL:
https://github.com/tako0614/terraform-provider-takoform

分類:

- Development
- Infrastructure as Code
- OpenTofu / Terraform
- Self Host

概要:

- サービスの形を書き表すService Form仕様と、それを扱うTerraform / OpenTofu provider。
- 公式製品ページでは`takosumi`関連の独立した仕様・ツールとして紹介されている。

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- MIT（公式製品ページ、GitHub metadata）

メモ:

- providerが作成・変更するresource、state、API endpoint、credentialの扱いを確認する。実環境へapplyする前にplanとsandboxで検証する。

⸻

## Research

### LingBot-Map

URL:
https://github.com/Robbyant/lingbot-map

Paper:
https://arxiv.org/abs/2604.14141

Model:
https://huggingface.co/robbyant/lingbot-map

分類:

- Research
- 3D Reconstruction
- Streaming 3D
- Spatial AI
- SLAM / Visual Odometry
- Creative Pipeline

概要:

- 動画ストリームからカメラ姿勢、深度、点群を逐次推定するfeed-forward型の3D foundation model。
- Geometric Context Transformer / Geometric Context Attentionにより、anchor context、pose-reference window、trajectory memoryを組み合わせ、座標の固定、密な局所幾何、長距離ドリフト補正を分担する。
- 論文と公式READMEでは、518×378入力で約20 FPS、10,000フレームを超える長尺シーケンスでの安定した推論を報告している。
- `lingbot-map-long`、balanced checkpointの`lingbot-map`、VGGTへ読み込めるstage-1 checkpointがHugging FaceとModelScopeで公開されている。

用途:

- 動画からの3Dシーン再構成
- camera pose / depth / point cloud推定
- SLAM、visual odometry、長尺ストリーミング3D研究
- 動画から3D可視化素材を作るCreative Pipeline
- AI companionやロボティクスの空間理解に向けた将来候補
- Terrain Diffusion / InfiniteDiffusionなど生成型ワールド技術との比較

状態:

- 研究対象

優先度:

- ★★★★★

License:

- Apache-2.0

メモ:

- 公式手順はPython 3.10、CUDA 12.8、PyTorch 2.8.0を推奨し、ストリーミング推論にはFlashInferを推奨する。FlashInferなしでは`--use_sdpa`によるPyTorch SDPA fallbackがある。
- 320 viewsを超えるKV cacheでは性能低下があるためkeyframe strategyを使い、3,000フレーム超の長尺入力ではwindowed inferenceが案内されている。学習時より長い移動範囲ではpose collapseが起こり得る。
- batch renderingはOpen3D、NVIDIA Kaolin、ffmpeg、CUDA extensionを追加で必要とする。公式READMEに正確なVRAM要件、Windows対応、AMD Radeon / ROCm対応は明記されていない。
- Terrain Diffusion / InfiniteDiffusionは世界を生成する技術、LingBot-Mapは実動画や生成動画から幾何を再構成する技術として区別する。
- 実行前にCUDA、FlashInfer、Kaolin、PyTorchの対応版とモデル利用条件を再確認する。動画に含まれる人物、住所、室内、位置情報などを公開メモリへ保存しない。

Official Links:

- Project: https://technology.robbyant.com/lingbot-map
- ModelScope: https://www.modelscope.cn/models/Robbyant/lingbot-map
- Demo dataset: https://huggingface.co/datasets/robbyant/lingbot-map-demo

⧻

### image-to-3d

URL:
https://github.com/dotneet/image-to-3d

分類:

- Research
- Creative
- Image to 3D
- Apple Silicon
- Auto Rig

概要:

- TRELLIS.2をApple Silicon / MPS向けに移植・調整し、1枚の画像からGLB assetを生成するlocal web application。
- generation pipelineの簡略化、UV、mesh repair、texture projection、auto-rigなどを一連の処理として扱う。

用途:

- Apple Silicon上のlocal image-to-3D研究
- 画像から3D character / object assetを作るworkflow
- animede 3D Character Pipeline、LingBot-Mapとの役割比較
- Creative Pipelineでの3D素材生成

状態:

- 研究対象

優先度:

- ★★★★☆

License:

- MIT

メモ:

- 公式要件はmacOS 12以降、Apple Silicon M1以降、24GB unified memory、Python 3.11、Node.js 20、約20GBの空き容量。Blenderは一部処理で任意。
- Windows / AMD Radeon向けの実装ではないため、現在のworkspaceでは導入候補ではなく比較研究として扱う。
- 入力画像、3D出力、model weight、生成assetの権利と利用条件を個別に確認する。

⸻

### Semantic Scholar

URL:
https://www.semanticscholar.org/

分類:

- Research
- Academic Search
- Literature Discovery

概要:

- Allen Institute for AIが提供する、AIを用いた無料の学術検索・literature discovery service。
- 関連論文、引用関係、著者、要約などを横断し、研究分野の入口を短時間で作れる。

用途:

- 先行研究の探索
- citation graphと関連論文の確認
- arXiv、publisher、著者情報への導線作成

状態:

- 有望・導入推奨

優先度:

- ★★★★★

注意:

- AI生成・抽出された要約だけで結論を出さず、原論文、版、撤回・訂正、licenseを確認する。
- 検索結果の網羅性は分野や収録状況に依存するため、他のdatabaseやpublisher検索と併用する。

⸻

### Elicit

URL:
https://elicit.com/

分類:

- Research
- AI Research Assistant
- Literature Review

概要:

- 論文検索、screening、data extraction、systematic reviewを支援するAI research assistant。
- sentence-level citationを手掛かりに、回答と根拠論文を行き来できる。

用途:

- literature reviewの初期探索
- inclusion / exclusion候補のscreening
- 論文からの比較項目抽出

状態:

- 注意付き・導入検討

優先度:

- ★★★★☆

注意:

- AIの要約・分類・抽出は誤る可能性があるため、必ず原論文と照合する。
- 未公開原稿や機密資料のupload前にprivacy、data retention、学習利用条件を確認する。
- 高度なworkflowには有料planが含まれるため、「完全無料」として扱わない。

⸻

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

### ai-agent-book

URL:
https://github.com/bojieli/ai-agent-book

分類:

- Reference Sites
- Agent / Orchestration
- AI Coding Operations
- Knowledge Management

概要:

- AI Agentの設計原理とengineering practiceを、本文、PDF / EPUB、章ごとのコード例とともに公開するオープンブック。
- `Agent = LLM + context + tools`を軸に、context engineering、memory / RAG、MCP、coding agent、evaluation、multimodal、multi-agentを体系的に扱う。

用途:

- Agent Runtime、Skills、Memory、MCP、評価の全体像を学ぶ
- ai-shared-memoryの概念地図と設計判断の参照
- 実装例を読む前の用語・章構成の確認

状態:

- 参考資料

優先度:

- ★★★★★

License:

- Apache-2.0

メモ:

- 本文の例で外部API keyが必要な場合でも、実キーや利用ログは公開メモリへ保存しない。
- 書籍本文、コード例、外部依存のlicenseを分けて確認し、教材の説明を実運用の保証とみなさない。

⸻

### AlternativeTo

URL:
https://alternativeto.net/

分類:

- Reference Sites
- Software Discovery
- Crowdsourced Directory

概要:

- softwareやWeb serviceの代替候補を、platform、license、用途、利用者評価などから探すcrowdsourced directory。

用途:

- 既存toolの代替候補探索
- self-hosted、open source、platform別候補の発見
- 比較調査の候補list作成

状態:

- 注意付き・必要時利用

優先度:

- ★★★☆☆

注意:

- 掲載内容と評価は二次情報であり、正確性や安全性は保証されない。
- download、購入、導入前に、公式site、source repository、license、保守状況、security情報を一次情報で確認する。

⸻

### awesome-llm-apps

URL:
https://github.com/Shubhamsaboo/awesome-llm-apps

分類:

- Reference Sites
- AI Agents
- RAG
- Implementation Examples

概要:

- AI agent、agent skill、RAG appの実装例を100件以上集めたApache-2.0の参照カタログ。
- 単体エージェント、複数エージェント、音声、Web、RAG、agent skillなどを、cloneして検証できるサンプルとして横断できる。

用途:

- 新規機能の実装パターン探索
- agent skill、RAG、音声／動画、Web操作の最小構成の比較
- 個別プロジェクト採用前の一次調査の入口
- AIエージェントの設計例・依存関係・評価方法の参照

状態:

- 参考資料

優先度:

- ★★★☆☆

メモ:

- このリポジトリ自体を依存関係や導入候補として扱わず、必要な個別例だけを一次情報・ライセンス・外部送信・API key・保守状況で再評価する。
- 100件以上やend-to-end testedは作者の説明であり、各サンプルの品質、安全性、商用利用可否を一律に保証しない。
- 個別候補が実作業で有効だった場合のみ、重複を確認してAI_DRAWERS.mdまたはTRIALS.mdへ昇格する。

⸻

### ANIMAで複数キャラを描く自然言語プロンプト

URL:
https://x.com/UNfukashigi/status/2073924497703596274

分類:

- Reference Sites
- Creative Pipeline
- Image Generation
- Prompting

概要:

- AI漫画制作の作者が、ANIMAで複数キャラが絡む場面を作る際の自然言語プロンプトの組み立て方を紹介した実践記事。
- キャラ名や役割、視聴者から見た画面上の位置、背景、動作、外見を自然文で順に指定し、生成結果を見ながら細部を調整する流れを扱う。
- 2人以上のキャラを同じ画面へ配置する際の、位置・役割・描写順を考えるための参考資料として利用する。

用途:

- AI漫画・イラストの複数キャラ構図の試作
- キャラごとの位置、動作、外見を分けたprompt設計の参考
- AI生成画像からCreative Pipelineへ渡すラフ素材の作成

状態:

- 参考資料

優先度:

- ★★★☆☆

メモ:

- 作者による実践記事であり、ANIMAの公式仕様、再現性、モデル性能を保証する一次資料ではない。
- 記事中の画像・キャラクター・漫画素材の権利条件は、作者の記載と利用するサービスの規約を確認する。
- 具体的な運用ルールやpromptの強制規範には昇格せず、実例から構図設計の考え方を参照する。

⸻

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

### textlint-rule-preset-ai-writing

URL:
https://github.com/textlint-ja/textlint-rule-preset-ai-writing

分類:

- AI Coding Operations
- Writing Quality
- Japanese Text Lint
- MCP

概要:

- AI生成文に多い機械的なlist、見出し、対比などの構造を検出し、より自然な日本語への改善を促すtextlint preset。
- textlintのMCP serverを使い、生成、検査、改善提案を分離したfeedback loopを組める。

用途:

- README、NOTES、PROJECTSの日本語品質チェック
- AI生成Markdownの構造的な癖の可視化
- `japanese-tech-writing`の文章規範を自動検査で補助

状態:

- 導入検討

優先度:

- ★★★★☆

メモ:

- MIT License。textlint 15.1.0以上が必要。
- patch更新でも検出件数が変わり得るため、導入時はversionを固定し、既存文書への一括修正を自動適用しない。
- 文章品質の補助として使い、AI利用の隠蔽、検知回避、出自の偽装には使わない。

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

### 分散通信基盤株式会社 / TAKOS

URL:
https://corp.takos.jp/

分類:

- Reference Sites
- AI Workspace / Integrations
- Self Host / Tools
- Open Source Software

概要:

- 大阪市の分散通信基盤株式会社（TAKOS Inc.）の公式コーポレートサイト。
- 「借りるインターネットから、所有するインターネットへ」を掲げ、自分のサーバーで動かせるソフトウェアと、同社運用のhosted editionを分けて提供している。
- AIワークスペースの`takos`、OpenTofuコントロールプレーンの`takosumi`、コミュニティSNSの`yurucommu`、メッセージングの`yurumeet`と関連OSSを公開している。

用途:

- AI Workspace、self-host、OSSとhosted editionの設計比較
- takosを中心としたAI、アプリ、保存先、インフラ運用の分離設計の参照
- `takos`関連OSSを必要な単位で選択するための入口

状態:

- 参考資料

優先度:

- ★★★★★

メモ:

- 会社サイト上の製品説明と、各GitHub repositoryのREADME・LICENSEは分けて確認する。
- GitHub repositoryの一部はAPI metadata上`Other`またはSPDX未判定のため、利用前に対象repositoryのLICENSE本文を確認する。
- 会社情報に含まれる個人情報や連絡先を、共有メモリへ転載しない。

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
- Camera Camera Camera
- speech-to-speech
- Yorishiro
- 四葉公ラボ 配信ペット

用途:

- AI コンパニオン、音声認識、音声表現、表情・アバター表現、2.5D アバター素材化、顔出しなし通話、カメラ入力、配信pet、coding agentのpresence、配信・動画導線。

### Agent / Orchestration

- MiMo-Code
- Headroom
- OpenFugu
- AI-Safeter / FUGU
- agency-agents
- Hermes Agent
- The Hitchhiker's Guide to Agentic AI
- Yorishiro

用途:

- 複数 AI 協調、AI エージェント、長期記憶、ルーティング最適化、専門エージェント役割設計、自己改善型 agent runtime、characterとterminalを接続するpresence harness。

### AI Coding Operations

- Ponytail
- deepsec
- agency-agents
- Hermes Agent
- anthropics/skills
- book-to-skill
- Superpowers
- Oracle
- pxpipe
- PixelRAG
- reviewable-html-workbench
- claude-real-video
- Claude Code運用ミス7選
- Memory Consolidation / Dream Review
- japanese-tech-writing / k16shikano gist
- textlint-rule-preset-ai-writing
- The Hitchhiker's Guide to Agentic AI
- Kura
- AKARI Video
- img2threejs

用途:

- AI コーディング運用改善、専門エージェント役割設計、multi-model review、reviewable HTML artifact、agent-readable video editing、video-to-LLM preprocessing、Japanese technical writing skill、agentic system reference、skill routing、token optimization、context compression、screenshot-based browsing、最小実装、長期文脈管理、作業分割、セキュリティレビュー、記憶整理。

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
- textlint-rule-preset-ai-writing
- claude-real-video
- book-to-skill

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
- MOSS-SoundEffect-v2.0
- VCamdroid
- LingBot-Map
- Kura
- Wakapippi Vocal Remover Extension
- 四葉公ラボ 配信ペット
- animede 3D Character Pipeline
- image-to-3d
- AKARI Video
- VoiceDenoiser
- speech-to-speech
- img2threejs

用途:

- 図解、画像編集、画面録画、動画取得、音声分離・前処理、文字起こし、local voice agent、動画解析、agentic video editing、動画生成、画像・動画からの3D asset化、auto-rig、音声生成、LoRA学習実験、2.5D アバター、レイヤー分解、仮想 Web カメラ、配信演出。

### Learning / Research Workflow

- Open Notebook
- Zotero
- Paperless-ngx
- Calibre
- Anki
- Excalidraw
- Buzz
- book-to-skill

用途:

- 学習、研究、文献管理、教材管理、間隔反復、オフライン文字起こし、図解作成を組み合わせた個人知識基盤。

### AI Workspace / Integrations

- takos
- takosumi
- takos-office
- takos-computer
- takos-storage
- takos-git
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

- takos
- takosumi
- yurucommu
- yurumeet
- takos-office
- takos-computer
- takos-storage
- takos-git
- yurucommu-core
- terraform-provider-takoform
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
- LingBot-Map（生成動画や実動画からの3D再構成を比較）

用途:

- 無限ワールド生成、プロシージャル生成、Minecraft Mod、ゲーム開発研究。生成と動画からの3D再構成を区別して比較する。

⸻

## 優先順位

### 最優先研究対象

- LingBot-Map
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
- Superpowers

### 次に試す

- takos
- takosumi
- Homepage
- n8n
- OpenCut
- PPT Master
- reviewable-html-workbench
- claude-real-video
- Recordly
- textlint-rule-preset-ai-writing
- Wakapippi Vocal Remover Extension
- 四葉公ラボ 配信ペット
- Yorishiro
- AKARI Video
- VoiceDenoiser
- Amicro
- book-to-skill
- img2threejs

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

- 分散通信基盤株式会社 / TAKOS
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
- textlint-rule-preset-ai-writing

### 研究対象

- yurucommu
- yurumeet
- takos-office
- takos-computer
- takos-storage
- takos-git
- yurucommu-core
- terraform-provider-takoform
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
- MOSS-SoundEffect-v2.0
- speech-to-speech
- animede 3D Character Pipeline
- image-to-3d

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
