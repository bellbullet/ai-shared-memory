# AI Hub

最終更新: 2026-07-16

## Goal

- AI、プロジェクト、公開物、共有知識の現在地を一画面で確認できる「AI開発管制Hub」を作る。
- Google AI Studio、Codex、GitHub、Portalを行き来する際の「どこに何があるか」を減らす。
- 将来のMemory Viewer、AIRI、AI Companionを登録できる共通の入口にする。

## Status

- AI Hub Lite Phase 01を`https://bellbullet.ai.studio/`へ公開済み。
- 静的データによるProjects、AI Tools、Current WorkをPortal内へ追加済み。
- デスクトップ、スマホ、外部リンク、Coming Soon、公開安全性、キャッシュ回避表示の公開後チェックを完了。
- 認証、APIキー、データベースを追加せず、更新負荷を観察する段階へ移行。

## Stack

- Portal: Vite / React / TypeScript / Tailwind CSS
- Project source of truth: GitHub
- Knowledge source: AI Shared Memoryの`PROJECTS/`、`CURRENT.md`、`TRIALS.md`
- Phase 01 data: Portal内の静的TypeScriptデータ

## MVP Scope

### Projects

- プロジェクト名
- Status
- Built with
- Public Site
- GitHub
- Documentation
- Last Updated
- Next Action
- Codex用ローカルcheckoutの有無（公開画面へ実パスは掲載しない）

### AI Tools

- ChatGPT
- Codex
- Google AI Studio
- Claude
- GitHub

### Current Work

- 現在の作業
- 最終更新
- 次の作業
- 公開状態

## Workflow

```text
Google AI Studio
  ↓ ZIP / GitHub
GitHub Repository
  ↓ clone / pull
Codex
  ↓ commit / push
GitHub Repository
  ↓ import / republish
Google AI Studio
```

AI Hubは同一編集セッションを共有する場所ではなく、この流れと各成果物へのリンクを示す案内板とする。

## Not Used in Phase 01

- 複数AIのAPI接続とチャット統合
- LibreChatのセルフホスト
- AIエージェント同士の自動会話
- 認証、履歴同期、料金集計、権限管理
- 動的なGitHub API、デプロイAPI、データベース

## Reason

- 最初に「AIを動かすHub」を作ると、認証、API、履歴、料金、権限管理が同時に必要になる。
- 静的な「AI作業を見渡すHub」なら小さく開始でき、すでにあるPortal、Shared Memory、GitHub運用をそのまま再利用できる。

## AI Instructions

- GitHubをコードと公開状態の原本として扱う。
- AI Shared Memoryを目的、現在地、次の作業、試用結果の原本として扱う。
- 公開画面や公開メモリにAPIキー、認証情報、個人情報、端末固有のローカルパスを記載しない。
- 未確認のLatest Commit、Deployment Status、Last Updatedを事実として表示しない。
- 静的MVPで利用実績ができるまで、API接続やオーケストレーション基盤を追加しない。

## Next Tasks

- Phase 01を数日使い、Status、Last Updated、Next Actionの更新負荷を観察する。
- 更新負荷が明確になった場合だけ、`PROJECTS/*.md`、`CURRENT.md`、`CHANGELOG.md`から静的データを生成する小さなビルド時スクリプトをPhase 02として検討する。
- Portal側へ手入力専用JSONを追加しない。
- GitHub最新更新、デプロイ状態、API・認証連携はこの順で後段に置く。

## Related Notes

- `CURRENT.md`
- `TRIALS.md`
- `NOTES/AI_Workspace_Ideas.md`
- `PROJECTS/AIRI.md`
- `PROJECTS/ScreenshotStitcher.md`
- `AI_DRAWERS.md`

## Reuse Candidates

- AI Workspace Portal - 既存のデザイン、ナビゲーション、公開入口を再利用する。
- AI Shared Memory - `PROJECTS/`、`CURRENT.md`、`TRIALS.md`をプロジェクト状況の情報源として再利用する。
- GitHub - プロジェクト原本、公開URL、更新履歴への中継点として再利用する。
- LibreChat / agmsg / Oracle / agency-agents - Phase 01では導入せず、複数AI連携が実際に必要になった段階の比較候補として保持する。

候補は導入済みを意味しない。実際に試した場合は`TRIALS.md`に結果を記録する。
