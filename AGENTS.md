# AGENTS.md

このファイルは ChatGPT・Codex・Claude・Gemini など、複数 AI がこのリポジトリを扱うための共通ルールです。

## 目的

このリポジトリは、ChatGPT・Codex・Claude・Gemini など複数 AI が共通で参照する公開前提の Markdown 知識ベースです。

GitHub型 AI Shared Memory / LLM Wiki / 軽量 Second Brain として運用します。Notion や Obsidian のような個人知識管理の考え方も参考にしていますが、Obsidian 専用の vault ではありません。

## AI が読む順番

1. `PROJECT_START.md`
2. `WORKSPACE.md`
3. `STATUS.md`
4. `AGENTS.md`
5. `CURRENT.md`
6. `AI_INDEX.md`
7. 必要に応じて `SKILLS/`
8. 作業対象ファイル
9. `INBOX.md`
10. 必要に応じて `AI_DRAWERS.md` / `PROJECTS/` / `NOTES/`

`PROJECT_START.md` を入口にし、`WORKSPACE.md` で作業場所とディレクトリ役割を確認し、`CURRENT.md` で現在の焦点、待ち、次の行動を把握してから編集する。

## Skill Routing

`AGENTS.md` は全タスク共通ルールに絞る。

作業別の詳細ルールが必要な場合だけ、該当 skill を読む。

- PowerShell / Windows path / workspace checks → `SKILLS/PowerShell.md`
- Python / `.venv` / pytest / packaging → `SKILLS/Python.md`
- Git root / branch / commit / push / missing `.git` → `SKILLS/Git.md`
- External article / OSS / paper / source verification → `SKILLS/Research.md`
- Security review / release gate / risky code changes → `SKILLS/Security.md`

Project-specific knowledge is kept in `PROJECTS/`.

Cross-project knowledge is kept in `NOTES/`.

Rules that must be enforced mechanically should move to scripts, CI, tests, or checklists rather than prose.

## 編集ルール

- 公開情報のみ扱う。
- 事実、推測、アイデアを分けて書く。
- 出典 URL がある場合は残す。
- 未確認情報は断定しない。
- 既存の見出し構造と後方互換性をできるだけ維持する。
- 大きな再分類を行う場合は、元の情報を失わない。
- 整理前の情報は `INBOX.md` に置いてよい。

## Decision Rules

新しい GitHub リンク、OSS、論文、技術メモ、アイデアを受け取ったら、次の順で判断する。

1. 公開リポジトリに保存してよい情報か確認する。
2. GitHub link、OSS、paper、tool memo は会話だけに残さず、必ず `INBOX.md` か `AI_DRAWERS.md` への分類を検討する。
3. 分類が曖昧なら `INBOX.md` に追加候補として置く。
4. 類似 OSS や既存項目があるか `AI_DRAWERS.md` と `AI_INDEX.md` を確認する。
5. 技術レーダー項目なら `AI_DRAWERS.md` の適切なカテゴリへ分類する。
6. 特定プロジェクトに関係するなら `PROJECTS/` の `Related Notes` または `Next Tasks` に関連付ける。
7. 横断的な知識なら `NOTES/` に整理する。
8. 設計判断なら `DECISIONS.md` への追加を検討する。
9. 現在の焦点や次の行動に影響する場合のみ `CURRENT.md` への更新を提案する。
10. 構成や運用ルールを変えた場合は `CHANGELOG.md` に記録する。

## Knowledge Scan

新しい実装や調査を始める前に、既存知識を確認する。

1. `CURRENT.md`
2. 関連する `PROJECTS/`
3. 関連する `NOTES/`
4. `AI_DRAWERS.md`
5. 対象プロジェクトの README / docs / source

非自明な作業では、実装前に短く報告する。

```text
Knowledge Scan
Found:
- 既存プロジェクト、ノート、OSS、またはパターン
Reuse:
- 今回使う候補。原則3つまで
Not used:
- 見送る候補と理由。なければ none
Reason: 再利用できる理由、または新規実装が必要な理由
```

確認順は `AI_INDEX.md`、`AI_DRAWERS.md`、関連する `PROJECTS/`、関連する `NOTES/`、対象プロジェクトの README / docs / source とする。

候補を実際に試した場合は、結果を `TRIALS.md` に記録する。長期的な教訓、採用判断、技術レーダーの状態変更は、それぞれ `LESSONS_LEARNED.md`、`DECISIONS.md`、`AI_DRAWERS.md` へ戻す。

## Reuse Before Build

新しい実装を始める前に、既存 OSS、既存プロジェクト、過去知識、共有メモリで再利用可能なものがないか確認する。

再利用できるものがある場合は、新規実装より先に提案または利用する。

新規実装する場合は、既存知識を確認したうえで、その理由を短く記録する。

## Minimal Implementation Policy

新しいコードを書く前に、次を確認する。

1. そもそもこの実装は必要か。
2. 標準ライブラリで解決できないか。
3. ネイティブ機能や既存依存で解決できないか。
4. このリポジトリ内に同等機能がないか。
5. `Shared`、`PROJECTS/`、`NOTES/`、`AI_DRAWERS.md` に再利用できる実装や候補がないか。

新しい抽象化、ヘルパー、ユーティリティ、ラッパー、設定層を追加する前に、「追加しない選択肢」を検討する。

最小実装は手抜きではない。信頼境界の検証、データ損失対策、セキュリティ、アクセシビリティ、必要なエラー処理は削らない。

## Security Review Policy

大きい変更、公開リポジトリへの反映、リリース前、または次の領域を触る場合は、通常のテストに加えてセキュリティレビューを検討する。

- 認証、認可、セッション、Webhook
- API key、token、secret、`.env`
- ファイルアップロード、パス処理、アーカイブ展開
- コマンド実行、subprocess、shell
- SSRF、XSS、path traversal、injection の入口
- 個人情報、ログ、外部送信、権限境界

推奨フロー:

1. tests / lint / typecheck
2. AI-assisted security review, when warranted
3. Manual review of findings
4. Fix and re-run targeted checks
5. Commit / push / release

`deepsec` のような AI security review harness は、毎回ではなく、大きい PR、公開前、リリース前、またはリスクの高い変更で使う候補とする。

## Task Planning and Session Boundaries

大きな作業、複数ファイル編集、長時間作業、または中断・再開がありそうな作業では、実装前に `PLAN.md` の作成または更新を検討する。

`PLAN.md` は会話の代わりに長期文脈を保持するための作業計画ファイルとして使う。

最低限、次を含める。

- Goal
- Scope
- Steps
- Verification
- Handoff notes

運用ルール:

- 長期文脈は会話だけに残さず、ファイルへ永続化する。
- タスクが変わったら、作業単位またはセッションを分ける。
- 実装途中の compact / 圧縮は避け、区切りのよいタイミングで行う。
- 小さな単発修正では、会話内の短い計画でよい。

## Update Suggestions

作業中または作業後に、次の更新候補があれば AI 側から提案する。

- 新しい GitHub link / OSS / paper / tool → `INBOX.md` または `AI_DRAWERS.md`
- Project の目的、状態、runtime、test、deploy 変更 → `PROJECTS/`
- 横断的な知識 → `NOTES/`
- 作業種別ごとの詳細ルール → `SKILLS/`
- 繰り返したくない失敗 → `LESSONS_LEARNED.md`
- 設計判断や採用理由 → `DECISIONS.md`
- workspace 全体の状態変化 → `STATUS.md`
- よく探すキーワード → `AI_INDEX.md`
- 試用結果、採用判断、再利用条件 → `TRIALS.md`
- 定期点検項目 → `REVIEW.md`
- 構成や運用ルール変更 → `CHANGELOG.md`

提案時は、対象ファイル、理由、追記する概要を短く示す。

## Task Execution Rules

- 長期文脈は会話ではなく、必要なファイルへ永続化する。
- 大きな作業は実行前に `PLAN.md` へ分解する。ただし一時的な実行計画だけで済む場合は、最終的に残す必要はない。
- タスクの目的が変わったら、新しいセッションまたは新しい作業単位へ分ける。
- compact / 圧縮は実装途中ではなく、作業の区切りで行う。
- `AGENTS.md` は肥大化させず、詳細な教訓は `LESSONS_LEARNED.md` に分離する。

## 保存してよい情報

- OSS
- GitHub リポジトリ
- 技術メモ
- AI 知識
- 設計思想
- アーキテクチャ
- 学習内容
- 公開論文
- プロジェクト概要

## 保存しない情報

- API キー
- Token
- Cookie
- Webhook
- 契約内容
- 見積金額
- 住所
- 電話番号
- ローカルパス
- ローカル環境設定
- Windows username
- 個人情報
- 認証情報

## PROJECTS の扱い

`PROJECTS/` は個別プロジェクトの公開可能な概要を置く場所。

各ファイルは最低限、次を持つ。

- Goal
- Status
- Stack
- AI Instructions
- Next Tasks
- Related Notes
- Reuse Candidates

新規作成時は `TEMPLATES/PROJECT_TEMPLATE.md` を使う。

## NOTES の扱い

`NOTES/` はプロジェクトから独立した知識ベース。

例:

- `AI.md`
- `HomeLab.md`
- `Solar.md`
- `Vehicles.md`

新規作成時は `TEMPLATES/NOTE_TEMPLATE.md` を使う。

## SKILLS の扱い

`SKILLS/` は PowerShell、Python、Git、Research、Security など、作業種別ごとの詳細ルールを置く場所。

`AGENTS.md` に詳細手順を増やしすぎず、必要なときだけ該当 skill を読む。

## AI_DRAWERS の扱い

`AI_DRAWERS.md` は OSS、AI 技術、開発ツール、研究対象、個人開発アイデアの技術レーダー。

各項目は原則として次を持つ。

- 概要
- 用途
- 状態
- 優先度

実際に試した項目は `TRIALS.md` に詳細を記録し、`AI_DRAWERS.md` には結果と再利用条件の要約を戻す。

推奨カテゴリ:

- AI
- Agent / Orchestration
- LLM
- Development
- Creative
- Self Host
- Research
- Reference Sites
- Ideas

## 新規知識追加時のルール

1. 公開可能か確認する。
2. URL、概要、用途、状態、優先度を分ける。
3. 分類が明確なら `AI_DRAWERS.md` / `PROJECTS/` / `NOTES/` に追加する。
4. 分類が曖昧なら `INBOX.md` に追加する。
5. 重複や類似ツールがあれば、比較候補としてメモする。
