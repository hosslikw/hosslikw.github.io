/// <reference types="vitest" />
import vuePlugin from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "node:path"
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite"


export default defineConfig(({ command, mode }) => {
	const base = "/"


	return {
		base,
		plugins: [
			vuePlugin(),
			vueJsx()
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL('./', import.meta.url))
			}
		},
		build: {
			minify: mode === "production",
			outDir: path.join(__dirname, "dist"),
			emptyOutDir: true,
			rollupOptions: {
				input: {
					main: path.resolve("src / landing.html")
				}
			},
			ssr: {
				noExternal: ["@vitejs/test-example-external-component"]
			}
		},
		server: {
			port: 3001
		},
		root: __dirname,
		test: {
			environment: "jsdom",
			exclude: ["e2e/*"]
		}
	}
})
