/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
			sm : {"max": "590px"},
			md : "591px",
			lg : "892px",	
			},
			boxShadow: {
				'2': '0 0 3px rgba(0, 0, 0, 0.2)',
			  },
			animation: {
				pulse: 'pulse 4s cubic-bezier(0.6, 0.6, 0.8, 1) infinite',
			  },
			colors: {
				'alink': '#00b4ff',
				'hlink': '#404040',
			  },
			fontFamily: {
				'Oswald': ['Oswald', 'sans-serif'],
				'Roboto': ['Roboto', 'sans-serif'],
				},
		},	
	},
	plugins: [
	],
}
