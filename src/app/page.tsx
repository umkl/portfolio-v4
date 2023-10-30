"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
	return (
		<div className="snap-mandatory">
			<main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
				<div className="absolute h-20  w-full top-0 left-0 bg-gradient-to-b from-[#333333] to-transparent"></div>
				<div className="absolute w-20  h-full top-0 left-0 bg-gradient-to-r from-[#333333] to-transparent"></div>
				<div className="absolute w-20  h-full top-0 right-0 bg-gradient-to-l from-[#333333] to-transparent"></div>
				<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
					<Image
						src="/logo.svg"
						alt="Vercel Logo"
						className=""
						width={80}
						height={80}
						priority
					/>
				</div>

				<div
					className=" relative flex flex-col w-full max-w-5xl before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial  before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
			before:dark:to-[#95B8D1]-700 before:dark:opacity-10
			after:from-[#95B8D1] after:dark:via-[#95B8D1] after:dark:opacity-40
			before:lg:h-[360px] after:absolute after:-z-20 after:h-[180px] after:w-[240px]
			after:translate-x-1/3 after:bg-gradient-conic 
			after:via-[#95B8D1]-200 after:blur-2xl after:content-[''] z-[-1]"
				>
					{/* <Image	
				className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				src="/next.svg"
				alt="Next.js Logo"
				width={180}
				height={37}
				priority
			/> */}
					<h1 className="text-left font-sora text-2xl text-[#95B8D1]">
						Hallo, mein Name ist
					</h1>
					<h1 className="font-clash text-8xl font-medium text-[#C2CAD1] dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
						Michael Ungar
					</h1>
					<h2 className="font-druk text-4xl text-[#81899B]">
						Developer and Designer from Austria{" "}
					</h2>
					<h3 className="font-sora text-1xl text-[#686C76] mt-4">
						I’m a frontend dev and creator currently working as a freelancer{" "}
						<br></br>
						focused on creating flawless code and magnificent designs.
					</h3>
				</div>
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:gap-4">
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
				<div className="absolute h-20  w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-[#333333]"></div>
			</main>
			<div className="h-[3000px] bg-[#333333]">
				<TextScrollItem pa="Lets take a look at my projects" revealSize={400} />
				<TextScrollItem
					pa="I have been working on them for the past 2 years"
					revealSize={1200}
				/>
				<TextScrollItem pa="Hope you enjoy" revealSize={2400} />
			</div>

			<div
				id="section-1 snap-center"
				className=" h-[4000px] bg-red-200 relative flex items-center flex-col"
			>
				<div className="absolute h-[160px]  w-full top-0 left-0 bg-gradient-to-b from-[#333333] to-transparent"></div>
				<h1 className="w-full text-5xl text-black  font-druk text-center static inline-block mt-[200px]">
					My Work
				</h1>
			</div>

			<div className="h-screen bg-red-200">
				<h1>Experiences</h1>
				<div className="flex left-1/2 -translate-x-1/2 max-w-5xl bg-red-500 relative">
					<div className="h-44 bg-white w-5"></div>
					<div>aksldfjl</div>
				</div>
			</div>
			<div className="h-screen bg-slate-300">
				<h1>Projects</h1>
			</div>
		</div>
	);
}

const CardComponent = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<a
			href="ggl.com"
			className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300  "
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={` text-2xl font-clash text-[#C2CAD1]`}>
				{name}{" "}
				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
					-&gt;
				</span>
			</h2>
			<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-[#81899B]`}>
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
