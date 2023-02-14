/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'dark-blue': '#2e313e',
				'light-blue': '#66CAF2',
				'medium-blue': '#368ABF',
			},
			fontFamily: {
				sans: "Montserrat, sans-serif",

			}
		},
	},
	plugins: [],
}
