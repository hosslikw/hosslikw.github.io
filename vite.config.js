import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import path from "path"
import { fileURLToPath } from "url"
import purgecss from "vite-plugin-purgecss";

// Get the current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [
	 [vue(), vueJsx({})],
	 purgecss({
      content: ['./**/*.html', './**/*.vue', './**/*.jsx', './**/*.tsx'],
      // Other PurgeCSS options if needed
    })
  ],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@root": path.resolve(__dirname, "./")
		}
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
