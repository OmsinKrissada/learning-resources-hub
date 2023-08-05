/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: 'Poppins',
				inter: 'Inter',
				prompt: 'Prompt',
				adaptive: ['Poppins', 'Noto Sans Thai']
			}
		}
	},

	plugins: []
};

module.exports = config;
