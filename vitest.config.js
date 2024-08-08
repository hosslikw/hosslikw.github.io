import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

const testConfig = defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['node_modules', '.vite', 'dist', 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url))
  }
})

export default mergeConfig(viteConfig, testConfig)
