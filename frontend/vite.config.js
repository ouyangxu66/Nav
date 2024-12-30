import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 80,
    strictPort: false,
    open: false,
    // 自定义代理规则：将前端请求转发到后端服务器（这里是本地部署后端
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },

  resolve: {
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'，方便组件简化路径
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
})