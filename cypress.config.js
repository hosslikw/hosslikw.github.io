import { defineConfig } from "cypress"

export default defineConfig({
	projectId: "qzfpt8",
	component: {
		devServer: {
			bundler: "vite",
		},
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
