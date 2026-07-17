# INBOX

最終更新: 2026-07-17

整理前の GitHub リンク、OSS、論文、アイデア、調査候補を一時保管する場所です。

## 使い方

- まだ分類が決まっていない情報をここに置く。
- 公開できる情報だけを書く。
- 整理後は `AI_DRAWERS.md` / `PROJECTS/` / `NOTES/` へ移す。
- 移動済みの項目は削除するか、移動先リンクを残す。

## 追加フォーマット

```markdown
### Name

URL:

分類候補:

概要:

用途:

状態:

優先度候補:

メモ:
```

## 未整理

### 2026-07-04: GitHub OSS 基礎体力セット

分類前の GitHub / OSS リンク復元リスト。
量が多いため、まず INBOX に一括保管し、Memory Review または個別調査時に `AI_DRAWERS.md` へ移す。

方針:

- 既存登録済み: Firecrawl、TradingAgents、n8n。
- 重複除外: coding-interview-university、LangChain ecosystem、n8n の重複分。
- 要確認: llama.cpp は `ggml-org/llama.cpp` を優先候補にする。DeepSeek は特定 repo ではなく organization として扱う。
- 公開情報のみ保存する。API key、token、認証情報、個人アカウント、実ログは保存しない。

#### Reference Sites / Learning

- iFixAi: https://github.com/ifixai-ai/iFixAi
- public-apis: https://github.com/public-apis/public-apis
- build-your-own-x: https://github.com/codecrafters-io/build-your-own-x
- developer-roadmap: https://github.com/kamranahmedse/developer-roadmap
- free-programming-books: https://github.com/EbookFoundation/free-programming-books
- system-design-primer: https://github.com/donnemartin/system-design-primer
- coding-interview-university: https://github.com/jwasham/coding-interview-university
- the-art-of-command-line: https://github.com/jlevy/the-art-of-command-line
- project-based-learning: https://github.com/practical-tutorials/project-based-learning
- You-Dont-Know-JS: https://github.com/getify/You-Dont-Know-JS
- the-book-of-secret-knowledge: https://github.com/trimstray/the-book-of-secret-knowledge
- tech-interview-handbook: https://github.com/yangshun/tech-interview-handbook
- freeCodeCamp: https://github.com/freeCodeCamp/freeCodeCamp

#### Development

- javascript-algorithms: https://github.com/trekhleb/javascript-algorithms
- 30-seconds-of-code: https://github.com/Chalarangelo/30-seconds-of-code
- gitignore templates: https://github.com/github/gitignore

#### Self Host / AI UI

- awesome-selfhosted: https://github.com/awesome-selfhosted/awesome-selfhosted
- open-webui: https://github.com/open-webui/open-webui
- Lobe Chat: https://github.com/lobehub/lobe-chat

#### Agent / Orchestration / AI App Stack

- Ollama: https://github.com/ollama/ollama
- LangChain: https://github.com/langchain-ai/langchain
- OpenClaw: https://github.com/openclaw/openclaw
- Dify: https://github.com/langgenius/dify
- Langflow: https://github.com/langflow-ai/langflow
- mem0: https://github.com/mem0ai/mem0
- browser-use: https://github.com/browser-use/browser-use
- crewAI: https://github.com/crewAIInc/crewAI
- MetaGPT: https://github.com/geekan/MetaGPT
- AutoGen: https://github.com/microsoft/autogen
- Stagehand: https://github.com/browserbase/stagehand
- supermemory: https://github.com/supermemoryai/supermemory

#### AI Coding Operations / Security

- aider: https://github.com/Aider-AI/aider
- MarkItDown: https://github.com/microsoft/markitdown
- awesome-claude-skills: https://github.com/ComposioHQ/awesome-claude-skills
- Bumblebee: https://github.com/perplexityai/bumblebee
- Maigret: https://github.com/soxoj/maigret

#### LLM / RAG / Model Runtime

- transformers: https://github.com/huggingface/transformers
- vLLM: https://github.com/vllm-project/vllm
- llama.cpp: https://github.com/ggml-org/llama.cpp
- llama_index: https://github.com/run-llama/llama_index
- nanoGPT: https://github.com/karpathy/nanoGPT
- RAGFlow: https://github.com/infiniflow/ragflow
- DeepSeek organization: https://github.com/deepseek-ai

#### Creative

- ComfyUI: https://github.com/comfyanonymous/ComfyUI

#### Existing Items To Avoid Duplicating

- n8n: https://github.com/n8n-io/n8n
- TradingAgents: https://github.com/TauricResearch/TradingAgents
- Firecrawl: https://github.com/firecrawl/firecrawl

### 2026-07-15: X発見・一次情報確認済み候補

X上で発見した候補を、GitHub / Hugging Face / 公式販売ページ / 論文で再確認して役割別に統合した。検索件数やXの表示順位は技術評価に使わず、一次情報URLを正本とする。`AI_DRAWERS.md`へ昇格済みの項目は重複記載しない。

共通ゲート:

- インストール、ログイン、モデル取得、コード実行は未実施。
- skill / plugin / MCP / agent runtimeは、shell・Python・任意コード、Hook、書込み範囲、認証情報、外部送信を導入前に監査する。
- ライセンス未確認またはGitHub APIで明示されない項目は、ライセンス確認まで利用・再配布を保留する。

#### Agent / Shared Memory / Planning

- Rowboat: https://github.com/rowboatlabs/rowboat — 個人作業情報をローカルMarkdown知識グラフへまとめるAI coworker。Apache-2.0。X / Slack / Linear / Jira / GitHub連携の認証・外部送信を確認するまで保留。
- Claudian: https://github.com/YishenTu/claudian — Obsidian vaultをCodex等の作業ディレクトリとして使うplugin。MIT。vault読書きとbash実行を許すため、バックアップと権限境界の監査待ち。
- Tutti: https://github.com/tutti-os/tutti — 人と複数agentの会話・ファイル・タスクを共有するworkspace。Apache-2.0。Windows対応、認証、保存先、クラウド依存の追加確認待ち。
- AI-PLC: https://github.com/miyatti777/ai-plc — 目標から企画・実装・検証までの4段階Product Lifecycle。MIT。既存の`PROJECT_START.md` / `PLAN.md`と重なるため、丸ごと導入せず差分抽出候補。
- pm-skills: https://github.com/phuryn/pm-skills — PMのDiscovery、戦略、優先順位、実行、launchをskill化。MIT。Claude固有workflowとCodex互換性を個別評価する。
- MulmoClaude: https://github.com/receptron/mulmoclaude — Web UI、mobile、messaging、MCP、Docker sandboxを統合するClaude Code client。MIT。GitHub CLI資格情報転送とsandbox権限の脅威モデル確認待ち。
- hikkaku: https://github.com/pnsk-lab/hikkaku — TypeScriptからScratch projectを作るagent向けlibrary / skill。MIT。教育用途での生成物確認とScratch資産条件を確認する。
- codex-first: https://github.com/steipete/agent-scripts/blob/main/skills/codex-first/SKILL.md — Claude Codeを判断・レビュー、Codexを実装へ振り分ける第三者skill。repoはMIT。Codex自身から自己委任しない制約を維持する。
- last30days-skill: https://github.com/mvanhorn/last30days-skill — 複数Web / social sourceから直近30日を調査するskill。MIT。API key、Cookie、browser session、外部送信を扱う経路は導入しないまま保留。

#### Local AI / Multimodal

- Meetily: https://github.com/Zackriya-Solutions/meetily — Parakeet / Whisper、話者分離、Ollama要約を使うlocal meeting assistant。MIT。録音同意、組織規程、opt-in analyticsを確認する。
- Colibrì: https://github.com/JustVugg/colibri — 巨大MoEのexpertをdiskからstreamするpure C runtime。Apache-2.0。速度値は単発測定で、モデルweight license、storage、RAM、CPU要件の確認待ち。
- sound-efect: https://github.com/animede/sound-efect — Stable Audio 3 Small SFXを使う効果音生成app。repoのlicense表示がGitHub APIで確認できず、gated model、HF token、CUDA、Stability AI Community Licenseが必要なため保留。
- image-3d: https://github.com/animede/image-3d — Hunyuan3D-2を使う画像から3D / 3D printer向けpipeline。licenseはNOASSERTION。Linux / WSL2、約16〜32GB VRAM、model licenseの確認待ち。

#### Creative / UI / Video / 3D

- AnimeGen-T2V: https://huggingface.co/aidealab/AnimeGen-T2V — Wan 2.2 T2V A14Bベースのanime text-to-video model。Apache-2.0表記。RTX 4090以上推奨、学習データ詳細と既知の時間的一貫性制約を理由に研究候補のまま保留。
- MotionGen: https://superhivemarket.com/products/motiongen — 動画・sketchからrig animationを作るBlender向け商用tool。addon codeはMIT表記だが、edition別動画長、Windows + NVIDIA、license確認通信を伴うため保留。
- BlenderMCP: https://github.com/ahujasid/blender-mcp — LLMからBlenderのscene / object / materialを操作するMCP。MIT。Blender内で任意Pythonを実行できるため、sandboxと対象fileを限定するまで保留。
- ChatCut agent-plugin: https://github.com/ChatCut-Inc/agent-plugin — ChatCutの素材取込、timeline編集、字幕、書出しをagentから操作するplugin。GitHub APIでlicense未確認。OAuthとhosted MCPへの外部接続が必要なため保留。
- MengTo/Skills: https://github.com/MengTo/Skills — UI、frontend、reference capture、prompt化のagent skill集。MIT。各skillのbrowser操作、script、asset条件を個別レビューする。
- emilkowalski/skills: https://github.com/emilkowalski/skills — UI / animation / Apple Design判断をskill化。MIT。適用範囲、引用元、asset条件をskill単位で確認する。
- Astryx: https://github.com/facebook/astryx — agent-readyなReact design system。MIT。導入候補ではなく、人間向けdocsとAI向けCLIが同じ型付きdataを使う設計参考として保留。

#### Edge AI / Research

- MAD-OPD: https://github.com/chiefovoavicii/MAD-OPD / https://arxiv.org/abs/2605.01347 — multi-agent debateを教師側へ入れるon-policy distillation。Apache-2.0。GPU・学習費用と論文再現性の評価待ち。
- MMD-Reg: https://github.com/csiro-robotics/mmd-reg / https://arxiv.org/abs/2606.27818 — MMDとrandom Fourier featuresによる点群位置合わせ。GitHub APIでlicenseがNOASSERTION。CUDA環境と非決定的前処理を含むため保留。
- LA4VLA: https://github.com/MINT-SJTU/LA4VLA / https://arxiv.org/abs/2606.27295 — vision encoderをmaskしてlanguage-actionを先行学習するVLA研究。MIT。dataset / checkpoint / GPU要件と再現手順の評価待ち。

#### 役割比較

| 比較 | 役割差 |
| --- | --- |
| Backlog.md / AI-PLC / pm-skills | Backlog.mdはGit上の実行単位、AI-PLCは目標から検証までのlifecycle、pm-skillsはPM判断framework群。 |
| Graphify / Rowboat / Claudian | Graphifyはcode中心のknowledge graph、Rowboatは個人作業情報のMarkdown graph、ClaudianはObsidian vaultへagent UIと実行権限を接続。 |
| halo-record / loopeng-bootstrap | halo-recordは改ざん検知可能な証跡層、loopeng-bootstrapは監査可能な実行・受入・memory更新loop。 |
| Tutti / agmsg / codex-plugin-cc | Tuttiは共有workspace、agmsgはpeer session messaging、codex-plugin-ccはClaude CodeからCodexへの委譲。 |
| ccc-usage-dashboard / codex-hygiene | 前者は利用量・cost・quota観測、後者はcontext・tool surface・telemetry監査。 |
| LiteRT.js / onnx2tf | onnx2tfはmodel変換、LiteRT.jsは変換済みmodelをbrowserで実行するruntime。 |
| HyperFrames / ChatCut / BlenderMCP | HyperFramesはcode生成型video、ChatCutはOAuth経由の編集software連携、BlenderMCPは任意Pythonを含む3D制作連携。 |

### 2026-07-17: X `github.com`検索100件・一次情報確認済み候補

Xの「話題のポスト」で異なる投稿URLを100件確認した。過去の調査履歴と重複した投稿は4件、新しい投稿URLは96件。検索順位や投稿文は技術評価に使わず、GitHubのREADME、LICENSE、公式ドキュメントを正本とした。`Superpowers`と`textlint-rule-preset-ai-writing`は役割と制約が明確なため`AI_DRAWERS.md`へ昇格済み。

共通ゲート:

- インストール、ログイン、model download、コード実行、外部サービス接続は未実施。
- remote install script、shell / Python、MCP、Hook、browser / desktop操作、local DB、認証情報、外部送信を伴う候補は導入前に個別監査する。
- source codeのlicenseと、model weight、素材、SDK、生成物のlicenseを分けて確認する。

#### Agent / Codex Operations

- Grok Build: https://github.com/xai-org/grok-build — Apache-2.0のcoding agent harness / TUI。shell、web検索、MCP、Hook、headless実行、browser認証を扱う。公開treeは内部monorepoからの同期で、外部PRを受け付けない。Windowsのsource buildはbest-effort。
- RunCat Neo: https://github.com/runcat-dev/RunCatNeo — local JSON metricをmacOS menubarへ表示するApache-2.0 tool。macOS 26以上。`ccc-usage-dashboard`より軽量な汎用表示層だが、Windows運用には接続しない。
- Cua: https://github.com/trycua/cua — MITのcomputer-use driver、sandbox、benchmark基盤。MCP、desktop操作、VM、shellを含むため、host / sandbox / credential境界の監査待ち。
- herdr: https://github.com/ogulcancelik/herdr — terminal内agent multiplexer。AGPL-3.0-or-later / commercialのdual license。remote installer、Windows beta、複数agentのcommand実行範囲を確認する。
- wigolo: https://github.com/KnockOutEZ/wigolo — search、fetch、crawl、researchをlocal-first MCPへまとめるpublic beta。AGPL-3.0、Node 20以上、約1.5GB。browser engine / model download、agent設定書込み、外部Webアクセスを伴う。
- CX Notifier: https://github.com/GotoLu/cx-notifier-marketplace — Codex / Claude Codeの完了・承認をdesktopまたはwebhookへ通知するMIT tool。Hook、webhook secret、Bearer token、質問内容の外部送信範囲を確認する。
- EdgeEver: https://github.com/tianma-if/edgeever — Cloudflare D1 / R2 / Workers上のnote workspace、REST API、remote MCP。AGPL-3.0。Cloudflare token、session、初期credential、外部保存と課金条件の確認待ち。
- flyai-skill: https://github.com/alibaba-flyai/flyai-skill — 旅行在庫検索と予約候補を扱うMIT agent skill。外部サービス、認証、価格・在庫、予約などの取引確定境界を分離するまで保留。

#### Knowledge / Engineering

- pdf-brain: https://github.com/joelhooks/pdf-brain — PDF / MarkdownをOllama embeddingsとlibSQL vectorでlocal検索し、MCPで公開するMIT tool。Ollama / model download、local DB、remote installerが必要。`Open Notebook`はnotebook workspace、`PixelRAG`はpixel-native visual retrieval、pdf-brainはlocal document CLI / MCPという役割差。
- EasyEDA API Skill: https://github.com/easyeda/easyeda-api-skill — EasyEDA Pro APIとWebSocket bridgeをAI coding toolへ接続する。GitHub APIでlicense未確認。回路編集、extension、任意code execute endpointを含むため保留。
- Hallmark: https://github.com/Nutlope/hallmark — UI生成、audit、redesign、design studyを扱うCodex対応design skill。MIT。`MengTo/Skills`は広いUI制作skill集、`emilkowalski/skills`はdesign / motion判断群、Hallmarkはanti-pattern gateとmacrostructure選択へ集中する。

#### AIRI / Creative / Research

- text-to-vrma: https://github.com/Kirakun0328/text-to-vrma — VRM向けtext-to-motionとVRMA出力。sourceはMIT。OpenAI接続、Codex CLI、約20GBのARDY engine / model、同梱素材の別licenseを確認する。
- live2d-add-motion-sample-web-ui: https://github.com/shinshin86/live2d-add-motion-sample-web-ui — JSON編集とWeb UIでLive2D motionを追加・検証するsample。独自部分はMIT。Python / headless Chrome、Live2D Core CDN、model / SDKの別licenseを確認する。
- ComfyUI_VNCCS: https://github.com/AHEKOT/ComfyUI_VNCCS — visual novel向けの一貫したcharacter sprite生成suite。MIT。ComfyUI node、model、GPU、生成assetの利用条件を確認する。
- StarVector: https://github.com/joanrod/star-vector — image / textからSVG codeを生成するApache-2.0 foundation model。checkpoint、GPU、生成SVGの安全性と再現性の評価待ち。
- PiD: https://github.com/nv-tlabs/PiD — pixel diffusionによる高速・高解像latent decoding研究。GitHub APIのlicense表示はNOASSERTION。checkpoint / model licenseとGPU要件を確認する。
- qllm2: https://github.com/gowrav-vishwakarma/qllm2 — Transformer / Mambaと異なる構成を試すMIT研究prototype。性能主張を独立評価できる資料と再現条件が不足しているため研究保留。

#### 重複・除外

- 既登録または既調査の`agmsg`、`ai-shared-memory`、`openai/codex`、`gemini-cli`、`ChatCut`、`bark`、`whisper.cpp`は新規追加しない。
- system prompt leak、流出sourceの再実装、認証proxy、VPN / service制限回避、website cloneを違法用途として紹介する投稿は追加しない。
- Codex skin変更、一般utility、AIとの関係が薄いrepository、一次情報から再利用可能な運用パターンを確認できない投稿は技術項目にしない。
