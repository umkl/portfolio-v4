"use client";
import React, { useEffect, useRef } from "react";

// Custom hook for parallax effect
// Custom hook for spring-like parallax effect
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

// ParallaxComponent using useParallax
const ParallaxComponent = () => {
	const textRef = useParallax(2); // Adjust the speed for desired parallax effect

	return (
		<div className="flex h-[2000px]">
			<div className="max-w-[400px] text-right">
				<h1 className="font-clash text-3xl text-right">#1 Sketching</h1>
				<p className="font-inter text-md text-right text-[#C2CAD1]">
					the first stage of creating things is always thinking. In this area I
					like to capture my thoughts using a notepad in an oldschool fashion.
					After having done that I continue on with the next stage:{" "}
				</p>
			</div>
			<div className="max-w-[400px] text-right" ref={textRef}>
				<h1 className="font-clash text-3xl text-right">#1 Sketching</h1>
				<p className="font-inter text-md text-right text-[#C2CAD1]">
					the first stage of creating things is always thinking. In this area I
					like to capture my thoughts using a notepad in an oldschool fashion.
					After having done that I continue on with the next stage:{" "}
				</p>
			</div>
			<div className="w-full p-[50px]">
				{/* Your Image component goes here */}
			</div>
		</div>
	);
};

export default ParallaxComponent;
