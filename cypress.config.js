import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "qzfpt8",
  component: {
    devServer: {
      bundler: "vite",
    },
  },

<<<<<<< HEAD
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
=======
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
>>>>>>> fedc2ac6 (sync)
