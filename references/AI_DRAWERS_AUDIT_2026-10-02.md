# AI_DRAWERS Audit (2026-10-02)

## Scope

`AI_DRAWERS.md`の登録項目161件（技術・資料160件、アイデア1件）と、関連する`AI_INDEX.md`、`INBOX.md`の参照先を点検した時点の記録。ソフトウェアの導入や実行性能の検証ではない。

## Behavior

- 全161項目に概要、用途、状態、優先度を確認した。URLのない1件はリンク先未設定の開発アイデア。
- `AI_DRAWERS.md`内のGitHub参照は137ユニークrepository。GitHub APIで全件が存在し、アーカイブ済みは0件。所有者名が移った4件のURLを現行URLへ更新した。
- `INBOX.md`内のGitHub参照88件では、既知の404である`road-to-me`を除き全件が存在した。移転した6件のURLを更新した。`Hallmark`は`AI_DRAWERS.md`登録済みと明示した。
- 両ファイルのGitHub以外の参照先88ユニークURLをHEADで確認した。79件は200、9件は別応答だった。うち7件は公式ページのGETまたはリダイレクト先を確認できた。
- `AI_INDEX.md`内の具体的なMarkdown参照56パスは、ローカルに実ファイルが存在した。
- GitHub metadataでライセンスを判定できなかった18件は個別に確認した。16件にはrootのLICENSE/COPYINGがあり、`anthropics/skills`と`grandamenium/dream-skill`にはrootライセンスファイルを確認できなかった。対象の再利用時は配下ファイルごとの条件を確認する。

## Verification

公式資料で確認した主な修正:

- [Graphify](https://github.com/Graphify-Labs/graphify): 現行`pyproject.toml`はApache-2.0を宣言し、repositoryには`LICENSE-MIT`もある。単独MITの記述を修正した。
- [Nango](https://github.com/NangoHQ/nango): Elastic Licenseとself-host / Cloud間の機能差を追記した。
- [n8n LICENSE](https://github.com/n8n-io/n8n/blob/master/LICENSE.md): Sustainable Use LicenseとEnterprise対象範囲を追記した。
- [Stirling-PDF LICENSE](https://github.com/Stirling-Tools/Stirling-PDF/blob/main/LICENSE): MITを基本とし、一部directoryに別ライセンスが適用される点を追記した。
- [Anki LICENSE](https://github.com/ankitects/anki/blob/main/LICENSE)、[Zotero COPYING](https://github.com/zotero/zotero/blob/main/COPYING): 本体sourceのAGPL系ライセンスを追記した。
- [Inkling-Small](https://thinkingmachines.ai/news/inkling-small/): full weights公開済みと公式model cardの実行要件へ更新した。
- [OKF v0.2](https://cloud.google.com/blog/products/data-analytics/okf-v0-2-adds-trust-signals)、[Claude Code overview](https://code.claude.com/docs/en/overview)、[AKARI Video](https://akari.video/en/download/)、[see-through](https://github.com/shitagaki-lab/see-through)、[@pierre/diffs releases](https://github.com/pierrecomputer/pierre/releases): 仕様・URL・対応環境・掲載状態・旧版数表記を更新した。

## Open Questions

- [Game Design Skills](https://gamedesignskills.com/courses/polishing-game-feel-bootcamp/)は今回のWeb取得で本文を確認できなかった。リンク消失とは断定しない。
- [Lucy 2.5](https://lucy.decart.ai/)はHEADで429を返し、Web取得ではページ名のみ確認できた。提供内容の更新状況は未確認。
- 各ツールの全機能、ベンチマーク、外部provider条件を実機で検証したものではない。採用判断時は対象項目の公式資料と`TRIALS.md`を再確認する。
