# Obsidian Community Plugin Review

調査日: 2026-07-25

## 結論

初期構成ではcommunity pluginを導入しない。Obsidian標準のSearch、Backlinks、Outgoing Links、Properties、Bases、Templates、Graph、Canvasと外部Git commandで成立させる。

Obsidian公式は、community pluginが第三者codeとしてユーザー権限で動作し得ると警告している。導入数を増やすほど、Vault全体のfile、network、更新chainに対するriskが増える。

公式資料:

- Community plugins: https://help.obsidian.md/Extending+Obsidian/Community+plugins
- Plugin security: https://help.obsidian.md/Extending+Obsidian/Plugin+security
- Less is safer: https://obsidian.md/blog/less-is-safer/

ObsidianにはOSのmobile permissionのようなplugin単位の細かい権限promptがない。各pluginはObsidian APIと実行環境の範囲でVault fileやnetworkへaccessできるため、READMEだけでなくsource、release、設定を確認する。

## 候補比較

| Plugin | 用途 | Maintenance snapshot | File / command access | Network | 主なrisk | 判断 | 標準機能の代替 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Obsidian Git | commit、fetch、pull、push、定期backup | 2.38.6、2026-07-05 release | Repository全体、Git操作、認証設定 | Remote利用時あり | 自動commit / push、競合、secret送信、mobile制約 | 保留 | PowerShell / Git CLI、Codex Git Gate |
| Dataview | Propertiesと本文のquery / view | 0.5.70 Beta、2025-04-07 latest release | Vault全体のindex。DataviewJSはfile変更・networkも可能 | DQLは通常不要。JSは可能 | JS query、plugin依存記法、release停滞 | 保留 | Search、Properties、Bases、静的MOC |
| Tasks | Vault横断task query、繰り返し、期限 | 8.3.0が2026-07時点latest | Vault全体のtask読取、source task行の更新 | 通常処理では不要 | 自動書換え、独自記法、JS query | 保留 | Markdown checkbox、Search、`TRIALS.md` |
| Linter | Markdown / YAML整形 | 1.33.0-rc-1が2026-07-20 latest。1.32.0からのRC | 対象noteまたは複数noteを書換え | Ruleにより外部data取得の可能性 | 大量diff、既存format破壊、RC採用risk | 保留 | Editor、Markdown lintのreview、`git diff --check` |
| Templater | 高度なtemplate、JavaScript、system command | 2.24.3が2026-07時点latest | Vault書換え、任意JavaScript、system command | Script次第であり | 任意code / shell実行、untrusted template | 却下 | Core Templates、Properties |

## 個別評価

### Obsidian Git

- URL: https://github.com/Vinzent03/obsidian-git
- 用途: Obsidian内からGit backupと同期を行う。
- Access: Repository file、Git metadata、local Git commandまたはmobile実装、remote credential。
- Network: fetch / pull / push時にremoteへ通信する。
- Risk: 自動同期が既存のGit Gate、限定stage、人間reviewを飛び越える可能性がある。Conflictやsecretを含むcommitも自動化し得る。
- 判断: 保留。現在の外部Git運用が十分で、導入メリットより操作経路の二重化riskが大きい。

### Dataview

- URL: https://github.com/blacksmithgu/obsidian-dataview
- 用途: MarkdownとPropertiesをdatabaseのようにqueryする。
- Access: Vault全体をindexする。通常のDQLはread中心だが、DataviewJSはpluginと同等の権限でfile変更、削除、network accessが可能。
- Network: 通常DQLは不要。JavaScript queryは可能。
- Risk: GitHubではquery結果がrenderされず、Obsidian必須依存を作りやすい。JavaScript queryは特にriskが高い。
- 判断: 保留。全既存noteへPropertiesを一括追加しておらず、静的MOCとcore Basesで足りる。将来試す場合もJavaScript queryは無効のままにする。

### Tasks

- URL: https://github.com/obsidian-tasks-group/obsidian-tasks
- 用途: Vault横断task、期限、繰り返し、query。
- Access: Vault内taskをscanし、query viewからsource fileのtask行を更新できる。
- Network: 通常のtask処理では不要。Plugin update確認はObsidian側が行う。
- Risk: 独自date / recurrence記法、source自動更新、Obsidian外での表示差。8.xではsecurityのためJavaScript実行がdefault無効になった。
- 判断: 保留。現在の`CURRENT.md`、`STATUS.md`、`TRIALS.md`、Projectの`Next Tasks`で運用できる。

### Linter

- URL: https://github.com/platers/obsidian-linter
- 用途: YAML、heading、spacing、footnoteなどをruleで整形する。
- Access: 選択noteまたは複数noteの本文とPropertiesを書き換える。
- Network: 基本ruleはlocal。一部ruleは補助dataを取得する可能性があるため、rule単位で確認が必要。
- Risk: Repository全体に大量diffを作り、既存のCRLF、見出し、意図的formatを変える可能性がある。
- 判断: 保留。必要になった場合も1 file、preview、限定ruleから試す。

### Templater

- URL: https://github.com/SilentVoid13/Templater
- 用途: Variable、function、JavaScript、system commandを使う高度template。
- Access: Vault fileの作成・更新に加え、任意JavaScriptとsystem commandを実行できる。
- Network: Scriptやcommand次第で可能。
- Risk: Untrusted templateがfile、process、networkへaccessできる。Public repositoryのtemplateを実行可能codeとして扱うことになる。
- 判断: 却下。Core Templatesの`{{title}}`、`{{date}}`、`{{time}}`で現在の要件を満たす。

## AI / CLI連携

AI pluginは初期候補から外した。Vault全体のread / write、promptの外部送信、API key、shell実行を伴うものが多く、public knowledgeとprivate archiveの境界を複雑にするためである。

Obsidian CLIはcommunity pluginではなく、Obsidian 1.12で追加された公式機能である。

- 公式: https://obsidian.md/help/cli
- Windows要件: Obsidian 1.12.7以降のinstaller
- 有効化: Settings → General → Command line interface
- 実行条件: Obsidian appが起動していること

Obsidian Desktop 1.12.7とWindows用`Obsidian.com` redirectorを確認し、Settingsから公式CLIを有効化した。PATH登録も成功しており、新しく開くterminalから次のread-only commandを利用できる。

```powershell
obsidian version
obsidian help
obsidian vault="codex-obsidian-ai-shared-memory-obsidian" search query="Knowledge Scan"
obsidian vault="codex-obsidian-ai-shared-memory-obsidian" unresolved verbose
obsidian vault="codex-obsidian-ai-shared-memory-obsidian" orphans
```

CLIからの`delete permanent`、plugin install、`eval`、Vault外path指定、Raw archiveの探索は自動化しない。

## Review trigger

次のいずれかが明確になった場合だけ再評価する。

- 静的MOCの手動更新が継続的な負担になった。
- Standard Search / Basesで表現できないqueryが繰り返し必要になった。
- Taskの期限・繰り返しがProject運用の中心になった。
- 外部Git操作がObsidian編集の実用上の障害になった。
- Core Templatesでは再現できない定型作成が複数回発生した。
