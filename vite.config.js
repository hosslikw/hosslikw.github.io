/** @format */

import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"

// Get the current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [vue(), vueJsx({})],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@root": path.resolve(__dirname, "./")
		}
	},
	server: {
		port: 3001
	},
	root: __dirname,
	build: {
		outDir: path.join(__dirname, "dist"),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html")
				// Add other entries if necessary
			}
		}
	},
	test: {
		environment: "jsdom",
		exclude: ["e2e/*"], // you can adjust this exclude pattern to fit your needs
		root: fileURLToPath(new URL("./", import.meta.url))
	}
})
