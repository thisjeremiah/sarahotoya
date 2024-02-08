/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			yellow: {
				100: '#FFFDF7',
				500: "#FFF4D1",
				600: '#FFE591',
				700: "#F8D561"
			},
			black: {
				DEFAULT: '#000000',
				400: '#272727',
			},
		},
		fontFamily: {
			'kopik': ['kopik', 'sans-serif'],
			'sans': ['neulis-sans', 'sans-serif'],
		},
		extend: {
			borderRadius: {
				'50': '3.125rem' // 50px
			},
			animation: {
				'bounce-x': 'bounce-x 1s infinite',
			},
			keyframes: {
				'bounce-x': {
					'0%, 100%': {
						transform: 'translateX(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
					'50%': {
						transform: 'translateX(-10%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					}
				}
			}
		},
	},
	plugins: [
		function ({addComponents}) {
			addComponents({
				'.w-half': {
					width: 'calc(50% - 1rem)',
				},
				'.w-third': {
					width: 'calc(33.333333% - 1rem)',
				},
			});
		},
	],
}
