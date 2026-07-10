# Screenshot Stitcher

最終更新: 2026-07-11

## Goal

- 複数の縦スクロールした静止画スクリーンショットを、ブラウザ内だけで1枚の縦長画像へ結合する。

## Status

- MVP基準版をローカルGitリポジトリとして初期化済み。
- 実画像3枚で、固定UI除外と手動接続補正による縦長PNG出力を検証済み。
- 低信頼度の自動候補は、オーバーレイ・差分・上位候補・手動切断位置で確認・補正できる。

## Stack

- Vite / React / TypeScript
- Canvas API / ImageBitmap / Web Worker / TypedArray
- Vitest

## AI Instructions

- 画像は外部送信しないローカル処理を維持する。
- ユーザー提供スクリーンショット、検証画像、生成出力はGit管理しない。
- OpenCV.jsなど大きな依存は、Canvas / TypedArrayの改善で不足する根拠が出るまで追加しない。

## Next Tasks

- 実機ブラウザで候補プレビューと手動補正UIの操作性を継続確認する。
- 長尺Canvas上限時の分割出力または縮小出力を検討する。

## Related Notes

- `PROJECTS/KomiReader.md` - Vite / React のローカルファイル処理パターン。
