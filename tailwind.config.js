/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			// primary: '#efefef',
			background: '#f5f5f5',
			primary: '#3A47E4',
			secondary: { main: '#2e2e2e', light: '#686868', extraLight: '#a5a5a5' },
			border: '#DEDEDE',
			white: '#ffffff',
		},
		// fontSize: {
		// 	xs: '.75rem',
		// 	sm: '.875rem',
		// 	tiny: '.875rem',
		// 	base: '1rem',
		// 	lg: '1.125rem',
		// 	xl: '1.25rem',
		// 	'2xl': '1.5rem',
		// 	'3xl': '1.875rem',
		// 	'4xl': '2.25rem',
		// 	'5xl': '3rem',
		// 	'6xl': '4rem',
		// 	'7xl': '5rem',
		// },
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
