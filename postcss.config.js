import purgecss from "@fullhuman/postcss-purgecss"
import autoprefixer from "autoprefixer"
import cssnano from "cssnano"
import postcssHtml from "postcss-html"
import postcssImport from "postcss-import"
import postcssOrderedValues from "postcss-ordered-values"
import postcsspresentEnv from "postcss-preset-env"
import safeParser from "postcss-safe-parser"
import postcssSorting from "postcss-sorting"
import postcssSvgo from "postcss-svgo"
// import tailwindcss from "tailwindcss";
import svgoConfig from "./svgo.config.js"

const syntax = postcssHtml({
  css: safeParser, // For standard CSS with a safe parser
})

export default {
  plugins: [
    postcsspresentEnv({ stage: 2 }),
    postcssSvgo(svgoConfig),
    purgecss({
      content: ["./src/*.html", "./src/*.js"],
    }),
    postcssImport({ path: "/" }),
    // tailwindcss({ config: "./tailwind.config.js" }),
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
  syntax: syntax,
}
