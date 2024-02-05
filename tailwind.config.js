/** @type {import('tailwindcss').Config} */
export default {

	content: [
		"./nested/**/*.{html,js,vue}",
		"./src/**/*.{html,js,vue}",
		"./index.html"
	],

	plugins: [
		"@tailwindcss/forms"
	],

}
