"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import WorkSection from "@um-p4/components/workSection";
import Landing from "@um-p4/components/landing";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExperienceSection from "@um-p4/components/experienceSection";
import ProjectsSection from "@um-p4/components/projectsSection";
import ContactSection from "@um-p4/components/contact";

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
		<>
			<Landing />
			<WorkSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</>
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
