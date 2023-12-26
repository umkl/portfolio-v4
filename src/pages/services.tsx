"use client";
import Curve from "@um-p4/components/Curve";
import UmFooter from "@um-p4/components/UmFooter";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Work = () => {
	useEffect(() => {
		gsap.to(".marquee_part", {
			xPercent: -100,
			repeat: -1,
			duration: 10,
			ease: "linear",
		});

		gsap.set("#marquee-parent", { xPercent: -50 });
	}, []);

	const [selectedItem, setSelectedItem] = useState();

	return (
		<Curve>
			<section className="font-clash overflow-x-hidden w-full min-h-screen flex flex-col">
				<h1 className="text-[6em] leading-[1em] mt-2   uppercase font-bold">
					my services
				</h1>
				<div id="marquee-parent" className="flex w-full h-[3em] flex-row mb-10">
					<h1 className="marquee_part text-[3em] uppercase font-medium shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part  text-[3em] uppercase font-medium shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part text-[3em] uppercase font-medium shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part text-[3em] uppercase font-medium shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part text-[3em] uppercase font-medium shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
				</div>
				<ul className="uppercase flex flex-col justify-center  flex-1 overflow-hidden">
					{["frontend development", "ui/ux design", "branding"].map((x) => {
						return <ListItem key={x} text={x} link="services/frontend-dev" />;
					})}
				</ul>
				<UmFooter />
			</section>
		</Curve>
	);
};

export default Work;

function ListItem({ text, link }: { text: any; link: string }) {
	useEffect(() => {}, []);
	const router = useRouter();

	return (
		<li
			key={text}
			className="list-item text-[4em] font-bold bg-[#333] mt-0  -mb-9 relative cursor-pointer"
			onMouseEnter={(e) => {
				gsap.to(e.target, { top: "-3vw", duration: 0.3 });
			}}
			onMouseLeave={(e) => {
				gsap.to(e.target, { top: "0vw", duration: 0.3, delay: 0.1 });
			}}
			onClick={(e) => {
				router.push(link);
				gsap.to(e.target, { height: "800px", duration: 0.3, delay: 0.1 });
			}}
		>
			<hr />
			<span className="pointer-events-none">{text}</span>
		</li>
	);
}
