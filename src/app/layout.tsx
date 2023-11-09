"use client";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

const clash = localfont({
	src: [
		{
			path: "../../public/fonts/ClashDisplay-Bold.ttf",
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const app = useRef(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);
		});
		return () => ctx.revert();
	});

	return (
		<html
			lang="en"
			className={`${clash.variable} ${sora.variable} ${druk.variable} ${inter.className}`}
		>
			<body ref={app} className="overflow-auto snap-y snap-proximity">
				<div id="smooth-content">{children}</div>
			</body>
		</html>
	);
}
