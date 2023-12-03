"use client";
import { NavContext } from "@um-p4/app/page";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { WorkSectionHeader } from "./workSection";

const xpsForTheExperienceSection = [
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
			className="h-fit w-full art-bg relative overflow-hidden -z-20"
		>
			<div className="py-8 relative">
				<WorkSectionHeader
					title="Experiences"
					subtext="Places where I got to experience things related to work"
				/>
			</div>
			<div className="relative">
				<div className="w-[200px] top-0 h-full  left-1/2 -translate-x-1/2 absolute -z-10 flex">
					<div className="h-full w-[20px] shrink-0  flex justify-center">
						<div className="w-[2px] h-full bg-slate-100 drop-shadow-[0_0_0.3rem_#ffffff70]"></div>
					</div>
					<div className="flex flex-col h-full flex-1">
						<div className="wrapper w-full h-[800px]  flex flex-col ">
							<div className="sticky top-0 font-druk text-3xl drop-shadow-[0_0_0.3rem_#ffffff70] w-[500px] rotate-90 origin-bottom-left ">
								now
							</div>
							<div className="h-[500px]  w-[40px] sticky top-0"></div>
							<div className=" flex-1"></div>
						</div>
						<div className="h-[100px]  w-full"> </div>
						<div className="wrapper  w-full flex-1 flex flex-col">
							<div className="sticky top-0 font-druk text-3xl drop-shadow-[0_0_0.3rem_#ffffff70] rotate-90 origin-bottom-left ">
								2023
							</div>
							<div className=" flex-1"></div>
						</div>
					</div>
				</div>
				<div className="flex justify-center relative left-1/2 -translate-x-1/2 w-full max-w-[900px] h-fit">
					<div className="w-full h-fit">
						<div className="w-full h-fit flex">
							{/* {
								xpsForTheExperienceSection.map(
									x=>
									ExperienceCard
								)
							} */}
							<div className="flex-1 ">
								<div className="h-[200px]"></div>
								<ExperienceCard />
								<ExperienceCard />
								<ExperienceCard />
							</div>
							<div className="w-32 "></div>
							<div className="flex-1">
								<ExperienceCard />
								<ExperienceCard />
							</div>
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
		<div className=" w-full">
			<div className="w-full h-full p-[50px] flex flex-col ">
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
					className={`font-clash text-6xl  drop-shadow-[0_0_0.3rem_#ffffff70]`}
				>
					asdf
				</h1>
				<p className={`font-inter text-md  text-[#C2CAD1]`}>
					before I start a project I always like to spill out all of my thoughts
					on a piece of paper so I can fuel my creativity and don’t have to
					think too much about the business logic during the implementation
					phase
				</p>
			</div>
		</div>
	);
};
