import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'

// Calculate __dirname equivalent in ES module
const __dirname = fileURLToPath(new URL('.', import.meta.url))
const timeout = process.env.CI ? 50000 : 30000 // Adjusting timeout based on the environment

export default defineConfig({
  resolve: {
    alias: {
      '~utils': resolve(__dirname, 'src/playground/test-utils')
    }
  },
  test: {
    include: ['src/playground/**/*.spec.{js,ts}'],
    setupFiles: [resolve(__dirname, 'src/playground/vitestSetup.js')],
    globalSetup: [resolve(__dirname, 'src/playground/vitestGlobalSetup.js')],
    testTimeout: timeout,
    hookTimeout: timeout,
    reporters: 'dot',
    onConsoleLog (log) {
      if (log.match(/experimental|jit engine|emitted file/)) {
        return false
      }
    }
  }
})
