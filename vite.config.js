import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { writeFileSync } from 'fs';

export default defineConfig({
  // ✅ Base path for custom domain (root)
  base: '/',

  plugins: [
    react(),

    // ✅ Write .nojekyll and CNAME into /docs for GitHub Pages + custom domain
    {
      name: 'pages-meta',
      writeBundle() {
        const outDir = 'docs';
        // Prevent Jekyll processing
        writeFileSync(path.resolve(outDir, '.nojekyll'), '');
        // Custom domain for GitHub Pages
        writeFileSync(path.resolve(outDir, 'CNAME'), 'farhadalibayli.site\n');
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
    outDir: 'docs',
    assetsDir: 'assets',
  },

  server: {
    port: 3000,
    open: true,
  },
});
