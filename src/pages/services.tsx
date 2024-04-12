"use client";
import Curve from "@um-p4/components/Curve";
import UmFooter from "@um-p4/components/UmFooter";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { easeInOut } from "framer-motion";
import Head from "next/head";
import { useTranslations } from "next-intl";

const Work = () => {
	useEffect(() => {
		gsap.to(".marquee_part", {
			xPercent: -100,
			repeat: -1,
			duration: 10,
			ease: "linear",
		});

		const screenWidth = window.innerWidth;

		gsap.to("#head-i-1", {
			delay: 1.1,
			marginLeft: screenWidth < 768 ? "0.2rem" : "1rem",
			marginTop: screenWidth < 768 ? "0.2rem" : "1rem",
		});

		gsap.to("#head-i-2", {
			delay: 1.1,
			marginLeft: screenWidth < 768 ? "0.4rem" : "2rem",
			marginTop: screenWidth < 768 ? "0.4rem" : "2rem",
		});

		gsap.to("#head-i-3", {
			delay: 1.1,
			marginLeft: screenWidth < 768 ? "0.6rem" : "3rem",
			marginTop: screenWidth < 768 ? "0.6rem" : "3rem",
		});

		gsap.set("#marquee-parent", { xPercent: -50 });
		const duration = 3000;
		const startTime = Date.now();

		const updateSpeed = () => {
			const currentTime = Date.now();
			const elapsed = currentTime - startTime;
			const screenSize = window.innerWidth;
			const adjustedDuration = screenSize < 768 ? duration * 2.8 : duration;
			if (elapsed < adjustedDuration) {
				const easedValue = easeInOut(elapsed, 400, -360, adjustedDuration);
				setMarqueeSpeed(easedValue);
				requestAnimationFrame(updateSpeed);
			} else {
				setMarqueeSpeed(400);
			}
		};
		updateSpeed();
	}, []);

	const [selectedItem, setSelectedItem] = useState();
	const [marqueeSpeed, setMarqueeSpeed] = useState(4000);
	const t = useTranslations("Services");
	const services_i_offer = [
		{
			name: `frontend ${t("development")}`,
			link: "frontend-dev",
			svglink: "icon-frontend-dev",
		},
		{
			name: `backend ${t("development")}`,
			link: "backend-dev",

			svglink: "icon-backend_dev",
		},
		{
			name: "ui/ux design",
			link: "ui-ux-design",
			svglink: "icon-ui_ux-design",
		},
		// {
		// 	name: "branding",
		// 	link: "branding",
		// 	svglink: "icon-branding",
		// },
		{
			name: "devops",
			link: "devops",
			svglink: "icon-devops",
		},
	];

	const easeInOut = (t: number, b: number, c: number, d: number) => {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Ungar Michael ✹ Creative App Development</title>
				<meta name="title" content="Michael Ungar - Services" />
				<meta name="description" content="Creative App Development" />
				<meta property="og:url" content="https://ungarmichael.me" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Ungar Michael - Services" />
				<meta property="og:description" content="Creative App Development" />
				<meta
					property="og:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ungarmichael.me" />
				<meta property="twitter:url" content="https://ungarmichael.me" />
				<meta name="twitter:title" content="Ungar Michael - Services" />
				<meta name="twitter:description" content="Creative App Development" />
				<meta
					name="twitter:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="theme-color" content="#333333"></meta>
			</Head>
			<Curve>
				<section className="font-clash overflow-x-hidden w-full min-h-screen  flex flex-col relative bg-ne-700">
					<GoBack />
					<style jsx>{`
						@media (max-width: 375px) {
							section {
								width: 375px;
							}
						}
					`}</style>
					<div className="relative text-white z-0">
						<span
							id="head-i-1"
							className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 text-ne-400 -z-10 whitespace-nowrap"
						>
							{t("my_services")}
						</span>
						<span
							id="head-i-2"
							className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 text-ne-500 -z-20 whitespace-nowrap"
						>
							{t("my_services")}
						</span>
						<span
							id="head-i-3"
							className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 text-ne-600 -z-30 whitespace-nowrap"
						>
							{t("my_services")}
						</span>
						<h1 className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] ml-2 sm:ml-4 uppercase font-bold z-0 shrink-0 text-ne-200 whitespace-nowrap">
							{t("my_services")}
						</h1>
					</div>
					<div className="flex w-screen h-[0.6em] leading-auto flex-row mb-[60px] text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3.5rem] mt-2 text-ne-200 uppercase italic font-bold relative">
						<h1 className="marquee_part shrink-0">{t("skills")} &nbsp;</h1>
						<h1 className="marquee_part shrink-0">{t("skills")} &nbsp;</h1>
						<h1 className="marquee_part shrink-0">{t("skills")} &nbsp;</h1>
						<h1 className="marquee_part shrink-0">{t("skills")} &nbsp;</h1>
						<h1 className="marquee_part shrink-0">{t("skills")} &nbsp;</h1>
					</div>
					<hr />
					<ul className="uppercase flex flex-col justify-start flex-1 overflow-hidden">
						{services_i_offer.map((x, i) => {
							return (
								<ListItem
									key={i}
									text={x.name}
									disabled={false}
									link={`services/${x.link}`}
									svglink={`/svgs/service-icons/${x.svglink}.svg`}
									delay={1.1 + i * 0.1}
								/>
							);
						})}
					</ul>
					<Marquee speed={marqueeSpeed}>
						<div className="flex gap-8 flex-row my-8">
							<Image
								width={500}
								height={500}
								src="/images/work/work-1.png"
								alt="asdlkfj"
								className="h-[100px] md:h-[500px]"
							/>
							<Image
								width={500}
								height={500}
								src="/images/work/work-2.png"
								alt="asdlkfj"
								className="h-[100px] md:h-[500px]"
							/>
							<Image
								width={500}
								height={500}
								src="/images/work/work-3.png"
								alt="asdlkfj"
								className="h-[100px] md:h-[500px]"
							/>
							<Image
								width={500}
								height={500}
								src="/images/work/work-4.png"
								alt="asdlkfj"
								className="h-[100px] md:h-[500px]"
							/>
						</div>
					</Marquee>
					<UmFooter />
				</section>
			</Curve>
		</>
	);
};

export default Work;

export const GoBack = ({ to }: { to?: string }) => {
	const t = useTranslations("Services");

	const router = useRouter();

	return (
		<button
			className="flex w-full font-clash justify-start sm:justify-start items-center mb-0 sm:mb-4 z-40"
			onClick={() => {
				gsap.to("#stick", {
					flex: 1,
					margin: "0 5px",
				});
				router.push(to ?? "/");
			}}
		>
			<Image
				id="logo"
				style={{ opacity: 1 }}
				src="/svgs/arrow-icon.svg"
				alt=""
				className="w-[30px] sm:w-[60px] my-4 ml-4 mr-2"
				width={20}
				height={20}
				priority
			/>
			<div
				id="stick"
				className="w-[0px] h-[4px] bg-gradient-to-r from-pr-300 via-pr-400 to-pr-800 "
			></div>
			<span className="font-bold text-[1.6em] sm:text-[3em] mr-4 uppercase text-ne-200">
				{t("goback")}
			</span>
		</button>
	);
};

function ListItem({
	text,
	link,
	delay,
	svglink,
	disabled,
}: {
	text: any;
	link: string;
	delay: number;
	svglink: string;
	disabled?: boolean;
}) {
	const ref = useRef(null);
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(ref.current, {
				delay: delay,
				xPercent: -100,
				duration: 1,
				ease: easeInOut,
				backgroundColor: "#95B8D1",
			});
		});
		return () => ctx.revert();
	}, []);
	const router = useRouter();
	const truncatedText = text.slice(0, 8);

	return (
		<li
			key={text}
			className="list-item text-[1.1rem] text-ne-200 sm:text-[3.8em] md:text-[4em] font-bold  break-words relative cursor-pointer"
		>
			<div
				ref={ref}
				className="truncate slide-in origin-top-left ml-[30px] sm:ml-[4vw]"
				onClick={(e) => {
					if (disabled) {
						return;
					}
					router.push(link);
				}}
			>
				<Image
					id="logo"
					style={{ opacity: 1 }}
					src={svglink}
					alt=""
					className="w-[140px] sm:w-[240px] mt-8 mb-2 mr-4"
					width={20}
					height={20}
					priority
				/>
				<p className={`text-left mr-4 mb-4 ${"text-ne-200"}`}>{text}</p>
			</div>
			<hr />
		</li>
	);
}

const ProjectsSlider = () => {
	const featured_projects = [
		"ballkarten-project-1866x1400",
		"charge-project-3266x1400",
		"deets-project-3266x1400",
		"filliStudio-project-3266x1400",
		"heed-project-3266x1400",
		"octagon-project-1866x1400",
		"synopsis-project-2100x1400",
		"wbyt_web-project-1866x1400",
	];
	const [marqueeSpeed, setMarqueeSpeed] = useState(200);
	return (
		<Marquee speed={600} pauseOnHover>
			<div
				className="flex flex-nowrap mb-4 gap-10 mr-10"
				onMouseEnter={() => {
					setMarqueeSpeed(199);
				}}
				onMouseLeave={() => {
					setMarqueeSpeed(200);
				}}
			>
				{featured_projects.map((x) => {
					return (
						<Image
							src={`/images/project-imgs/${x}.png`}
							style={{
								width: "auto",
								height: "400px",
							}}
							width={600}
							height={400}
							quality={100}
							objectFit="contain"
							alt={`/images/project-imgs/${x}`}
						/>
					);
				})}
			</div>
		</Marquee>
	);
};

export async function getStaticProps(context: any) {
	return {
		props: {
			messages: (await import(`../messages/${context.locale}.json`)).default,
		},
	};
}
