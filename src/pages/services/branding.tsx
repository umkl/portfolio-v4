import Curve from "@um-p4/components/Curve";
import UmFooter from "@um-p4/components/UmFooter";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { GoBack } from "../services";
import { useRouter } from "next/router";

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
	return (
		<Curve>
			<section className="bg-[#222]">
				<style jsx>{`
					@media (max-width: 375px) {
						section {
							width: 375px;
						}
					}
				`}</style>
				<div className="flex flex-col min-h-screen font-clash ">
					<GoBack to="/services" />

					<div className="flex flex-row justify-center mb-4 gap-20">
						<Image
							id="frontend-logo-left"
							style={{ opacity: 1 }}
							src={"/service-icons/icon-branding.svg"}
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
							src={"/service-icons/icon-branding.svg"}
							alt=""
							className="w-[70px] sm:w-[100px] lg:w-[240px] mt-8 mb-2 -mr-2 sm:mr-0 rotate-[-45deg] shrink-0"
							width={20}
							height={20}
							priority
						/>
						<div className="relative z-50 xl:mt-10 xl:mx-20">
							<span
								id="head-i-1"
								style={{ opacity: 0 }}
								className="text-[2em] sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] m-0 uppercase font-bold absolute top-0 left-2 font-outline-1-gray text-transparent -z-10 w-full"
							>
								branding
							</span>
							<span
								id="head-i-2"
								style={{ opacity: 0 }}
								className="text-[2em] sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] m-0 uppercase font-bold absolute top-0 left-2 font-outline-1-gray text-transparent -z-20 w-full"
							>
								branding
							</span>
							<span
								id="head-i-3"
								style={{ opacity: 0 }}
								className="text-[2em] sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] m-0 uppercase font-bold absolute top-0 left-2 font-outline-1-gray text-transparent -z-30 w-full"
							>
								branding
							</span>
							<h1 className="text-[2em] sm:text-[3rem] md:text-[4rem] lg:text-[6em] text-center leading-[1em] ml-4  uppercase font-bold z-20">
								branding
							</h1>
						</div>
						<Image
							id="frontend-logo-right"
							style={{ opacity: 1 }}
							src={"/service-icons/icon-branding.svg"}
							alt=""
							className="w-[70px] sm:w-[100px] lg:w-[240px] mt-8 mb-2  sm:ml-4 ml-0 stroke-white rotate-[45deg] shrink-0"
							width={20}
							height={20}
							priority
						/>
					</div>
					<h2 className="font-clash text-[1.2rem] sm:text-[2rem] lg:text-[4rem] leading-[2rem] sm:leading-[2.7rem] md:leading-[4rem] mt-[1rem]  whitespace-wrap uppercase font-normal p-2 w-full text-center ">
						Giving{" "}
						<span className="font-bold flex-row inline-flex">
							<span>THOUGHTS </span>
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
						An{" "}
						<span className="font-bold flex-row inline-flex">
							<span>Identity </span>
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
						Profiling Concepts from <br className="lg:hidden" />
						<b>Startup</b> to <b>Established Enterprises</b>.
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
							Profiling Concepts from <br className="lg:hidden" />
							<b>Startup</b> to <b>Established Enterprises</b>.
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

					<Marquee speed={200} pauseOnHover>
						<div
							className="flex flex-nowrap gap-5 mr-5  mb-4"
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
							Branding
						</h1>
						<p className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem]">
							My journey in the world of design has been marked by a profound
							interest in the synergy between visual identity and emotional
							connection. Specializing in branding, I recognize the impactful
							role that design choices play in shaping how individuals perceive
							and connect with a brand. This passion is driven by the belief
							that thoughtful branding, blending creativity and strategic
							design, has the power to leave a lasting impression on audiences.
						</p>
						<h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.8rem] sm:leading-[3rem] mb-2 mt-4">
							Authentic Brand Expression
						</h2>
						<p className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem]">
							At the heart of my branding philosophy is a commitment to
							authentic brand expression. By understanding the core values and
							unique identity of a brand, I aim to create visual elements and
							messaging that resonate with the target audience, fostering a
							genuine and memorable connection.
						</p>
						<h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.8rem] sm:leading-[3rem] mb-2 mt-4">
							Consistency and Cohesion
						</h2>
						<p className="text-[1rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem]">
							In my approach to branding, I prioritize consistency and cohesion
							across all touchpoints. Whether in visual aesthetics, messaging,
							or user experience, I strive to ensure that every interaction
							reinforces the brand identity, creating a unified and memorable
							brand experience for the audience.
						</p>
					</section>
					{/* <h3 className="font-clash  font-bold uppercase text-center">
						<span className="text-[1.4em]">//////////////////</span>
						<span className="text-[3em] mx-8">My Toolbox</span>
						<span className="text-[1.4em]">\\\\\\\\\\\\\\\\\</span>
					</h3>
					<div className="max-w-[900px] mx-auto">
						<div className="grid grid-cols-3 gap-3 gap-y-1 p-0 m-0">
							<div className="group h-[300px] w-[300px] hover:bg-white border-4 border-white box-border relative">
								<p className="uppercase  font-bold m-4  absolute bottom-0 right-0 text-white group-hover:text-[#333]">
									ReactJS
								</p>
							</div>
							<div className="group h-[300px] w-[300px] hover:bg-white border-4 border-white box-border relative">
								<p className="uppercase  font-bold m-4  absolute bottom-0 right-0 text-white group-hover:text-[#333]">
									NextJs
								</p>
							</div>
							<div className="group h-[300px] w-[300px] hover:bg-white border-4 border-white box-border relative">
								<p className="uppercase  font-bold m-4  absolute bottom-0 right-0 text-white group-hover:text-[#333]">
									Typescript
								</p>
							</div>
							<div className="group h-[300px] w-[300px] hover:bg-white border-4 border-white box-border relative">
								<p className="uppercase  font-bold m-4  absolute bottom-0 right-0 text-white group-hover:text-[#333]">
									Webflow
								</p>
							</div>
							<div className="group h-[300px] w-[300px] hover:bg-white border-4 border-white box-border relative">
								<p className="uppercase  font-bold m-4  absolute bottom-0 right-0 text-white group-hover:text-[#333]">
									Framer
								</p>
							</div>
							<div className="group h-[300px] w-[300px] hover:bg-white border-4 border-white box-border relative">
								<p className="uppercase  font-bold m-4  absolute bottom-0 right-0 text-white group-hover:text-[#333]">
									GSAP
								</p>
							</div>
						</div>
					</div> */}

					<h3
						className="font-clash h-[2rem] sm:h-[2.6rem] md:h-[3rem] lg:h-[4rem] text-[0.7rem] sm:text-[0.9rem] md:text-[1.3rem] lg:text-[1.7rem] font-bold uppercase italic flex items-center gap-2 bg-white hover:bg-[#333]  fixed w-screen bottom-0 left-0 right-0 group hover:cursor-pointer z-50 px-2"
						onClick={(e) => {
							router.push("/contact");
						}}
					>
						<span className=" shrink-0  text-[#333] group-hover:underline group-hover:underline-offset-8 group-hover:pointer group-hover:text-white">
							Want to collaborate?
						</span>
						<div className="h-[2px] flex-1 bg-[#333] group-hover:pointer group-hover:bg-white"></div>
						<button className=" group-hover:underline group-hover:underline-offset-8 uppercase shrink-0 appearance-none text-[#333] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 group-hover:pointer">
							contact me
						</button>
					</h3>

					<div className="flex-1 w-full"></div>
					<UmFooter />
					<div className="h-[2rem] sm:h-[2.6rem] md:h-[3rem] lg:h-[4rem]"></div>
				</div>
			</section>
		</Curve>
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
