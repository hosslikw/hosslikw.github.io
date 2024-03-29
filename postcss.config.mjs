import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcssImport from "postcss-import"
import postcssOrderedValues from "postcss-ordered-values"
import postcssSorting from "postcss-sorting"

export default {
	plugins: [
		postcssImport(),
		autoprefixer(),
		// Invoke postcssSorting with its configuration object
		postcssSorting({
			order: [
				"custom-properties",
				"dollarvariables",
				"declarations",
				"at-rules",
				"rules",
			],
			"properties-order": "alphabetical",
			"unspecified-properties-position": "bottom",
		}),
		postcssOrderedValues(),
		// Invoke cssnano with its configuration object
		cssnano({
			preset: [
				"default", // Changed to "default" or use "cssnano-preset-advanced" based on your needs
				{
					cssDeclarationSorter: false,
					calc: false,
					mergeIndents: false,
					reduceIndents: false,
					zindex: false,
					colormin: true,
					normalizeWhitespace: false,
					// Add other options as needed
				},
			],
		}),
	],
}
