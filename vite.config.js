import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import dns from 'node:dns'

// Convert file URL to directory path
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Set up DNS to resolve 'localhost' to 127.0.0.1 for development purposes
dns.setDefaultResultOrder('verbatim')
  // Define global constants based on environment
const globalDefines = {
    __BASE_URL__: JSON.stringify('https://kylehossli.com/'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  };

export default defineConfig({
  build: {
    sourcemap: true,
    manifest: true,
  },
  resolve: {
    alias: {
      '@': __dirname, // Alias for project root
      '@images': path.resolve(__dirname, 'public/images'),
      '@styles': path.resolve(__dirname, 'src/css/'),
    },
  },
  define: globalDefines, // Add global defines here
});