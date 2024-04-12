import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssOrderedValues from "postcss-ordered-values";
import postcssSorting from "postcss-sorting";
import cssnano from "cssnano";

export default {
<<<<<<< HEAD
	plugins: [
		postcssImport({ path: "/" }),
		tailwindcss(),
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
=======
<<<<<<< HEAD
  plugins: [
    postcssImport({ path: "/" }),
    tailwindcss(),
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
>>>>>>> 1a43bc78 (sync)
}
=======
	plugins: [
		postcssImport({ path: "/" }),
		tailwindcss(),
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
};
>>>>>>> fedc2ac6 (sync)
