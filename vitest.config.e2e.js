<<<<<<< HEAD
import { fileURLToPath, resolve } from "node:path"
=======
<<<<<<< HEAD
import { resolve } from "node:path"
>>>>>>> 1a43bc78 (sync)
import { defineConfig } from "vitest/config"

// Calculate __dirname equivalent in ES module
const __dirname = fileURLToPath(new URL(".", import.meta.url))
const timeout = process.env.CI ? 50000 : 30000 // Adjusting timeout based on the environment

export default defineConfig({
	resolve: {
		alias: {
			"~utils": resolve(__dirname, "src/playground/test-utils"),
		},
	},
	test: {
		include: ["src/playground/**/*.spec.{js,ts}"],
		setupFiles: [resolve(__dirname, "src/playground/vitestSetup.js")],
		globalSetup: [resolve(__dirname, "src/playground/vitestGlobalSetup.js")],
		testTimeout: timeout,
		hookTimeout: timeout,
		reporters: "dot",
		onConsoleLog(log) {
			if (log.match(/experimental|jit engine|emitted file|tailwind/i)) {
				return false
			}
		},
	},
})
=======
import { fileURLToPath, resolve } from "node:path";
import { defineConfig } from "vitest/config";

// Calculate __dirname equivalent in ES module
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const timeout = process.env.CI ? 50000 : 30000; // Adjusting timeout based on the environment

export default defineConfig({
	resolve: {
		alias: {
			"~utils": resolve(__dirname, "src/playground/test-utils"),
		},
	},
	test: {
		include: ["src/playground/**/*.spec.{js,ts}"],
		setupFiles: [resolve(__dirname, "src/playground/vitestSetup.js")],
		globalSetup: [resolve(__dirname, "src/playground/vitestGlobalSetup.js")],
		testTimeout: timeout,
		hookTimeout: timeout,
		reporters: "dot",
		onConsoleLog(log) {
			if (log.match(/experimental|jit engine|emitted file|tailwind/i)) {
				return false;
			}
		},
	},
});
>>>>>>> fedc2ac6 (sync)
