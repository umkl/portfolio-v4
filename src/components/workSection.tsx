"use client";
import React, {
	useState,
	useEffect,
	useRef,
	RefObject,
	useContext,
} from "react";
import Image from "next/image";
import { NavContext } from "@um-p4/app/page";

const cardContent = [
	{
		title: "#1 Sketching",
		content:
			"Great things always start with thoughts and capturing those is done best with pen and paper. That is why I always create use the traditional way of putting down ideas - which is on sheets of paper.",
	},
	{
		title: "#2 Design",
		content:
			"Interfaces might not be that be important in theory but when it comes into reallife, the day to day life a good UI/UX design can make the fine difference if an application gets used or not. Hence why I like to produce a good mockup before doing any of the actual work ... so hopefully nothing has to be done twice :)",
	},
];

const useParallax = (speed = 1) => {
	const ref = useRef<any>();

	const handleScroll = () => {
		if (ref.current) {
			const scrollY = window.scrollY;
			const translateY = -scrollY * speed;
			ref.current.style.transition = "transform 0.3s ease-out"; // Adjust the transition duration and easing function
			ref.current.style.transform = `translateY(${translateY}px)`;
		}
	};

	React.useEffect(() => {
		// Attach the event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Detach the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [speed]);

	return ref;
};

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
		<section id="work" ref={navCxt.work} className="overflow-hidden">
			<div className="w-full overflow-hidden bg-[#333333]  snap-center">
				<div className="mb-8">
					<WorkSectionHeader
						title="My Craft"
						subtext="here I want to show you how I go about doing my work"
					/>
				</div>
				<div className="relative left-1/2  max-w-[900px] -translate-x-1/2">
					{isMobile
						? cardContent.map((x) => (
								<WorkCardMobile
									heading={x.title}
									content={x.content}
								></WorkCardMobile>
						  ))
						: cardContent.map((x) => (
								<WorkCard heading={x.title} content={x.content}></WorkCard>
						  ))}
				</div>
			</div>
		</section>
	);
};

export default WorkSection;

export const WorkSectionHeader = ({
	title,
	subtext,
}: {
	title: string;
	subtext: string;
}) => {
	return (
		<>
			<h2 className="font-druk text-[4em] leading-12 font-medium text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-2">
				{title}
			</h2>
			<h3 className="font-druk text-[1.8em] leading-10 font-medium text-[#c2cad193] drop-shadow-[0_0_0.3rem_#ffffff70]  text-center  sm:max-w-[600px] left-1/2 relative -translate-x-1/2 mt-2 max-w-[80%]">
				{subtext}
			</h3>
		</>
	);
};

const WorkCard = ({
	flipped = false,
	heading,
	content,
}: {
	flipped?: boolean;
	heading: string;
	content?: JSX.Element | string;
}) => {
	return (
		<div className={`flex ${flipped ? "flex-row-reverse " : "flex-row"}`}>
			<div className="max-w-[800px] text-right flex flex-col">
				<div className="flex-1"></div>
				<div className="">
					<h1
						className={`font-clash text-6xl  drop-shadow-[0_0_0.3rem_#ffffff70] ${
							flipped ? "text-left" : "text-right"
						}`}
					>
						{heading}
					</h1>
					<p
						className={`font-inter text-md  text-[#C2CAD1] ${
							flipped ? "text-left" : "text-right"
						}`}
					>
						before I start a project I always like to spill out all of my
						thoughts on a piece of paper so I can fuel my creativity and don’t
						have to think too much about the business logic during the
						implementation phase
					</p>
				</div>

				<div className="flex-1"></div>
			</div>
			<div className="w-full p-[50px] ">
				<Image
					src="/coding.png"
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

const WorkCardMobile = ({
	heading,
	content,
}: {
	heading: string;
	content?: JSX.Element | string;
}) => {
	return (
		<div className={`flex flex-col-reverse px-8 py-8 gap-6`}>
			<div className="max-w-[800px]  text-right flex flex-col ">
				<div className="flex-1"></div>
				<div className="">
					<h1
						className={`font-clash text-6xl  drop-shadow-[0_0_0.3rem_#ffffff70] text-left`}
					>
						{heading}
					</h1>
					<p className={`font-inter text-md  text-[#C2CAD1] text-left`}>
						{content}
					</p>
				</div>

				<div className="flex-1"></div>
			</div>
			<div className="w-full ">
				<Image
					src="/coding.png"
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
