# AI_DRAWERS.md

最終更新: 2026-06-27

このファイルは ChatGPT・Codex・Claude・Gemini 等へ共有する技術レーダー兼ナレッジ保管庫。

⸻

## 運用ルール

### 新規追加

以下の形式で追加依頼する。

```text
引き出し追加
https://github.com/xxxx/yyyy
```

または

```text
引き出し追加 [AI]
https://github.com/xxxx/yyyy
```

### 整理依頼

`引き出し整理`

を実行すると

* 重複削除
* カテゴリ再分類
* 優先度更新
* 導入済み整理

を行う。

⸻

## 🤖 AI・エージェント

### DESIGN.md

https://github.com/google-labs-code/design.md

用途:

* AI向けデザインルール共有
* UI設計標準化

状態:

* 研究対象

⸻

### MiMo-Code

https://github.com/XiaomiMiMo/MiMo-Code

用途:

* Xiaomi製AIコーディングエージェント
* Claude Code比較研究

状態:

* 研究対象

⸻

### Headroom

https://github.com/chopratejas/headroom

用途:

* 長期記憶
* コンテキスト管理

状態:

* 研究対象

⸻

### Firecrawl

https://github.com/firecrawl/firecrawl

用途:

* AI向けWebデータ収集
* RAG構築

状態:

* 将来候補

⸻

### Whisper

https://github.com/openai/whisper

用途:

* 音声認識
* 字幕生成
* 文字起こし

状態:

* 導入推奨

⸻

## 🧠 AIオーケストレーター・マルチエージェント

### OpenFugu

https://github.com/trotsky1997/OpenFugu

概要:

* Sakana AI の Fugu アーキテクチャを参考にしたオープンソース実装
* 複数の LLM を協調させ、ルーティングや統合を行うオーケストレーター研究プロジェクト

用途:

* ローカル LLM の協調
* AI エージェント研究
* MoE・ルーティング実験

状態:

* 研究対象（優先度：★★★★☆）

⸻

### AI-Safeter / FUGU

https://github.com/AI-Safeter/FUGU

概要:

* Sakana Fugu の基盤研究で用いられる TRINITY 関連の最適化アルゴリズム（Sep-CMA-ES）の研究用実装
* LLM 本体ではなく、オーケストレーションの最適化手法に焦点を当てる

用途:

* AI ルーティング研究
* エージェント最適化
* Fugu 内部理解

状態:

* 研究対象（優先度：★★★☆☆）

メモ:

* Fugu / OpenFugu / MiMo-Code / Headroom などは「AIを管理するAI（オーケストレーター）」として整理候補

⸻

## 🌍 AI・生成AI / ゲーム開発・プロシージャル生成

### Terrain Diffusion

https://github.com/xandergos/terrain-diffusion

概要:

* 世界初の学習済みプロシージャル地形生成器
* InfiniteDiffusion の仕組みを利用し、無限に拡張可能な地形を決定論的（deterministic）に生成する

特徴:

* 学習済み AI による無限ワールド生成
* シードだけで世界を完全再現
* ランダムアクセス対応
* テレポートが O(1)
* ステートレス設計
* マルチプレイヤー対応しやすい
* 永続ストレージ不要
* VRAM 約 1.5GB
* RTX 3090 Ti 1枚で高速生成

用途:

* Minecraft Mod
* オープンワールドゲーム
* シミュレーション
* AI ワールド生成研究

関連リンク:

* Project: https://xandergos.github.io/terrain-diffusion/
* Paper: https://arxiv.org/abs/2512.08309
* Minecraft Mod: https://modrinth.com/mod/terrain-diffusion

キーワード:

* Diffusion
* Procedural Generation
* Infinite World
* Minecraft
* Game AI
* World Generation

状態:

* ★★★★★（最優先研究対象）

⸻

### InfiniteDiffusion

概要:

* 従来の Autoregressive 方式では難しかった「無限世界」を、決定論・ランダムアクセス・ステートレス設計で実現する拡散モデル技術
* 「Perlin Noise のようなプロシージャル生成」と「Diffusion Model」を融合した新しい方向性

技術ポイント:

* Training-free
* Random Access
* Deterministic
* Distributed Friendly
* Multiplayer Friendly
* Seed Only Sharing

関連リンク:

* Paper: https://arxiv.org/abs/2512.08309

状態:

* ★★★★★（最優先研究対象）

⸻

## 🛠 開発環境

### Greenlight

https://github.com/RevylAI/greenlight

用途:

* App Store審査チェック

状態:

* 研究対象

⸻

### Apple Container

https://github.com/apple/container

用途:

* Apple公式コンテナ環境
* Docker代替候補

状態:

* 研究対象

⸻

## 🏠 セルフホスト・ホームラボ

### Homepage

https://github.com/gethomepage/homepage

用途:

* 統合ダッシュボード
* サービス監視

状態:

* 次に試す

⸻

### Immich

https://github.com/immich-app/immich

用途:

* Google Photos代替
* AI顔認識
* 自動バックアップ

状態:

* 将来導入

⸻

### n8n

https://github.com/n8n-io/n8n

用途:

* ワークフロー自動化
* AI連携

状態:

* 次に試す

⸻

### LocalSend

https://github.com/localsend/localsend

用途:

* AirDrop代替
* Windows/iPhone/Android間転送

状態:

* 導入推奨

⸻

## 📄 仕事・事務

### Stirling PDF

https://github.com/Stirling-Tools/Stirling-PDF

用途:

* PDF編集
* OCR
* 結合
* 分割

状態:

* 導入推奨

⸻

### AppFlowy

https://github.com/AppFlowy-IO/AppFlowy

用途:

* Notion代替
* ローカル管理

状態:

* 将来導入

⸻

### Reactive Resume

https://github.com/AmruthPillai/Reactive-Resume

用途:

* 履歴書作成
* ポートフォリオ補助

状態:

* 保留

⸻

## 🎬 クリエイティブ

### OpenCut

https://github.com/OpenCut-app/OpenCut

用途:

* OSS動画編集
* CapCut代替候補

状態:

* 次に試す

⸻

### yt-dlp

https://github.com/yt-dlp/yt-dlp

用途:

* 動画取得
* 音声抽出
* Whisper連携

状態:

* 必要時利用

⸻

## 🇯🇵 日本語AI・ローカルLLM

### Susono Model

https://huggingface.co/collections/puwaer/susono-model

用途:

* 日本語向けモデル集
* ローカルLLM研究

状態:

* 研究対象

⸻

## 🧪 実験・調査保留

### tomari-guruguru

https://github.com/rotejin/tomari-guruguru

状態:

* 調査保留

⸻

### reviewable-html-workbench

https://github.com/u-ichi/reviewable-html-workbench

用途:

* HTMLレビュー支援

状態:

* 調査保留

⸻

### k16shikano gist

https://gist.github.com/k16shikano/fd287c3133457c4fd8f5601d34aa817d

状態:

* 内容確認待ち

⸻

## 優先順位

### 最優先研究対象

* Terrain Diffusion
* InfiniteDiffusion

### 導入推奨

* LocalSend
* Whisper
* Stirling PDF

### 次に試す

* Homepage
* n8n
* OpenCut

### 将来導入

* Immich
* AppFlowy

### 研究対象

* DESIGN.md
* Greenlight
* MiMo-Code
* Apple Container
* Headroom
* Susono Model
* OpenFugu
* AI-Safeter / FUGU

⸻

## AIへの指示

このファイルを読んだAIは以下を理解すること。

* ユーザーは新しいOSSやAI技術を継続収集している
* 導入済み候補と研究対象を区別する
* 新しいGitHubリンクが提示された場合は適切なカテゴリへ分類する
* 類似ツールがあれば比較候補として提案する
* 重複ツールは整理対象として指摘する
