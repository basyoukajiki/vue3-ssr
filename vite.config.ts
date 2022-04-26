import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslint-disable-next-line new-cap
    Components({
      dirs: ['src/components'],
      directoryAsNamespace: true,
    }),
    // eslint-disable-next-line new-cap
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/head'],
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
