import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    // 设置server 目的是为了能够访问局域网内的其他设备
    host: '0.0.0.0',
    port: 3000, // 你可以选择任意可用端口
    strictPort: true, // 如果设置为true，当端口被占用时Vite会抛出错误而不是尝试其他端口
    open: true, // 根据需要自动打开浏览器
    cors: true, // 开启跨域资源共享，这在某些场景下可能需要
  },
})
