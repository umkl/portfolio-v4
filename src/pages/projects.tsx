"use client";
import UmFooter from "@um-p4/components/UmFooter";
import { GoBack } from "./services";
import Curve from "@um-p4/components/Curve";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { easeOut } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import React from "react";
import Marquee from "react-fast-marquee";
import Head from "next/head";
import projects from "../projects.json";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Projects = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
	const router = useRouter();

	const handleMouseMove = (event: any) => {
		setPosition({ x: event.clientX, y: event.clientY });
	};

	useEffect(() => {
		const deltaX = position.x - textPosition.x;
		const deltaY = position.y - textPosition.y;
		const newX = deltaX * 0.1;
		const newY = deltaY * 0.1;
		setTextPosition({ x: newX, y: newY });
	}, [position]);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Ungar Michael ✹ Creative App Development</title>
				<meta name="title" content="Michael Ungar - Projects" />
				<meta name="description" content="Creative App Development" />
				<meta property="og:url" content="https://ungarmichael.me" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Ungar Michael - Projects" />
				<meta property="og:description" content="Creative App Development" />
				<meta
					property="og:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ungarmichael.me" />
				<meta property="twitter:url" content="https://ungarmichael.me" />
				<meta name="twitter:title" content="Ungar Michael - Projects" />
				<meta name="twitter:description" content="Creative App Development" />
				<meta
					name="twitter:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="theme-color" content="#333333"></meta>
			</Head>
			<Curve>
				<section
					className="flex flex-col bg-[#333] text-white"
					onMouseMove={handleMouseMove}
				>
					<style jsx>{`
						@media (max-width: 375px) {
							section {
								width: 375px;
							}
						}
					`}</style>
					<GoBack />
					<Heading />
					<TableHead />
					{projects.map((item, index) => {
						return (
							<TableItem
								description={
									item.description[
										(router.locale as keyof typeof item.description) ?? "en-US"
									]
								}
								images={item.images}
								projectname={item.projectname}
								key={item.projectname}
								year="2020"
								categories={item.categories}
								initiator={item.initiator}
								link={item.link}
								tags={item.tags}
							/>
						);
					})}
					<Spacer></Spacer>
				</section>
			</Curve>
		</>
	);
};

const TableItem = ({
	images,
	description,
	link,
	projectname,
	categories,
	tags,
	initiator,
	year,
}: {
	images: string[];
	description: string;
	link: string;
	projectname: string;
	categories: string[];
	tags: string[];
	initiator: string;
	year: string;
}) => {
	const [expanded, setExpanded] = useState(true);
	const ref = useRef(null);
	useEffect(() => {
		let ctxt = gsap.context(() => {
			if (expanded == true) {
				gsap.to(ref.current, {
					duration: 1.2,
					height: "0px",
					ease: easeIn,
				});
			}
			if (expanded == false) {
				gsap.to(ref.current, {
					duration: 1.4,
					height: "auto",
					ease: easeOut,
				});
			}
		});

		return ctxt.clear();
	}, [expanded]);
	const linkregex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi;
	const processHtml = (html: any) => {
		const jsxElements = [];
		let match;

		// Loop through matches found in the HTML string
		while ((match = linkregex.exec(html)) !== null) {
			const href = match[1];
			const linkText = match[2];

			// Create JSX element for each match
			jsxElements.push(
				<a
					key={href}
					href={href}
					className="font-bold font-druk text-[1.3rem] underline underline-offset-2 "
				>
					{linkText}
				</a>
			);
		}

		return jsxElements;
	};
	const t = useTranslations("projects");
	return (
		<>
			<div
				className="flex w-full px-4 cursor-pointer group hover:bg-white "
				onClick={() => {
					setExpanded(!expanded);
				}}
			>
				<p className="font-clash flex-1 pl-2  py-4 font-bold group-hover:text-[#333] inline text-left">
					{projectname}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333] hidden sm:block">
					{initiator}
				</p>

				<p className="font-clash flex-1 pl-2  py-4 font-semibold group-hover:text-[#333] uppercase hidden sm:flex sm:flex-wrap">
					{categories.map((x, i) => {
						return (
							<span className="">
								{x}
								{i + 1 == categories.length ? "" : ","}
							</span>
						);
					})}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333] inline text-right">
					{year}
				</p>
			</div>
			<div
				ref={ref}
				className="w-full overflow-hidden px-6 box-border"
				style={{ height: "0px" }}
			>
				<div className="flex items-center relative uppercase sm:hidden mt-4">
					{categories.map((x) => {
						return (
							<span className="bg-white relative  p-4 font-clash leading-4 text-[1.2rem] rounded-full font-bold text-black">
								{x}
							</span>
						);
					})}
				</div>
				<h1 className="text-[3rem] font-bold font-druk leading-10 mt-4 mb-2">
					{projectname}
				</h1>

				<div className="flex flex-wrap">
					{tags.map((x) => {
						return <span className="font-druk mr-4 text-neutral-300">{x}</span>;
					})}
				</div>
				<p className="font-clash font-medium text-neutral-100 text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.6rem] mt-4 max-w-[800px]">
					{description}
				</p>
				<div className="my-10 flex gap-10 flex-wrap">
					{images.map((x) => {
						return <Image src={x} width={300} height={30} alt={""} />;
					})}
				</div>
				<p className="font-bold font-druk text-[1rem] uppercase flex items-center gap-4 mb-4 ">
					{t("link-ad")} {processHtml(link)}
				</p>
			</div>

			<hr />
		</>
	);
};

const TableHead = () => {
	const t = useTranslations("Projects");
	return (
		<div className="flex w-full px-4 pt-2 uppercase group ">
			<p className="font-clash flex-1 pl-2 pb-2 font-semibold">
				{t("projectname")}
			</p>
			<p className="font-clash flex-1 pl-2 pb-2 font-semibold hidden sm:block text-white">
				{t("initiator")}
			</p>
			<p className="font-clash flex-1 pl-2 pb-2 font-semibold hidden sm:block text-white">
				{t("category")}
			</p>
			<p className="font-clash flex-1 pl-2 pb-2 pr-2 font-semibold text-right text-white">
				{t("year")}
			</p>
		</div>
	);
};
const Heading = () => {
	const t = useTranslations("Projects");
	return (
		<div className="">
			<p className="font-druk uppercase text-[1.2em] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] mt-2 sm:mt-4 md:mt-6 lg:mt-8 font-bold ml-4">
				{t("featured")}
			</p>
			<div className="relative text-white">
				<h1 className="font-druk uppercase font-outline-2 text-transparent text-[2.3rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold leading-[0.8em] ml-4 z-50 mb-6">
					{t("projects")}
				</h1>
			</div>
		</div>
	);
};

const LargeText = ({ children }: { children: string }) => {
	return (
		<p className="text-[1.2rem] lg:text-[1.4rem] mt-4 max-w-[1200px]">
			{children}
		</p>
	);
};

const Spacer = () => {
	return <div className="h-[100px]"></div>;
};

const LinkItem = ({ link }: { link: string }) => {
	return (
		<p className="mb-4">
			You can check out the work on{" "}
			<a href={`https://${link}`}>
				<span className="underline font-semibold">{link}</span>
			</a>
		</p>
	);
};

const TagWrapper = ({ tags }: { tags: string[] }) => {
	return (
		<div className="flex flex-row flex-wrap gap-4 font-semibold text-[1.3rem] mb-8 mt-5">
			{tags.map((tag) => {
				return (
					<p key={tag} className="text-nowrap">
						#{tag}
					</p>
				);
			})}
		</div>
	);
};

const ContentBar = ({ videoItems }: { videoItems: string[] }) => {
	const frameScrollItem = useRef<any>();

	const handleScroll = (scrollAmount: any) => {
		const fsi = frameScrollItem.current;

		if (frameScrollItem) {
			const currentScroll = fsi.scrollLeft;
			const targetScroll = currentScroll + scrollAmount;

			const startTime = performance.now();
			const duration = 500; // Adjust the duration as needed

			const animateScroll = (currentTime: any) => {
				const elapsedTime = currentTime - startTime;

				fsi.scrollLeft = easeInOut(
					elapsedTime,
					currentScroll,
					scrollAmount,
					duration
				);

				if (elapsedTime < duration) {
					requestAnimationFrame(animateScroll);
				}
			};

			requestAnimationFrame(animateScroll);
		}
	};

	const easeInOut = (t: any, b: any, c: any, d: any) => {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};
	return (
		<>
			<div
				id="frame-vids-items"
				className="flex flex-nowrap gap-5 mr-5 overflow-x-scroll hide-scrollbar"
				ref={frameScrollItem}
			>
				{videoItems.map((link) => {
					return (
						<video key={link} autoPlay muted loop style={{ height: "300px" }}>
							<source src={link} />
						</video>
					);
				})}
			</div>
			<div className="flex justify-between mt-4 select-none">
				<div
					className="cursor-pointer select-none text-[2rem] font-bold"
					onClick={() => {
						handleScroll(-400);
					}}
				>
					&lt;-
				</div>
				<div
					className="cursor-pointer select-none text-[2rem] font-bold"
					onClick={() => {
						handleScroll(400);
					}}
				>
					-&gt;
				</div>
			</div>
		</>
	);
};

const SpareMeta = ({
	categories,
	initiator,
}: {
	categories: string;
	initiator: string;
}) => {
	return (
		<div className="flex flex-col sm:hidden">
			<div className="w-full text-left font-bold text-[1.2rem] uppercase mt-6">
				Categories:
			</div>
			<div className="w-full text-left font-medium italic uppercase text-[1.2rem]">
				{categories}
			</div>
			<div className="w-full text-left font-bold uppercase text-[1.2rem] mt-6">
				initiator:
			</div>
			<div className="w-full text-left font-medium italic uppercase text-[1.2rem]">
				{initiator}
			</div>
		</div>
	);
};

export default Projects;

export async function getStaticProps(context: any) {
	return {
		props: {
			messages: (await import(`../messages/${context.locale}.json`)).default,
		},
	};
}
