"use client";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { WorkSectionHeader } from "./workSection";
import { NavContext } from "@um-p4/app/navcontext";

const xpsForTheExperienceSection = [
	{
		heading: "Engramm",
		date: "c231012",
		text: "This is something I am personally working on right now. In order to handle proper contracts I registered a business for frontend development and design work for local companies.",
		imagePath: "",
		topics: [],
	},
	{
		heading: "Btastic",
		date: "c231012",
		text: "In the summer of 2022 I got the opportunity to work with a little startup and gained a lot of experience regarding working with code as a profession.",
		imagePath: "",
		topics: [],
	},
	{
		heading: "Paso",
		date: "c231012",
		text: "This was one of my most exciting internships... ",
		imagePath: "",
		topics: [],
	},
	{
		heading: "VortexData",
		date: "c231012",
		text: "Got the opportunity to work for a few school c.",
		topics: [],
		imagePath: "",
	},
	{
		heading: "HTL Grieskirchen",
		date: "c1809",
		text: "This is where my coding journey started in the year of 2018.",
		topics: [],
		imagePath: "",
	},
];

const ExperienceSection = () => {
	const navCxt = useContext(NavContext);
	const [nowHeight, setNowHeight] = useState<number>(400);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			console.log("scroll");
		});
	}, []);

	const expcardRef = useRef<any>(null);

	useEffect(() => {
		console.log(expcardRef.current.clientHeight);
		setNowHeight(expcardRef.current.clientHeight);
		console.log(nowHeight);
	}, [expcardRef]);

	useEffect(() => {
		console.log(nowHeight);
	}, [nowHeight]);

	return (
		<section
			ref={navCxt.experience}
			id="experience"
			className="h-fit w-full relative -z-20 art-bg"
		>
			<h2 className="py-10 font-druk w-full px-8 text-[9vw] lg:text-[4.2em] leading-12  text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-1 ">
				Experiences
			</h2>
			<div className="relative">
				<div className="w-[200px] top-0 h-full  left-4  absolute z-10 flex">
					<div className="h-full w-[5px] shrink-0  flex justify-center">
						<div className="w-[12px] h-full bg-[#6D6D6D] "></div>
					</div>
					<div className="flex flex-col h-full flex-1 ">
						<div
							className={`wrapper w-full h-[${nowHeight}px]  flex flex-col `}
						>
							<div className="-translate-y-full sticky text-[#6D6D6D] top-6 font-druk text-2xl  w-[500px] rotate-90 origin-bottom-left ">
								now
							</div>
							<div className="h-[500px]  w-[40px] sticky top-0"></div>
							<div className=" flex-1"></div>
						</div>
						<div className="h-[100px]  w-full"> </div>
						<div className="wrapper  w-full h-[700px] flex flex-col">
							<div className="sticky top-0 font-druk text-2xl text-[#6D6D6D]  rotate-90 origin-bottom-left ">
								2023
							</div>
							<div className=" flex-1"></div>
						</div>
						<div className="h-[100px]  w-full"> </div>
						<div className="wrapper  w-full flex-1 flex flex-col">
							<div className="sticky top-0 font-druk text-2xl text-[#6D6D6D]  rotate-90 origin-bottom-left ">
								2022
							</div>
							<div className=" flex-1"></div>
						</div>
					</div>
				</div>
				<div
					ref={expcardRef}
					className="flex justify-center relative left-1/2 -translate-x-1/2 w-full h-fit  min-h-[200px] max-w-screen overflow-hidden flex-col "
				>
					{xpsForTheExperienceSection.map((x) => (
						<ExperienceCard
							imagePath={x.imagePath}
							key={x.heading}
							heading={x.heading}
							date={x.date}
							text={x.text}
							topics={x.topics}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;

const ExperienceCard = ({
	imagePath,
	heading,
	date,
	text,
	topics,
}: {
	imagePath: string;
	heading: string;
	date: string;
	text: string;
	topics: string[];
}) => {
	return (
		<div className="flex flex-row ">
			<div id="spacer" className="w-[60px] shrink-0"></div>
			<div className="flex-1 min-h-[800px] flex flex-col pl-4 pr-4 relative">
				{imagePath && (
					<Image
						src={imagePath}
						alt="XP-IMAGE"
						className="drop-shadow-[0_0_0.3rem_#ffffff20] shrink-0"
						style={{
							width: "100%",
							height: "auto",
						}}
						width={500}
						height={300}
						priority
					/>
				)}
				<h1
					className={`font-clash mt-4 break-all box-border relative drop-shadow-[0_0_0.3rem_#ffffff70] block text-[2.8em] leading-[1.2em]`}
				>
					{heading}
				</h1>
				<h2 className="text-[1.4em] font-clash text-[#D9C2A7]">{date}</h2>
				<p className="font-inter font-bold text-[1.2em] text-[#C2CAD1]">
					{text}
				</p>
				<div className="h-[40px]"></div>
			</div>
		</div>
	);
};
