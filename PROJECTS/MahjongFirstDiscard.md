# MahjongFirstDiscard

最終更新: 2026-07-13

## Goal

- 麻雀の一打目 / 牌効率ドリル用 static web app。
- 検証済み問題バンクからランダム出題する。

## Status

- Static site。
- GitHub / Vercel workflow の公開手順あり。
- Git 管理が必要。ただし local workspace では `.git` 未検出。

## Stack

- HTML
- CSS
- JavaScript
- Node.js validation / local serve scripts
- Vercel static hosting

## AI Instructions

- 作業開始時に Working Directory / Git Root / Node.js を確認する。
- 問題データを変更したら validation script を実行する。
- 公開サイトに関する URL や GitHub repo は、確認できたものだけ記録する。

## Test / Verification

- `node scripts/validate.mjs`
- `node scripts/serve.mjs`
- Browser display check

## Git Notes

- GitHub / Vercel workflow があるため Git 管理が必要。
- `.git` がない場合は、既存 GitHub repo の URL を確認して clone / reconnect 方針を決める。

## Next Tasks

- GitHub repo の正規 URL を確認する。
- local copy と公開 repo の差分確認手順を決める。

## Related Notes

- `AI_DRAWERS.md`

## Reuse Candidates

- Ponytail / Minimal Implementation Policy - static構成と既存validationを維持する。
- reviewable-html-workbench - 問題画面や説明文を人間が範囲指定レビューする場合。
- Oracle - 問題生成・検証方針で難しい設計判断が発生した場合。
