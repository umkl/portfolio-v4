import Curve from "@um-p4/components/Curve";
import UmFooter from "@um-p4/components/UmFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { GoBack } from "../services";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslations } from "next-intl";

const Page = () => {
	const [marqueeSpeed, setMarqueeSpeed] = useState(200);
	useEffect(() => {
		gsap.to("#head-i-1", {
			delay: 1.1,
			opacity: 1,
			marginTop: "10px",
		});
		gsap.to("#head-i-2", {
			delay: 1.3,
			opacity: 1,
			marginTop: "20px",
		});
		gsap.to("#head-i-3", {
			delay: 1.5,
			opacity: 1,

			marginTop: "30px",
		});
		gsap
			.timeline({ repeatDelay: 2.3, delay: 1.3, repeat: -1 })
			.to("#arrow-pointing-1", {
				duration: 2,
				marginTop: "100%",
			})
			.to("#arrow-pointing-1", {
				duration: 0.6,
				marginTop: "0%",
			});

		gsap
			.timeline({ repeatDelay: 2, delay: 1.5, repeat: -1 })
			.to("#arrow-pointing-2", {
				duration: 1.5,
				marginTop: "100%",
			})
			.to("#arrow-pointing-2", {
				duration: 0.6,
				marginTop: "0%",
			});
	}, []);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from("#a-sun", {
				scale: 0,
				delay: 1.3,
				rotate: 360,
			});
			gsap.from("#a-concept", {
				scale: 0,
				delay: 1.3,
				rotate: 360,
			});
		});
		return () => ctx.revert();
	}, []);
	const router = useRouter();
	const t = useTranslations("Backend");
	const a = useTranslations();
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Ungar Michael ✹ Creative App Development</title>
				<meta name="title" content="Michael Ungar - Services" />
				<meta name="description" content="Creative App Development" />
				<meta property="og:url" content="https://ungarmichael.me" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Ungar Michael - Backend Development"
				/>
				<meta property="og:description" content="Creative App Development" />
				<meta
					property="og:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ungarmichael.me" />
				<meta property="twitter:url" content="https://ungarmichael.me" />
				<meta
					name="twitter:title"
					content="Ungar Michael - Backend Development"
				/>
				<meta name="twitter:description" content="Creative App Development" />
				<meta
					name="twitter:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="theme-color" content="#333333"></meta>
			</Head>
			<Curve>
				<section className="bg-ne-700">
					<style jsx>{`
						@media (max-width: 375px) {
							section {
								width: 375px;
							}
						}
					`}</style>
					<div className="flex flex-col min-h-screen font-clash text-ne-200">
						<GoBack to="/services" />

						<div className="flex flex-row justify-center mb-4 gap-20">
							<Image
								id="frontend-logo-left"
								style={{ opacity: 1 }}
								src={"/service-icons/icon-frontend-dev.svg"}
								alt=""
								className="w-[70px] sm:w-[100px] lg:w-[240px] mt-2 -mr-2 sm:mr-4"
								width={20}
								height={20}
								priority
							/>
						</div>
						<div className="flex flex-row justify-center">
							<Image
								id="frontend-logo-left"
								style={{ opacity: 1 }}
								src={"/service-icons/icon-frontend-dev.svg"}
								alt=""
								className="w-[70px] sm:w-[100px] lg:w-[240px] mt-8 mb-2 -mr-2 sm:mr-0 rotate-[-45deg] shrink-0"
								width={20}
								height={20}
								priority
							/>
							<div className="relative z-50 text-ne-200 xl:mt-10 xl:mx-20">
								<span
									id="head-i-1"
									style={{ opacity: 0 }}
									className="text-[2em]  sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] m-0 uppercase font-bold absolute top-0 left-2 font-outline-1-gray text-transparent -z-10 w-full"
								>
									{t("Backend Development")}
								</span>
								<span
									id="head-i-2"
									style={{ opacity: 0 }}
									className="text-[2em] sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] m-0 uppercase font-bold absolute top-0 left-2 font-outline-1-gray text-transparent -z-20 w-full"
								>
									{t("Backend Development")}
								</span>
								<span
									id="head-i-3"
									style={{ opacity: 0 }}
									className="text-[2em] sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] m-0 uppercase font-bold absolute top-0 left-2 font-outline-1-gray text-transparent -z-30 w-full"
								>
									{t("Backend Development")}
								</span>
								<h1 className="text-[2em] sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] ml-4  uppercase font-bold z-20">
									{t("Backend Development")}
								</h1>
							</div>
							<Image
								id="frontend-logo-right"
								style={{ opacity: 1 }}
								src={"/service-icons/icon-frontend-dev.svg"}
								alt=""
								className="w-[70px] sm:w-[100px] lg:w-[240px] mt-8 mb-2  sm:ml-4 ml-0 stroke-white rotate-[45deg] shrink-0"
								width={20}
								height={20}
								priority
							/>
						</div>
						<h2 className="font-clash text-[1.2rem] sm:text-[2rem] lg:text-[4rem] leading-[2rem] sm:leading-[2.7rem] md:leading-[4rem] mt-[1rem]  whitespace-wrap uppercase font-normal p-2 w-full text-center uppercase ">
							{a("from")}{" "}
							<span className="font-bold flex-row inline-flex">
								<span>{t("Concept")}</span>
								<Image
									id="a-concept"
									src="/a-concept.svg"
									alt="adsf"
									className="box-border inline w-[20px] sm:w-[40px] lg:w-[70px]"
									width={70}
									height={70}
								/>
								{"  "}
							</span>
							<br className="md:hidden" />
							{a("to")}{" "}
							<span className="font-bold flex-row inline-flex">
								<span>{t("Reality")} </span>
								<Image
									id="a-sun"
									src="/a-sun.svg"
									alt="adsf"
									className="box-border inline w-[20px] sm:w-[40px] lg:w-[70px] animate-spin duration-1000"
									width={70}
									height={70}
								/>{" "}
							</span>
						</h2>
						<span className="text-[0.9rem] sm:text-[1.3rem] md:text-[1.3rem] lg:hidden shrink-0 mb-2 text-center mt-[80px]">
							{t("punch-line")}
						</span>
						<div className="flex flex-row max-w-[1800px] mx-auto sm:mt-10 justify-end items-end">
							<span className=" max-h-[80px] overflow-hidden inline-block relative shrink-0">
								<Image
									id="arrow-pointing-1"
									src="/arrow-down-icon.svg"
									alt="adsf"
									className="box-border p-4 w-[60px] "
									style={{ marginTop: "0%" }}
									width={80}
									height={80}
								/>
							</span>
							<span className=" max-h-[80px] overflow-hidden inline-block relative shrink-0">
								<Image
									id="arrow-pointing-2"
									src="/arrow-down-icon.svg"
									alt="adsf"
									className="box-border p-4 w-[70px]"
									style={{ marginTop: "0%" }}
									width={80}
									height={80}
								/>
							</span>
							<span className="text-[1.5rem] shrink-0 mb-2 hidden lg:block">
								{t("punch-line")}
							</span>
							<span className=" max-h-[80px] overflow-hidden inline-block relative shrink-0">
								<Image
									id="arrow-pointing-2"
									src="/arrow-down-icon.svg"
									alt="adsf"
									className="box-border p-4 w-[60px]"
									style={{ marginTop: "0%" }}
									width={80}
									height={80}
								/>
							</span>
							<span className=" max-h-[80px] overflow-hidden inline-block relative shrink-0">
								<Image
									id="arrow-pointing-1"
									src="/arrow-down-icon.svg"
									alt="adsf"
									className="box-border p-4 w-[80px]"
									style={{ marginTop: "0%" }}
									width={80}
									height={80}
								/>
							</span>
						</div>

						<Marquee speed={600} pauseOnHover>
							<div
								className="flex flex-nowrap   mb-4"
								onMouseEnter={() => {
									setMarqueeSpeed(199);
								}}
								onMouseLeave={() => {
									setMarqueeSpeed(200);
								}}
							>
								<img
									src="/project-imgs/ballkarten-project-1866x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
								<img
									src="/project-imgs/charge-project-3266x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
								<img
									src="/project-imgs/deets-project-3266x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
								<img
									src="/project-imgs/filliStudio-project-3266x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
								<img
									src="/project-imgs/heed-project-3266x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
								<img
									src="/project-imgs/octagon-project-1866x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
								<img
									src="/project-imgs/synopsis-project-2100x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
								<img
									src="/project-imgs/wbyt_web-project-1866x1400.png"
									alt="afasd"
									className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
								/>
							</div>
						</Marquee>

						<section className="max-w-[1500px] w-full mx-auto px-4 mb-40">
							<h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[2rem] sm:leading-[4rem] mb-2 mt-4">
								{t("heading-1")}
							</h1>
							<p className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem]">
								{t("text-1")}
							</p>
							<h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[2rem] sm:leading-[4rem] mb-2 mt-4">
								{t("heading-2")}
							</h1>
							<p className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem]">
								{t("text-2")}
							</p>
						</section>
						<UmFooter />
					</div>
				</section>
			</Curve>
		</>
	);
};

export default Page;

const ImageComponent = ({
	src,
	alt,
	commonHeight,
}: {
	src: any;
	alt: any;
	commonHeight: any;
}) => {
	return (
		<div
			style={{ width: "fit-content", height: "500px", position: "relative" }}
		>
			<Image src={src} alt={alt} fill />
		</div>
	);
};

export async function getStaticProps(context: any) {
	return {
		props: {
			messages: (await import(`../../messages/${context.locale}.json`)).default,
		},
	};
}
