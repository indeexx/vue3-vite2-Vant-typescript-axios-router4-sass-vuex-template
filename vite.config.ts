import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: "",
  build: {
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  plugins: [
    vue(),
  ],
  server: {
    port: 8888,
    open: true,
    proxy: {
      "/api": "http://localhost:8889",
    },
    cors: true,
  }
})
