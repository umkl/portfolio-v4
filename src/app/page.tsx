"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
	const [onBottom, setOnBottom] = useState(false);
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	const handleScroll = () => {
		if (scrollContainerRef.current) {
			const scrollPosition = scrollContainerRef.current.scrollTop;
			const height = scrollContainerRef.current.offsetHeight;
		}
	};
	const handleScrollX = () => {
		console.log("Horizontal Scroll Position:", window.scrollY);
		console.log(scrollContainerRef.current?.offsetHeight ?? "bye");
		console.log(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollX);
		return () => {
			window.removeEventListener("scroll", handleScrollX);
		};
	}, []);
	useEffect(() => {
		if (scrollContainerRef.current) {
			console.log("registered");
			scrollContainerRef.current.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (scrollContainerRef.current) {
				scrollContainerRef.current.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<Parallax pages={10}>
			<ParallaxLayer offset={0} className="z-50">
				<section
					className="h-fit-content w-full z-50  overflow-auto snap-end "
					id="landing"
				>
					<div ref={scrollContainerRef}>
						<div className="fixed w-full h-[5em] z-30 from-[#333333] to-transparent bg-gradient-to-t bottom-0"></div>
						<main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 relative max-w-screen overflow-hidden">
							<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex md:mt-20">
								<Image
									src="/logo.svg"
									alt="Vercel Logo"
									className=""
									width={80}
									height={80}
									priority
								/>
								<Image
									src="/myself.png"
									alt="Vercel Logo"
									className=""
									unoptimized={true}
									width={80}
									height={80}
								/>
							</div>
							<div className=" relative flex flex-col w-full max-w-5xl mt-3 lg:mt-0 mb-7">
								<h1 className="text-left font-sora font-bold text-[1.23em] text-[#95B8D1]">
									Hallo, mein Name ist
								</h1>
								<h2 className="font-clash text-[2.7em] lg:text-8xl leading-10 font-medium text-[#C2CAD1] dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
									Michael Ungar.
								</h2>
								<h3 className="font-inter font-bold text-[1.2em] lg:text-4xl text-[#81899B]">
									Developer and Designer from Austria.{" "}
								</h3>
								<h4 className="font-sora text-[1em] text-[#686C76] mt-0 font-normal lg:mt-4">
									I’m a frontend dev and creator currently working as a
									freelancer <br></br>
									focused on creating flawless code and magnificent designs.
								</h4>
							</div>
							<div className="mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:gap-4  w-full">
								<CardComponent
									name="Work"
									desc="Finde mehr über meine Tätigkeiten heraus"
								/>
								<CardComponent
									name="Experiencies"
									desc="Erfahre wo ich meine Fertigkeiten schon anwenden durfte."
								/>
								<CardComponent
									name="Projects"
									desc="Finde mehr über meine Tätigkeiten heraus"
								/>
								<CardComponent
									name="Contact"
									desc="Finde mehr über meine Tätigkeiten heraus"
								/>
							</div>
							<div className="absolute h-8 md:h-20  w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-[#333333]"></div>
							<div className="absolute h-8 md:h-20  w-full top-0 left-0 bg-gradient-to-b from-[#333333] to-transparent"></div>
							<div className="absolute w-8 md:w-20  h-full top-0 left-0 bg-gradient-to-r from-[#333333] to-transparent"></div>
							<div className="absolute w-8 md:w-20  h-full top-0 right-0 bg-gradient-to-l from-[#333333] to-transparent"></div>
						</main>
					</div>
					{/* 
			<div className="h-[1200px] bg-red-200 w-full snap-center"></div>
			<div className="h-[800px] bg-red-300 w-full snap-center"></div>
			<div className="h-[900px] bg-red-400 w-full snap-center"></div> */}
				</section>
			</ParallaxLayer>
			<ParallaxLayer></ParallaxLayer>
			<ParallaxLayer offset={1} className="z-10">
				<div className="h-screen z-10 w-full z- flex justify-center items-center fixed bg-[#333333]"></div>
			</ParallaxLayer>
			<ParallaxLayer offset={0.95} speed={0.4} className="z-10">
				<div className="h-screen z-10 w-full z- flex justify-center items-center fixed">
					<p className="text-2xl text-red-200 absolute">Disclaimer</p>
					<p className="text-2xl text-red-200 absolute">
						The following section will represent what kind of work i do
					</p>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={3}>
				<div className="h-[4000px]  w-full  snap-start  bg-[#333333]">
					<div className="w-1/2 left-1/2 flex font-druk">
						<div>
							<h1 className="font-clash text-3xl">#1 Sketching</h1>
							<p className="font-inter text-lg">
								the first stage of creating things is always thinking. In this
								area I like to capture my thoughts using a notepad in an
								oldschool fashion. After having done that I continue on with the
								next stage:{" "}
							</p>
						</div>
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={3}>
				<div>
					<Image
						src="/coding.jpg"
						alt="Vercel Logo"
						className=""
						width={400}
						height={400}
						priority
					/>
				</div>
			</ParallaxLayer>
		</Parallax>
	);
}

const CardComponent = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<a
			href="ggl.com"
			className="group rounded-lg border border-transparent py-4 px-6 transition-colors  hover:border-gray-300  "
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={` text-3xl text-left  text-[#C2CAD1]`}>
				<span className="font-clash ">{name} </span>
				<span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-bold font-inter ">
					-&gt;
				</span>
			</h2>
			<p
				className={`m-0 max-w-[30ch] text-left text-[1.1em] opacity-50 font-bold text-[#81899B]`}
			>
				{desc}
			</p>
		</a>
	);
};

const TextScrollItem = ({
	pa,
	revealSize,
}: {
	pa: string;
	revealSize: number;
}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const revealOnScroll = () => {
			const revealHeight = revealSize;
			if (
				window.scrollY >= revealHeight &&
				window.scrollY <= revealHeight + 400
			) {
				if (ref.current) ref.current.style.opacity = "1";
			} else {
				if (ref.current) ref.current.style.opacity = "0";
			}
		};

		window.addEventListener("scroll", revealOnScroll);
		return () => {
			window.removeEventListener("scroll", revealOnScroll);
		};
	}, []);

	return (
		<div
			className="opacity-0 transition-opacity duration-500 sticky top-1/2 left-1/2 text-center -translate-y-1/2 text-[7em] font-clash text-[#C2CAD1]"
			ref={ref}
		>
			{pa}
		</div>
	);
};
