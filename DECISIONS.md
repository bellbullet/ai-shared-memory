# DECISIONS

設計判断と、その理由を残すファイル。

`LESSONS_LEARNED.md` は「問題、原因、対策」を記録する。  
`DECISIONS.md` は「問題がなくても、なぜその設計を選んだか」を記録する。

公開可能な情報だけを書く。秘密情報、認証情報、個人情報、端末固有ログは記録しない。

## Decision Record Format

新しい設計判断は、原則として次の形で書く。

```markdown
### Decision: <title>

Date:

Decision:

Reason:

Alternatives:

Chosen:

Review Date:

Result:
```

最低限、Decision / Reason / Alternatives / Chosen / Result は分ける。

`Review Date` は、後で見直す前提の判断だけに設定する。恒久的な workspace rule には `Not scheduled` と書いてよい。

## 2026-08-02

### Decision: 新規プロジェクトではCloudflareを標準候補に含める

Decision:

- 新規開発のhosting / application platform選定では、Vercelなどに決め打ちせずCloudflareも標準候補として比較する。
- 新しい静的site、Vite SPA、PWAをCloudflareへ配置する場合は、Cloudflare PagesよりWorkers Static Assetsを先に評価する。
- Workers、D1、R2、KV、Durable Objects、Queues、Workflowsは、要件に合うものだけを選び、単一platformへまとめること自体を目的にしない。

Reason:

- Cloudflareは静的asset配信、edge compute、SQL、object storage、stateful coordination、queue / workflowを同じdeveloper platformで提供している。
- Cloudflare公式は、新規の静的site、SPA、full-stack appにWorkers Static Assetsを推奨し、新機能と最適化をWorkersへ集中している。
- 初期設計時に比較すれば、hosting、backend、storage、background processingの境界を後から移すcostを判断しやすい。
- 一方で、単一のX投稿やfree tierだけでは、個別projectの運用性、互換性、lock-in、security、migration costを証明できない。

Alternatives:

- 新規projectを常にVercel中心で始める。
- 新規projectを常にCloudflareへ統一する。
- 安定稼働中の既存projectもplatform統一のために移行する。

Chosen:

- architecture、cost、運用負荷、deployment / rollback、lock-in、将来拡張をprojectごとに比較して選ぶ。
- Next.js固有機能、既存のSupabase / PostgreSQL設計、認証、Realtime、transaction境界などを維持する価値が高い場合は、Vercelや既存backendを継続候補とする。
- 安定稼働中の既存projectは、具体的な利益と分離した検証計画がない限り移行しない。
- 判断が割れる場合は、productionを変更せず別originへ同じartifactをshadow deployし、PWA、cache更新、online flow、rollbackを比較する。

Review Date:

- 2026-11-02、またはCloudflare / Vercelのpricing、limits、recommended deployment pathが大きく変わった時点。

Result:

- 今後の新規projectではCloudflareを比較表へ含める。
- Cloudflare採用時の新規静的frontendはWorkers Static Assetsから検討する。
- 既存projectの移行は自動的には行わない。

Sources:

- https://x.com/yusukebe/status/2079825908547060206
- https://x.com/yusukebe/status/2079821317071909188
- https://x.com/catnose99/status/2079777959167340607
- https://developers.cloudflare.com/workers/best-practices/workers-best-practices/
- https://developers.cloudflare.com/workers/static-assets/
- https://developers.cloudflare.com/workers/platform/pricing/

## 2026-07-25

### Decision: Obsidianを既存Markdownの任意UIとして追加する

Decision:

- Repository rootをそのままObsidian Vaultとして開ける最小設定と案内層を追加する。
- 既存Markdown、Git history、AIの読み順を正本として維持する。

Reason:

- `ai-shared-memory`は複数AIが読む公開前提のknowledge baseであり、Obsidian専用Vaultではない。
- Backlinks、Search、Properties、Templates、MOCは、既存構造を移動せずに人間の再発見性を改善できる。
- Obsidian固有依存を増やすと、GitHub、VS Code、Codex、Claude Codeなどからの互換性が下がる。

Alternatives:

- Obsidian専用の新Vaultへ全fileを移行する。
- 既存fileを一括改名し、Wiki linkとfrontmatterへ変換する。
- Community plugin中心の自動生成Vaultにする。

Chosen:

- 標準Markdown linkを使う`OBSIDIAN_HOME.md`と3つのMOCを追加する。
- PropertiesはTemplateだけに追加し、新規作成分から段階導入する。
- Community pluginは0件で開始し、必要性が実証されたものだけ再評価する。
- Raw conversationとprivate noteはrepository外へ分離する。

Review Date:

- 2026-10-25、またはMOC更新負荷・query不足・Git操作負荷が繰り返し発生した時点。

Result:

- Obsidianなしでも利用できる後方互換性を維持する。
- Obsidianは閲覧・編集UIであり、保存・履歴・AI共有の基盤はGitHubと既存Markdownのままとする。

## 2026-06-27

### Decision: Workspace root を `<workspace-root>` に統一する

Reason:

- PowerShell が user home から始まることがあり、project root 誤認を避ける必要がある。
- Active projects、shared memory、archive、sandbox、shared assets を一つの workspace に分けて置ける。
- 旧 `<old-workspace-root>` と比べて、明示的な workspace home として分かりやすい。

Alternatives:

- `<alternate-workspace-root>`
- `<old-workspace-root>`
- project ごとに任意の場所

Result:

- `<workspace-root>` を正式な workspace root とする。
- 新規 active project は原則 `<workspace-root>\Projects\<project-name>` に置く。

### Decision: `PROJECT_START.md` を作業開始の入口にする

Reason:

- AI に毎回複数ファイルの読み順を説明しなくて済む。
- Required Checks、Knowledge Scan、Git Safety、Public Safety を一枚で確認できる。
- `WORKSPACE.md`、`AGENTS.md`、`CURRENT.md`、`AI_INDEX.md` への入口を一本化できる。

Alternatives:

- `README.md` を入口にする
- `CURRENT.md` を入口にする
- `AGENTS.md` だけを入口にする

Result:

- 新しい作業では、まず `PROJECT_START.md` を読む。

### Decision: Project-specific metadata は `PROJECTS/` に分離する

Reason:

- Python version、Git status、pytest command、deploy command は project ごとに変わる。
- workspace-level README に書くと、project 追加や Git 化のたびに変更が必要になる。
- AI が Knowledge Scan で project 固有情報を探しやすくなる。

Alternatives:

- `README_WORKSPACE.md` に全 project details を書く
- 各 project README だけに任せる

Result:

- Stable workspace rules は `WORKSPACE.md` / `README_WORKSPACE.md` に置く。
- Runtime、Git、test、deploy の project metadata は `PROJECTS/<name>.md` に置く。

### Decision: Git がない場合は自動初期化しない

Reason:

- `.git` がない理由は、local-only、copy、move、remote 未接続など複数あり得る。
- 勝手な `git init` や remote 追加は history や publishing flow を壊す可能性がある。

Alternatives:

- `.git` がなければ自動で `git init`
- remote を推測して追加

Result:

- Git root を検出する。
- Git が必要そうなら、原因と推奨対応を報告する。
- `git init`、clone、remote 追加、history 再作成はユーザー確認後に行う。

### Decision: GitHub links は `INBOX.md` か `AI_DRAWERS.md` に分類する

Reason:

- GitHub links、OSS、paper、tool memo が会話にだけ残ると再利用できない。
- `AI_DRAWERS.md` と `AI_INDEX.md` に接続すると、Knowledge Scan で再発見しやすい。

Alternatives:

- Conversation に残すだけ
- Project README に直接追記する

Result:

- 新しい GitHub link は公開可能性を確認する。
- 分類が明確なら `AI_DRAWERS.md`、`PROJECTS/`、`NOTES/` に入れる。
- 分類が曖昧なら `INBOX.md` に追加候補として置く。

### Decision: v1.0 candidate として運用を開始する

Reason:

- Workspace、start flow、AI rules、status、index、lessons、review、decisions の基本構造が揃った。
- 以降は大きな設計追加より、実運用で出た改善を `LESSONS_LEARNED.md`、`DECISIONS.md`、`CHANGELOG.md` に反映する段階。

Alternatives:

- さらにファイルやカテゴリを増やしてから区切る
- version を付けずに運用を続ける

Result:

- 現在の構成を v1.0 candidate として扱う。
- Git tag は commit / push 方針を確認してから作成する。
