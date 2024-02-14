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
import WorkSection from "@um-p4/pages/services";
import Landing from "@um-p4/components/landing";
import Curve from "@um-p4/components/Curve";
import ExperienceSection from "@um-p4/components/experienceSection";
import ProjectsSection from "@um-p4/components/projectsSection";

import { NavContext } from "../navcontext";
import { Metadata } from "next";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ungar Michael - Freelance App Developer & UI/UX Designer</title>
				<meta
					name="description"
					content="Landing Page to present conducted projects in App Development, UI/UX Design and Website Coding."
					key="desc"
				/>
				<meta
					property="og:title"
					content="Ungar Michael - Freelance App Developer & UI/UX Designer"
				/>
				<meta
					property="og:description"
					content="Landing Page to present conducted projects in App Development, UI/UX Design and Website Coding."
				/>
				<meta property="og:image" content="/banner.png" />
			</Head>
			<Curve>
				<Landing />
			</Curve>
		</>
	);
}

export const metadata: Metadata = {
	title: {
		template: "%s | Acme Dashboard",
		default: "Acme Dashboard",
	},
	description: "The official Next.js Learn Dashboard built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};
