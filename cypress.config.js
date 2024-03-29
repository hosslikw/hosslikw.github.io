import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'qzfpt8',
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
