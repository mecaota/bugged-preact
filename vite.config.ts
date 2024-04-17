import preact from '@preact/preset-vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isDev = process.env.NODE_ENV !== 'production';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
  plugins: [
    preact(),
    tsconfigPaths(),
    visualizer({
      emitFile: true,
      sourcemap: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'analyze/stats.html',
    }),
  ],
});
