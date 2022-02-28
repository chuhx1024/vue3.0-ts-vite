# Vue 3 + Typescript + Vite

### 使用 vite 创建项目
```sh
yarn create vite

# 填写 项目名称
# 选择 vue 模板
# 选择 vue + ts
```


### 配置 ESLint
```sh
npm i eslint -D

yarn eslint --init

```
```js
// error  'defineProps' is not defined  no-undef
// .eslintrc.js
env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
},
// .eslintrc.js 配置 使用 vue3 规则
extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard',
],
```

### vite 配置 eslint 不通过 无法编译
- https://github.com/gxmari007/vite-plugin-eslint
```sh
yarn add vite-plugin-eslint --dev


# vite.config.ts
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin()],
});
```

#### vs code  根据此项目 eslint 规则 保存时格式化代码
```js
.vscode/settings.json
```

### vs code 环境配置
- 1. 禁用 vetur
- 2. 安装 eslint
- 3. 安装 Vue Language Features (Volar)





