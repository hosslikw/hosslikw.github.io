/// <reference types="vitest" />
import path from "node:path"
import { resolve } from "path"
import { URL, fileURLToPath } from "node:url"
import { defineConfig } from "vite"
import SwupBodyClassPlugin from '@swup/body-class-plugin';


export default defineConfig(({ mode }) => {
	return {
		base: "./",
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
					landingPage: resolve(__dirname, "src/landing-page/index.html"),
					singleProject: resolve(__dirname, "src/single-project/index.html"),
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

