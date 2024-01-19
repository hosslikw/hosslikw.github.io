import path from "node:path"
import { defineConfig } from "vite"
import vuePlugin from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

// ... (other constants and global variable settings)

export default defineConfig(({ command, mode }) => {
	const base = "/"

	return {
		base,
		plugins: [
			vuePlugin(),
			vueJsx()
			// ... (other plugin configurations)
		],
		// ... (other configuration settings)
		build: {
			minify: mode === "production",
			outDir: path.join(__dirname, "dist"),
			emptyOutDir: true,
			rollupOptions: {
				input: {
					main: path.resolve(__dirname, "index.html")
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
