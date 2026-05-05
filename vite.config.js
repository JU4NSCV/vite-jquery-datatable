import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api-ecuador': {
        target: 'https://www.gob.ec',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-ecuador/, '')
      }
    }
  }
})