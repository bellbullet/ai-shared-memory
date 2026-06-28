# AI_DRAWERS.md

最終更新: 2026-06-27

このファイルは ChatGPT・Codex・Claude・Gemini 等へ共有する技術レーダー兼ナレッジ保管庫です。

## 目的

- OSS、AI 技術、開発ツール、研究対象、個人開発アイデアを分類する。
- 新しい GitHub リンクや公開論文を、複数 AI が再利用できる形で残す。
- 導入候補、研究対象、アイデアを混同しない。

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
- Agent
- LLM
- Development
- Creative
- Self Host
- Research
- Reference Sites
- Ideas

状態の例:

- 導入推奨
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

## Agent

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

- Fugu / OpenFugu / MiMo-Code / Headroom などは「AIを管理するAI（オーケストレーター）」として整理候補。

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

## 優先順位

### 最優先研究対象

- Terrain Diffusion
- InfiniteDiffusion

### 導入推奨

- LocalSend
- Whisper
- Stirling PDF

### 次に試す

- Homepage
- n8n
- OpenCut

### 将来導入

- Immich
- AppFlowy

### 将来候補

- Firecrawl
- Humation Swift

### 必要時利用

- yt-dlp

### 保留

- Reactive Resume

### 調査保留・内容確認待ち

- tomari-guruguru
- reviewable-html-workbench
- k16shikano gist

### 参考資料

- VTuber体験場

### 研究対象

- DESIGN.md
- Greenlight
- MiMo-Code
- Apple Container
- Headroom
- open-genai
- Susono Model
- OpenFugu
- AI-Safeter / FUGU
- Amazon Creators API SDK
- Humation

### 開発アイデア

- Amazon セール検知システム

⸻

## AIへの指示

このファイルを読んだ AI は以下を理解すること。

- ユーザーは新しい OSS や AI 技術を継続収集している。
- 導入候補、研究対象、開発アイデアを区別する。
- 新しい GitHub リンクが提示された場合は適切なカテゴリへ分類する。
- 類似ツールがあれば比較候補として提案する。
- 重複ツールは整理対象として指摘する。
- 不確かな分類は `INBOX.md` に置く。
