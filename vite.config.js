/// <reference types="vitest">
import { defineConfig } from "vite"
import { resolve } from "path"
import {fileURLToPath } from "node:url"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

import path from "node:path"
import { URL, fileURLToPath } from "node:url"
import { resolve } from "path"
import { defineConfig } from "vite"
import { defineConfig } from "vite";
import { resolve } from "path";
import {fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

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
(sync)
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

	};
});
1a43bc78 (sync)
