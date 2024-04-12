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
		locales: ["en-US", "de-AT"],
		defaultLocale: "de-AT",
	},
};

module.exports = nextConfig;
