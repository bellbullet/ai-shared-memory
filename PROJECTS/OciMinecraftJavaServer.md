# OciMinecraftJavaServer

最終更新: 2026-06-27

## Goal

- Oracle Cloud Free Tier の Ampere A1.Flex で Minecraft Java server を動かす Terraform project。
- VM setup scripts、systemd units、backup timer templates を管理する。

## Status

- Terraform infrastructure project。
- Git 管理は source only で推奨。ただし local workspace では `.git` 未検出。
- State、tfvars、plan、logs は local-only。

## Stack

- Terraform
- Oracle Cloud Infrastructure
- PowerShell retry script
- Bash setup scripts
- systemd
- Minecraft Java server

## AI Instructions

- API key、OCID、private key path、webhook、terraform state、tfvars の実値を公開メモリに記載しない。
- Terraform 操作前に Working Directory / Git Root / Terraform executable / workspace を確認する。
- Destroy や state 操作は明示確認なしに実行しない。
- Logs を扱う場合は token、secret、webhook を redaction する。

## Test / Verification

- `terraform fmt`
- `terraform validate`
- `terraform plan`
- VM 作成後は SSH、systemd service、backup timer を確認する。

## Git Notes

- `.tf`、scripts、templates、systemd units、README は Git 管理推奨。
- `.terraform/`、`terraform.tfstate*`、`terraform.tfvars`、tfplan、logs、env files は Git 管理対象にしない。
- `.git` がない場合は、Git 管理前に ignore rules と secret/state 混入を確認する。

## Next Tasks

- Git 管理する場合は private/public 方針を確認する。
- State と secret を含まない clean source tree を確認する。

## Related Notes

- `NOTES/HomeLab.md`
