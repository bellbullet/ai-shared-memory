# WebcamFaceDemo

最終更新: 2026-06-27

## Goal

- Windows local webcam face transform demo。
- Reference image drag-and-drop、preview、settings persistence を扱う。

## Status

- Python project。
- Local workspace では pytest 成功を確認済み。
- Git 管理は推奨。ただし local workspace では `.git` 未検出。

## Stack

- Python `>=3.11,<3.12`
- OpenCV
- NumPy
- PySide6
- pytest
- Optional MediaPipe / ONNX related extras

## AI Instructions

- 作業開始時に Working Directory / Git Root / Python 3.11 / `.venv` を確認する。
- User-provided face images or local camera captures are private data and should not be committed or written to shared memory.
- Optional AI dependencies should be treated separately from base install.

## Test / Verification

- `python -m pytest`
- 2026-06-27 時点の確認: 3 tests passed。
- UI behavior is verified by launching the app locally.

## Git Notes

- Source、tests、README、project metadata は Git 管理推奨。
- `.git` がない場合は、勝手に `git init` せず、versioning 方針を確認する。

## Next Tasks

- `.gitignore` が未作成の場合は `.venv/`、captures、generated files を除外する。
- Optional MediaPipe / ONNX setup は base flow と分けて記録する。

## Related Notes

- `NOTES/AI.md`
