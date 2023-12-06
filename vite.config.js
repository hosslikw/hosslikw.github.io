import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
  plugins: [vue(), pugPlugin({ /* Pug plugin options */ })],
  css: {
    preprocessorOptions: {
      scss: {
        // SCSS global configurations
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  },
  root: __dirname, // Set the project root to the current directory
  publicDir: path.join(__dirname, 'public'), // Adjust if you have a public directory
  build: {
    outDir: path.join(__dirname, 'dist'), // Output directory for builds
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Entry point for the build
        // Add other entries if necessary
      }
    }
  }
});
