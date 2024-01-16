// ESM imports
import postcssImport from "postcss-import"
import postcssColorMod from "postcss-color-mod-function"
import postcssPresetEnv from "postcss-preset-env"
import tailwindcss from "tailwindcss"
import tailwindcssNesting from "tailwindcss/nesting"
import postcssFontFamilySystemUI from "postcss-font-family-system-ui"
import postcssModules from "postcss-modules"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"

export default ({ env }) => {
	const plugins =
		env === "production"
			? [
					postcssImport({ path: "./src/css" }),
					postcssFontFamilySystemUI({ fontFamily: { base: "system-ui, sans-serif" } }),
					postcssModules({ generateScopedName: "[name]__[local]___[hash:base64:5]" }),
					autoprefixer({
                        grid: "autoplace",
                        cascade: true,
                        remove: false,
                        flexbox: "true",
                        add: true,
                        supports: true }),
					cssnano({ preset: "default" })
			]:[

					postcssImport({ path: "./src/css" }),
					postcssColorMod({ importFrom: ["./src/css/base.css"] }),
					postcssPresetEnv({ stage: 2 }),
					tailwindcss({ config: "./tailwind.config.js" }),
					tailwindcssNesting()
				]

	return { plugins }
}