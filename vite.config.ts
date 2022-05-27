import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { viteMockServe } from 'vite-plugin-mock';

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
    }),
    VueSetupExtend(),
    viteMockServe({
      mockPath: 'mock',
      supportTs: true,
      watchFiles: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
