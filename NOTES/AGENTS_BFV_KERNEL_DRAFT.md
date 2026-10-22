---
type: note
status: draft
created: 2026-08-08
updated: 2026-08-08
tags:
  - agent-operations
  - scope-control
  - acceptance-gate
  - bfv-kernel
source:
  - https://x.com/voidwarriorchan/status/2085860526052315310
  - https://x.com/voidwarriorchan/status/2085859438477594825
visibility: public
---

# BFV Kernel式 ASM AGENTS.md 草案

最終更新: 2026-08-08

## Status

このファイルは、AI Shared Memory（ASM）の共通 `AGENTS.md` に昇格する前の草案です。採用判断までは、既存の `AGENTS.md` に追加する強制ルールではありません。

この草案は、ユーザーから共有されたBFV Kernelの要約とリンクを起点にしています。リンク先の内容をこの作業で独立検証したものではないため、ここでは実装可能な運用原則として再構成します。

## Purpose

AIが「実装した量」ではなく、「成立させる結果」と「それを確認できる証拠」に集中するための作業境界を定めます。

## Core Rule

作業を始める前に、次の2点を短く固定します。

1. 何が成立すれば完了か。
2. 何を確認できれば、その完了を証明できるか。

各作業項目について、次の問いに答えます。

> これを省いても、完了を証明できるか。

「はい」なら、その作業は実施しません。改善、一般化、整理、将来対応だけを理由に、スコープを広げません。

## Task Contract

非自明な作業では、編集または実行の前に次を定義します。

```text
Goal:
  成立させる結果。

Context:
  参照する正本、既存状態、前提条件。

In scope:
  今回変更してよいファイル、機能、操作。

Out of scope:
  今回は変更しないもの。将来候補はここへ分離する。

Output:
  変更された成果物と、利用者へ返す結果の形式。

Acceptance:
  完了を判定する具体的な条件。

Verification:
  Acceptanceを確認する再実行可能な検査、ログ、画面、artifact。

Stop / Escalate:
  追加確認なしに進めてはいけない境界。
```

短い作業では必要な項目だけを使います。契約を埋めること自体を目的にしません。

## Minimal Execution Loop

```text
Context -> Contract -> Minimal Act -> Verify -> Finish or Escalate
```

1. `AI_INDEX.md`、関連ノート、対象ファイルを読む。
2. Goal、Acceptance、Out of scopeを固定する。
3. Acceptanceに必要な最小変更だけを行う。
4. 差分とVerificationの証拠を確認する。
5. 完了、条件付き完了、または追加確認へ分けて報告する。

作業途中で新しい目的が見つかった場合は、現在の作業へ混ぜず、新しい作業単位または別の計画へ分けます。

## Anti-Overimplementation Guard

依頼に明示されていない次の変更は、Acceptanceに直接必要でない限り行いません。

- 無関係なリファクタリング、命名変更、ファイル移動
- 将来のためだけの抽象化、汎用化、設定層、wrapper
- 新しい依存関係、framework、service、agent orchestration
- 既存機能の再設計、migration、全面的なUI刷新
- ついでのドキュメント整理や重複除去

追加したくなった変更は、理由、証明したいAcceptance、対象ファイル、取り下げ条件を別の提案として記録します。現在の完了条件を満たすために不要なら、実装しません。

## Completion Gate

完了と報告するには、次を満たします。

- GoalとAcceptanceが明示されている。
- 変更ファイルと差分がIn scopeに収まっている。
- 必要なtest、lint、typecheck、build、画面確認などを実行している。
- 実行結果またはartifactを確認できる。
- 未検証項目、失敗、既知の制限を明記している。
- 外部公開、権限変更、破壊的操作、高リスク変更は人間の承認境界を越えていない。

「実装した」というAIの要約だけでは完了としません。証拠が不足する場合は、`Conditional` または `Blocked` として報告します。

## Stop Conditions

次の場合は自律実行を止め、確認または追加調査へ移します。

- Goal、Acceptance、変更範囲のいずれかが曖昧なまま、複数の解釈が残る。
- 既存の未関連変更と安全に分離できない。
- 破壊的操作、履歴書き換え、remote変更、権限拡張、外部公開が必要になる。
- 有料API、課金、認証情報、外部送信が必要になる。
- 検証失敗が今回の変更に起因し、原因を説明できない。
- 正式な仕様や正本を確認できず、推測で進めるしかない。
- 作業がOut of scopeへ広がり、元のGoalを満たすための最小変更ではなくなる。

## Implementation and Audit Roles

実装担当と監査担当を分けられる場合は分けます。

- 実装担当は、変更、差分、検証結果、未確認事項を報告する。
- 監査担当は、要件、差分、証拠を突き合わせ、推測で合格にしない。
- 監査担当は、依頼されていない改善を追加しない。
- 高リスク変更や公開判断は、人間が最終決定する。

単一agentしか使えない場合も、実装の説明と監査の判定を同じ文章で混同せず、別の見出しに分けます。

## Finish Report Template

```text
Result: Pass | Conditional | Blocked
Goal:
Changed:
Verification:
Evidence:
Unverified:
Out of scope / follow-up:
Human decision needed:
```

`Pass` はAcceptanceを確認できた場合だけ使います。`Conditional` は既知の未検証または制限が残る場合、`Blocked` は必要な確認や権限がなく進められない場合に使います。

## Trial and Promotion

この草案を実際の作業へ適用した結果は、必要に応じて `TRIALS.md` に記録します。

少なくとも異なる2〜3件の作業で、次を確認してから正式採用を検討します。

- 不要な実装やスコープ拡張を抑えられたか。
- 完了判定の証拠が増えたか。
- 早すぎる停止や、単なる定型作業の遅延を増やしていないか。
- 人間が差分と判断をレビューしやすくなったか。

正式採用する場合は、`AGENTS.md` へ必要最小限を移し、`CHANGELOG.md` と必要に応じて `DECISIONS.md` に採用理由を記録します。採用しない場合も、理由を `TRIALS.md` または `LESSONS_LEARNED.md` に残します。

## Related Files

- `AGENTS.md`
- `SKILLS/AgentOperations.md`
- `NOTES/AI_Coding_Patterns.md`
- `TRIALS.md`

## AI Instructions

- このファイルは採用前の草案として扱う。
- 事実、提案、未検証事項を分けて書く。
- 公開リポジトリに保存できない情報を追加しない。
- 実装や採用を主張する場合は、差分と検証証拠を残す。
