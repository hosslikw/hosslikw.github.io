/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "node:path"
import { URL, fileURLToPath } from "node:url"
import { defineConfig } from "vite"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

const config = defineConfig(({ mode }) => {
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
			emptyOutDir: true,
			rollupOptions: {
				input: {
					main: path.resolve("src/styles.html")
				}
			}
		},
		server: {
			open: "src/styles.html"
		},
		root: __dirname,
		test: {
			environment: "jsdom",
			exclude: ["e2e/*"]
		}
	}
})

export default config
