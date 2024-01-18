// ESM imports
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssColorMod from "postcss-color-mod-function";
import postcssFontFamilySystemUI from "postcss-font-family-system-ui";
import postcssImport from "postcss-import";
import postcssModules from "postcss-modules";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "tailwind.config.js";
import tailwindcssNesting from "tailwindcss / nesting / index.js";

export default ({ env }) => {
	const plugins =
		env === "production"
			? [
				postcssImport({ path: "./src/" }),
				postcssFontFamilySystemUI({ fontFamily: { base: "system-ui, sans-serif" } }),
				postcssModules({ generateScopedName: "[name]__[local]___[hash:base64:5]" }),
				autoprefixer({
					grid: "autoplace",
					cascade: true,
					remove: false,
					flexbox: "true",
					add: true,
					supports: true
				}),
				cssnano({ preset: "default" })
			]
			: [
				postcssImport({ path: "./src/" }),
				postcssColorMod({ importFrom: ["./src/base.css"] }),
				postcssPresetEnv({ stage: 2 }),
				tailwindcss({ config: "tailwind.config.js" }),
				tailwindcssNesting({ nesting: true }),
			];

	return { plugins };
};
