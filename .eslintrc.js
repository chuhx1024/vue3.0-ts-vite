module.exports = {
    env: {
        browser: true,
        es2021: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'plugin:vue/vue3-strongly-recommended',
        'standard',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        'vue',
        '@typescript-eslint',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
        indent: [2, 4], // js 4个空格缩进
        'vue/html-indent': [2, 4], // html 4个空格缩进
        eqeqeq: 0, // 允许使用 == !=
        'comma-dangle': [2, 'always-multiline'], // 对象 数据 分行显示的 结尾必须加 ','
        'quote-props': 0,
        'vue/multi-word-component-names': 0,
    },
    // 单独给 api 文件设置规则
    overrides: [
        {
            files: ['src/api/**/*.ts', 'src/api0/**/*.ts'],
            rules: {
                'camelcase': 0, // 禁用必须驼峰命名
            },
        },
    ],
}
