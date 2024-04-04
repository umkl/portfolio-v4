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
import { useRouter } from "next/router";
import { LangPopup } from "@um-p4/components/lang-popup";

export default function Home() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Ungar Michael ✹ Creative App Development</title>
				<meta name="title" content="Michael Ungar" />
				<meta name="description" content="Creative App Development" />
				<meta property="og:url" content="https://ungarmichael.me" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Ungar Michael" />
				<meta property="og:description" content="Creative App Development" />
				<meta
					property="og:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ungarmichael.me" />
				<meta property="twitter:url" content="https://ungarmichael.me" />
				<meta name="twitter:title" content="Ungar Michael" />
				<meta name="twitter:description" content="Creative App Development" />
				<meta
					name="twitter:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="theme-color" content="#333333"></meta>
			</Head>
			<Curve>
				<Landing />
			</Curve>
		</>
	);
}
