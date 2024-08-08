import { URL, fileURLToPath } from "node:url"
import path from "path"
import { defineConfig } from "vite"
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
    base: "/",
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

    ],
    resolve: {
      alias: {
        "@": __dirname, // Alias for project root
        "@images": path.resolve(__dirname, "public/images"),
        "@styles": path.resolve(__dirname, "src/css"),
      },
    },
    build: {
      rollupOptions: {
        input: {
          '01-uniform': path.resolve(__dirname, "src/html/art/01-uniform.html"),
          '02-the-brass': path.resolve(__dirname, "src/html/art/02-the-brass.html"),
          '03-the-bottom-is-aluminum-too': path.resolve(__dirname, "src/html/art/03-the-bottom-is-aluminum-too.html"),
          '04-hump': path.resolve(__dirname, "src/html/art/04-hump.html"),
          '05-riptide-rush': path.resolve(__dirname, "src/html/art/05-riptide-rush.html"),
          '06-happy-meal': path.resolve(__dirname, "src/html/art/06-happy-meal.html"),
          '07-faking-it-with-family': path.resolve(__dirname, "src/html/art/07-faking-it-with-family.html"),
          '08-sign-fold': path.resolve(__dirname, "src/html/art/08-sign-fold.html"),
          '09-late-night': path.resolve(__dirname, "src/html/art/09-late-night.html"),
          '10-she': path.resolve(__dirname, "src/html/art/10-she.html"),
          '11-lush': path.resolve(__dirname, "src/html/art/11-lush.html"),
          '12-concrete': path.resolve(__dirname, "src/html/art/12-concrete.html"),
          '13-do-the-right-thing': path.resolve(__dirname, "src/html/art/13-do-the-right-thing.html"),
          '14-kwh': path.resolve(__dirname, "src/html/art/14-kwh.html"),
          '15-rope': path.resolve(__dirname, "src/html/art/15-rope.html"),
          '16-staged-authority': path.resolve(__dirname, "src/html/art/16-staged-authority.html"),
          '17-robert-smith': path.resolve(__dirname, "src/html/art/17-robert-smith.html"),
          '18-helium': path.resolve(__dirname, "src/html/art/18-helium.html"),
          '19-institute-for-recurrent-progress': path.resolve(__dirname, "src/html/art/19-institute-for-recurrent-progress.html"),
          '20-cards-against-humanity': path.resolve(__dirname, "src/html/art/20-cards-against-humanity.html"),
          '21-fish-eating-fish': path.resolve(__dirname, "src/html/art/21-fish-eating-fish.html"),
        },
      },
      sourcemap: mode !== "production", // Enable sourcemaps in non-production modes
      manifest: true,
    },
    server: {
      open: "index.html",
    },
    test: {
      environment: "jsdom",
      exclude: [],
    },
    define: globalDefines,
  }
})
