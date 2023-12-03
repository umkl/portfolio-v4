"use client";
import Image from "next/image";
import {
	createContext,
	useEffect,
	useRef,
	useState,
	RefObject,
	Ref,
} from "react";
import WorkSection from "@um-p4/components/workSection";
import Landing from "@um-p4/components/landing";
import ExperienceSection from "@um-p4/components/experienceSection";
import ProjectsSection from "@um-p4/components/projectsSection";
import ContactSection from "@um-p4/components/contact";
import { NavContext } from "./navcontext";

export default function Home() {
	const workSection = useRef<HTMLElement>(null);
	const experienceSection = useRef<HTMLElement>(null);
	const projectsSection = useRef<HTMLElement>(null);
	const contactSection = useRef<HTMLElement>(null);

	return (
		<NavContext.Provider
			value={{
				work: workSection,
				experience: experienceSection,
				projects: projectsSection,
				contact: contactSection,
			}}
		>
			<Landing />
			<WorkSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</NavContext.Provider>
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
