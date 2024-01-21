import { defineConfig } from 'dist/vitest.config.ts'

export default defineConfig({
  test: {
		include: ["src/**/*.spec.js"],
		exclude: ["**/node_modules/**", "**/html/**", "**/vs-code/**", "**/GitHub/**"],
		testTimeout: 20000
	},
	esbuild: {
		target: "node21"
	},
	publicDir: false
})
