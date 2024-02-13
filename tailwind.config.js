/** @type {import('tailwindcss').Config} */
export default {

	content: [
		"./nested/**/*.{html,js}",
		"./src/**/*.{html,js}",
		"./index.html"
	],

	plugins: [
		"@tailwindcss/forms"
	],

}
