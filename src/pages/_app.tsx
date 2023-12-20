import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { Inter, Sora } from "next/font/google";
import localfont from "next/font/local";
import "../styles/style.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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
	const cursorRef = useRef(null);
	// const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	// useEffect(() => {
	// 	const handleMouseMove = (e: { clientX: any; clientY: any }) => {
	// 		setCursorPosition({ x: e.clientX, y: e.clientY });
	// 		gsap.to(cursorRef.current, {
	// 			x: cursorPosition.x,
	// 			y: cursorPosition.y,
	// 			duration: 1,
	// 			ease: "power1.in",
	// 		});
	// 	};

	// 	document.addEventListener("mousemove", handleMouseMove);

	// 	return () => {
	// 		document.removeEventListener("mousemove", handleMouseMove);
	// 	};
	// }, []);

	return (
		<div
			className={`${clash.variable} ${sora.variable} ${druk.variable} ${inter.className}  `}
		>
			{/* <div ref={cursorRef} className="custom-cursor"></div> */}
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
		</div>
	);
}
