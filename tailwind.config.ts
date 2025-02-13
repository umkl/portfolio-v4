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
				pr: {
					100: "#BEE0F8",
					200: "#ADD4F0",
					300: "#88BDE2",
					400: "#6D9ABA",
					500: "#4D7C9D",
					600: "#436075",
					700: "#3A4A5A",
					800: "#24303C",
					900: "#1D2731",
				},
				ne: {
					100: "#EEEEEE",
					200: "#E9E9E9",
					300: "#9D9A95",
					400: "#787F85",
					500: "#59646C",
					600: "#42474D",
					700: "#333333",
					800: "#292929",
					900: "#222222",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				druk: ["var(--font-druk)"],
				sora: ["var(--font-sora)"],
				clash: ["var(--font-clash)"],
			},
		},
	},
	plugins: [],
};
export default config;
