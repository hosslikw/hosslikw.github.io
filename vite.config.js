/// <reference types="vitest" />
import vuePlugin from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "node:path"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

// Get the directory name in ESM syntax
const __dirname = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig(({ mode }) => {
	const base = "/"

	return {
		base,
		plugins: [
			vuePlugin(),
			vueJsx()
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
					main: path.resolve("src/15-sa.html")
				}
			},
			ssr: {
				noExternal: ["@vitejs/test-example-external-component"]
			}
		},
		server: {
			port: 3001,
			open: "/src/15-sa.html"
		},
		root: __dirname,
		test: {
			environment: "jsdom",
			exclude: ["e2e/*"]
		}
	}
})
