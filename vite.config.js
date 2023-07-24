import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // base source dir
      '@assets': '/src/assets', // assets dir
      '@components': '/src/components' // components dir
    }
  }
})
