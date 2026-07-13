# CHANGELOG

公開リポジトリとしての構成変更・運用ルール変更を記録します。

## 1.1.0 - Consolidated Memory Architecture (2026-07-13)

- `VERSION` を追加し、現在のバージョンを `1.1.0` として明示。
- `README.md`、`CHATGPT_PROJECT_SOURCE.md`、`CURRENT.md`、`STATUS.md` を2026-07-13時点の構成・焦点・ChatGPT Projects情報源へ同期。
- `README.md` の構成図に `references/CLAUDE_CODE_MAP.md` と `PROJECTS/ScreenshotStitcher.md` を追加。
- `AI_DRAWERS.md` 冒頭に登録規模、重点領域、最近の追加、単一ファイル維持方針を示すv1.1 snapshotを追加。
- `STATUS.md` と `REVIEW.md` にKnowledge Healthと次回Memory Review条件を追加。
- `AI_INDEX.md` に `VERSION` と `references/` の入口を追加。
- `TRIALS.md` を追加し、登録済み候補の試用、結果、採用判断、再利用条件を `AI_DRAWERS.md` から分離して記録できるようにした。
- `PROJECT_START.md` と `AGENTS.md` のKnowledge Scanを `Found / Reuse / Not used / Reason` へ拡張し、1作業あたりの積極利用候補を原則3つまでとした。
- `CHATGPT_PROJECT_INSTRUCTIONS.md` にも同じKnowledge ScanとTrial還元ルールを追加。
- `AI_INDEX.md` にTask-Based Reuseを追加し、やりたいことからPonytail、agmsg、Oracle、deepsec、reviewable-html-workbench、動画・文書・知識整理候補へ辿れるようにした。
- `PROJECTS/` の8ファイルと `TEMPLATES/PROJECT_TEMPLATE.md` へReuse Candidatesを追加し、候補であって導入済みではないことを保った。

- `AI_DRAWERS.md` に `fujibee/agmsg` を Agent / Orchestration、AI Coding Operations、Multi-Agent Collaborationの研究対象として追加。
- `AI_INDEX.md` に agmsg、cross-agent messaging、SQLite agent communication、agent-to-agent review の導線を追加。

## 2026-07-12

- `references/CLAUDE_CODE_MAP.md` を追加し、Claude Codeの概念レイヤー、エージェントループ、Tool / Skill / Plugin / MCPの違い、安全制御、Codex対応表、公式Docs導線を整理。
- `AI_DRAWERS.md` と `AI_INDEX.md` にClaude Code概念地図への導線を追加。変化しやすいモデル、Tool数、契約別仕様は固定的な事実として扱わない方針を明記。

## 2026-07-11

- `PROJECTS/ScreenshotStitcher.md` を追加し、ローカル完結のScreenshot Stitcher MVPをActive Projectとして記録。
- `STATUS.md` と `AI_INDEX.md` にScreenshotStitcherへの導線を追加。
- `AI_DRAWERS.md` に OpenAI の Prompting 公式入門を Reference Sites / Prompt Engineering の参考資料として追加。
- `NOTES/AI_Coding_Patterns.md` に Goal / Context / Output / Boundaries のプロンプト設計パターンを追加し、`AI_INDEX.md` に導線を追加。
- `AI_DRAWERS.md` に `nasa/spacewasm` を WebAssembly / Rust / Safety Critical / Embedded の研究対象として追加し、`AI_INDEX.md` に導線を追加。

## 2026-07-07

- `AI_DRAWERS.md` に `HUANGCHIHHUNGLeo/claude-real-video` を Creative / Video Analysis / AI Coding Operations / Knowledge Management の `次に試す` 項目として追加。
- `AI_INDEX.md` に claude-real-video、video analysis for LLM、scene-aware video frames、video to knowledge base の導線を追加。

## 2026-07-05

- `AI_DRAWERS.md` に Anime2.5DRig と `shitagaki-lab/see-through` を Creative / Avatar / Anime Layer Decomposition / AI Companion の研究対象として追加。
- `AI_INDEX.md` に Anime2.5DRig、see-through、single-image layer decomposition、2.5D avatar rig の導線を追加。
- `AI_DRAWERS.md` の `tomari-guruguru` を内容確認待ちから Creative / Avatar / PNGTuber / AITuber の研究対象へ更新。
- `AI_INDEX.md` に tomari-guruguru、トマリトーク、PNGTuber、AITuber avatar、25方向アバターの導線を追加。
- `AI_DRAWERS.md` の `reviewable-html-workbench` を調査保留から AI Coding Operations / Document Automation の `次に試す` へ更新。
- `AI_DRAWERS.md` の `k16shikano gist` を内容確認待ちから japanese-tech-writing / Japanese Technical Writing skill の参考資料へ更新。
- `AI_INDEX.md` に reviewable HTML、inline document review、Japanese technical writing、LLM writing skill の導線を追加。

## 2026-07-04

- `INBOX.md` に GitHub OSS 基礎体力セットとして、学習、Self Host、Agent、AI Coding、LLM / RAG、Creative 系リンクを一括保管。
- `AI_INDEX.md` に GitHub OSS 基礎体力セット / restored OSS links の導線を追加。
- `AI_DRAWERS.md` に学習・知識管理・ドキュメント管理系 OSS として Open Notebook、Excalidraw、Calibre、Buzz、Anki、Zotero、Paperless-ngx、ONLYOFFICE Docs、Recordly、PhotoGIMP、Odysseus を追加。
- `AI_DRAWERS.md` の Stirling PDF / AppFlowy と横断グループを、Learning / Research Workflow、Knowledge Management、Document Automation、Self Host / Tools、Creative Pipeline へ接続。
- `AI_INDEX.md` に NotebookLM alternative、offline transcription、spaced repetition、reference management、document archive、Learning / Research Workflow などの導線を追加。
- `AI_DRAWERS.md` に `darusc/VCamdroid` を Creative / Webcam / Android / Windows / Video Streaming の研究対象として追加。
- `AI_INDEX.md` に VCamdroid、Android webcam、virtual webcam、smartphone webcam の導線を追加。
- 公開ドキュメント内の個人環境パスを `<workspace-root>` / `<user-home>` へ置き換え、ローカル実値を Git 管理しない `LOCAL_ENVIRONMENT.md` に分離する方針を追加。
- `LOCAL_ENVIRONMENT.example.md` を追加し、`.gitignore` に local environment / `.env` 系ファイルを追加。
- `AI_DRAWERS.md` に `mnfst/awesome-free-llm-apis` を LLM / API Providers / Free Tier / Reference Sites の参考資料として追加。
- `AI_INDEX.md` に awesome-free-llm-apis、free LLM API、OpenAI compatible API、model fallback の導線を追加。
- `AI_DRAWERS.md` に `StarTrail-org/PixelRAG` を AI / RAG / Visual Retrieval / Knowledge Management の研究対象として追加。
- `AI_INDEX.md` に PixelRAG、visual RAG、pixel-native search、screenshot retrieval の導線を追加。
- `AI_DRAWERS.md` に `teamchong/pxpipe` を AI Coding Operations / Token Optimization / Context Compression の研究対象として追加し、text-as-image prompts の参考記事を関連付け。
- `AI_INDEX.md` に pxpipe、Context Compression、Token Optimization、optical compression、Claude Code token reduction の導線を追加。
- `AI_DRAWERS.md` に `NousResearch/hermes-agent` を Agent / Orchestration、AI Coding Operations、Skills、Knowledge Management の研究対象として追加。
- `AI_INDEX.md` に Hermes Agent、Hermes Skills、optional skills catalog、Unbroker、agent skill ecosystem security の導線を追加。
- `AI_DRAWERS.md` に `uzura89/kurashino-daicho` を Self Host / Local-first / Personal Data / Document Automation の研究対象として追加。
- `AI_INDEX.md` に kurashino-daicho、資産・契約台帳、Life Admin、local-first personal data tool の導線を追加。

## 2026-07-02

- `AI_DRAWERS.md` に The Hitchhiker's Guide to Agentic AI を Agentic AI / RAG / Memory / MCP / A2A / agent evaluation の大型参照資料として追加。
- `AI_INDEX.md` に Agentic AI guide、MCP、A2A、agent evaluation、observability、safety の導線を追加。
- `AI_DRAWERS.md` に `puppetlabs/puppet` を Infrastructure as Code / Configuration Management / HomeLab の研究対象として追加。
- `AI_INDEX.md` に Puppet、Configuration Management、Infrastructure as Code、HomeLab configuration management の導線を追加。
- `AI_DRAWERS.md` に `steipete/oracle` を multi-model review / MCP / ChatGPT Project Sources 支援の調査候補として追加。
- `AI_INDEX.md` に Oracle、second opinion、multi-model review、ChatGPT Project Sources automation の導線を追加。
- `AI_DRAWERS.md` に X 投稿由来の OSS / AI tool 10件を追加し、優先度高め6件と保留4件に分類。
- `AI_INDEX.md` に TradingAgents、LibreChat、HyperFrames、Agentic Inbox、VoxCPM、Nango などの導線を追加。
- `AI_DRAWERS.md` に `agency-agents` を Agent / Orchestration と AI Coding Operations の導入検討項目として追加。
- `AI_INDEX.md` に agency-agents、専門 AI エージェント、role agents への導線を追加。
- `AI_DRAWERS.md` に Memory Consolidation / Dream Review を AI Coding Operations / Knowledge Management / Agent Memory の採用候補として追加。
- `NOTES/AI_Coding_Patterns.md` に Memory Consolidation / Dream Review の運用パターンを追加。
- `REVIEW.md` に Memory Review のトリガーとチェック項目を追加。
- `LESSONS_LEARNED.md` に shared memory が定期統合なしでノイズ化する教訓を追加。
- `AI_INDEX.md` に memory dream / memory consolidation / Anthropic Dreams / dream-skill / Auto-Dreamer の導線を追加。
- `CHATGPT_PROJECT_SOURCE.md` の推奨情報源セクションを整形し、Memory Review 関連ファイルを追加。

## 2026-07-01

- `CHATGPT_PROJECT_SOURCE.md` を追加し、ChatGPT Projects の情報源に貼るための ai-shared-memory 要約を作成。
- `CHATGPT_PROJECT_INSTRUCTIONS.md` を追加し、ChatGPT Projects の指示欄に貼る短い運用ルールを作成。
- `WORKSPACE.md` と `CURRENT.md` の読み順を現行構成に合わせて更新。
- `README.md` と `AI_INDEX.md` に ChatGPT Projects 用ファイルへの導線を追加。

## 2026-06-30

- `AI_DRAWERS.md` に Google OKF を Knowledge Management / LLM Wiki / Metadata の研究対象として追加。
- `OKF.md` を追加し、Open Knowledge Format の採用候補、メリット、リスク、v1.1 以降の小規模試験導入案を整理。
- `README.md` と `AI_INDEX.md` に `OKF.md` への導線を追加。
- `NOTES/AI_Workspace_Ideas.md` を追加し、AI を仕事の入口に置く設計思想、repo を原本にする運用、人間が判断に集中する workflow を整理。
- `OUTPUTS/README.md` を追加し、Markdown 原本から生成した PDF / pptx / xlsx / 画像などの成果物置き場を定義。
- `STATUS.md` に Today's Decisions / Pending Decisions / Blocked / Waiting AI / Waiting Human を追加。
- `DECISIONS.md` に Decision Record Format を追加。
- `README.md` と `AI_INDEX.md` に `NOTES/AI_Workspace_Ideas.md` と `OUTPUTS/` への導線を追加。
- `AI_DRAWERS.md` に PPT Master を Development Workflow / Creative / Document Automation の `次に試す` 項目として追加。
- `AI_DRAWERS.md` の `横断グループ` に Document Automation を追加。
- `AI_INDEX.md` と `OUTPUTS/README.md` に PPT Master への導線を追加。
- `SKILLS/` を追加し、PowerShell / Python / Git / Research / Security の作業種別ルールを分離。
- `PROJECT_START.md` と `AGENTS.md` に Skill Routing を追加し、`AGENTS.md` を薄く保つ方針を明文化。
- `NOTES/AI_Coding_Patterns.md` を追加し、AGENTS.md と Skills の責務分離、file-based context、Reuse Before Build、release gate の設計パターンを整理。
- `README.md` と `AI_INDEX.md` に `SKILLS/` と `NOTES/AI_Coding_Patterns.md` への導線を追加。

## 2026-06-29

- `AI_DRAWERS.md` に Ponytail を AI Coding / Development Workflow の導入検討項目として追加。
- `AGENTS.md` と `PROJECT_START.md` に Minimal Implementation Policy を追加し、標準ライブラリ、既存依存、既存コード、共有知識を確認してから新規実装するルールを明文化。
- `AI_DRAWERS.md` の `横断グループ` に AI Coding Operations を追加。
- `AI_INDEX.md` に Ponytail、Minimal Implementation Policy、AI にコードを書かせすぎない運用への導線を追加。
- `AI_DRAWERS.md` に deepsec を AI Coding / Security の導入検討項目として追加。
- `SECURITY_REVIEW.md` を追加し、tests / AI-assisted security review / manual review / commit のリリース前チェック手順を定義。
- `AGENTS.md` と `PROJECT_START.md` に Security Review Policy を追加。
- `README.md`、`REVIEW.md`、`AI_INDEX.md` に `SECURITY_REVIEW.md` への導線を追加。

## 2026-06-28

- `AI_DRAWERS.md` に引き出し早見表を追加し、カテゴリの役割を明確化。
- `AI_DRAWERS.md` の `Agent` カテゴリを `Agent / Orchestration` として整理。
- `AI_DRAWERS.md` に `横断グループ` を追加し、AIRI、Creative Pipeline、Amazon Sale Monitoring、Infinite World Generation の関連項目を逆引き可能にした。
- `AI_INDEX.md` に `AI_DRAWERS.md` の横断グループへの導線を追加。
- `AI_DRAWERS.md` に `open-genai` を追加。
- `AI_INDEX.md` に `open-genai` の索引を追加。
- `PROJECTS/AIRI.md` の関連技術に `open-genai` を追加。
- `AI_DRAWERS.md` に `GPU / HPC` カテゴリを追加し、`CuPy` を登録。
- `AI_INDEX.md` に `CuPy` の索引を追加。
- `PROJECTS/AIRI.md` の関連技術に `CuPy` / `PyTorch` を追加。
- `AI_DRAWERS.md` に `Scientific Computing / Rust AI` カテゴリを追加し、`SciRS2` を登録。
- `AI_INDEX.md` に `SciRS2` の索引を追加。
- `PROJECTS/AIRI.md` の関連技術に `SciRS2` を追加。
- `AI_DRAWERS.md` の `Reference Sites` に Claude Code 運用記事を追加。
- `LESSONS_LEARNED.md` に長期文脈のファイル永続化、`PLAN.md`、セッション分割、compact 境界の教訓を追加。
- `PROJECT_START.md` と `AGENTS.md` に Task Planning / Session Boundaries ルールを追加。
- `AI_INDEX.md` に AI coding operations、`PLAN.md`、compact / session boundary の導線を追加。

## 2026-06-27

- `AGENTS.md` を追加し、複数 AI 向けの共通運用ルールを定義。
- `INBOX.md` を追加し、整理前の GitHub リンクやアイデアの一時置き場を定義。
- `TEMPLATES/PROJECT_TEMPLATE.md` と `TEMPLATES/NOTE_TEMPLATE.md` を追加。
- `README.md` を GitHub型 AI Shared Memory / LLM Wiki / 軽量 Second Brain 方針へ更新。
- `CURRENT.md` を AI が最初に読む現在地として簡潔化。
- `AI_DRAWERS.md` を `AI` / `Agent` / `LLM` / `Development` / `Creative` / `Self Host` / `Research` / `Ideas` に再分類。
- `AI_DRAWERS.md` の状態語彙と `INBOX.md` の追加フォーマットを調整。
- `PROJECTS/` を共通テンプレート構造へ更新。
- `NOTES/AI.md` / `NOTES/HomeLab.md` / `NOTES/Solar.md` / `NOTES/Vehicles.md` を追加。
- `SolarPower.md` / `VehiclePlan.md` は後方互換用ファイルとして残置。
- `AI_DRAWERS.md` に `Reference Sites` カテゴリを追加し、VTuber体験場を参考資料として登録。
- `WORKSPACE.md` を追加し、ワークスペース地図と作業開始時の読み順を分離。
- `AGENTS.md` の読み順を `WORKSPACE.md` → `AGENTS.md` → `CURRENT.md` に更新。
- `README.md` の構成図と読み順を `WORKSPACE.md` 起点に更新。
- `CURRENT.md` を新しい読み順に合わせて更新。
- `PROJECTS/` に local Codex projects の公開可能な runtime / Git / test metadata を分離。
- `AGENTS.md` に Knowledge Scan と Reuse Before Build の行動ルールを追加。
- `PROJECT_START.md` を追加し、作業開始時の入口を一本化。
- `LESSONS_LEARNED.md` を追加し、運用で学んだ問題、原因、対策を記録する場所を追加。
- `AI_INDEX.md` に Quick Lookup を追加し、キーワードから関連ファイルへ逆引きできるように更新。
- `REVIEW.md` を追加し、monthly review と project / knowledge review のチェック項目を定義。
- `STATUS.md` を追加し、workspace 全体の active projects / research areas / operating state を一覧化。
- `AI_PROFILES.md` を追加し、ChatGPT / Codex / Claude / Gemini の役割分担目安を整理。
- `DECISIONS.md` を追加し、重要な設計判断と採用理由を記録する場所を追加。
- GitHub link / OSS / paper / tool を `INBOX.md` または `AI_DRAWERS.md` に分類する運用ルールを強化。
- `AGENTS.md` に Update Suggestions を追加し、AI が関連ファイル更新候補を提案できるようにした。
