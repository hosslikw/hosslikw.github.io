import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcssImport from "postcss-import"
import tailwindcss from "tailwindcss" // Ensure this package is installed
import tailwindcssNesting from "tailwindcss/nesting/index.js" // Correct import path

export default {
	plugins: [
		postcssImport,
		tailwindcssNesting, // If you want to use "postcss-nesting", pass it as an argument
		tailwindcss, // Ensure this package is installed
		autoprefixer,
		cssnano({
			preset: [
				"cssnano-preset-advanced",
				{
					cssDeclarationSorter: false,
					calc: false,
					mergeIndents: false,
					reduceIndents: false,
					zindex: false
				}
			]
		})
	]
}
