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
      outDir: path.join(-dirname, "dist"),
      emptyOutDir: false,
      rollupOptions: {
        // Updated input for multiple pages
        input: {
          index: resolve(-dirname, "index.html"),
          specifics: resolve(-dirname, "specifics.html"),
          styles: resolve(-dirname, "styles.html"),
        },
      },
    },
    server: {
      open: "styles.html",
    },
    root: -dirname,
    test: {
      environment: "jsdom",
      exclude: [],
    },
  }
})
