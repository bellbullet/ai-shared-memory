---
type: project
status: planning
created: "2026-08-01"
updated: "2026-08-01"
tags:
  - creative
  - avatar
  - vrm
  - local-voice
  - mcp
source: https://github.com/xikhar/persona
visibility: public
---

# Persona

最終更新: 2026-08-01

## Goal

- Personaをlocal-firstなdesktop character presenceとして検証し、Momoの将来のVRM companionへ接続できる基盤を作る。
- Codexのlocal MCP、音声出力listener、VRM / VRMA actionを分離したまま、かわいいデフォルメ美少女系の見た目へ段階的に寄せる。

## Status

- 公式リポジトリを作業用checkoutとして導入済み。
- Momo向けに、Voice off / AivisSpeech / VOICEVOX / Irodoriのlocal voice presetを追加済み。
- 音声engineとVRM / VRMA character assetは未導入。current Momo spriteはVRMではないため、変換作業は保留。
- Application sourceはMIT。character / motion assetは個別のライセンス確認が必要。

## Stack

- Node.js 24+
- Electron / React / TypeScript / Vite
- Three.js / `@pixiv/three-vrm`
- Windows WASAPI process-loopback、Linux PipeWire、macOS Core Audio process tap
- Local MCP over loopback HTTP

## AI Instructions

- 公式README、source、testを優先し、X投稿は発見の補助情報として扱う。
- VRM / VRMA、音声モデル、speaker voiceの出典・ライセンス・再配布条件を確認するまで、public repositoryへ実体を追加しない。
- APIキー、token、個人情報、ローカルパス、private voice recordingを記録しない。
- Momoの2D spriteとPersonaのVRMを同一形式として扱わない。3D化はart、rigging、licenseを分けて検証する。
- 音声engineが未導入の間はVoice off（External）を維持し、音声listenerを勝手に有効化しない。

## Next Tasks

- 権利確認済みのローカルVRMをimportし、デフォルメ美少女系のframingとlightingを実機確認する。
- Momo向けにIdle / Speaking / greeting actionのVRMA候補を、ライセンス確認後に個別導入する。
- AivisSpeech、VOICEVOX、Irodori-TTSのいずれかを選び、短文の可愛い声を試聴してvoice presetの実プロセス名を確認する。
- Persona MCPをCodexへ登録し、`get_status`と安全なcustom animationでend-to-end確認する。

## Related Notes

- `AI_DRAWERS.md` の Persona / AivisSpeech Engine / VOICEVOX ENGINE / Irodori-TTS
- `PROJECTS/AIRI.md`
- 公式 [Integrations](https://github.com/xikhar/persona/blob/main/docs/INTEGRATIONS.md)
- 公式 [Asset licenses](https://github.com/xikhar/persona/blob/main/ASSET_LICENSES.md)

## Reuse Candidates

- AivisSpeech Engine - local Japanese TTS。engineとvoice modelのlicenseを確認してから利用する。
- VOICEVOX ENGINE - local HTTP TTS。speakerごとの利用規約とクレジットを確認してから利用する。
- Irodori-TTS - voice design / local TTS候補。model、server、生成音声の利用条件を分けて確認する。
- Codex pet Momo - 2D spriteの見た目・人格の参照。VRM assetの代替ではない。

候補は導入済みを意味しない。実際に試した場合は`TRIALS.md`へ結果を追記する。
