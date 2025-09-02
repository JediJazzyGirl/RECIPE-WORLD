// vite.config.js
import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This pre-plugin transforms every .js in /src with the JSX loader
  plugins: [
    {
      name: 'jsx-in-js',
      enforce: 'pre',
      async transform(code, id) {
        // Only touch files in your src folder that end with .js
        if (id.includes('/src/') && id.endsWith('.js')) {
          return transformWithEsbuild(code, id, {
            loader: 'jsx',
            jsx: 'automatic'
          });
        }
      }
    },
    react()
  ],
  esbuild: {
    // Also tell esbuild (for non-plugin paths) to treat .js as JSX
    loader: 'jsx',
    include: /src\/.*\.js$/
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' }
    }
  },
  // (Optional) Silence the red overlay if you prefer
  // server: { hmr: { overlay: false } }
});
