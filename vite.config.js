import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
// Define the configuration object
export default defineConfig(async ({ command, mode }) => {
  // Perform any asynchronous operations here
  // const data = await asyncFunction()

  return {
    plugins: [
      vue(),
      vueJsx({}),
      pugPlugin({
        /* Pug plugin options */
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Alias '@' points to the 'src' directory
        '@root': path.resolve(__dirname, './'), // Alias '@root' points to the project root
      },
    },


    root: __dirname,
    build: {
      outDir: path.join(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          // Add other entries if necessary
        },
      },
    },
  };
});
