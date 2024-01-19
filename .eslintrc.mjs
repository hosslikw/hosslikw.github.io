module.exports = {
	root: true,
	extends: ["plugin:vue/vue3-recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier/skip-formatting", "plugin:cypress/recommended"],
	env: { node: true },
	overrides: [
		{
			files: ["cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}", "cypress/support/**/*.{js,ts,jsx,tsx}"]
		}
	],
	parserOptions: {
		parser: "vue-eslint-parser",
		ecmaVersion: "latest",
		sourceType: "module"
	},
	rules: {
		"lines-around-comment": [
			"error",
			{
				beforeBlockComment: true,
				afterBlockComment: true,
				beforeLineComment: true,
				afterLineComment: true,
				allowBlockStart: true,
				allowBlockEnd: true,
				allowObjectStart: true,
				allowObjectEnd: true,
				allowArrayStart: true,
				allowArrayEnd: true
			}
		]
	}
}
