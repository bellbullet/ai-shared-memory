# TRIALS

最終更新: 2026-07-29

登録済みの OSS、AI 技術、運用パターンを実際の作業で試し、採用判断へつなげるための記録です。

`AI_DRAWERS.md` は技術レーダーと判断要約を保持し、詳しい試用経過はこのファイルに置きます。

## Rules

- 1つの作業で積極利用する候補は原則3つまでにする。
- 作業開始時の Knowledge Scan で、使う候補と使わない候補の理由を短く示す。
- 秘密情報、個人情報、非公開コード、ローカル固有ログは記録しない。
- 試用後は結果、判断、再利用条件を記録する。
- 長期的な教訓は `LESSONS_LEARNED.md`、採用した設計判断は `DECISIONS.md`、技術レーダー上の状態変更は `AI_DRAWERS.md` に戻す。

## Result Vocabulary

- `有効`: 目的を満たし、同条件で再利用できる。
- `条件付き有効`: 条件や制約を守れば再利用できる。
- `不採用`: 目的に合わない、またはコスト・リスクが利益を上回る。
- `未評価`: 試用前、または判断に十分な結果がない。

## Decision Vocabulary

- `Adopted`: 標準候補として再利用する。
- `Trial継続`: 追加検証が必要。
- `Specialist`: 条件が合うときだけ使う。
- `Archived`: 現時点では使用しない。

## Trial Queue

| Candidate | First target | Purpose | State |
| --- | --- | --- | --- |
| reviewable-html-workbench | ai-shared-memory / `OUTPUTS/` | AI生成文書やHTML成果物への範囲指定レビュー | Planned |
| agency-agents lightweight roles | ScreenshotStitcher | Security EngineerとReality Checkerの軽量役割を実開発の受入判定で評価 | Prepared |
| agmsg | ScreenshotStitcher | Codexと別CLIエージェント間の小規模なレビュー引き継ぎ | Planned |
| Claude Code Desktop session title refresh | public-safe test project | session title自動更新の有効性と副作用確認 | Not started |

開始条件:

- reviewable-html-workbench: 次にレビュー対象となるHTML文書または設計成果物ができたとき。
- agency-agents lightweight roles: 20枚制限の実装差分と検証結果がそろったとき。外部CLIやHooksは前提にしない。
- agmsg: 公開可能な小規模リポジトリで、Git Bash、SQLite保存先、権限境界を確認できるとき。
- Claude Code Desktop session title refresh: 公式情報と実機でsession一覧、event取得、title変更、定期実行の利用可否を確認できるとき。session増殖、誤命名、履歴消失、不要なtool callが起きないことを確認するまで標準運用にしない。

## Specialist Tools

- deepsec: 大きい変更、公開前、リリース前、認証・Webhook・ファイル処理・コマンド実行など高リスク変更で検討する。
- Oracle: 難しい設計判断、原因不明の不具合、release readinessのセカンドオピニオンが必要なときに検討する。

## Trial Records

### 2026-07-16 agency-agents lightweight roles / ScreenshotStitcher 20-image limit

対象:

- `ScreenshotStitcher` の画像追加上限20枚
- Trial用 `Security Engineer` と `Reality Checker`

目的:

- 専門役割が通常レビューより具体的で修正可能な指摘を生むか確認する。
- 接続成功ではなく、レビュー、修正、再検証、人間の採否判断まで一つの開発フローとして評価する。

結果:

- 未評価

準備済み:

- 2役を正式な `AI_PROFILES.md` へ追加せず、`NOTES/AI_Behavior_Candidates.md` のTrial候補として分離した。
- 現状コードではUIに20枚表示がある一方、`load` に上限処理がなく、超過画像もデコードとObject URL作成の対象になることを確認した。
- 実装要件、Codex用プロンプト、Claudeレビュー用プロンプトを `NOTES/ScreenshotStitcher_20_Image_Limit_Trial.md` に準備した。
- `agmsg`、Claude Code、SQLite、Hooksは導入していない。

成功条件:

- Security Engineerの指摘が、ファイル位置、失敗条件、重大度、最小修正案を持つ。
- Codexが採用した指摘を修正し、対象テストとtest / build / lintを再実行できる。
- Reality Checkerが要件ごとの証拠と未確認項目を分け、`Pass / Conditional / Fail` を返す。
- 人間が役割間の履歴、差分、検証結果から採否を判断できる。

中止条件:

- Trial準備のために外部CLI、SQLite、Hooks、常駐処理の導入が必要になる。
- 非公開画像、秘密情報、個人情報、ローカル固有ログを役割間で共有する必要が生じる。
- 20枚制限から巨大画像対策、結合アルゴリズム、UI全面改修へ範囲が広がる。
- 既存のtest / build / lintが変更前から失敗し、今回の差分を独立評価できない。
- レビューが根拠のない一般論だけで、具体的な修正または採否判断につながらない。

判断:

- Trial継続

正式採用条件:

- 異なる2〜3件の実利用で、見落とし防止、修正品質、完了判断のいずれかに再現可能な改善がある。
- 役割選択コストが低く、既存の通常レビューや `SECURITY_REVIEW.md` と責務を区別できる。

反映先:

- `NOTES/AI_Behavior_Candidates.md`
- `NOTES/ScreenshotStitcher_20_Image_Limit_Trial.md`
- `PROJECTS/ScreenshotStitcher.md`

### 2026-07-16 AI Hub Lite Phase 01

対象:

- BellBullet AI Workspace Portalの静的AI開発管制Hub

目的:

- プロジェクト、使用AI、現在作業、公開物、共有知識への導線を一画面で確認できるようにする。
- API、認証、データベースを追加せず、管制盤としての実用性を確認する。

結果:

- 有効

有効だった点:

- 静的データだけでも、各プロジェクトのStatus、使用AI、Next Action、公開URL、GitHub、Documentationを一か所で確認できた。
- 既存のPortalデザイン、AI Shared Memory、GitHubを再利用し、新しい認証・APIキー・データベースなしで公開できた。
- Google AI Studio、GitHub、Codex、公開Portalをつなぐ案内板として機能した。
- `bellbullet.ai.studio`への再公開後、AI Hubの表示と`PROJECTS/AIHub.md`へのDocumentationリンクを確認できた。
- 公開後チェックで、スマホ390px幅の横はみ出しなし、Projects / AI Tools / Current Work、Coming Soon 3件、外部リンク、公開安全性、キャッシュ回避表示、実行ログ0件を確認できた。
- 2026-07-17 18:50:06 JSTの再公開で、1023px以下の従来Portalと1024px以上のBellbullet Workspace表示を公開URLへ反映できた。
- 公開URLでWorkspace OS本体とConsole errorなしを確認し、MVPを「公開済み・観察中」へ移行した。

問題:

- Phase 01は静的データのため、Status、Last Updated、Next Actionは手動更新になる。
- CodexからGoogle AI Studioへの反映は、GitHub pushだけでは完結せず、AI Studio側でコード反映とRepublishが必要だった。
- 再公開後もAI Studio上に未公開差分が残っている。公開済み本体とは分けて扱い、差分内容を確認するまで追加のRepublishは行わない。

判断:

- Adopted

再利用条件:

- まず静的表示を運用し、実際の更新負荷を観察する。
- Status、Last Updated、Next Actionの更新負荷が明確になった場合だけ、`PROJECTS/*.md`や`CURRENT.md`からのビルド時取得をPhase 02として検討する。
- 複数AIのAPI統合、認証、履歴同期、データベースは、管制盤の利用実績から必要性が確認されるまで追加しない。

反映先:

- `PROJECTS/AIHub.md`
- `CURRENT.md`
- `AI_INDEX.md`
- BellBullet AI Workspace Portal

### 2026-07-15 VitePress / GitHub Pages

対象:

- ai-shared-memory の公開閲覧サイト

目的:

- 既存Markdownを原本として維持しながら、検索性、ナビゲーション、現在地の見やすさを改善する。

結果:

- 有効

有効だった点:

- VitePressで既存Markdownを大きく移動せずサイト化できた。
- 日本語UI、ダークモード、ローカル全文検索、GitHub上の原本への導線を追加できた。
- `base: "/ai-shared-memory/"` でGitHub Pagesのサブパス配信に対応できた。
- `main` へのpushからGitHub Actionsによるビルドとデプロイが成功し、公開URLの表示を確認できた。

問題:

- GitHub Actionsの実行環境更新に伴う非致命的なNode.js互換性注記があるため、利用Actionの更新状況を継続確認する。

判断:

- Adopted

再利用条件:

- リポジトリ名に合わせた `base` を設定し、PagesのSourceをGitHub Actionsにする。
- 公開前に `npm ci`、`npm run docs:build`、内部リンク、公開対象、秘密情報の混入を確認する。

反映先:

- `CHANGELOG.md`
- `STATUS.md`
- `.vitepress/`
- `.github/workflows/deploy-pages.yml`

### 2026-07-13 Memory Consolidation / Dream Review

対象:

- ai-shared-memory v1.1

目的:

- staleな入口情報、未整理INBOX、索引、Project metadata、Memory Review条件を可視化する。

結果:

- 有効

有効だった点:

- README、ChatGPT Projects情報源、CURRENT、STATUSの更新差を検出できた。
- `INBOX.md` の未整理47リンクと `AI_DRAWERS.md` の規模をKnowledge Healthとして可視化できた。
- 全面分割を避けたまま、次回レビュー条件を明示できた。

問題:

- 件数などの統計はファイル追加・分類後に再計算する必要がある。

判断:

- Adopted

再利用条件:

- 入口ファイルの不一致、大きな構成変更、20〜30件の新規リンク、重複増加のいずれかが発生したとき。

反映先:

- `STATUS.md`
- `REVIEW.md`
- `CURRENT.md`
- `AI_DRAWERS.md`

### 2026-07-13 Ponytail / Minimal Implementation Policy

対象:

- 全開発作業の事前判断

目的:

- 新規コード、抽象化、依存関係を増やす前に、標準機能・既存依存・既存コード・共有知識の再利用を確認する。

結果:

- 有効

有効だった点:

- `PROJECT_START.md` と `AGENTS.md` の Minimal Implementation Policy として既に運用できる。
- 外部パッケージを導入せず、思想だけを全プロジェクトへ適用できる。

判断:

- Adopted

再利用条件:

- 新規実装、依存追加、共通化、ラッパー作成を検討するとき。

メモ:

- Ponytail本体を全プロジェクトへ自動導入したという意味ではない。

## Trial Template

```markdown
### YYYY-MM-DD Name

対象:

目的:

結果:
- 有効 / 条件付き有効 / 不採用 / 未評価

有効だった点:

問題:

判断:
- Adopted / Trial継続 / Specialist / Archived

再利用条件:

反映先:
```
