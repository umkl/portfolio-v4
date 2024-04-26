"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import LangItem from "../../../public/svgs/lang-icons/icon-at.svg";
import Pyramid from "../../../public/svgs/pyramid.svg";
import LangSelector from "../lang-selector";

const anim = (variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit",
	};
};

export default function Curve({ children }) {
	const t = useTranslations("Landing");
	const tnav = useTranslations("Navigation");
	const routes = {
		"/": tnav("Landing"),
		"/blog": tnav("Blog"),
		"/contact": tnav("Contact"),
		"/projects": tnav("Projects"),
		"/services": tnav("Services"),
		"/services/frontend-dev": tnav("Frontend"),
		"/services/backend-dev": tnav("Backend"),
		"/services/devops": tnav("Devops"),
		"/services/ui-ux-design": "UI/UX Design",
		"/services/branding": "Branding",
		"/impressum": "Impressum",
	};

	const router = useRouter();
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});

	const ref = useRef();

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener("resize", resize);
		var langPref = localStorage.getItem("language-preference");
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	// useEffect(() => {
	// 	let ctxt = gsap.context(() => {
	// 		if (langPopupShown) {
	// 			gsap.to(ref.current, {
	// 				opacity: 1,
	// 				delay: 0.7,
	// 				duration: 1,

	// 				ease: "power1.out",
	// 			});
	// 			return;
	// 		}
	// 	});
	// 	return ctxt.clear();
	// }, [langPopupShown]);

	return (
		<div className=" curve z-40 min-h-screen relative bg-[#333333] flex flex-col">
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className="background"
			/>
			<motion.p
				className="fixed  route font-bold font-clash text-[2rem] sm:text-[4rem] uppercase text-[#C2CAD1] drop-shadow-[0_0_0.3rem_#ffffff70]"
				{...anim(text)}
			>
				{routes[router.route]}
			</motion.p>
			{dimensions.width != null && <SVG {...dimensions} />}
			<div className="flex-1">{children}</div>
			<Footer />
		</div>
	);
}

const Footer = () => {
	const router = useRouter();
	const [isHovered, setIfHovered] = useState(false);

	return (
		<footer className="absolute bottom-0 flex flex-row-reverse flex-wrap w-full  text-ne-300/70 font-inter items-center z-50 justify-between text-[1.5rem] px-6 sm:px-10 md:px-10 pb-8 pt-8 font-bold ">
			<div
				className="w-[300px] h-[70px] relative cursor-pointer justify-center"
				onMouseOver={() => {
					setIfHovered(true);
				}}
				onMouseLeave={() => {
					setIfHovered(false);
				}}
			>
				{!isHovered ? (
					<p className="cursor-pointer top-1/2 relative -translate-y-1/2 text-nowrap text-right">
						Sprache auswählen
					</p>
				) : (
					<LangSelector />
				)}
			</div>

			{router.asPath != "/impressum" && (
				<p
					className="cursor-pointer"
					onClick={() => {
						router.push("/impressum");
					}}
				>
					Impressum
				</p>
			)}
		</footer>
	);
};

const SVG = ({ height, width }) => {
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

	const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

	return (
		<motion.svg {...anim(translate)}>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};
