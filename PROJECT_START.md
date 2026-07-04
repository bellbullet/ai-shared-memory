# PROJECT_START

最終更新: 2026-06-30

新しい作業やプロジェクト作業を始める AI は、まずこのファイルを読む。

## Start Here

1. `WORKSPACE.md` で workspace root とディレクトリ役割を確認する。
2. `STATUS.md` で workspace 全体の現在地を確認する。
3. `AGENTS.md` で AI の行動ルールを確認する。
4. `CURRENT.md` で現在の焦点、待ち、次の行動を確認する。
5. `AI_INDEX.md` で関連ファイルを探す。
6. 必要なら `SKILLS/` から作業種別の詳細ルールを読む。
7. 対象プロジェクトの README / docs / source を読む。

## Skill Routing

必要な場合だけ読む。

- PowerShell / Windows path / workspace checks → `SKILLS/PowerShell.md`
- Python / `.venv` / pytest / packaging → `SKILLS/Python.md`
- Git root / branch / commit / push / missing `.git` → `SKILLS/Git.md`
- External article / OSS / paper / source verification → `SKILLS/Research.md`
- Security review / release gate / risky code changes → `SKILLS/Security.md`

## Required Checks

作業開始時に確認する。

- Working Directory
- Git Root
- Runtime
- `.venv`, if the project uses Python

ユーザーのホームディレクトリを project root として扱わない。

PowerShell コマンドを提示する場合は、必ず先に作業フォルダを示す。

```powershell
cd <workspace-root>\Projects\<project-name>
```

実際の workspace root、Windows username、ローカル環境の詳細は Git 管理しない `LOCAL_ENVIRONMENT.md` に置く。

## Knowledge Scan

非自明な作業では、実装前に既存知識を確認して短く報告する。

```text
Knowledge Scan
Found: <existing project, note, OSS, or pattern>
Reuse: <what will be reused, or "none">
Reason: <why this is enough or why new implementation is needed>
```

確認先:

1. `CURRENT.md`
2. `PROJECTS/`
3. `NOTES/`
4. `AI_DRAWERS.md`
5. 対象プロジェクトの README / docs / source

## Git Safety

Git root が見つからない場合:

1. Git 管理が必要か判断する。
2. Git が必要そうなら、勝手に `git init` しない。
3. remote 追加、history 再作成、削除はユーザー確認後に行う。
4. 原因と推奨対応だけ報告する。

## Reuse Before Build

新規実装より先に、既存 OSS、既存プロジェクト、過去知識、共有メモリを確認する。

再利用できるものがある場合は、先に提案または利用する。

## Minimal Implementation

新しいコードを書く前に確認する。

1. その実装は本当に必要か。
2. 標準ライブラリで足りるか。
3. ネイティブ機能や導入済み依存で足りるか。
4. 対象リポジトリ内に同等機能があるか。
5. `Shared`、`PROJECTS/`、`NOTES/`、`AI_DRAWERS.md` に再利用候補があるか。

新しい抽象化、ヘルパー、ユーティリティ、ラッパーを追加する前に、追加しない選択肢を検討する。

ただし、信頼境界の検証、データ損失対策、セキュリティ、アクセシビリティ、必要なエラー処理は削らない。

## Security Review

大きい変更、公開前、リリース前、または認証・Webhook・API・ファイル処理・コマンド実行・アップロード処理を触る場合は、`SECURITY_REVIEW.md` を確認する。

基本フロー:

1. tests / lint / typecheck
2. 必要に応じて deepsec などの AI security review
3. 手動レビュー
4. 修正
5. commit / push / release

deepsec は毎回実行するものではなく、リスクの高い変更や節目で使う候補とする。

## Task Planning

大きな作業、複数ファイル編集、長時間作業、再開が必要になりそうな作業では、実装前に `PLAN.md` の作成または更新を検討する。

`PLAN.md` には最低限、次を置く。

- Goal
- Scope
- Steps
- Verification
- Handoff notes

小さな単発修正では、会話内の短い計画でよい。

## Session Boundaries

長期文脈は会話だけに残さず、必要に応じてファイルへ永続化する。

- タスクが変わったら、新しいセッションや新しい作業単位に分ける。
- 実装途中の compact / 圧縮は避け、区切りのよいタイミングで行う。
- 再開に必要な情報は `CURRENT.md`、`PROJECTS/`、`NOTES/`、`PLAN.md`、`CHANGELOG.md` などに残す。

## Public Safety

この repository には公開可能な情報だけを書く。

保存しない:

- API key
- Token
- Cookie
- Webhook
- `.env` の実値
- 個人情報
- 認証情報
- ローカルパス
- ローカル環境設定
- ローカル端末固有ログ

## Finish Loop

作業後、必要に応じて次を更新する。

- `STATUS.md` - active project や workspace 状況が変わった場合
- `AI_INDEX.md` - よく探すキーワードや参照先が増えた場合
- `LESSONS_LEARNED.md` - 同じ失敗を繰り返したくない場合
- `DECISIONS.md` - 設計判断や採用理由を残す場合
- `SECURITY_REVIEW.md` - セキュリティレビュー手順や release gate を変えた場合
- `SKILLS/` - 作業種別ごとの詳細ルールを変えた場合
- `INBOX.md` / `AI_DRAWERS.md` - 新しい GitHub link、OSS、paper、tool を分類する場合
- `PROJECTS/` - project 固有の目的、状態、runtime、test、deploy が変わった場合
- `CHANGELOG.md` - 構成や運用ルールを変更した場合
- `REVIEW.md` - 定期点検項目を見直した場合

AI は、更新が必要そうなファイルを見つけたら、ユーザーに更新候補として提案する。
