---
title: CloudFlare
---

# CloudFlare

- /cdn-cgi
- 参考
  - https://www.cloudflare.com/zh-cn/learning/
  - [为什么能提供无限带宽？](https://webmasters.stackexchange.com/a/88685)
  - [Understanding Origin Cache-Control](https://support.cloudflare.com/hc/en-us/articles/115003206852-Understanding-Origin-Cache-Control)

| product       |                     | Base           |
| ------------- | ------------------- | -------------- |
| [spectrum]    | TCP, UDP - SSH, RDP | 5G + 1$/G, 10C |
| argo tunnel   | Tunnel HTTP,HTTPS   | 5G, 5$         |
| worker        |                     |                |
| load balance  |                     |                |
| rate limiting |                     |                |
| stream        |                     |                |
| team          |                     |                |

[spectrum]: https://developers.cloudflare.com/spectrum/

- Cloudflare for SaaS/Custom Hostname
  - 前 100 个免费
  - 0.10$/一个
- 默认 Universal SSL - 只支持顶级 域名 `*.wener.me, wener.me`
- Advanced Certificate Manager 10$/月
  - 增加额外域名

## Argo Tunnel

- 实现源端和 Cloudflare 之间加密通讯 - ZeroTrust
- [价格](https://support.cloudflare.com/hc/zh-cn/articles/115000224192) - Since 2018
- [免费声明](https://blog.cloudflare.com/tunnel-for-everyone/) - 2021-4-17
  - 没有 Argo Smart Routing 特性
  - 重命名为 Cloudflare Tunnel

| Traffic        | `$/Month` | `$/G/Month` |
| -------------- | --------- | ----------- |
| < 1 GB         | 5         | 5           |
| 10 GB          | 5.90      | 0.59        |
| 100 GB         | 14.90     | 0.149       |
| 1 TB / 1000 GB | 104.90    | 0.1049      |
| 10 TB          | 1004.90   | 0.10049     |

## Worker

- Free
  - 100,000 请求/天
    - 1000 请求/分钟
  - 单次请求 CPU 10ms
  - 第一次请求后延迟会降低
  - 30 个 Worker
- Bundled 5$/M
  - 10M 请求/月
    - 超出 1M 请求 `$0.50`
  - 单次请求 CPU 50ms
  - 总是最低延迟
  - 30 个 Worker
  - KV
    - 100 命名空间
    - 1G
    - 10M 读, 1M 写, 1M 删除, 10M List

## Bot Fight Mode

- 会注入 /cdn-cgi/challenge-platform/h/g/scripts/invisible.js
- 需要允许 js

# FAQ

## Cloudflare 不支持多级域名

多级域名会返回 ERR_SSL_VERSION_OR_CIPHER_MISMATCH

- Advanced Certificate Manager 10$/月 可以支持
- 或者考虑 bypass
- https://community.cloudflare.com/t/subdomain-too-deep/81872
