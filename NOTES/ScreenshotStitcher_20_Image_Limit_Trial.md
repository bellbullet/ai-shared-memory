# ScreenshotStitcher 20-Image Limit Trial

最終更新: 2026-07-16

## Purpose

- `agency-agents` をそのまま導入せず、`Security Engineer` と `Reality Checker` の必要部分だけを軽量なTrial役割として試す。
- `ScreenshotStitcher` の20枚制限を題材に、指摘が具体的な修正と検証へつながるかを確認する。
- `agmsg`、Claude Code、SQLite、HooksはこのTrial準備には導入しない。

## Current Evidence

- Project: `<workspace-root>\Projects\screenshot-stitcher`
- Git branch: `master`
- Runtime: Node.js 24.15.0 / Vite / React / TypeScript / Vitest
- `src/App.tsx` の `load` がファイル選択とドラッグ＆ドロップの共通入口になっている。
- UIは `items.length/20` を表示するが、現在の `load` は有効形式の全ファイルに対して `createImageBitmap` と `URL.createObjectURL` を実行してからstateへ追加する。
- 20枚上限を保証する実装と、その境界を直接検証するテストはまだない。
- `MAX_CANVAS_HEIGHT = 32_000` は出力Canvasの高さを止める防御であり、入力枚数や入力画像のファイルサイズ・寸法の上限ではない。
- 既存の `src/lib/stitch.test.ts` は重複検出と手動接続計算を扱い、ファイル追加上限は対象外。

## Trial Requirement

- 最大20枚を内部状態の不変条件として保証する。
- 20枚までは通常どおり追加できる。
- 21枚目以降は画像デコードとObject URL作成の前に除外する。
- 一括追加で上限を超える場合は、残り枠まで追加し、超過分を拒否する。
- ファイル選択とドラッグ＆ドロップの両方が同じ制限を通る。
- 既存画像を削除すると、その空き枠へ再追加できる。
- 通知は追加数と拒否数を示してよいが、不要なフルパスや過剰なファイル情報を表示しない。
- 新しい外部依存を追加しない。

## Codex Implementer Prompt

```text
Working folder: <workspace-root>\Projects\screenshot-stitcher

You are the Implementer for a bounded Trial. Read the workspace and project instructions first. Do not install external tools, add dependencies, create Hooks, commit, or push.

Goal:
Enforce ScreenshotStitcher's existing maximum of 20 images as an internal invariant.

Required behavior:
- Allow images up to a total of 20.
- Reject the 21st and later images before createImageBitmap or URL.createObjectURL is called for them.
- For a bulk selection that exceeds the remaining capacity, accept only the remaining slots and reject the rest.
- Apply the same path to the file picker and drag-and-drop.
- After deleting an image, allow another image to fill the free slot.
- Keep the displayed count consistent with state.
- Report accepted/rejected counts without exposing local paths or unnecessary file details.
- Preserve the current PNG/JPEG/WebP filtering and add no dependency.

Implementation boundary:
- Prefer a small pure helper for capacity selection so boundary behavior can be unit-tested without decoding real images.
- Do not add unrelated input-size limits or refactor the stitching algorithm in this Trial.

Verification:
- Test 0→20, 20→21, 19 plus 3 files, and delete then refill.
- Confirm rejected files are selected out before decoding/Object URL creation by code structure or a focused test.
- Run npm.cmd run test, npm.cmd run build, and npm.cmd run lint from the project folder.
- Report changed files, test evidence, remaining unverified items, and the exact diff scope.
```

## Claude Review Prompt

```text
Working folder: <workspace-root>\Projects\screenshot-stitcher

Review the uncommitted 20-image-limit change. Do not edit files, install tools, create Hooks, commit, or push. Review only the bounded change and its evidence.

Phase 1 — Trial: Security Engineer
- Verify both file-picker and drag-and-drop paths use the same limit.
- Verify excess files are rejected before createImageBitmap and URL.createObjectURL.
- Check bulk-add and delete-then-refill behavior for bypasses or stale state.
- Consider memory impact and whether the existing 32,000px Canvas limit is being misrepresented as an input-image defense.
- Check that user-facing errors do not expose local paths or unnecessary file information.
- Separate findings into Blocker / Important / Hardening. For each finding provide file:line evidence, a concrete failure scenario, and the smallest practical fix.
- Do not expand this Trial into unrelated authentication, server, cloud, or full OWASP review.

Phase 2 — Trial: Reality Checker
Cross-check the claimed result against the requirement, diff, and actual command output. Do not claim a check passed without evidence.

Acceptance checks:
- Up to 20 images can be added.
- The 21st and later images are rejected.
- A bulk add over the limit accepts only remaining slots.
- A deletion creates a reusable slot.
- UI count equals internal state.
- test, build, and lint results are shown.
- A 390px-width notification check is shown, or explicitly marked unverified.
- The change is limited to the requirement and adds no dependency.

Return:
1. Security findings.
2. Evidence table with Requirement / Evidence / Status.
3. Unverified items.
4. Final decision: Pass / Conditional / Fail.
5. Required Codex follow-up, if any.
```

## Handoff Contract

- Codex reports the diff and verification evidence; it does not self-certify the Trial.
- Claude reviews without changing the implementation in the first pass.
- Codex applies accepted findings and reruns targeted checks.
- The human makes the final adoption and commit decision from the requirement, messages, diff, and evidence.
- When `agmsg` is tested later, the same prompt and output contract should be sent through the shared message history without private images, secrets, or local-only logs.
