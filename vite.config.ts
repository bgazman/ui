import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

const aliases = {
  '@components': path.resolve(__dirname, 'src/components'),
  '@assets': path.resolve(__dirname, 'src/assets'),
  '@pages': path.resolve(__dirname, 'src/pages'),
  '@theme': path.resolve(__dirname, 'src/theme'),
  '@layout': path.resolve(__dirname, 'src/layout'),
};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
