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

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		<section id="work" ref={navCxt.work}>
			{isMobile ? (
				<>
					<div className="left-1/2 z-20  relative h-screen w-1/2">
						<div className="max-w-[400px]">
							<Image
								src="/coding.png"
								alt="Vercel Logo"
								className=""
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
				</>
			) : (
				<>
					{/* <ParallaxLayer offset={1} className="z-10" speed={0}>
						<div className="h-[400px] z-10 w-full flex flex-col justify-center items-center">
							<p className="text-2xl font-bold text-red-200">Disclaimer</p>
							<p className="text-2xl ">
								The following section will represent what kind of work i do
							</p>
						</div>
					</ParallaxLayer>
					<>
						<ParallaxLayer offset={1.2} speed={1.8} className="z-20">
							<div className="h-screen z-20  w-1/2  snap-start  flex justify-end items-center  ">
								<div className="w-2/3 left-1/2 flex font-druk ">
									<div className="max-w-[400px] text-right ">
										<h1 className="font-clash text-3xl text-right">
											#1 Sketching
										</h1>
										<p className="font-inter text-md text-right text-[#C2CAD1]">
											the first stage of creating things is always thinking. In
											this area I like to capture my thoughts using a notepad in
											an oldschool fashion. After having done that I continue on
											with the next stage:{" "}
										</p>
									</div>
								</div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.5} speed={1.4} className="z-20">
							<div className="left-1/2 z-20  relative h-screen w-1/2">
								<div className="max-w-[400px]">
									<Image
										src="/coding.png"
										alt="Vercel Logo"
										className=""
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
						</ParallaxLayer> */}

					<div className="w-full bg-[#333333]  snap-center">
						<div>
							<h2 className="font-druk text-[2.7em] lg:text-8xl leading-10 font-medium text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-2">
								My Craft
							</h2>
							<h3 className="font-druk text-[1.7em] lg:text-2xl leading-10 font-medium text-[#c2cad193] drop-shadow-[0_0_0.3rem_#ffffff70]  text-center  max-w-[600px] left-1/2 relative -translate-x-1/2 mt-2">
								here I want to show you how I go about doing my work
							</h3>
						</div>
						<div className="relative left-1/2  max-w-[900px] -translate-x-1/2">
							<WorkCard heading="#1 Sketching" />
							<WorkCard heading="#2 Desgining" flipped />
							<WorkCard heading="#3 Development" />
							<WorkCard heading="#4 Continuous Improvements" flipped />
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default WorkSection;

const WorkCard = ({
	flipped = false,
	heading,
	content,
}: {
	flipped?: boolean;
	heading: string;
	content?: JSX.Element;
}) => {
	return (
		<div className={`flex ${flipped ? "flex-row-reverse" : ""}`}>
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
