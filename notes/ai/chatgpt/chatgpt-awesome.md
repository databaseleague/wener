---
tags:
  - Awesome
---

# ChatGPT Awesome

- https://github.com/topics/chatgpt
- [humanloop/awesome-chatgpt](https://github.com/humanloop/awesome-chatgpt)
- [Kamigami55/awesome-chatgpt](https://github.com/Kamigami55/awesome-chatgpt)
- [logankilpatrick/ChatGPT-Plugins-Collection](https://github.com/logankilpatrick/ChatGPT-Plugins-Collection)
- ChatGPT for Google https://chrome.google.com/webstore/detail/chatgpt-for-google/jgjaeacdkonaoafenlfkkkmbaopkbilf
- [lxfater/LLMR-NLUP](https://github.com/lxfater/LLMR-NLUP)
  - Natural-Language-UI-Programming
- [zckly/dynamic-interface-web](https://github.com/zckly/dynamic-interface-web)
- https://sharegpt.com/
- [eon01/awesome-chatgpt](https://github.com/eon01/awesome-chatgpt)
- [nichtdax/awesome-totally-open-chatgpt](https://github.com/nichtdax/awesome-totally-open-chatgpt)
- [f/awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
- [josStorer/chatGPTBox](https://github.com/josStorer/chatGPTBox)
- 注册激活
  - https://sms-activate.org/
    - https://sms-activate.org/en/info/ChatGPT
  - onlinesim.io
- VPN
  - nordvpn
  - expressvpn
- 统计
  - statsigapi.net

## WebUI

- [Niek/chatgpt-web](https://github.com/Niek/chatgpt-web)
- [Yidadaa/ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)

```bash
# CODE 访问密码，逗号分隔
# BASE_URL=api.openai.com
# PROTOCOL=https
docker run --rm -it \
  -e OPENAI_API_KEY="" -e CODE="" \
  -e https=http://192.168.1.1:7890 \
  -p 3000:3000 \
  --name chatgpt-next-web wener/chatgpt-next-web
```

## Proxy

- [easychen/openai-api-proxy](https://github.com/easychen/openai-api-proxy)
  - MIT, JS, Express

```bash
# PORT
# PROXY_KEY - 限制访问密码 - <TOKEN>:<PROXY_KEY>
# TIMEOUT=30s
docker run --rm -it \
  -p 9000:9000 \
  --name openai-api-proxy easychen/ai.level06.com:latest
```

## Prompt

- Idea -> Implementation -> Experiment Result -> Error Analysis -> Idea
- 开发 Prompt 完成特定任务
- Prompt 就是 UI - 用户交互界面

## When

**ChatGPT 能力说明**

- 优点:
  - 语义理解
  - 问答
  - 生成 - 头脑风暴
  - 情感分析 - 分类问题
- 缺点:
  - 不能保证绝对准确
  - 要求绝对答案的时候大多时候不对
    - 例如: XXX 原文
  - 内容较多时，慢
  - 存在偏见
  - 容易被误导
  - 幻觉 - 假的说的和真的一样
  - 推理和判断能力有限
  - 缺少时事信息 - 2021年
  - Context 上限

**ChatGPT 交互**

1. 流式逐字输出 - 体感更好
1. 一次性输出 - 可能等很久
