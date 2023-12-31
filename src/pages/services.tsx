"use client";
import Curve from "@um-p4/components/Curve";
import UmFooter from "@um-p4/components/UmFooter";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { easeInOut } from "framer-motion";

const Work = () => {
	useEffect(() => {
		gsap.to(".marquee_part", {
			xPercent: -100,
			repeat: -1,
			duration: 10,
			ease: "linear",
		});

		gsap.to("#head-i-1", {
			delay: 1.1,

			marginLeft: "1rem",
			marginTop: "1rem",
		});
		gsap.to("#head-i-2", {
			delay: 1.1,

			marginLeft: "2rem",
			marginTop: "2rem",
		});
		gsap.to("#head-i-3", {
			delay: 1.1,

			marginLeft: "3rem",
			marginTop: "3rem",
		});

		gsap.set("#marquee-parent", { xPercent: -50 });
		const duration = 3000;
		const startTime = Date.now();

		const updateSpeed = () => {
			const currentTime = Date.now();
			const elapsed = currentTime - startTime;

			if (elapsed < duration) {
				// Calculate the eased value
				const easedValue = easeInOut(elapsed, 4000, -3600, duration);

				// Update the marquee speed
				setMarqueeSpeed(easedValue);

				// Call the function recursively
				requestAnimationFrame(updateSpeed);
			} else {
				// Ensure the final value is exactly 400
				setMarqueeSpeed(400);
			}
		};
		// Start the animation
		updateSpeed();
	}, []);

	const [selectedItem, setSelectedItem] = useState();
	const [marqueeSpeed, setMarqueeSpeed] = useState(4000);

	const easeInOut = (t: number, b: number, c: number, d: number) => {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};

	return (
		<Curve>
			<section className="font-clash overflow-x-hidden w-full min-h-screen flex flex-col">
				<GoBack />
				<div className="relative">
					<span
						id="head-i-1"
						className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 text-gray-300 -z-10"
					>
						my services
					</span>
					<span
						id="head-i-2"
						className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 text-gray-400 -z-20"
					>
						my services
					</span>
					<span
						id="head-i-3"
						className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] m-0 uppercase font-bold absolute top-0 left-3 text-gray-500 -z-30"
					>
						my services
					</span>
					<h1 className="md:text-[6em] text-[2em] text-center sm:text-left sm:text-[4em] leading-[1em] ml-4  uppercase font-bold z-20">
						my services
					</h1>
				</div>

				<div
					id="marquee-parent"
					className="flex w-full h-[0.6em] flex-row mb-6 text-[1.4em] uppercase font-medium"
				>
					<h1 className="marquee_part  shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part   shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part  shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part  shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
					<h1 className="marquee_part  shrink-0">
						things i am so good at, that i feel like SHARING &nbsp;
					</h1>
				</div>
				<ul className="uppercase flex flex-col justify-start  flex-1 overflow-hidden">
					{[
						{ name: "frontend development", link: "frontend-dev" },
						{ name: "ui/ux design", link: "ui-ux-design" },
						{ name: "branding", link: "branding" },
					].map((x, i) => {
						return (
							<ListItem
								key={i}
								text={x.name}
								link={`services/${x.link}`}
								delay={1.1 + i * 0.1}
							/>
						);
					})}
				</ul>
				<Marquee speed={marqueeSpeed}>
					<div className="flex flex-nowrap gap-5 mr-5 my-7">
						<img
							src="/work-1.png"
							alt="asdlkfj"
							className="h-[400px] md:h-[600px]"
						/>
					</div>
					<div className="flex flex-nowrap gap-5 mr-5 my-7">
						<img
							src="/work-2.png"
							alt="asdlkfj"
							className="h-[400px] md:h-[600px]"
						/>
					</div>
					<div className="flex flex-nowrap gap-5 mr-5 my-7">
						<img
							src="/work-3.png"
							alt="asdlkfj"
							className="h-[400px] md:h-[600px]"
						/>
					</div>
					<div className="flex flex-nowrap gap-5 mr-5 my-7">
						<img
							src="/work-4.png"
							alt="asdlkfj"
							className="h-[400px] md:h-[600px]"
						/>
					</div>
				</Marquee>
				<UmFooter />
			</section>
		</Curve>
	);
};

export default Work;

export const GoBack = ({ to }: { to?: string }) => {
	const router = useRouter();

	return (
		<button
			className="flex font-clash justify-center sm:justify-start items-center"
			onClick={() => {
				gsap.to("#stick", {
					flex: 1,
					margin: "0 5px",
				});
				router.push(to ?? "/");
			}}
		>
			<Image
				id="logo"
				style={{ opacity: 1 }}
				src="/arrow-icon.svg"
				alt=""
				className="w-[30px] sm:w-[60px] m-4 "
				width={20}
				height={20}
				priority
			/>
			<div
				id="stick"
				className="w-[0px]  h-[4px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
			></div>
			<span className="font-bold sm:text-[3em] text-[1.6em] mr-4 uppercase text-[#f0f0f0]">
				go back
			</span>
		</button>
	);
};

function ListItem({
	text,
	link,
	delay,
}: {
	text: any;
	link: string;
	delay: number;
}) {
	const ref = useRef(null);
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(ref.current, {
				delay: delay,
				xPercent: -100,
				duration: 1,
				ease: easeInOut,
			});
		});
		return () => ctx.revert();
	}, []);
	const router = useRouter();
	const truncatedText = text.slice(0, 8);

	return (
		<li
			key={text}
			className="list-item text-[3.2em] sm:text-[3.8em] md:text-[4em] font-bold bg-[#333] mt-0 break-words relative cursor-pointer "
		>
			<hr />
			<div
				ref={ref}
				className="truncate slide-in origin-top-left"
				style={{
					marginLeft: "4vw",
				}}
				onClick={(e) => {
					gsap.to(e.target, {
						color: "red",
						height: "800px",
						duration: 2,
						delay: 0.1,
						scale: 2,
					});
					router.push(link);
				}}
				onMouseEnter={(e) => {
					gsap.to(e.target, { marginLeft: "vw", duration: 0.3 });
				}}
				onMouseLeave={(e) => {
					gsap.to(e.target, { marginLeft: "4vw", duration: 0.3, delay: 0.1 });
				}}
			>
				{text}
			</div>
		</li>
	);
}
