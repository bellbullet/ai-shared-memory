# TRIALS

最終更新: 2026-07-13

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
| agmsg | ScreenshotStitcher | Codexと別CLIエージェント間の小規模なレビュー引き継ぎ | Planned |

開始条件:

- reviewable-html-workbench: 次にレビュー対象となるHTML文書または設計成果物ができたとき。
- agmsg: 公開可能な小規模リポジトリで、Git Bash、SQLite保存先、権限境界を確認できるとき。

## Specialist Tools

- deepsec: 大きい変更、公開前、リリース前、認証・Webhook・ファイル処理・コマンド実行など高リスク変更で検討する。
- Oracle: 難しい設計判断、原因不明の不具合、release readinessのセカンドオピニオンが必要なときに検討する。

## Trial Records

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
