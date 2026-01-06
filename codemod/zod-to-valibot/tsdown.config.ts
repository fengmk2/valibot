import { defineConfig } from '@voidzero-dev/vite-plus/lib';

// export default defineConfig([
//   {
//     entry: ['./src/transform/index.ts'],
//     clean: true,
//     format: ['es'],
//     minify: false,
//     dts: true,
//     outDir: './dist',
//   },
// ]);

export default defineConfig({
  entry: ['./src/transform/index.ts'],
  clean: true,
  format: ['es'],
  minify: false,
  dts: true,
  outDir: './dist',
});
