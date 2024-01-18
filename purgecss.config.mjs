// purgecss.config.mjs
export default {
	content: [
		// paths to all of the template files in the project
		"Jeffstaple-canvas.html"
	],
	css: [
		// paths to all CSS files you want to purge
		"Jeffstaple-canvas.css"
	],

	fontFace: true,
	keyframes: true,
	variables: true,
	skippedContentGlobs: ["node_modules/**", "components/**"],
	dynamicAttributes: ["aria-selected"]
}
