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

export default function Home() {
	return (
		<Curve>
			<Landing />
		</Curve>
	);
}
