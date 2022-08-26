---
title: eslint
---

# eslint

```bash
npx eslint "src/**" --ext .ts --ext .tsx
```

- eslint-plugin-import
- eslint-plugin-react
- eslint-plugin-jsx-a11y
- react/react-in-jsx-scope
  - 不要求 `import React from 'react'`
  - ESBuild 还不支持 jsx - 因此需要 `import React` - [esbuild#334](https://github.com/evanw/esbuild/issues/334)
- 参考
  - [eslint.org](https://eslint.org)
    - [rules](https://eslint.org/docs/latest/rules/)
  - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
    - [rules](https://typescript-eslint.io/rules/)
  - https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next

## 配置

- .eslintrc.{js,yml,json}

```js
module.exports = {
  root: true,
  // 扩展现有配置 - 可以是绝对路径，可以是包/模块
  // 缩写逻辑:
  //   custom -> eslint-config-custom
  //   @wener -> @wener/eslint-config
  extends: ['@wener/eslint-config-custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
```

## disable/false positive

```js
// 忽略单个规则
/*eslint eqeqeq:0*/

// 忽略单行
// eslint-disable-next-line

// 忽略范围
/*eslint-disable */
alert('foo');
/*eslint-enable */
```

# FAQ

## The file does not match your project config

```js title=".eslintrc.js"
module.exports = {
  ignorePatterns: ['.eslintrc.js'],
};
```