// Importing necessary modules and functions
import { URL, fileURLToPath } from "node:url"
import path from "path"
import { defineConfig, normalizePath } from "vite"
import deadFile from "vite-plugin-deadfile"

// Convert file URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url))
const includePath = normalizePath(path.join("src", "components"))

export default defineConfig(({ mode }) => {
  // Define global constants based on environment
  const globalDefines = {
    __BASE_URL__: JSON.stringify("https://kylehossli.com/"),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  }

  // Configuration object
  return {
    root: __dirname,
    base: "./",
    plugins: [
      deadFile({
        include: [includePath],
        enforce: "pre",
      }),
    ],
    resolve: {
      alias: {
        "@": __dirname, // Alias for project root
        "@images": path.resolve(__dirname, "public/images"),
        "@styles": path.resolve(__dirname, "src/css"),
      },
    },
    build: {
      minify: mode === "production",
      outDir: "dist",
      assetsDir: "assets",
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
      open: "/src/styles-index.html", // Corrected path for initial open
    },
    test: {
      environment: "jsdom",
      exclude: [],
    },
    define: globalDefines,
  }
})
