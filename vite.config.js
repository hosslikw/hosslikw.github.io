/// <reference types="vitest">
import path from "node:path"
import { URL, fileURLToPath } from "node:url"
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => {
  return {
    base: "./",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
      },
    },

    build: {
      minify: mode === "production",
      outDir: path.join(__dirname, "dist"),
      emptyOutDir: false,
      rollupOptions: {
        // Updated input for multiple pages
        input: {
          index: path.resolve(__dirname, "index.html"),
          specifics: path.resolve(__dirname, "specifics.html"),
          styles: path.resolve(__dirname, "styles-index.html"),
        },
      },
    },
    server: {
      open: "styles-index.html",
    },
    root: __dirname,
    test: {
      environment: "jsdom",
      exclude: [],
    },
  }
})
