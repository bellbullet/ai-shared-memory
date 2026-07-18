# Git Skill

最終更新: 2026-07-18

Use when work involves Git root detection, missing `.git`, commits, pushes, branches, remotes, or publishing.

## Required Practices

- Start from the intended project directory.
- Confirm Git root before assuming repository state.
- Preserve existing history and remotes.
- Do not run `git init`, add remotes, delete `.git`, or rewrite history without explicit user confirmation.
- If Git root is missing, report cause and recommended recovery path before acting.

## Checks

```powershell
cd <workspace-root>\Projects\<project-name>
git rev-parse --show-toplevel
git status --short
git remote -v
```

## Missing Git Root Flow

1. Confirm current directory.
2. Check whether `.git` exists nearby.
3. Decide whether Git is likely needed.
4. If local-only, report that.
5. If Git is needed, ask before init, clone, remote repair, or delete.

## Codex Git Gate

Codexは、必須条件を満たす場合に限り、追加確認なしでcommit / pushまで実行できる。

このリポジトリ（`ai-shared-memory`）ではGit Gateを有効とする。他のリポジトリでは、対象リポジトリの`AGENTS.md`またはユーザーの明示指示で有効化された場合だけ適用する。

ユーザーの最新指示を常に優先する。`commit only`、`don't push`、`提案だけ`、`編集しない`などの制約がある場合は、それを越えて実行しない。

### Default Flow

1. 必須workspaceファイルと対象projectの指示を読む。
2. working directory、Git root、branch、upstream、remoteを確認する。
3. `git status`と既存のstaged / unstaged / untracked / unpushed変更を確認する。
4. requested taskを最小差分で実行する。
5. taskに必要なtests、lint、typecheck、build、文書検証、安全確認を実行する。
6. diff、staged diff、commit対象ファイル、upstreamとの差を確認する。
7. `Push`、`Commit only`、`No commit`、`No change`、`Blocked`のいずれかを判定する。
8. 許可された判定を実行し、結果を報告する。

### Commit Allowed

次をすべて満たす場合、commitしてよい。

- ユーザーが実装、文書更新、shared memory更新、repository maintenanceなど、repository変更を伴うtaskを依頼している。
- diffが意図的で、taskを一文で説明できる論理単位になっている。
- task外の変更をstageしていない。`git add .`ではなく、原則として対象fileまたは対象hunkだけをstageする。
- secret、token、cookie、webhook、`.env`実値、private data、個人情報、公開不要なlocal path / logを含まない。
- cache、build output、downloaded asset、runtime data、generated junkを意図せず含まない。
- 必須検証が成功している。task外の既知failureが残る場合は、今回の変更と無関係であることを確認し、報告できる。
- staged diffを最終確認し、commit後も次のAI sessionが状態を理解できる。

既存のtask外変更があっても、内容が確認済みで対象hunkを安全に分離できる場合は、それらをunstagedのまま残してよい。所有者や意図が不明、または同じhunk内で安全に分離できない場合はcommitしない。

### Push Allowed

次をすべて満たす場合、commit後にpushしてよい。

- `Commit Allowed`を満たす。
- branchが対象taskで期待されるbranchで、upstreamが設定済みである。
- remoteが既存の信頼済みremoteであり、追加や変更を必要としない。
- 公開repositoryの場合、commit内容がpublic-safeである。
- taskがdraft、experimental、blocked、waiting for human reviewとして指定されていない。
- ユーザーがpush禁止、commitのみ、local保持、review待ちを指示していない。
- `git log <upstream>..HEAD`を確認し、今回のcommitと一緒に送信される既存の未push commitも、意図・検証・公開安全性を確認できる。
- verification結果とpush先を最終報告できる。

既存の未push commitに未確認項目がある場合、今回のcommitはlocalに作成できてもpushは行わず、`Commit only`とする。

### Commit Only

次の場合はcommitするがpushしない。

- 変更は完結しているが、公開、deployment、外部反映を待つ合理的な理由がある。
- local検証は成功したが、人間による内容確認や別環境の検証が必要である。
- ユーザーがlocal保持またはcommitのみを指示した。
- upstreamへ同時に送られる既存commitの安全性や意図を確認できない。

### Do Not Commit

次の場合はcommitしない。

- diffが探索中、未完成、推測段階、または一時的なdebug変更である。
- 今回の変更が原因で必須検証に失敗する。
- secret、credential、private data、公開不適切なlocal情報が含まれる。
- task外の変更を安全に分離できない。
- taskの成果が分析、レビュー、提案だけで、repository変更を必要としない。
- high-risk領域を変更したが、必要なsecurity reviewが終わっていない。

### Stop And Ask

次の場合は実行を止め、ユーザーへ確認する。

- 削除、上書き、破壊的cleanupが必要である。
- Git rootがなく、`git init`、clone、history recoveryが必要である。
- remoteの追加・変更、force push、history rewrite、rebase、resetが必要である。
- task外のuser変更の所有者・意図が不明で、安全な分離もできない。
- branch保護、conflict、policy間の矛盾により安全な判定ができない。

### Result Vocabulary

- `Push`: commitとpushを完了した。
- `Commit only`: local commitを作成し、pushは行わなかった。
- `No commit`: 変更はあるがcommit条件を満たさない。
- `No change`: repository変更は不要だった。
- `Blocked`: safety conditionにより停止した。

## Required Final Report

常に次を報告する。

- Branch
- Git Gate result
- Commit hash（commitした場合）
- Push先とpush結果（pushした場合）
- 変更ファイル
- 実行した検証
- skipped checkと理由
- 残っているtask外変更または未push commit
- `TRIALS.md`、`DECISIONS.md`、`LESSONS_LEARNED.md`、`CHANGELOG.md`、`AI_INDEX.md`の追加更新要否
