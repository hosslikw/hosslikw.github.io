/** @format */

import pkg from "@fullhuman/postcss-purgecss"
const purgecss = pkg.default

await purgecss({
	content: ["Jeffstaple-canvas.html"],
	css: ["Jeffstaple-canvas.css"],
	fontFace: true,
	keyframes: true,
	output: "Jeffstaple-purged.css"
})
