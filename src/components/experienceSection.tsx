"use client";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { WorkSectionHeader } from "./workSection";
import { NavContext } from "@um-p4/app/navcontext";

const xpsForTheExperienceSection = [
	{
		name: "Achterbahnfahrt",
		startDate: "c231012",
		endDate: "c231212",
	},
	{
		name: "Achterbahnfahrt",
		startDate: "c231012",
		endDate: "c231212",
	},
	{
		name: "Achterbahnfahrt",
		startDate: "c231012",
		endDate: "c231212",
	},
	{
		name: "Achterbahnfahrt",
		startDate: "c231012",
		endDate: "c231212",
	},
];

const ExperienceSection = () => {
	const navCxt = useContext(NavContext);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			console.log("scroll");
		});
	}, []);

	return (
		<section
			ref={navCxt.experience}
			id="experience"
			className="h-fit w-full art-bg relative -z-20"
		>
			<div className="py-10 relative">
				<h2 className="font-druk w-full px-8 text-[9vw] lg:text-[4.2em] leading-12 break-words  text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-1 ">
					Experiences
				</h2>
				<h3 className="font-inter text-[1em] px-8 leading-6 font-medium text-[#c2cad193] drop-shadow-[0_0_0.3rem_#ffffff70]   sm:max-w-[600px] relative text-center mt-2 ">
					Places where I got to experience things
				</h3>
			</div>
			<div className="relative">
				<div className="w-[200px] top-0 h-full  left-4  absolute z-10 flex">
					<div className="h-full w-[5px] shrink-0  flex justify-center">
						<div className="w-[12px] h-full bg-[#6D6D6D] "></div>
					</div>
					<div className="flex flex-col h-full flex-1 ">
						<div className="wrapper w-full h-[400px]  flex flex-col ">
							<div className="-translate-y-full sticky text-[#6D6D6D] top-6 font-druk text-3xl  w-[500px] rotate-90 origin-bottom-left ">
								now
							</div>
							<div className="h-[500px]  w-[40px] sticky top-0"></div>
							<div className=" flex-1"></div>
						</div>
						<div className="h-[100px]  w-full"> </div>
						<div className="wrapper  w-full flex-1 flex flex-col">
							<div className="sticky top-0 font-druk text-3xl text-[#6D6D6D]  rotate-90 origin-bottom-left ">
								2023
							</div>
							<div className=" flex-1"></div>
						</div>
					</div>
				</div>
				<div className="flex justify-center relative left-1/2 -translate-x-1/2 w-full max-w-[900px] h-fit">
					<div className="w-full h-fit">
						<div className="w-full h-fit flex flex-col">
							{xpsForTheExperienceSection.map((x) => (
								<ExperienceCard key={x.name} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;

const ExperienceCard = () => {
	return (
		<div className="flex flex-row">
			<div className="w-[60px]"></div>
			<div className=" w-full ">
				<div className="w-full h-full px-3 pb-7 flex flex-col ">
					<Image
						src="/coding.png"
						alt="Vercel Logo"
						className="drop-shadow-[0_0_0.3rem_#ffffff20]"
						style={{
							width: "100%",
							height: "auto",
						}}
						width={500}
						height={300}
						priority
					/>
					<h1
						className={`font-clash text-4xl mt-8  drop-shadow-[0_0_0.3rem_#ffffff70]`}
					>
						asdf
					</h1>
					<p className={`font-inter text-md  text-[#C2CAD1]`}>
						before I start a project I always like to spill out all of my
						thoughts on a piece of paper so I can fuel my creativity and don’t
						have to think too much about the business logic during the
						implementation phase
					</p>
				</div>
			</div>
		</div>
	);
};
