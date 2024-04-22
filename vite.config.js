import { URL, fileURLToPath } from "node:url"
import resolve from "vite-plugin-resolve"
import { defineConfig, normalizePath } from "vite"
import path from "path"
import deadFile from "vite-plugin-deadfile"

// Convert file URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url))
const includePath = normalizePath("src\\components")

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      deadFile({
        include: [includePath],
        enforce: "pre",
      }),
    ],
    base: "./",
    resolve: {
      alias: {
        "@": __dirname, // Directly use __dirname if you meant to point to the project root
        "@images": path.resolve(__dirname, "src/images"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
    build: {
      minify: mode === "production",
      outDir: path.join(__dirname, "build"),
      emptyOutDir: false,
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, "src/index.html"),
          specifics: path.resolve(__dirname, "src/specifics.html"),
          styles: path.resolve(__dirname, "src/styles-index.html"),
        },
      },
    },
    server: {
      open: "/src/styles-index.html", // Ensure this path starts with a slash for absolute path from the root
    },
    root: __dirname,
    test: {
      environment: "jsdom",
      exclude: [],
    },
  }
})
