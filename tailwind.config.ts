import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				os: {
					taskbar: "#245DDA",
					shortcuts: "#0D9BEF",
				},
			},
			fontFamily: {
				tahoma: ["var(--font-tahoma)"],
			},
		},
	},
	plugins: [],
};
export default config;
