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
				ease: "power1.out",
			});
			gsap.from("#logo", {
				delay: 0.7,
				duration: 1,

				ease: "power1.out",
			});
			gsap.from("#pb", {
				delay: 0.7,
				duration: 1,

				ease: "power1.out",
			});
			gsap.to("#cards", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				y: 0,
				ease: "power1.out",
			});
			gsap.to(".letter-item", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power1.out",
			});
			gsap.to(".card-comp-item", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power1.easeIn",
			});
			gsap.to("#center-text-2", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power1.out",
			});
			gsap.to("#center-text-3", {
				opacity: 1,
				delay: 0.7,
				duration: 1,
				top: 0,
				ease: "power1.out",
			});
		});
		return ctxt.clear();
	}, []);

	return (
		<section className="min-h-[100vh] w-full overflow-hidden relative ">
			<style jsx>{`
				@media (max-width: 375px) {
					section {
						width: 375px;
					}
				}
			`}</style>
			<div className="-z-10 landing-bg h-full w-full absolute">
				<div className="h-full w-full bg-[#333333]/90"></div>
			</div>
			<main className="flex min-h-screen flex-col items-center justify-between p-6  px-0 sm:px-4 md:px-10  max-w-screen overflow-hidden z-30">
				<div className="mt-0 max-w-5xl z-30 px-4 sm:p-4 md:px-0 w-full items-center justify-between font-mono text-sm flex md:mt-10 ">
					<Image
						id="logo"
						style={{ opacity: 1 }}
						src="/logo.svg"
						alt="um logo"
						className="w-[80px] md:w-[100px]"
						width={100}
						height={100}
						priority
					/>

					<Image
						id="pb"
						style={{ opacity: 1 }}
						src="/pb-layered.png"
						alt="Vercel Logo"
						className="w-[80px] md:w-[100px] z-30"
						unoptimized={true}
						width={100}
						height={100}
					/>
				</div>
				<div
					ref={ref}
					style={{ opacity: 0 }}
					className="relative flex flex-col w-full max-w-5xl pl-4 md:px-0 md:pr-2 mt-4 lg:mt-0 mb-7 z-30"
				>
					<h1 className="text-left  relative font-inter leading-[1.0rem] pb-1 pt-1  sm:mt-0 text-[1.3rem] sm:text-[1.9rem] sm:leading-10  md:text-[1.4rem] lg:text-[1.8rem] inline-block w-[fit-content] bg-clip-text text-transparent bg-gradient-to-r  from-[#a8c3c3] to-[#6f8798] font-inter font-extrabold ">
						Hi, my Name is
					</h1>
					<h2 className="font-clash text-[2.1rem] sm:text-[3.4rem] lg:text-[5rem] leading-[2.2rem] lg:leading-[4.8rem] sm:leading-[4rem] font-[700] text-[#C2CAD1] relative mt-2">
						<span className="letter-item relative top-[5px]">M</span>
						<span className="letter-item relative top-[10px]">i</span>
						<span className="letter-item relative top-[15px]">c</span>
						<span className="letter-item relative top-[20px]">h</span>
						<span className="letter-item relative top-[25px]">a</span>
						<span className="letter-item relative top-[30px]">e</span>
						<span className="letter-item relative top-[35px]">l</span>
						<span className="letter-item relative top-[40px]"> </span>
						<span className="letter-item relative top-[45px]">U</span>
						<span className="letter-item relative top-[50px]">n</span>
						<span className="letter-item relative top-[55px]">g</span>
						<span className="letter-item relative top-[60px]">a</span>
						<span className="letter-item relative top-[65px]">r</span>
						<span className="letter-item relative top-[70px]">.</span>
					</h2>
					<h3 className="font-inter font-bold mt-0 md:mt-2 text-[1.2rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] text-[#81899B] overflow-hidden relative">
						<span id="center-text-2" className="relative leading-[1.5rem]">
							Frontend Web Developer and Web UI/UX Designer from Austria.{" "}
						</span>
					</h3>
					<h4 className="font-inter font-medium text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.8rem] text-[#797c82] mt-0 lg:mt-2 ">
						<span id="center-text-3" className="relative top-[100px]">
							I focus on all things <b>web</b> and <b>design</b> related. With
							my work I aim to deliver <b>impactful experiences</b> so digital
							spaces become more <b>interesting</b>.
						</span>
					</h4>
				</div>
				<div
					id="cards"
					style={{ opacity: 0, transform: "translate(0px, 20px)" }}
					className=" grid gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-32 lg:grid-cols-4 lg:text-left lg:gap-4 w-full z-30"
				>
					<CardComponent
						tap={() => {
							// navCxt.work!.current?.scrollIntoView();
							router.push("/services");
						}}
						classname="top-[1em] card-comp-item relative"
						dest="services"
						name="Services"
						desc={
							<>
								Explore the <b>services</b> I can provide to assist you.
							</>
						}
					/>

					<CardComponent
						tap={() => {
							// navCxt.projects!.current?.scrollIntoView();
							router.push("/projects");
						}}
						dest="projects"
						name="Projects"
						classname="top-[1.9em] card-comp-item relative"
						desc="Check out what things I was already able to create."
					/>
					<CardComponent
						tap={() => {
							// navCxt.experience!.current?.scrollIntoView();
							window.location.replace("https://blog.ungarmichael.me");
						}}
						dest="blog"
						classname="top-[2.4em] card-comp-item relative"
						name="Blog"
						desc="Read some of my thoughts on Productivity, Coding and UI/UX-Design."
					/>
					<CardComponent
						tap={() => {
							router.push("/contact");
						}}
						dest="contact"
						name="Contact"
						classname="top-[3.4em] card-comp-item relative"
						desc="Let us get in touch for creating awesome projects!"
					/>
				</div>
				<div className="absolute h-8 md:h-20 z-20  w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-[#333333]"></div>
				<div className="absolute h-8 md:h-20 z-20 w-full top-0 left-0 bg-gradient-to-b from-[#333333] to-transparent"></div>
				<div className="absolute w-8 md:w-20 z-20 h-full top-0 left-0 bg-gradient-to-r from-[#333333] to-transparent"></div>
				<div className="absolute w-8 md:w-20 z-20 h-full top-0 right-0 bg-gradient-to-l from-[#333333] to-transparent"></div>
			</main>
		</section>
	);
};

export default Landing;
