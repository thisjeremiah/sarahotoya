/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			yellow: {
				100: '#FFFDF7',
				500: "#FFF4D1",
				700: "#F8D561"
			},
			black: {
				DEFAULT: '#000000',
				400: '#272727',
			},
		},
		extend: {
			borderRadius: {
				'50': '3.125rem' // 50px
			}
		},
	},
	plugins: [],
}
