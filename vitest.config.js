import { fileURLToPath } from "node:url"
import { defineConfig, mergeConfig, configDefaults } from "vitest/config"
import viteConfig from "./vite.config"

export default mergeConfig(
	defineConfig({
		test: {
			environment: "jsdom",
			exclude: [...configDefaults.exclude, "e2e/*"],
			root: fileURLToPath(new URL("./", import.meta.url))
		}
	}),
	viteConfig
)
