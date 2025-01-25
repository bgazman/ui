import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'vite:resolve-alias-in-css',
      enforce: 'pre',
      resolveId(id) {
        if (id.startsWith('@')) {
          return path.resolve(__dirname, id.slice(1));
        }
        return null;
      },
    },
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@features': path.resolve(__dirname, 'src/components/features'),
      '@navigation': path.resolve(__dirname, 'src/components/navigation'),
      '@theme': path.resolve(__dirname, 'src/components/theme'),
      '@tools': path.resolve(__dirname, 'src/components/tools'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
    },
  },
});