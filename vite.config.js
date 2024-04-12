/// <reference types="vitest">
<<<<<<< HEAD
import { defineConfig } from "vite"
import { resolve } from "path"
import {fileURLToPath } from "node:url"

const __dirname = fileURLToPath(new URL(".", import.meta.url))
=======
<<<<<<< HEAD
import path from "node:path"
import { URL, fileURLToPath } from "node:url"
import { resolve } from "path"
import { defineConfig } from "vite"
=======
import { defineConfig } from "vite";
import { resolve } from "path";
import {fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
>>>>>>> fedc2ac6 (sync)
>>>>>>> 1a43bc78 (sync)

export default defineConfig(({ mode }) => {
	return {
		base: "./",
		resolve: {
			alias: {
				"@": resolve(__dirname, "./"),
			},
		},

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 1a43bc78 (sync)
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
<<<<<<< HEAD
	}
})
=======
	};
});
>>>>>>> fedc2ac6 (sync)
>>>>>>> 1a43bc78 (sync)
