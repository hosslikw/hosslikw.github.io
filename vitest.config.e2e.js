import { resolve } from "node:path"
import { defineConfig } from "vitest/config"

const timeout = process.env.CI ? 50000 : 30000

export default defineConfig({
  resolve: {
    alias: {
      "~utils": resolve(__dirname, "@/playground/test-utils"),
    },
    test: {
      include: ["@/playground/**/*.spec."],
      setupFiles: ["@/playground/vitestSetup.js"],
      globalSetup: ["@/playground/vitestGlobalSetup.js"],
      testTimeout: timeout,
      hookTimeout: timeout,
      reporters: "dot",
      onConsoleLog(log) {
        if (log.match(/experimental|jit engine|emitted file|tailwind/i))
          return false
      },
    },
  },
})
