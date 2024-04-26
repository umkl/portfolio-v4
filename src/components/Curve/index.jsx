"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";
import { LangPopup } from "@um-p4/components/lang-popup";
import gsap from "gsap";
import { useTranslations } from "next-intl";

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

	const [langPopupShown, setLangPopupShown] = useState(false);

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
		if (langPref == null) {
			setTimeout(() => {
				setLangPopupShown(true);
			}, 2000);
		}
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	useEffect(() => {
		let ctxt = gsap.context(() => {
			if (langPopupShown) {
				gsap.to(ref.current, {
					opacity: 1,
					delay: 0.7,
					duration: 1,

					ease: "power1.out",
				});
				return;
			}
		});
		return ctxt.clear();
	}, [langPopupShown]);

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
			{langPopupShown && (
				<div
					onClick={(e) => {
						if (e.target != this) return;
						console.log("alarm");
						e.stopPropagation()
					}}
					className="h-screen w-full fixed top-0 left-0  z-50 opacity-0 backdrop-blur-lg overflow-hidden"
					ref={ref}
				>
					<div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
						<LangPopup
							onTap={() => {
								gsap.to(ref.current, {
									opacity: 0,
									delay: 0.7,
									duration: 1,
									y: 30,
									top: 0,
									ease: "power1.out",
								});
								setTimeout(() => {
									setLangPopupShown(false);
								}, 2000);
							}}
						/>
					</div>
				</div>
			)}

			<footer className="absolute bottom-0 flex w-full  text-ne-300/70 font-inter z-50 justify-center text-[1.5rem] px-6 pb-8 pt-8 font-bold">
				<div className="flex justify-between flex-row-reverse w-full max-w-[1220px]">
					<p
						className="cursor-pointer"
						
					>
						<div></div>
					</p>
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
				</div>
			</footer>
		</div>
	);
}

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
