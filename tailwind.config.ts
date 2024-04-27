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
					200: "#D6D6D6",
					300: "#B2B2B2",
					400: "#A0A0A0",
					500: "#858585",
					600: "#626262",
					700: "#494949",
					800: "#303030",
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
