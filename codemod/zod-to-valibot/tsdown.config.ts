import { defineConfig } from 'vite-plus/lib';

export default defineConfig([
  {
    entry: ['./src/transform/index.ts'],
    clean: true,
    format: ['es'],
    minify: false,
    dts: true,
    outDir: './dist',
  },
]);
