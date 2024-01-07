import UmFooter from "@um-p4/components/UmFooter";
import { GoBack } from "./services";
import Curve from "@um-p4/components/Curve";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { easeOut } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import React from "react";
import Marquee from "react-fast-marquee";

const Projects = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (event: any) => {
		setPosition({ x: event.clientX, y: event.clientY });
	};

	useEffect(() => {
		// Calculate the distance between text and cursor
		const deltaX = position.x - textPosition.x;
		const deltaY = position.y - textPosition.y;

		// Update text position based on distance (you can adjust the speed)
		const newX = deltaX * 0.1;
		const newY = deltaY * 0.1;

		setTextPosition({ x: newX, y: newY });
	}, [position]);

	return (
		<Curve>
			<section
				className="flex flex-col min-h-screen bg-[#333]"
				onMouseMove={handleMouseMove}
			>
				<GoBack />
				<p className="font-druk uppercase text-[3em] mt-10 font-bold ml-4">
					featured
				</p>
				<div className="relative text-white">
					<h1 className="font-druk uppercase font-outline-2 text-transparent text-[6em] font-bold leading-[0.8em] mb-4 ml-4 z-50 mb-10">
						projects
					</h1>
					{/* <span
						style={{
							position: "absolute",
							left: `${textPosition.x * 0.05}px`,
							top: `${textPosition.y * 0.05}px`,
							transition: "all 0.1s ease-out", // Adjust the transition speed
						}}
						className="font-druk uppercase font-outline-2 text-transparent text-[6em] font-bold leading-[0.8em] mb-4 ml-4 absolute "
					>
						projects
					</span>
					<span
						style={{
							position: "absolute",
							left: `${textPosition.x * 0.1}px`,
							top: `${textPosition.y * 0.1}px`,
							transition: "all 0.1s ease-out", // Adjust the transition speed
						}}
						className="font-druk uppercase font-outline-2  text-[6em] font-bold leading-[0.8em] mb-4 ml-4 absolute text-transparent"
					>
						projects
					</span>
					<span
						style={{
							position: "absolute",
							left: `${textPosition.x * 0.2}px`,
							top: `${textPosition.y * 0.2}px`,
							transition: "all 0.1s ease-out", // Adjust the transition speed
						}}
						className="font-druk uppercase font-outline-2 text-transparent text-[6em] font-bold leading-[0.8em] mb-4 ml-4 absolute"
					>
						projects
					</span> */}
				</div>
				<div className="font-clash flex-1 ">
					<div className="flex w-full px-4 uppercase group ">
						<p className="font-clash flex-1 pl-2 pb-2 font-semibold">
							projectname
						</p>
						<p className="font-clash flex-1 pl-2 pb-2 font-semibold">
							category
						</p>
						<p className="font-clash flex-1 pl-2 pb-2 font-semibold">
							initiator
						</p>
						<p className="font-clash flex-1 pl-2 pb-2 font-semibold">year</p>
					</div>
					<hr />
					<TableItem
						projectname={"Frame"}
						category={"frontend, ui/ux"}
						initiator={"Client"}
						year={"2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							A project for a local video editor including a rough portfolio and
							a contact section. The focus here was mostly on using alternative
							and modern ways of displaying content so the website would elevate
							over any competitors and leave a lasting impression.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the work on{" "}
							<a href="https://frame-studio.at">
								<span className="underline font-semibold">frame-studio.at</span>
							</a>
						</p>

						<Marquee>
							<div className="flex flex-nowrap gap-5 mr-5 ">
								<img
									src="/project-imgs/deets-project-3266x1400.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
								<img
									src="/projects/deets/image2.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
								<img
									src="/projects/deets/image3.png"
									alt="asdlkfj"
									className="h-[400px] md:h-[300px]"
								/>
							</div>
						</Marquee>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Deets"}
						category={"frontend, ui/ux"}
						initiator={"HTLGKR"}
						year={"2021 - 2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was implemented as a diploma thesis at HTL
							Grieskirchen and included the implementation of an admnistration
							panel for servicing product terminals. In addition to that a
							statically served landing page was implemented for bringing the
							product to potential customers.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							For more information, please visit our website{" "}
							<a href="https://deets.waterbyte.club">
								<span className="underline font-semibold">
									deets.waterbyte.club
								</span>
							</a>
						</p>

						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/deets-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/deets/image2.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/deets/image3.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Waterbyte Web"}
						category={"frontend, ui/ux, branding, backend"}
						initiator={"Waterbyte"}
						year={"2021"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/wbyt_web-project-1866x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/wbyt-project-screenshot-1.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/wbyt-project-screenshot-2.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Charge"}
						category={"frontend, backend, ui/ux"}
						initiator={"School Project"}
						year={"2022 - 2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/wbyt_web-project-1866x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/wbyt-project-screenshot-1.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/wbyt-project-screenshot-2.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Jamboree"}
						category={"frontend, backend"}
						initiator={"Waterbyte"}
						year={"2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/wbyt_web-project-1866x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/wbyt-project-screenshot-1.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
							<img
								src="/projects/wbyt-project-screenshot-2.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Filli Studio"}
						category={"frontend, ui/ux"}
						initiator={"Contest"}
						year={"2022"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Divex Survey Application"}
						category={"frontend, ui/ux"}
						initiator={"Client"}
						year={"2020"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Ballkarten.at"}
						category={"frontend, ui/ux, branding"}
						initiator={"Wanted"}
						year={"2022 - 2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Octagon"}
						category={"frontend, ui/ux, branding"}
						initiator={"VortexData"}
						year={"2022 - 2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Synposis"}
						category={"frontend, ui/ux"}
						initiator={"School Project"}
						year={"2022 - 2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Heed"}
						category={"frontend, ui/ux, branding"}
						initiator={"Hackathon Contest"}
						year={"2022"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Krampus-Börse.at"}
						category={"frontend, ui/ux"}
						initiator={"Client"}
						year={"2023"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
					<TableItem
						projectname={"Bargun"}
						category={"frontend, ui/ux, branding"}
						initiator={"Client"}
						year={"2022"}
					>
						<p className="font-[3rem] mt-4 max-w-[1200px]">
							This project was for the coding club I am participating in so it
							was practically without a budget and I used various tools for the
							first time. It was the first project where I was embracing nextjs.
							Instead of creating an dedicated backend I harnessed supabase to
							host changing data.
						</p>
						<div className="h-[100px]"></div>
						<p className="mb-4">
							You can check out the website on{" "}
							<a href="https://waterbyte.club">
								<span className="underline font-semibold">waterbyte.club</span>
							</a>
						</p>
						<div className="flex flex-nowrap gap-5 mr-5 ">
							<img
								src="/project-imgs/filliStudio-project-3266x1400.png"
								alt="asdlkfj"
								className="h-[400px] md:h-[300px]"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-5 font-semibold text-[1.3rem] mb-8">
							<p>#react</p>
							<p>#nextjs</p>
							<p>#grapesjs</p>
							<p>#typescript</p>
							<p>#SSR</p>
						</div>
					</TableItem>
				</div>
				<UmFooter />
			</section>
		</Curve>
	);
};

const TableItem = ({
	children,
	projectname,
	category,
	initiator,
	year,
}: {
	children: JSX.Element | JSX.Element[];
	projectname: string;
	category: string;
	initiator: string;
	year: string;
}) => {
	const [expanded, setExpanded] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		console.log("expand");

		let ctxt = gsap.context(() => {
			if (expanded == true) {
				gsap.to(ref.current, {
					duration: 1.2,
					height: "0px",
					ease: easeIn,
				});
			}
			if (expanded == false) {
				gsap.to(ref.current, {
					duration: 1.4,
					height: "auto",
					ease: easeOut,
				});
			}
		});

		return ctxt.clear();
	}, [expanded]);

	return (
		<>
			<div
				className="flex w-full px-4 cursor-pointer group hover:bg-white"
				onClick={() => {
					setExpanded(!expanded);
				}}
			>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333]">
					{projectname}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333] uppercase font-semibold">
					{category}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333]">
					{initiator}
				</p>
				<p className="font-clash flex-1 pl-2  py-4 font-medium group-hover:text-[#333]">
					{year}
				</p>
			</div>

			<div
				ref={ref}
				className="w-full overflow-hidden px-6 box-border"
				style={{ height: "0px" }}
			>
				{children}
			</div>

			<hr />
		</>
	);
};

export default Projects;
