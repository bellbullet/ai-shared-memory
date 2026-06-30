# SECURITY_REVIEW

最終更新: 2026-06-29

AI coding projects のためのセキュリティレビュー手順。

このファイルは公開可能な運用ルールだけを書く。秘密情報、実際の脆弱性詳細、未公開サービス構成、token、`.env` の実値は書かない。

## When To Use

毎回実行する必要はない。

次の場合にセキュリティレビューを検討する。

- 公開 GitHub repository に push する前
- 大きい Pull Request
- リリース前
- 認証、認可、セッション、Webhook を変更した
- API key、token、secret、`.env`、外部連携を扱う
- ファイルアップロード、パス処理、アーカイブ展開を扱う
- コマンド実行、subprocess、shell を扱う
- Web UI、画像アップロード、OpenCV、外部 URL 取得を扱う
- ログ、個人情報、権限境界、外部送信を扱う

## Default Flow

1. Run normal checks:
   - tests
   - lint
   - typecheck
   - build, if applicable
2. Run targeted manual review for risky areas.
3. For high-risk or release-bound changes, consider AI-assisted review such as deepsec.
4. Review findings manually.
5. Fix confirmed issues.
6. Re-run targeted tests and security checks.
7. Commit / push / release only after unresolved high-risk items are documented or fixed.

## deepsec Usage Policy

deepsec:

- URL: https://github.com/vercel-labs/deepsec
- Role: AI-assisted security review harness for Codex / Claude style code investigation.
- Best use: large PRs, public release gates, authentication changes, file/path handling, webhook/API work, command execution, and other high-risk changes.

Do not treat deepsec as a replacement for:

- tests
- typecheck
- dependency audit
- manual review
- threat modeling

Use it as an additional review layer when the context requires code understanding beyond simple pattern matching.

## Review Checklist

- [ ] Input validation is explicit at trust boundaries.
- [ ] Authorization checks happen server-side or at the enforcement point.
- [ ] File paths are normalized and constrained to an expected root.
- [ ] Upload handling rejects unsafe filenames, extensions, and oversized content.
- [ ] Archive extraction prevents path traversal.
- [ ] Shell commands avoid string-built command lines where possible.
- [ ] Secrets are not logged, committed, or exposed in errors.
- [ ] Webhooks verify signatures or trusted sources.
- [ ] External URL fetching has SSRF protections when needed.
- [ ] User-controlled HTML or Markdown is sanitized before rendering.
- [ ] Error messages do not leak sensitive internals.
- [ ] Logs avoid personal data and credentials.
- [ ] Dependency changes are intentional and reviewed.
- [ ] AI-generated fixes are manually reviewed before merge.

## Project Risk Hints

GameFreezeSentinel:

- command execution
- process control
- filesystem paths
- Windows permissions

webcam-face-demo:

- image upload
- OpenCV processing
- path traversal
- XSS / SSRF, if web-facing

XImageBot:

- API credentials
- webhook handling
- external API calls
- rate limits and secret handling

AIRI:

- authentication
- local storage
- model / agent tool calls
- user data and external service boundaries

## Output

Security review output should record:

- Scope
- Tools used
- High-risk findings
- Confirmed false positives
- Fixes made
- Checks re-run
- Remaining risk

Do not publish exploit details or secrets in public notes.
