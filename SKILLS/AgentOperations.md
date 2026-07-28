# Agent Operations Skill

最終更新: 2026-07-29

Use when a task involves a coding agent workflow, cross-agent handoff, long-running session, agent configuration, or reusable operational automation.

## Task Contract

非自明な作業では、実行前に次を短く確認する。

- Goal: 達成する結果
- Context: 読むべきファイル、既存状態、一次情報
- Output: 成果物と報告形式
- Boundaries: 変更禁止、公開禁止、確認が必要な操作
- Verification: 完了を証明する検査

小さな作業では必要な項目だけを使い、形式を埋めること自体を目的にしない。

## Default Agent Loop

```text
Context
  -> Plan
  -> Act
  -> Verify
  -> Repeat or Finish
```

1. `AI_INDEX.md`、関連する共有知識、対象リポジトリを確認する。
2. 変更範囲と完了条件を決める。
3. 最小差分で実行する。
4. test、diff、render、動作確認など対象に合う証拠を確認する。
5. 不足があれば同じloopへ戻り、十分なら記録と引き継ぎを行う。

## Simple Loop Before Graph

- 直線的な作業は、まず単純なagent loopで扱う。
- 分岐、永続state、retry、並列処理、human approvalが明示的に必要になったときだけgraphやorchestratorを検討する。
- diagramやgraphを作ることを、品質や自律性の証明にしない。
- graphを導入する場合も、各nodeの入力、出力、失敗条件、再実行条件を検証可能にする。

## Cross-Agent Portability

- 共有するのは目的、制約、完了条件、公開安全性などの共通意図とする。
- `AGENTS.md`、`CLAUDE.md`、Rules、Hooks、Permissions、Skillsは同一機能と仮定しない。
- agent固有の設定はadapterとして分離し、対応する公式仕様を確認する。
- hook payload、permission名、tool名、設定path、session機能をagent間でそのまま流用しない。
- symlinkや自動変換を使う場合は、読み込み範囲、更新方向、秘密情報の混入、Windows互換性を検証する。

## Session Hygiene

- 1 task、1 primary goal、1 clear handoffを基本とする。
- taskが変わったら新しいsessionまたは明確な作業単位へ分ける。
- 長期contextは会話だけに残さず、`CURRENT.md`、`PROJECTS/`、`NOTES/`、`PLAN.md`、`TRIALS.md`へ必要最小限を永続化する。
- title、summary、compact、checkpointなどのsession機能は、実行面とversionで利用可否が変わるため、公式情報と実機で確認する。
- 自動renameや定期loopは、session増殖、誤命名、不要なtool call、履歴の見失いが起きないことをTrialで確認してから採用する。

## Skill Safety

- 外部skill、plugin、MCP、hookはコードと同じように内容と権限をレビューする。
- install前にsource、license、network、credential、file access、command execution、update経路を確認する。
- collection全体を一括導入せず、必要なskillだけを選ぶ。
- promptやMarkdownだけに見えても、参照script、shell command、外部URL、追加installを確認する。
- 強制したい禁止事項は文章だけに置かず、permission、sandbox、OS権限、CI、test、review gateで守る。

## Stop Conditions

次の場合は自律実行を止め、確認または追加調査を行う。

- destructive action、history rewrite、remote変更、権限拡張が必要
- paid API、課金、外部公開、認証情報の利用が必要
- 既存の未関連変更と安全に分離できない
- 公式仕様で確認できないagent固有機能へ依存する
- 検証失敗が変更内容に起因し、解消できない

## Finish

作業後は、変更、検証、未確認事項、再利用条件を報告する。

必要に応じて次へ還元する。

- 試用結果 → `TRIALS.md`
- 長期的な運用パターン → `NOTES/AI_Coding_Patterns.md`
- 採用判断 → `DECISIONS.md`
- 再発防止 → `LESSONS_LEARNED.md`
- 検索導線 → `AI_INDEX.md`
