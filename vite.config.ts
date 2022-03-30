import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslint-disable-next-line new-cap
    Components({
      directoryAsNamespace: true,
    }),
    // eslint-disable-next-line new-cap
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
    }),
  ],
});
