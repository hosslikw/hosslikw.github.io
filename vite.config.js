import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
// Define the configuration object
export default defineConfig(async ({ command, mode }) => {
  // Perform any asynchronous operations here
  // const data = await asyncFunction()

  return {
    plugins: [
      vue(),
      vueJsx(),
      pugPlugin({
        /* Pug plugin options */
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // SCSS global configurations
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    root: __dirname,
    build: {
      outDir: path.join(__dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          // Add other entries if necessary
        },
      },
    },
  };
});
cd