# Security Skill

最終更新: 2026-06-30

Use when work touches security-sensitive areas or release gates.

## Trigger Areas

- Authentication / authorization / sessions
- API keys / tokens / secrets / `.env`
- Webhooks
- File uploads
- Path handling
- Archive extraction
- Shell / subprocess / command execution
- SSRF / XSS / injection entry points
- Logs / personal data / external transmission

## Default Flow

1. Run normal checks: tests, lint, typecheck, build if applicable.
2. Review risky areas manually.
3. For high-risk or release-bound changes, consider AI-assisted review such as deepsec.
4. Fix confirmed issues.
5. Re-run targeted checks.
6. Document remaining risk if any.

## Related Files

- `SECURITY_REVIEW.md`
- `AI_DRAWERS.md` entry: deepsec
- `PROJECTS/<project>.md` for project-specific security notes

## Avoid

- Publishing exploit details in public notes.
- Printing secrets.
- Treating AI security findings as automatically true.
- Treating tests as a replacement for security review.
