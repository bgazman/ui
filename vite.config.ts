import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import aliases from './aliases';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
