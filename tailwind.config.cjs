/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		
		extend: {
			boxSizing: ['responsive', 'hover', 'focus'],
			fontFamily: {
				lora: ['Lora', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			  }
		},
	},
	plugins: [],
}
