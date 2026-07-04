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
