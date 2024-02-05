/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// You can directly export the result of defineConfig
export default defineConfig(({ mode }) => {
	return {
		base: "./",
		plugins: [
			vue(),
			vueJsx(),
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./", import.meta.url))
			}
		},
		build: {
			minify: mode === "production",
			outDir: path.join(__dirname, "build"),
			emptyOutDir: true,
			rollupOptions: {
				// Updated input for multiple pages
				input: {
					main: resolve(__dirname, "index.html"),
					page1: resolve(__dirname, "nested/page1/index.html"),
					page2: resolve(__dirname, "nested/page2/index.html"),
					page3: resolve(__dirname, "nested/page3/index.html"),
					page4: resolve(__dirname, "nested/page4/index.html"),
					page5: resolve(__dirname, "nested/page5/index.html"),
					page6: resolve(__dirname, "nested/page6/index.html"),
					page7: resolve(__dirname, "nested/page7/index.html"),
					page8: resolve(__dirname, "nested/page8/index.html"),
					page9: resolve(__dirname, "nested/page9/index.html"),
					page10: resolve(__dirname, "nested/page10/index.html"),
					page11: resolve(__dirname, "nested/page11/index.html"),
					page12: resolve(__dirname, "nested/page12/index.html"),
					page13: resolve(__dirname, "nested/page13/index.html"),
					page14: resolve(__dirname, "nested/page14/index.html"),
					page15: resolve(__dirname, "nested/page15/index.html"),
					page16: resolve(__dirname, "nested/page16/index.html"),
					page17: resolve(__dirname, "nested/page17/index.html"),
					page18: resolve(__dirname, "nested/page18/index.html"),
					page19: resolve(__dirname, "nested/page19/index.html"),
					page20: resolve(__dirname, "nested/page20/index.html"),
					page21: resolve(__dirname, "nested/page21/index.html"),
					page22: resolve(__dirname, "nested/page22/index.html"),
					page23: resolve(__dirname, "nested/page23/index.html"),
					page24: resolve(__dirname, "nested/page24/index.html"),
					page25: resolve(__dirname, "nested/page25/index.html"),
					page26: resolve(__dirname, "nested/page26/index.html"),
					page27: resolve(__dirname, "nested/page27/index.html"),
					page28: resolve(__dirname, "nested/page28/index.html"),

				}
			}
		},
		server: {
			open: true, // Adjust as needed for your project's structure
		},
		root: __dirname,
		test: {
			environment: "jsdom",
			exclude: ["e2e/*"]
		}
	}
})


