"use client";
import { RefObject, useContext, useEffect, useRef } from "react";
import CardComponent from "./card";
import Image from "next/image";
import { NavContext } from "@um-p4/navcontext";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const Landing = () => {
	const navCxt = useContext(NavContext);
	const router = useRouter();
	const ref = useRef(null);

	useEffect(() => {
		let ctxt = gsap.context(() => {
			gsap.to(ref.current, {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				y: 20,
				ease: "power2.inOut",
			});
			gsap.to("#logo", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				y: 20,
				ease: "power2.inOut",
			});
			gsap.to("#pb", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				y: 20,
				ease: "power2.inOut",
			});
			gsap.to("#cards", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				y: 0,
				ease: "power2.inOut",
			});
			gsap.to(".letter-item", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power2.inOut",
			});
			gsap.to(".card-comp-item", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power2.inOut",
			});
			gsap.to("#center-text-2", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power2.inOut",
			});
			gsap.to("#center-text-3", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power2.inOut",
			});
		});
		return ctxt.clear();
	}, []);

	return (
		<section className="min-h-[100vh] w-full overflow-hidden landing-bg">
			<main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24  max-w-screen overflow-hidden ">
				<div className=" max-w-5xl w-full items-center justify-between font-mono text-sm flex md:mt-20">
					<Image
						id="logo"
						style={{ opacity: 0 }}
						src="/logo.svg"
						alt="um logo"
						width={80}
						height={80}
						priority
					/>
					<Image
						id="pb"
						src="/myself.png"
						alt="Vercel Logo"
						style={{ opacity: 0 }}
						className=""
						unoptimized={true}
						width={80}
						height={80}
					/>
				</div>
				<div
					ref={ref}
					style={{ opacity: 0 }}
					className="relative flex flex-col w-full max-w-5xl mt-3 lg:mt-0 mb-7"
				>
					<h1 className="text-left font-sora font-bold text-[1.23em] text-[#95B8D1]">
						Hi, my Name is
					</h1>
					<h2 className="font-clash text-[2.7em] lg:text-8xl leading-10 font-[700] text-[#C2CAD1] overflow-hidden drop-shadow-[0_0_0.3rem_#ffffff70] relative">
						<span className="letter-item relative top-1">M</span>
						<span className="letter-item relative top-2">i</span>
						<span className="letter-item relative top-3">c</span>
						<span className="letter-item relative top-4">h</span>
						<span className="letter-item relative top-5">a</span>
						<span className="letter-item relative top-6">e</span>
						<span className="letter-item relative top-7">l</span>
						<span className="letter-item relative top-8"> </span>
						<span className="letter-item relative top-9">U</span>
						<span className="letter-item relative top-10">n</span>
						<span className="letter-item relative top-11">g</span>
						<span className="letter-item relative top-12">a</span>
						<span className="letter-item relative top-14">r</span>
						<span className="letter-item relative top-16">.</span>
					</h2>
					<h3 className="font-inter font-bold text-[1.2em] lg:text-4xl text-[#81899B] overflow-hidden relative">
						<span id="center-text-2" className="relative top-[100px]">
							Developer and Designer from Austria.{" "}
						</span>
					</h3>
					<h4 className="font-sora text-[1em] text-[#686C76] mt-0 font-normal lg:mt-4">
						<span id="center-text-3" className="relative top-[100px]">
							I’m a frontend dev and creator currently active as a freelancer{" "}
							<br></br>
							focused on creating flawless code and magnificent designs.
						</span>
					</h4>
				</div>
				<div
					id="cards"
					style={{ opacity: 0, transform: "translate(0px, 20px)" }}
					className="mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:gap-4  w-full"
				>
					<CardComponent
						tap={() => {
							// navCxt.work!.current?.scrollIntoView();
						}}
						classname="top-10 card-comp-item relative"
						dest="work"
						name="Work"
						desc="Find out what kind of work I do and how I go about creating new projects."
					/>
					<CardComponent
						tap={() => {
							// navCxt.experience!.current?.scrollIntoView();
						}}
						dest="experience"
						classname="top-20 card-comp-item relative"
						name="XPs"
						desc="Explore what kind of experiences I was already able to make."
					/>
					<CardComponent
						tap={() => {
							// navCxt.projects!.current?.scrollIntoView();
						}}
						dest="projects"
						name="Projects"
						classname="top-30 card-comp-item relative"
						desc="Discover some of my projects where I was able to do things myself."
					/>
					<CardComponent
						tap={() => {
							router.push("/contact");
						}}
						dest="contact"
						name="Contact"
						classname="top-20 card-comp-item relative"
						desc="Get in touch with me :)"
					/>
				</div>
				<div className="absolute h-8 md:h-20  w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-[#333333]"></div>
				<div className="absolute h-8 md:h-20  w-full top-0 left-0 bg-gradient-to-b from-[#333333] to-transparent"></div>
				<div className="absolute w-8 md:w-20  h-full top-0 left-0 bg-gradient-to-r from-[#333333] to-transparent"></div>
				<div className="absolute w-8 md:w-20  h-full top-0 right-0 bg-gradient-to-l from-[#333333] to-transparent"></div>
			</main>
		</section>
	);
};

export default Landing;
