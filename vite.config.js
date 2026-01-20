import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { writeFileSync } from 'fs';

export default defineConfig({
  // ✅ GitHub Pages base path (FIX #1)
  base: '/CodeAlpha_Portfolio_FA/',

  plugins: [
    react(),

    // ✅ .nojekyll MUST be written into OUTDIR (FIX #2)
    {
      name: 'nojekyll',
      writeBundle(_, bundle) {
        const outDir = 'build';
        writeFileSync(path.resolve(outDir, '.nojekyll'), '');
      },
    },
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',
    outDir: 'build',
    assetsDir: 'assets',
  },

  server: {
    port: 3000,
    open: true,
  },
});
