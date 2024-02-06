/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from "node:path";
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from 'vite';

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

		}
	}
})


