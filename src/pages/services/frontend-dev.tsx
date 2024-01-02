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
		gsap.to("#arrow-pointing-1", {
			delay: 1.4,
			duration: 0.8,
			marginTop: "80px",
			repeat: -1,
		});
		gsap.to("#arrow-pointing-2", {
			delay: 1.5,
			duration: 0.8,
			marginTop: "80px",
			repeat: -1,
		});
		gsap.to("#arrow-pointing-3", {
			delay: 1.6,
			duration: 0.8,
			marginTop: "80px",
			repeat: -1,
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
			<div className="flex flex-col min-h-screen font-clash ">
				<GoBack to="/services" />
				<div className="relative">
					<span
						id="head-i-1"
						style={{ opacity: 0 }}
						className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 font-outline-1 text-transparent -z-10"
					>
						frontend development
					</span>
					<span
						id="head-i-2"
						style={{ opacity: 0 }}
						className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 font-outline-1 text-transparent -z-20"
					>
						frontend development
					</span>
					<span
						id="head-i-3"
						style={{ opacity: 0 }}
						className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 font-outline-1 text-transparent -z-30"
					>
						frontend development
					</span>
					<h1 className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] ml-4  uppercase font-bold z-20">
						frontend development
					</h1>
				</div>
				<h2 className="font-clash text-[4em] leading-[1em] mt-2 mb-2 whitespace-wrap uppercase font-normal p-2">
					FROM{" "}
					<span className="font-bold flex-row inline-flex">
						<span>CONCEPT </span>
						<Image
							id="a-concept"
							src="/a-concept.svg"
							alt="adsf"
							className="box-border inline"
							width={70}
							height={70}
						/>
						{"  "}
					</span>
					TO{" "}
					<span className="font-bold flex-row inline-flex">
						<span>REALITY </span>
						<Image
							id="a-sun"
							src="/a-sun.svg"
							alt="adsf"
							className="box-border inline"
							width={70}
							height={70}
						/>{" "}
					</span>
				</h2>
				<p className="font-clash text-[2em] leading-[1em]  mr-8 whitespace-wrap font-medium px-2  text-right flex flex-row justify-end items-end content-end h-[3em]">
					<span className="h-[2em] overflow-hidden inline-block ">
						<Image
							id="arrow-pointing-1"
							src="/arrow-down-icon.svg"
							alt="adsf"
							className="box-border p-4"
							style={{ marginTop: "0px" }}
							width={80}
							height={80}
						/>
					</span>
					<span className="h-[2em] overflow-hidden inline-block ">
						<Image
							id="arrow-pointing-2"
							src="/arrow-down-icon.svg"
							className="box-border p-4"
							alt="adsf"
							style={{ marginTop: "0px" }}
							width={80}
							height={80}
						/>
					</span>
					<span className="h-[2em] overflow-hidden inline-block ">
						<Image
							id="arrow-pointing-3"
							src="/arrow-down-icon.svg"
							className="box-border p-4"
							alt="adsf"
							style={{ marginTop: "0px" }}
							width={80}
							height={80}
						/>
					</span>
					<span className="mb-4">
						Creating everything from static Webpage to server-side
						Webapplications.
					</span>
				</p>

				<Marquee speed={200} pauseOnHover>
					<div
						className="flex flex-nowrap gap-5 mr-5  mb-4"
						onMouseEnter={() => {
							console.log("hover");
							setMarqueeSpeed(199);
						}}
						onMouseLeave={() => {
							setMarqueeSpeed(200);
						}}
					>
						<img
							src="/project-imgs/ballkarten-project-1866x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
						<img
							src="/project-imgs/charge-project-3266x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
						<img
							src="/project-imgs/deets-project-3266x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
						<img
							src="/project-imgs/filliStudio-project-3266x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
						<img
							src="/project-imgs/heed-project-3266x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
						<img
							src="/project-imgs/octagon-project-1866x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
						<img
							src="/project-imgs/synopsis-project-2100x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
						<img
							src="/project-imgs/wbyt_web-project-1866x1400.png"
							alt="afasd"
							className="h-[500px]"
						/>
					</div>
				</Marquee>
				<hr />
				<h3 className="font-clash  font-bold uppercase text-center">
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
				</div>

				<hr />
				<h3
					className="font-clash h-[5rem] text-[3rem] font-bold uppercase italic flex items-center gap-5 px-5 bg-white  fixed w-screen bottom-0 left-0 right-0 "
					onClick={(e) => {
						Array.from((e.target as any).children).forEach((child: any) => {
							child.classList.add("underline");
						});
						router.push("/contact");
					}}
					onMouseEnter={() => {}}
				>
					<span className=" shrink-0  text-[#333]">Want to collaborate?</span>
					<div className="h-[10px] flex-1 bg-[#333]"></div>
					<button className="uppercase shrink-0 appearance-none text-[#333] hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 ">
						contact me
					</button>
				</h3>
				<hr />

				<div className="flex-1 w-full"></div>
				<UmFooter />
				<div className="h-[5rem]"></div>
			</div>
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
