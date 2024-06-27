import { DEVICE_BREAKPOINT } from './constants/breakpoint';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	purge: [
		'./components/**/*.tsx',
		'./components/*.tsx',
		'./pages/**/*.tsx',
		'./pages/*.tsx',
	],
	theme: {
		screens: {
			dt: { max: DEVICE_BREAKPOINT.DESKTOP },
			tbl: { max: DEVICE_BREAKPOINT.TABLET },
			mbl: { max: DEVICE_BREAKPOINT.MOBILE },
		},
		minWidth: {
			desktop: DEVICE_BREAKPOINT.DESKTOP,
			tablet: DEVICE_BREAKPOINT.TABLET,
			mobile: DEVICE_BREAKPOINT.MOBILE,
		},
		extend: {},
	},
	plugins: [],
};
