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
    plugins: [eslintPlugin({
        cache: false, // 禁用 eslint 缓存
    })],
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


### Vite 中 TS 环境的说明
- vite 只 执行 ts 转义工作 不会进行类型检查
- build 时  会 先验证 再 build  ----"build": "vue-tsc --noEmit && vite build",----


### 项目集成 vue-router
- 安装
```sh
yarn add vue-router@4
```

### 项目集成 vueX
- 安装
```sh
yarn add vuex@next
```

### 项目配置 别名 @
- 因为使用 node 模块 需要安装 yarn add @types/node -D
- 路径报错 所以要设置 tsconfig.node.json 


### 项目 集成 scss
- 无需安装额外的插件 只需要安装 sass
```sh
npm install -D sass
```
- 使用 sass 变量 需要 配置 vite.config.ts
```js
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/style/varables.scss";',
            },
        },
    },
```







