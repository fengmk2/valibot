import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from '@voidzero-dev/vite-plus';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    isolate: false,
    coverage: {
      include: ['src'],
      exclude: ['**/index.ts', '**/types.ts', '**/*.test.ts'],
    },
  },
});
