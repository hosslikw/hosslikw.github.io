import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

<<<<<<< HEAD
export default defineConfig(
	mergeConfig(viteConfig,{
		test: {
			environment: "jsdom",
			exclude: [...configDefaults.exclude, "e2e/*"],
			root: fileURLToPath(new URL("./", import.meta.url)),
		},
	}),
=======
<<<<<<< HEAD
export default mergeConfig(
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
    },
  }),
>>>>>>> 1a43bc78 (sync)
)
=======
export default defineConfig(
	mergeConfig(viteConfig,{
		test: {
			environment: "jsdom",
			exclude: [...configDefaults.exclude, "e2e/*"],
			root: fileURLToPath(new URL("./", import.meta.url)),
		},
	}),
);
>>>>>>> fedc2ac6 (sync)
