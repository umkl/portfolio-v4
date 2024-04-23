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
import { FrontendBadge, UiUxBadge } from "@um-p4/components/badges";

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
				<GoBack />
				<main className="font-clash w-full min-h-screen flex flex-col relative services-text-styling p-10">
					<style jsx>{`
						@media (max-width: 375px) {
							section {
								width: 375px;
							}
						}
					`}</style>
					{/* <StaggeredHeading text={t("my_services")} />
					<h2>Fähigkeiten gebündelt in einheitliche Produkte</h2>
					<Product />
					<div className="h-[100px]"></div>
					<StaggeredHeading text={t("my_skills")} />
					<h2>Fähigkeiten gebündelt in einheitliche Produkte</h2>
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
					<div className="h-[100px]"></div>
					<StaggeredHeading text={t("my_tools")} />
					<h2>Auf diese Dinge bin ich ansprechbar</h2>
					<ul className="flex gap-8">
						<li className="inline rounded-full bg-neutral-200 px-16 text-[4rem] font-bold text-[#333333]">
							#nextjs
						</li>
						<li className="inline rounded-full bg-neutral-200 px-16 text-[4rem] font-bold text-[#333333]">
							#nextjs
						</li>
						<li className="inline rounded-full bg-neutral-200 px-16 text-[4rem] font-bold text-[#333333]">
							#nextjs
						</li>
						<li className="inline rounded-full bg-neutral-200 px-16 text-[4rem] font-bold text-[#333333]">
							#nextjs
						</li>
					</ul>
					<div className="w-full h-[200px]"></div>
					<div className="h-[100px]"></div>
					<StaggeredHeading text={t("my_images")} />
					<h2>Der Gelehrte bei seiner Arbeit</h2>
					<Marquee speed={marqueeSpeed}>
						<div className="flex gap-8 flex-row my-8">
							<div className="relative flex items-center justify-center">
								<div className="absolute flex flex-col  justify-center items-center gap-10 w-[80%]">
									<Image
										className="!stroke-white !fill-white"
										src={"/svgs/service-icons/icon-frontend-dev.svg"}
										alt={""}
										width={300}
										height={100}
									/>
									<p className="uppercase text-center w-fit font-bold text-neutral-200 text-[3rem]">
										frontend development
									</p>
								</div>
								<Image
									width={500}
									height={500}
									src="/images/work/work-1.png"
									alt="asdlkfj"
									className="h-[100px] md:h-[500px]"
								/>
							</div>
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
					<UmFooter /> */}
				</main>
			</Curve>
		</>
	);
};

const StaggeredHeading = ({ text }: { text: string }) => {
	return (
		<div className="relative z-0">
			<span
				aria-hidden="true"
				id="head-i-1"
				className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0  text-ne-400 -z-10 whitespace-nowrap"
			>
				{text}
			</span>
			<span
				aria-hidden="true"
				id="head-i-2"
				className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0  text-ne-500 -z-20 whitespace-nowrap"
			>
				{text}
			</span>
			<span
				aria-hidden="true"
				id="head-i-3"
				className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0  text-ne-600 -z-30 whitespace-nowrap"
			>
				{text}
			</span>
			<h1 className="md:text-[6em] text-[2.4em] text-left sm:text-[4em] leading-[1em] uppercase font-bold z-0 shrink-0 text-ne-200 whitespace-nowrap">
				{text}
			</h1>
		</div>
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

const Product = () => {
	return (
		<section className="h-full  max-w-[1800px] w-full flex flex-col xl:flex-row border-neutral-200 border-2 relative ">
			<div className="relative flex flex-1 overflow-hidden  flex-col w-full border-neutral-200 border-r-2 ">
				<div className="h-fit w-full relative border-b-2 border-neutral-100 md:hidden block">
					<Image
						src={"/images/services/image-1.png"}
						className="w-full h-fit"
						width={1000}
						height={1000}
						alt={""}
					/>
				</div>
				<div className="border-b-2 flex-1 border-neutral-200 px-10 pb-12 ">
					<h3 className="!font-extrabold uppercase !bg-clip-text !text-transparent bg-gradient-to-b from-[#d3d3d3] to-[#6f8798]">
						static Web Development
					</h3>
					<p className="subheading-text">suitable for small businesses</p>
					<ul className="list-1">
						<li>Designing a simple Landing Page</li>
						<li>Implementing it with CMS</li>
						<li>verg guud</li>
						<li>created using jsjsj</li>
					</ul>
				</div>
				<div className=" border-neutral-200 z-10 h-[200px] relative">
					<h4 className="w-full text-center top-1/2 -translate-y-1/2 absolute">
						Skills
					</h4>
					<div>
						<ul className="list-2 mb-2 -z-20">
							<Marquee
								gradientColor={"#333333"}
								gradientWidth={100}
								speed={200}
								gradient={true}
							>
								<li>#nextjs</li>
								<li>#js</li>
								<li>#reactjs</li>
								<li>#tailwind</li>
								<li>#gsap</li>
								<li>#figma</li>
								<li>#nextjs</li>
								<li>#nextjs</li>
								<li>#nextjs</li>
							</Marquee>
						</ul>
					</div>
				</div>
				<div className=" border-neutral-200 border-t-2">
					<h4 className="hidden">Categoreis</h4>
					<div className="flex flex-row border-neutral-200 mb-8 ">
						<Marquee speed={200} direction="right">
							<UiUxBadge />
							<FrontendBadge />
							<UiUxBadge />
							<FrontendBadge />
							<UiUxBadge />
							<FrontendBadge />
						</Marquee>
					</div>
				</div>
			</div>
			<div className="relative w-full flex-1 overflow-hidden flex flex-col border-neutral-200 ">
				<div className="h-fit w-full relative border-b-2 border-neutral-100 hidden md:block">
					<Image
						src={"/images/services/image-1.png"}
						className="w-full h-fit"
						width={1000}
						height={1000}
						alt={""}
					/>
				</div>
				<div className="flex-1"></div>
				<div className="flex text-[4rem] justify-between text-neutral-100 w-full gap-4 px-10 py-10">
					<p className="font-bold text-neutral-200">300€/P</p>
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

					<button className=" rounded-full border-2 border-neutral-100 px-10">
						get started
					</button>
				</div>
			</div>
		</section>
	);
};
