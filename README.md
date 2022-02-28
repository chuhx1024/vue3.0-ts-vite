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