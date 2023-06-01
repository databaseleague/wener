---
tags:
  - Version
---

# Gitea Version

| version    | date       |
| ---------- | ---------- |
| Gitea 1.19 | 2023-03-20 |
| Gitea 1.18 | 2022-10-29 |

## Gitea 1.19

- PTA scope
- 个人设置/仓库设置 - 支持配置清理逻辑,容量限制
- 新增仓库 Cargo, Chef, Conda
- 用户名
  - `[-._a-zA-Z0-9]`
  - 不能以 `-._` 开头和结尾
  - 不能连续出现 `-._`
- Gitea Actions
  - `.gitea/workflows/<workflow name>.yaml`
  - `.github/workflows/<workflow name>.yaml`
  - 新增 Secrets
- LFS GC
- Reply by email

## Gitea 1.18

- 新增仓库
  - Chocolatey/NuGet v2 API (.NET)
  - Vagrant
  - npm unpublish (JS/TS)
  - Pub packages (Dart)
- Issue forms and PR forms
- User/organization code search
- system_setting 配置表

## Gitea 1.17

- 支持 package
  - Composer, Conan, Generic, Helm, Maven, npm, NuGet, OCI Containers (Docker), PyPI and RubyGems
  - https://docs.gitea.io/en-us/packages/overview/