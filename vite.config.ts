import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin({
            // 配置项
            cache: false, // 禁用 eslint 缓存
        }),
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'), // 把src改为@
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/style/varables.scss";',
            },
        },
    },
})
