import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { Inter, Sora } from "next/font/google";
import localfont from "next/font/local";
import "../styles/style.scss";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

const clash = localfont({
	src: [
		{
			path: "../../public/fonts/ClashDisplay-Variable.ttf",
		},
	],
	variable: "--font-clash",
});

const druk = localfont({
	src: [
		{
			path: "../../public/fonts/Druk-Wide-Bold.ttf",
		},
	],
	variable: "--font-druk",
});

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
		<div
			className={`${clash.variable} ${sora.variable} ${druk.variable} ${inter.className} main`}
		>
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
		</div>
	);
}
