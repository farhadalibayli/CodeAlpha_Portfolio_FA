import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: '/', // IMPORTANT: root domain

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'dist',   // Standardize output directory
    assetsDir: 'assets',
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },
})
