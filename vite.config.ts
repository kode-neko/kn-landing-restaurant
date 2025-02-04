/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
  test: {
    environment: 'happy-dom',
    globals: true
  }
});
