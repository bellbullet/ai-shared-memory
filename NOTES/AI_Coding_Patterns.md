# AI Coding Patterns

最終更新: 2026-07-18

## Purpose

- AI coding agents を安定運用するための設計パターンを整理する。
- `AGENTS.md` を肥大化させず、必要な知識を適切なファイルへ分離する。

## Sources

- AGENTS.md と Skills: https://zenn.dev/green_tea/articles/d310e5cf809190
- Claude Code運用ミス7選: https://qiita.com/tehito/items/356e5f1dba112a075be1
- Google OKF: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
- Ponytail: https://github.com/DietrichGebert/ponytail
- deepsec: https://github.com/vercel-labs/deepsec
- Anthropic Dreams: https://platform.claude.com/docs/en/managed-agents/dreams
- dream-skill: https://github.com/grandamenium/dream-skill
- Auto-Dreamer: https://arxiv.org/abs/2605.20616
- OpenAI Prompting: https://learn.chatgpt.com/docs/prompting
- OpenAI GPT-5.6: https://openai.com/index/gpt-5-6/
- Introducing Codex: https://openai.com/index/introducing-codex/
- Switch to Codex gallery: https://switch-to-codex.openai.chatgpt.site/
- Mercari AI Agent Day: https://careers.mercari.com/en/mercan/articles/60180/
- Mercari AI Agent Day behind the scenes: https://careers.mercari.com/en/mercan/articles/60642/

## Pattern: Thin AGENTS, Routed Skills

Keep `AGENTS.md` for:

- global rules
- public safety
- read order
- routing to other files
- update policy

Move task-specific details to:

- `SKILLS/PowerShell.md`
- `SKILLS/Python.md`
- `SKILLS/Git.md`
- `SKILLS/Research.md`
- `SKILLS/Security.md`

Project-specific knowledge remains in `PROJECTS/`.

Cross-project knowledge remains in `NOTES/`.

Executable enforcement should live in scripts, CI, tests, or checklists rather than prose.

## Pattern: Goal, Context, Output, Boundaries

OpenAI の公式 Prompting 入門では、依頼の品質を上げるために、必要に応じて次の要素を明示する。

- Goal: 何をしてほしいか
- Context: 結果に影響する背景、情報源、制約
- Output: 形式、長さ、対象読者、詳細度
- Boundaries: 変更してはいけないもの、避けること、実行前に確認すべきこと

短い依頼では必要な項目だけを使い、大きな作業では結果を先に示す。手順を細かく固定するより、目的と必要な背景を渡し、必要な確認事項を境界条件として明示する。

## Pattern: File-Based Context

Do not rely on long chat history for durable context.

Use:

- `CURRENT.md`
- `STATUS.md`
- `PROJECTS/`
- `NOTES/`
- `PLAN.md`
- `LESSONS_LEARNED.md`

## Pattern: Memory Consolidation / Dream Review

Durable memory needs periodic consolidation, not only accumulation.

Use this pattern when:

- `INBOX.md` has many unresolved links or ideas
- `AI_DRAWERS.md` has duplicate or overlapping entries
- `PROJECTS/` or `NOTES/` contain stale runtime, Git, or status details
- relative dates such as "today" or "yesterday" appear in durable files
- the same operational lesson appears in multiple places
- a large workspace or project structure change has happened

Review order:

1. `INBOX.md`
2. `AI_DRAWERS.md`
3. `NOTES/AI.md`
4. `NOTES/AI_Coding_Patterns.md`
5. `PROJECTS/*.md`
6. `AI_INDEX.md`
7. `CURRENT.md`
8. `STATUS.md`

Actions:

- move unsorted links into `AI_DRAWERS.md`, `NOTES/`, or `PROJECTS/`
- merge duplicate descriptions
- replace stale status with current status
- convert relative dates into absolute dates
- remove references to nonexistent files, commands, or flags after checking the repo
- add missing lookup terms to `AI_INDEX.md`
- record changed decisions in `DECISIONS.md`
- record structure or operating-rule changes in `CHANGELOG.md`

Safety rules:

- Treat source files as evidence; do not overwrite them blindly.
- Make small logical diffs so changes can be reviewed or reverted.
- Do not add the review history itself to durable knowledge files unless it changes future behavior.
- If consolidation output is uncertain, ask the user instead of inventing a resolution.

## Pattern: Reuse Before Build

Before writing new code, check:

- standard library
- native platform features
- existing dependencies
- existing project code
- shared workspace knowledge
- `AI_DRAWERS.md`

## Pattern: Release Gate

For high-risk or public changes:

1. tests / lint / typecheck
2. security review when needed
3. manual review
4. fix
5. commit / push / release

## Pattern: Capability-Tier Routing, Not Fixed Model Roles

モデル名をplanner / executorへ固定せず、task contractと検証条件から能力・コストtierを選ぶ。

OpenAIのGPT-5.6公式区分:

- Sol: flagship。難しい推論、長時間作業、高リスク変更の候補。
- Terra: balanced。日常作業の性能とcostの中間候補。
- Luna: fastest / most affordable。境界が明確で、安価に反復できる作業の候補。

Switch to Codex galleryには「Solで複雑な計画、Lunaで明確な実行」という利用例があるが、これはOpenAI公式の固定role定義ではない。次をtaskごとに明示する。

1. 変更可能範囲と禁止事項
2. 必要なcontextとtool権限
3. security、data loss、financial impactなどのrisk
4. latencyとcostの上限
5. tests、diff、artifact、human approvalなどのacceptance gate

高能力modelを使ったこと自体を品質保証にせず、低cost modelへ任せる場合もverification gateを省略しない。

## Pattern: Evidence-First End-to-End Delivery

「実装した」というagentの要約だけで完了扱いにせず、成果物と検証証拠を同じloopへ含める。

1. acceptance criteriaと対象外を先に固定する。
2. repository内で小さい変更単位に分ける。
3. tests、lint、typecheckなど再実行可能なcheckを通す。
4. browser、Simulator、mobile、accessibilityなど対象環境固有の確認を行う。
5. diff、test output、screenshot、buildまたは配布artifactを残す。
6. 未検証部分と失敗を明記し、人間が統合・公開を判断する。

OpenAIのCodex公式説明はterminal logとtest resultによる追跡可能性、人間によるmanual reviewを重視する。gallery内のiOS Simulator、browser / mobile E2E、accessibility、TestFlightの事例は、このloopの適用例として扱い、個々の性能主張は独立したbenchmarkとみなさない。

## Pattern: Staged Enterprise Agent Rollout

AI agentを非エンジニアを含む組織へ広げる場合は、tool配布を単発eventにせず、学習、制限付き実践、定着、権限拡張を段階化する。

Mercariの2026年AI Agent Day事例から再利用できる構造:

1. 対象toolとuse caseを絞り、開始前に学習とpre-workの期間を置く。
2. 初回はcentralized control、sandbox、strict access controlを優先し、初心者が安全に試せる共通環境を用意する。
3. 実践日だけで終わらせず、その後に業務へ組み込む期間とpeer learning groupを設ける。
4. 実績、問い合わせ、失敗例、権限要求を観測し、熟練度と必要性に応じて利用範囲を段階的に広げる。

適用時の注意:

- 公式事例が説明する対象は主にNotion AIとClaude Coworkであり、X上の二次投稿が示唆したClaude Code全社展開と同一視しない。
- sandboxがあっても、外部送信、connector、MCP、file access、credential、生成物公開の境界は別々に監査する。
- completion rateや利用者の好意的反応だけで安全性や業務効果を判断せず、権限逸脱、情報漏えい、手戻り、support costも評価する。

## AI Instructions

- Treat this file as design guidance, not a mandatory execution checklist.
- For actual task rules, route to `SKILLS/`.
- Keep `AGENTS.md` concise over time.
