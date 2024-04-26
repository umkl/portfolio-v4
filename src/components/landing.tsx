"use client";
import { RefObject, useContext, useEffect, useRef } from "react";
import CardComponent from "./card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { SizeLimiter } from "./Style/size-limiter";

const Landing = () => {
	const router = useRouter();
	const ref = useRef(null);
	const t = useTranslations("Landing");

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
		<>
			<section className="min-h-screen w-full overflow-hidden relative">
				<SizeLimiter />
				<BackgroundImage />

				<main className="flex min-h-screen flex-col items-center justify-between p-6 pb-[10vh] px-2 sm:px-4 md:px-10  max-w-screen overflow-hidden z-30">
					<div
						aria-hidden="true"
						className="mt-0 max-w-[1000px] z-30 px-4 sm:p-4 md:px-0 w-full items-center justify-between font-mono text-sm flex md:mt-10 "
					>
						<Image
							id="logo"
							style={{ opacity: 1 }}
							src="./svgs/logo.svg"
							alt="um logo"
							className="w-[80px] md:w-[100px]"
							width={100}
							height={100}
							priority
						/>
						<Image
							id="pb"
							style={{ opacity: 1 }}
							src="images/pb-layered.png"
							alt="Vercel Logo"
							className="w-[80px] md:w-[100px] mr-2 sm:mr-0 z-30"
							unoptimized={true}
							width={100}
							height={100}
						/>
					</div>
					<div
						ref={ref}
						style={{ opacity: 0 }}
						className="relative flex flex-col w-full max-w-[1000px] pl-6 md:px-0 md:pr-2 mt-4 lg:mt-0 mb-7 z-30"
					>
						<h1
							aria-hidden="true"
							className="text-left  relative font-inter leading-[1.0rem] sm:leading-0  pb-1 pt-1  sm:mt-0 text-[1.5rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[1.8rem] inline-block w-[fit-content] bg-clip-text text-transparent bg-gradient-to-r  from-[#a8c3c3] to-[#6f8798] font-inter font-extrabold "
						>
							{t("title")}
						</h1>
						<h1
							aria-hidden="true"
							className="font-clash text-[3.2rem] sm:text-[3.4rem] md:text-[4.6rem] lg:text-[5rem] leading-[3.2rem] lg:leading-[4.8rem] xl:leading-[5.4rem] sm:leading-[4rem] font-[700] text-ne-200/80 relative mt-2 "
						>
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
						</h1>
						<h2 className="font-inter font-bold mt-0 md:mt-2 text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]  text-[#81899B] overflow-hidden relative">
							<span id="center-text-2" className="relative leading-[1.5rem]">
								<u className="underline-offset-[0.38rem]">
									{t("App_Developer")}
								</u>{" "}
								{t("and")}{" "}
								<u className="underline-offset-[0.38rem]">UI/UX Designer</u>{" "}
								<br className="sm:hidden" />
								{t("from")}{" "}
								<u className="underline-offset-[0.38rem]">{t("Austria")}.</u>{" "}
							</span>
						</h2>
						<h3 className="font-inter font-medium text-[1.4rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] text-[#797c82] mt-2 lg:mt-2 ">
							<span id="center-text-3" className="relative top-[100px]">
								{t.rich("Big_Description", {
									b: (chunks) => <b className="font-bold">{chunks}</b>,
								})}
							</span>
						</h3>
					</div>
					<div className="w-full flex flex-col items-center mt-8 mb-2">
						<div
							id="cards"
							style={{ opacity: 0, transform: "translate(0px, 20px)" }}
							className=" grid gap-4 text-center w-full z-30 mb-14 px-4 sm:px-0  relative lg:max-w-[1000px] lg:w-full lg:mb-32 lg:grid-cols-4 lg:text-left lg:gap-4 "
						>
							<CardComponent
								tap={() => {
									router.push("/services");
								}}
								classname="top-[1em] card-comp-item"
								dest="services"
								name={t("Services")}
								desc={t("Services_Text")}
							/>
							<CardComponent
								tap={() => {
									router.push("/projects");
								}}
								classname="top-[1.9em] card-comp-item"
								dest="projects"
								name={t("Projects")}
								desc={t("Projects_Text")}
							/>
							<CardComponent
								tap={() => {
									window.location.replace("https://blog.ungarmichael.me");
								}}
								classname="top-[2.4em] card-comp-item"
								dest="blog"
								name={t("Blog")}
								desc={t("Blog_Text")}
							/>
							<CardComponent
								tap={() => {
									router.push("/contact");
								}}
								classname="top-[3.4em] card-comp-item"
								dest="contact"
								name={t("Contact")}
								desc={t("Contact_Text")}
							/>
						</div>
					</div>
					<BlurIn />
				</main>
			</section>
		</>
	);
};

const BackgroundImage = () => {
	return (
		<div className="-z-10 h-full w-full absolute landing-bg">
			<div className="h-full w-full bg-[#333333]/80 "></div>
		</div>
	);
};

const BlurIn = () => {
	return (
		<>
			<div
				aria-hidden="true"
				className="absolute h-8 md:h-20 z-20 w-full bottom-0 left-0 bg-gradient-to-t from-[#333333]"
			></div>
			<div
				aria-hidden="true"
				className="absolute h-8 md:h-20 z-20 w-full top-0 left-0 bg-gradient-to-b  from-[#333333] to-transparent"
			></div>
			<div
				aria-hidden="true"
				className="absolute w-8 md:w-20 z-20 h-full top-0 left-0 bg-gradient-to-r from-[#333333] to-transparent"
			></div>
			<div
				aria-hidden="true"
				className="absolute w-8 md:w-20 z-20 h-full top-0 right-0 bg-gradient-to-l from-[#333333] to-transparent"
			></div>
		</>
	);
};

export default Landing;
