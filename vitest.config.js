import {fileURLToPath} from 'node:url';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '~': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: false,
    include: ['app/**/*.{test,spec}.{js,jsx}'],
    setupFiles: ['./vitest.setup.js'],
    coverage: {
      provider: 'v8',
      include: ['app/lib/**', 'app/components/**'],
    },
  },
});
