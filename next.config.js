/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	sassOptions: {
		includePaths: [path.join(__dirname, "src/styles")],
	},
	images: {
		domains: [
			"www.google.com",
			"upload.wikimedia.org",
			"blobs.ungarmichael.me",
		],
	},
	i18n: {
		locales: ["de-AT", "en-US"],
		defaultLocale: "de-AT",
		localeDetection: false,
	},
};

module.exports = nextConfig;
