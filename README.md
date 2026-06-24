# ai-shared-memory

ChatGPT・Codex・Claude・Gemini など、複数の AI と共有するための公開ナレッジベースです。

## 構成

```text
ai-shared-memory/
├─ README.md
├─ CURRENT.md
├─ AI_DRAWERS.md
├─ PROJECTS/
│  ├─ AIRI.md
│  ├─ GameFreezeSentinel.md
│  └─ XImageBot.md
└─ NOTES/
   ├─ SolarPower.md
   └─ VehiclePlan.md
```

## ファイルの役割

- [CURRENT.md](CURRENT.md): 現在の関心・進行中テーマ・次の行動
- [AI_DRAWERS.md](AI_DRAWERS.md): OSS・AI 技術レーダー
- [PROJECTS](PROJECTS): プロジェクトごとの目的、状態、次の行動
- [NOTES](NOTES): 継続的に更新するテーマ別メモ

## AI への基本指示

1. 作業前に `CURRENT.md` と対象ファイルを読む。
2. 確認済みの事実と、提案・推測を明確に分ける。
3. 個人情報、認証情報、非公開 URL、秘密鍵、トークンを追加しない。
4. 新しい OSS は `AI_DRAWERS.md` の適切なカテゴリへ追加する。
5. プロジェクト固有情報は対応する `PROJECTS/*.md` に記録する。
6. 公開に適さない情報はこのリポジトリへ書かない。

## 更新用プロンプト

```text
引き出し追加
https://github.com/xxxx/yyyy
```

```text
引き出し整理
```

## 公開方針

このリポジトリは公開情報のみを扱います。端末固有のパス、ログ、個人情報、契約・購入情報などは、公開して問題ない内容へ要約してから記録します。
