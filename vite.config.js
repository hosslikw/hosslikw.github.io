import { URL, fileURLToPath } from "node:url"
import path from "path"
import { defineConfig } from "vite"
import { imagetools } from "vite-imagetools"
import deadFile from "vite-plugin-deadfile"
// Convert file URL to directory path
const __dirname = fileURLToPath(new URL(".", import.meta.url))

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
        include: [
          "src/**/*.{js,css}", // Adjust according to the file types you use
        ],
        exclude: [
          "node_modules/**", // Typically exclude node_modules
          "dist/**", // Exclude distribution directory
          "public/**", // Exclude any public assets if not processed
          "**/__tests__/**", // Exclude test files
          "**/*.test.{js,ts}", // Exclude test files
          "**/*.spec.{js,ts}", // Exclude spec files
        ],
        enforce: "pre",
      }),
      imagetools({
        defaultDirectives: (url) => {
          // Check if the image is a JPEG
          if (url.pathname.endsWith(".jpg") || url.pathname.endsWith(".jpeg")) {
            return new URLSearchParams({
              format: "webp", // Convert to WebP format
            })
          }
          return new URLSearchParams() // No conversion for other formats
        },
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
      rollupOptions: {
        input: {
          project: path.resolve(
            __dirname,
            "src/html/projects-base-sematic.html",
          ),
          standards: path.resolve(
            __dirname,
            "src/html/styles/s-standards.html",
          ),
          landing: path.resolve(__dirname, "src/html/landing-page.html"),
          posture: path.resolve(__dirname, "src/html/posture.html"),
          cv: path.resolve(__dirname, "src/html/cv.html"),
        },
      },
      sourcemap: mode !== "production", // Enable sourcemaps in non-production modes
      manifest: true,
    },
    server: {
      open: "/src/styles-index.html",
    },
    test: {
      environment: "jsdom",
      exclude: [],
    },
    define: globalDefines,
  }
})
