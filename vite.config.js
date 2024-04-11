/// <reference types="vitest">
import { defineConfig } from "vite"
import { resolve } from "path"
import {fileURLToPath } from "node:url"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

export default defineConfig(({ mode }) => {
	return {
		base: "./",
		resolve: {
			alias: {
				"@": resolve(__dirname, "./"),
			},
		},

		build: {
			minify: mode === "production",
			outDir: resolve(__dirname, "dist"),
			emptyOutDir: false,
			rollupOptions: {
				input: {
					index: resolve(__dirname, "index.html"),
					specifics: resolve(__dirname, "specifics.html"),
					styles: resolve(__dirname, "styles-index.html"),
				},
			},
		},
		server: {
			open: "/styles-index.html",
		},
		root: __dirname,
		test: {
			environment: "jsdom",
			exclude: [],
		},
	}
})