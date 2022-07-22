import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { viteMockServe } from 'vite-plugin-mock';
import Markdown from 'vite-plugin-md';
import copy from 'rollup-plugin-copy';
import VueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    VueJsx(),
    Markdown(),
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
    }),
    viteCompression()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    chunkSizeWarningLimit: 500,
    minify: 'terser',
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
      output: {
        comments: true
      }
    },
    rollupOptions: {
      plugins: [
        copy({
          hook: 'closeBundle',
          targets: [
            { src: './src/docs', dest: 'dist' }
          ]
        })
      ],
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          echarts: ['echarts']
        }
      }
    },
    brotliSize: false
  }
});
