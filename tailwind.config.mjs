/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {
			fontFamily: {
				"montserrat": ['Montserrat'],
				'ubuntu-mono': ['"Ubuntu Mono"'],
				'roboto-condensed': ['"Roboto Condensed"'],
			},
			colors: {
				'background': "#0F110C",
				'text': "#C5C5C5",
				'primary': "#F3AB8B",
				'secondary': "#C3967E",
				'accent': "#E5544B",
			}
		},
	},
	plugins: [
		plugin(function({ addVariant }) {
            addVariant('current', '&.active');
        }),
	]
}
