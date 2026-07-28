# Conversation Archive Design

最終更新: 2026-07-25

## 目的

AIとの会話や作業履歴を無条件に蓄積するのではなく、再発見できる判断・知識・成果へ変換する。Raw logはprivate層、公開可能な要約だけを`ai-shared-memory`へ昇格する。

今回は設計のみを定義し、自動収集、自動要約、自動commitは実装しない。

## Trust boundary

```text
Local private archive
  -> sanitize
  -> summarize
  -> human review
  -> public-safe knowledge
  -> INBOX / NOTES / PROJECTS / DECISIONS
```

`.gitignore`は誤投入を減らす補助であり、Raw archiveをVault内へ置いてよいという許可ではない。原則は公開repository外のlocal-only Vault、またはaccess controlされたprivate repositoryを使う。

## 保存層

### 1. Raw archive

- AIとの会話生log
- ChatGPT export、Claude Code session、Codex作業log、Gemini会話、local LLM会話
- 開発terminal履歴
- local-only
- Git管理外
- private
- 原文を編集せず、取得元・取得日時・hashなどのprovenanceを必要最小限で保持

Raw archiveには認証情報や個人情報が含まれる前提で扱う。公開repositoryのsubdirectory、Git worktree、Obsidian Sync対象Vaultへ置かない。

### 2. Processed summary

- 会話の目的と結論
- 決定事項と理由
- 再利用可能な技術知識
- 未解決事項と検証条件
- 公開して問題ないsource URL
- private情報を除去した短いevidence

昇格先:

- 未整理候補: `INBOX.md`
- 横断知識: `NOTES/`
- Project固有状態: `PROJECTS/`
- 設計判断: `DECISIONS.md`
- 試用結果: `TRIALS.md`
- 再検索が必要な語句: `AI_INDEX.md`

Processed summaryも自動公開しない。人間が公開範囲、source、表現、残存identifierを確認する。

## Ingest candidate

| Source | Raw format候補 | 主なrisk |
| --- | --- | --- |
| ChatGPT export | JSON / HTML | account情報、会話全文、添付 |
| Claude Code session | JSONL / Markdown | local path、source code、command output、secret |
| Codex作業log | JSONL / Markdown | workspace情報、tool output、環境情報 |
| Gemini会話 | JSON / HTML | account情報、添付、外部service情報 |
| Local LLM会話 | application固有DB / JSON | local document、prompt、model metadata |
| Terminal履歴 | text | token、URL query、path、command argument |

Sourceごとにschemaとriskが違うため、1つの汎用importerで無条件処理しない。

## 必須安全策

### 取り込み前

- Raw archiveの保存先がpublic repository外であることを確認する。
- Source fileをread-onlyとして扱い、copyを処理する。
- 自動commitと自動pushを無効にする。
- 取得対象とretention期間を明示する。

### Sanitization

- API key、access token、Cookie、password、private keyをmaskする。
- Email address、username、user IDをmaskする。
- Windows、macOS、Linuxのlocal absolute pathをplaceholderへ置換する。
- 個人名、住所、電話番号、契約・請求情報を確認する。
- SecretをURL query、HTTP header、command line、code block、attachment metadataから探す。
- Source codeや第三者contentのlicenseと公開可否を確認する。
- Mask後のtextから元値を推測できないか確認する。

### 昇格前

- 事実、推測、決定、未確認事項を分ける。
- Public source URLを確認する。
- Local identifierとtimestampが不要なら削除する。
- Diffを人間がreviewする。
- `git diff --cached`とsecret scanを実行する。
- Raw archiveや変換途中fileがstageされていないことを確認する。

## Lightweight checks

推奨順:

1. `.gitignore`で既知のRaw / private directoryを除外
2. GitHub secret scanningを有効化
3. LocalまたはCIでgitleaksを検討
4. 必要ならpre-commitからgitleaksまたはdetect-secretsを実行
5. Human review

Tool導入時はversion pin、config、baseline、false positive、CI実行時間を確認する。今回はdependencyやhookを追加しない。

## 誤投入時

1. Commit / pushを止める。
2. Secretが含まれた場合は、履歴修正より先にcredentialを失効・rotateする。
3. 未commitなら対象fileをstageから外し、公開repository外へ移す。
4. Push済みならrepository管理者と影響範囲を確認する。
5. `git filter-repo`またはBFG Repo-Cleanerによる履歴削除を、backupと関係者調整後に実施する。
6. Force push後は既存clone、fork、release asset、cache、search indexに残るcopyを確認する。
7. Incidentの公開可能な教訓だけを`LESSONS_LEARNED.md`へ記録する。

履歴削除はcredentialの無効化を代替しない。共有履歴を書き換えるため、ユーザー確認なしに実行しない。

## 将来候補

- Claude Code hooksによるsession終了時のlocal summary
- Codex session終了時のpublic-safe summary候補生成
- ChatGPT data exportのJSON / HTML変換
- JSONからMarkdownへの変換
- Session単位のfrontmatter
- Content hashによる重複除去
- AIによる一次要約とsecret候補flag
- 人間による昇格承認

## 最小metadata案

Processed summaryを新規fileにする場合の候補:

```yaml
---
type: conversation-summary
status: draft
created:
updated:
tags: []
source: private-archive
visibility: public
---
```

`visibility: private`をpublic repository内での保存許可として使わない。Private contentはfile自体をrepository外へ置く。

## Acceptance gate

- Raw archiveがpublic repository、Git worktree、Sync対象Vaultにない
- Secret / personal data / local absolute pathのscanが完了
- Summaryだけで再利用目的が分かる
- Sourceと推測が区別されている
- Human review済み
- Stage対象が公開可能なfileだけ
