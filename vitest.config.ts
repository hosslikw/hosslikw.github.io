import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
		include: ["src/**/*.spec.js"],
		exclude: ["**/node_modules/**", "**/dist/**", "**/vs-code/**", "**/GitHub/**"],
		testTimeout: 20000
	},
	esbuild: {
		target: "node21"
	},
	publicDir: false
})
