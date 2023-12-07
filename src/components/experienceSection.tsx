"use client";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { WorkSectionHeader } from "./workSection";
import { NavContext } from "@um-p4/app/navcontext";

const xpsForTheExperienceSection = [
	{
		heading: "Achterbahnfahrt",
		date: "c231012",
		text: "asdlkf",
		topics: [],
	},
	{
		heading: "Achterbahnfahr2t",
		date: "c231012",
		text: "asdlkf",
		topics: [],
	},
	{
		heading: "Achterbahnfahr2t3",
		date: "c231012",
		text: "asdlkf",
		topics: [],
	},
	{
		heading: "Achterbahnfahr24t",
		date: "c231012",
		text: "asdlkf",
		topics: [],
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
			<h2 className="py-10 font-druk w-full px-8 text-[9vw] lg:text-[4.2em] leading-12 break-words  text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-1 ">
				Experiences
			</h2>
			{/* <h3 className="font-inter text-[1em] px-8 leading-6 font-medium text-[#c2cad193] drop-shadow-[0_0_0.3rem_#ffffff70]   sm:max-w-[600px] relative text-center mt-2 ">
					Places where I got to experience things
				</h3> */}

			<div className="relative">
				<div className="w-[200px] top-0 h-full  left-4  absolute z-10 flex">
					<div className="h-full w-[5px] shrink-0  flex justify-center">
						<div className="w-[12px] h-full bg-[#6D6D6D] "></div>
					</div>
					<div className="flex flex-col h-full flex-1 ">
						<div
							className={`wrapper w-full h-[${nowHeight}px]  flex flex-col `}
						>
							<div className="-translate-y-full sticky text-[#6D6D6D] top-6 font-druk text-3xl  w-[500px] rotate-90 origin-bottom-left ">
								now
							</div>
							<div className="h-[500px]  w-[40px] sticky top-0"></div>
							<div className=" flex-1"></div>
						</div>
						<div className="h-[100px]  w-full"> </div>
						<div className="wrapper  w-full h-[700px] flex flex-col">
							<div className="sticky top-0 font-druk text-3xl text-[#6D6D6D] bg-red-200 rotate-90 origin-bottom-left ">
								2023
							</div>
							<div className=" flex-1"></div>
						</div>
						<div className="h-[100px]  w-full"> </div>
						<div className="wrapper  w-full flex-1 flex flex-col">
							<div className="sticky top-0 font-druk text-3xl text-[#6D6D6D] bg-red-200 rotate-90 origin-bottom-left ">
								2023
							</div>
							<div className=" flex-1"></div>
						</div>
					</div>
				</div>
				<div
					ref={expcardRef}
					className="flex justify-center relative left-1/2 -translate-x-1/2 w-full h-fit bg-red-200 min-h-[200px] max-w-screen overflow-hidden flex-col "
				>
					{xpsForTheExperienceSection.map((x) => (
						<ExperienceCard
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
	heading,
	date,
	text,
	topics,
}: {
	heading: string;
	date: string;
	text: string;
	topics: string[];
}) => {
	return (
		<div className="flex flex-row bg-emerald-200">
			<div id="spacer" className="w-[60px] shrink-0 bg-blue-200"></div>
			<div className="flex-1 h-[900px] flex flex-col pl-4 pr-4 bg-purple-200  mb-4 relative">
				<Image
					src="/coding.png"
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

				<h1
					className={`font-clash mt-8 break-all box-border relative drop-shadow-[0_0_0.3rem_#ffffff70] block`}
				>
					{heading}asdfasdfasdfasdfasasdfasdfasdfassfsdassassasfassdasfds
				</h1>
			</div>
		</div>
	);
};
