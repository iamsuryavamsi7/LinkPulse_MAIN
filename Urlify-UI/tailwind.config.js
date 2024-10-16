/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	extend: {
		screens: {
			'max-1400': {'max': '1400px'},
			'max-1200': {'max': '1200px'}
		}
	},
	},
	plugins: [],
}