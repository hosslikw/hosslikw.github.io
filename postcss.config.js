import purgecss from "@fullhuman/postcss-purgecss";
import postcssHtml from 'postcss-html';
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssImport from "postcss-import";
import postcssOrderedValues from "postcss-ordered-values";
import postcssSorting from "postcss-sorting";
import postcssSvgo from "postcss-svgo";
import tailwindcss from "tailwindcss";
import safeParser from 'postcss-safe-parser';

const syntax = postcssHtml({
	css: safeParser // For standard CSS with a safe parser
});

export default {
	plugins: [
		postcssSvgo(svgoConfig),
		purgecss({
			content: [
				"./*.html",
				"./*.js",
			],
		}),
		postcssImport({ path: "/" }),
		tailwindcss({ config: "./tailwind.config.js" }),
		autoprefixer(),
		postcssSorting({
			order: [
				"custom-properties",
				"dollar-variables",
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
				"default",
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
	syntax:syntax

};
