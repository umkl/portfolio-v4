"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
	const ob1 = useRef(null);
	const ob2 = useRef<any>(null);
	const app = useRef<any>(null);

	useLayoutEffect(() => {
		// -- ANIMATION CODE HERE --
		const ctx = gsap.context(() => {
			gsap.registerPlugin(ScrollTrigger);
			var tl = gsap.timeline({
				defaults: { duration: 1 },
				scrollTrigger: {
					trigger: ob1.current,
					start: "top top",
					end: "3000 bottom",
					scrub: true,
					pin: true,
					onUpdate: (self) => {
						console.log(Math.ceil(self.progress * 100));
					},
				},
			});
		}, app);
	}, []); // <- empty dependency Array so it doesn't re-run on every render!

	return (
		<div ref={app} className="App h-full w-full bg-red-200">
			<div className="h-full relative  w-full bg-red-300" ref={ob1}>
				selector
			</div>
			<div className=" relative h-full w-full bg-red-500 " ref={ob2}>
				Ref
			</div>
		</div>
	);
}
