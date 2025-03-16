import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import stdLibBrowser from 'vite-plugin-node-stdlib-browser'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stdLibBrowser()],
  resolve: {
    alias: {
      '@store': path.resolve('src/store'),  // Use relative path instead of process.cwd()
    },
  },
  define: {
    'process.env': {},
  },
})
