import { defineConfig } from 'vite'

export default defineConfig({
  base: '/vite-jquery-datatable/',
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