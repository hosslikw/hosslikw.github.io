import { defineConfig } from "cypress"

export default defineConfig({
	e2e: {
		specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx}",
		baseUrl: "http://localhost:4173",
		experimentalStudio: true
	},
	component: {
		devServer: {
			framework: "vue",
			bundler: "vite"
		}
	}
})
