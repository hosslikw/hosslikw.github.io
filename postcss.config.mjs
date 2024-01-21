import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcssImport from "postcss-import"
import tailwindcss from "tailwindcss" // Ensure this package is installed
import tailwindcssNesting from "tailwindcss/nesting/index.js"

export default {
	plugins: [
		postcssImport,
		tailwindcssNesting,
		tailwindcss,
		autoprefixer,
		cssnano({
			preset: [
				"cssnano-preset-advanced", {
					cssDeclarationSorter: false,
					calc: false,
					mergeIndents: false,
					reduceIndents: false,
					zindex: false,
					discardUnused: true,
					colormin: true,
					convertValues: true,
					discardComments: true,
					discardDuplicates: true,
					discardEmpty: true,
					discardOverridden: true,
					discardUnused: true,
					mergeLonghand: true,
					mergeRules: true,
					minifyFontValues: false,
					minifyGradients: false,
					minifyParams: false,
					minifySelectors: false,
					normalizeCharset: true,
					normalizeDisplayValues: true,
					normalizePositions: true,
					normalizeRepeatStyle: true,
					normalizeString: true,
					normalizeTimingFunctions: true,
					normalizeUnicode: true,
					normalizeUrl: true,
					normalizeWhitespace: false,
					orderedValues: false,
					reduceInitial: true,
					reduceTransforms: true,
					svgo: true,
					uniqueSelectors: true,

				}
			]
		})
	]
}
