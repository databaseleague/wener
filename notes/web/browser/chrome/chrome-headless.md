---
title: Headless
---

# Chrome Headless

- [ChromeDevTools/awesome-chrome-devtools](https://github.com/ChromeDevTools/awesome-chrome-devtools)
- [Chrome Flags for Tooling](https://github.com/GoogleChrome/chrome-launcher/blob/main/docs/chrome-flags-for-tools.md)
- https://chromedevtools.github.io/devtools-protocol/
- devtools-ws-url
  - --remote-debugging-port=9222
    - /json
- flags
  - --user-data-dir=$DIR
  - --blink-settings=imagesEnabled=false
- https://github.com/GoogleChrome/chrome-launcher/blob/master/docs/chrome-flags-for-tools.md
- https://niek.github.io/chrome-features/
- [blink features](https://source.chromium.org/chromium/chromium/src/+/master:out/Debug/gen/third_party/blink/renderer/platform/runtime_enabled_features.cc;l=1559;drc=170473ad887b7990079f1f996b126548569c5902)
- [RuntimeEnabledFeatures](https://chromium.googlesource.com/chromium/src/+/master/third_party/blink/renderer/platform/RuntimeEnabledFeatures.md)
- https://www.chromium.org/developers/design-documents/network-settings/
  - --proxy-server=127.0.0.1:7890

```
--enable-blink-features=SomeNewFeature,SomeOtherNewFeature
--disable-blink-features=SomeOldFeature
```

:::tip

- Proxy 只能配置全局，不可以按页面配置
  - [puppeteer#678](https://github.com/puppeteer/puppeteer/issues/678)
  - Context 可以配置代理 https://pptr.dev/next/api/puppeteer.browsercontextoptions/
- 不支持 PAC
- [puppeteer#540](https://github.com/puppeteer/puppeteer/issues/540)
  - 多个 cert 会出现选择

:::

## Awesome

- [puppeteer](https://github.com/puppeteer/puppeteer)
  - Apache-2.0, TS
  - Chrome 团队支持
- [microsoft/playwright](https://github.com/microsoft/playwright)
  - 支持 多浏览器 - Chromium, Firefox, WebKit
  - patch Firefox, WebKit 实现
- Golang
  - [chromedp/chromedp](https://github.com/chromedp/chromedp)
    - [chromedp/examples](https://github.com/chromedp/examples)
  - [sensepost/gowitness](https://github.com/sensepost/gowitness)

## WebDriver

- [W3C WebDriver](https://w3c.github.io/webdriver/webdriver-spec.html)
  - 控制浏览器
- [electron/chromedriver](https://github.com/electron/chromedriver)
  - 下载 [ChromeDriver](https://sites.google.com/chromium.org/driver/)
  - https://chromedriver.chromium.org/
  - https://chromedriver.storage.googleapis.com/index.html
- webdriver
  - Python `from selenium import webdriver`

# FAQ

## playwright vs puppeteer

- https://blog.logrocket.com/playwright-vs-puppeteer/
