/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
	},
	i18n: {
		locales: ["en-US", "de-AT"],
		defaultLocale: "en-US",
	},
};

module.exports = nextConfig;
