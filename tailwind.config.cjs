/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({theme}) => ({
				default: {
					css: {
						'--tw-prose-links':'#FF00FF'
					}
				}
			})
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
