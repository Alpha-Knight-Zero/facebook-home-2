module.exports = {
	mode: 'jit ',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: { textOpacity: ['dark'] },
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
