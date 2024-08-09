import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';

// Convert file URL to directory path
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ mode }) => {
  // Define global constants based on environment
  const globalDefines = {
    __BASE_URL__: JSON.stringify('https://kylehossli.com/'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  };

  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
      sourcemap: mode !== 'production', // Enable sourcemaps in non-production modes
      manifest: true,
    },
    resolve: {
      alias: {
        '@': __dirname, // Alias for project root
        '@images': path.resolve(__dirname, 'public/images'),
        '@styles': path.resolve(__dirname, 'src/css'),
      },
    },
    define: globalDefines, // Add global defines here
  };
});