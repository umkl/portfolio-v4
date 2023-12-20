"use client";
import React, {
	useState,
	useEffect,
	useRef,
	RefObject,
	useContext,
} from "react";
import Image from "next/image";
import { NavContext } from "@um-p4/navcontext";
import Curve from "@um-p4/components/Curve";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const cardContent = [
	{
		title: "#1 Sketching",
		content:
			"Great things always start with thoughts and capturing those is done best with pen and paper. That is why I always create use the traditional way of putting down ideas - which is on sheets of paper.",
		imageName: "work-experience-1_sketching.png",
	},
	{
		title: "#2 Design",
		content:
			"While interfaces may not seem critical in theory, their significance becomes apparent in real-life, day-to-day usage. A well-crafted UI/UX design can be the determining factor in whether an application finds widespread use. This is why I prioritize creating a robust mockup before diving into the actual development work—ensuring a seamless process and minimizing the need for rework :) ",
		imageName: "work-experience-2_design.png",
	},
	{
		title: "#3 Coding",
		content:
			"Stepping into the coding phase is like putting our plans into action. Coding is where the magic happens, turning a design on paper into a real, working thing. Every bit of code matters, ensuring everything runs smoothly and does what it's supposed to. I pay close attention to the details to create an app that's not just functional but also trustworthy. ",
		imageName: "work-experience-3_coding.png",
	},
	{
		title: "#4 DevOps",
		content:
			"Entering the realm of DevOps, it's where the behind-the-scenes magic happens to keep everything running smoothly. DevOps streamlines the deployment and maintenance process so changes can be pushed out as fast as possible. Over the time I realised the perfection of this step is essential for keeping up the motivation towards keeping on working on a project.",
		imageName: "work-experience-4_devops.png",
	},
];

const WorkSection = () => {
	const [isMobile, setIsMobile] = useState<boolean>();
	const navCxt = useContext(NavContext);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Curve>
			<Parallax pages={4} style={{ top: "0", left: "0" }}>
				<ParallaxLayer offset={0} speed={2.5}>
					<section id="work" ref={navCxt.work} className="overflow-hidden">
						<div className="w-full overflow-hidden bg-[#333333]">
							{/* <div className="mb-8">
						<WorkSectionHeader title="My Craftsmanship" />
					</div> */}
							{/* <div className="h-screen w-full flex justify-center items-center">
								<h2 className="font-druk w-full px-8 text-[6vw] lg:text-[4.2em] leading-12 break-words  text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-1 mt-10">
									My Craftmanship
								</h2>
							</div> */}
							<div className="relative left-1/2  max-w-[1400px] -translate-x-1/2">
								{isMobile
									? cardContent.map((x) => (
											<WorkCardMobile
												key={x.title}
												heading={x.title}
												imageName={x.imageName}
												content={x.content}
											></WorkCardMobile>
									  ))
									: cardContent.map((x, i) => (
											<WorkCard
												flipped={i % 2 == 0}
												key={x.title}
												heading={x.title}
												imageName={x.imageName}
												content={x.content}
											></WorkCard>
									  ))}
							</div>
						</div>
					</section>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={2.5}></ParallaxLayer>
			</Parallax>
		</Curve>
	);
};

export default WorkSection;

export const WorkSectionHeader = ({
	title,
	subtext,
}: {
	title: string;
	subtext?: string;
}) => {
	return (
		<>
			{/* <h1 className="text-left font-sora font-bold text-[1.23em] text-[#c2cad193] px-8 mt-10">
				this section is about
			</h1> */}
			<h2 className="font-druk w-full px-8 text-[6vw] lg:text-[4.2em] leading-12 break-words  text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-1 mt-10">
				{title}
			</h2>
			{subtext && (
				<h3 className="font-inter text-[1em] px-8 leading-6 font-medium text-[#c2cad193] drop-shadow-[0_0_0.3rem_#ffffff70]  text-left  sm:max-w-[600px] relative text-center mt-2 ">
					{subtext}
				</h3>
			)}
		</>
	);
};

const WorkCard = ({
	flipped = false,
	heading,
	imageName,
	content,
}: {
	flipped?: boolean;
	heading: string;
	imageName: string;
	content?: JSX.Element | string;
}) => {
	return (
		<div
			className={`flex relative py-32 w-full ${
				flipped ? "flex-row-reverse " : "flex-row"
			}  `}
		>
			<div className="text-right flex flex-col justify-center shrink-0 mr-8 w-2/5 ">
				<h1
					className={`font-clash text-6xl  drop-shadow-[0_0_0.3rem_#ffffff70] ${
						flipped ? "text-left" : "text-right"
					}`}
				>
					{heading}
				</h1>
				<p
					className={`font-inter text-2xl font-bold mt-4 text-[#C2CAD1] ${
						flipped ? "text-left" : "text-right"
					}`}
				>
					{content}
				</p>
			</div>
			<div className="w-1/2 mr-8 shrink-0 relative">
				<Image
					src={`/${imageName}`}
					alt=""
					className="drop-shadow-[0_0_0.3rem_#ffffff20]"
					style={{
						width: "100%",
						height: "auto",
					}}
					width={500}
					height={500}
					priority
				/>
			</div>
		</div>
	);
};

const WorkCardMobile = ({
	heading,
	imageName,
	content,
}: {
	heading: string;
	imageName: string;
	content?: JSX.Element | string;
}) => {
	return (
		<div className={`flex flex-col-reverse px-8 py-8 gap-6`}>
			<div className="max-w-[800px]  text-left flex flex-col ">
				<div className="flex-1"></div>
				<div className="">
					<h1
						className={`font-clash text-5xl  drop-shadow-[0_0_0.3rem_#ffffff70]`}
					>
						{heading}
					</h1>
					<p className={`font-inter text-xl font-bold mt-4 text-[#C2CAD1]`}>
						{content}
					</p>
				</div>

				<div className="flex-1"></div>
			</div>
			<div className="w-full ">
				<Image
					src={`/${imageName}`}
					alt="Vercel Logo"
					className="drop-shadow-[0_0_0.3rem_#ffffff20] drop-shadow-2xl"
					style={{
						width: "100%",
						height: "auto",
					}}
					width={500}
					height={300}
					priority
				/>
			</div>
		</div>
	);
};
