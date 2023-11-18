"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExperienceSection from "@um-p4/components/experienceSection";
import Landing from "@um-p4/components/landing";

export default function Home() {
	// const [onBottom, setOnBottom] = useState(false);
	// const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	// const handleScroll = () => {
	// 	if (scrollContainerRef.current) {
	// 		const scrollPosition = scrollContainerRef.current.scrollTop;
	// 		const height = scrollContainerRef.current.offsetHeight;
	// 	}
	// };
	// const handleScrollX = () => {
	// 	console.log("Horizontal Scroll Position:", window.scrollY);
	// 	console.log(scrollContainerRef.current?.offsetHeight ?? "bye");
	// 	console.log(window.innerHeight);
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScrollX);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScrollX);
	// 	};
	// }, []);
	// useEffect(() => {
	// 	if (scrollContainerRef.current) {
	// 		console.log("registered");
	// 		scrollContainerRef.current.addEventListener("scroll", handleScroll);
	// 	}

	// 	return () => {
	// 		if (scrollContainerRef.current) {
	// 			scrollContainerRef.current.removeEventListener("scroll", handleScroll);
	// 		}
	// 	};
	// }, []);

	return (
		<Parallax pages={5}>
			<ParallaxLayer offset={0} className="z-50">
				<Landing />
			</ParallaxLayer>
			<ParallaxLayer offset={1} className="z-10">
				<div className="h-screen z-10 w-full z- flex justify-center items-center fixed bg-[#333333]"></div>
			</ParallaxLayer>
			<ParallaxLayer offset={2} className="z-10">
				<div className="h-screen z-10 w-full z- flex justify-center items-center fixed bg-[#333333]"></div>
			</ParallaxLayer>
			<ParallaxLayer offset={3} className="z-10">
				<div className="h-screen z-10 w-full z- flex justify-center items-center fixed bg-[#333333]"></div>
			</ParallaxLayer>
			<ParallaxLayer offset={4} className="z-10">
				<div className="h-screen z-10 w-full z- flex justify-center items-center fixed bg-[#333333]"></div>
			</ParallaxLayer>
			<ExperienceSection />
		</Parallax>
	);
}

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
