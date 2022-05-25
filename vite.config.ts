import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      resolvers: [
        NaiveUiResolver()
      ],
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
