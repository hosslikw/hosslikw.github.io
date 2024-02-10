/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "node:path"
import { resolve } from "path"
import { URL, fileURLToPath } from "node:url"
import { defineConfig } from "vite"

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
			outDir: path.join(__dirname, "dist"),
			emptyOutDir: false,
			rollupOptions: {
				// Updated input for multiple pages
				input: {
					main: resolve(__dirname, "index.html"),
					landingPage: resolve(__dirname, "src/landingPage/index.html"),
					singleProject: resolve(__dirname, "src/singleProject/index.html"),
					styles: resolve(__dirname, "src/styles/index.html")
			}
		}
	},
		server: {
			open: "index.html",
		},
	root: __dirname,
		test: {
		environment: "jsdom",
			exclude: ["e2e/*"]
	}
}
}
)

