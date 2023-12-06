import { RefObject, useContext } from "react";
import CardComponent from "./card";
import Image from "next/image";
import { NavContext } from "@um-p4/app/navcontext";

const Landing = () => {
	const navCxt = useContext(NavContext);

	return (
		<section
			className="h-fit-content w-full z-50  overflow-hidden "
			id="landing"
		>
			<div>
				<div className="fixed w-full h-[5em] z-30 from-[#333333] to-transparent bg-gradient-to-t bottom-0 "></div>
				<main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 relative max-w-screen overflow-hidden ">
					<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex md:mt-20">
						<Image
							src="/logo.svg"
							alt="Vercel Logo"
							className=""
							width={80}
							height={80}
							priority
						/>
						<Image
							src="/myself.png"
							alt="Vercel Logo"
							className=""
							unoptimized={true}
							width={80}
							height={80}
						/>
					</div>
					<div className=" relative flex flex-col w-full max-w-5xl mt-3 lg:mt-0 mb-7 ">
						<h1 className="text-left font-sora font-bold text-[1.23em] text-[#95B8D1]">
							Hi, my Name is
						</h1>
						<h2 className="font-clash text-[2.7em] lg:text-8xl leading-10 font-medium text-[#C2CAD1] drop-shadow-[0_0_0.3rem_#ffffff70]">
							Michael Ungar.
						</h2>
						<h3 className="font-inter font-bold text-[1.2em] lg:text-4xl text-[#81899B]">
							Developer and Designer from Austria.{" "}
						</h3>
						<h4 className="font-sora text-[1em] text-[#686C76] mt-0 font-normal lg:mt-4">
							I’m a frontend dev and creator currently active as a freelancer{" "}
							<br></br>
							focused on creating flawless code and magnificent designs.
						</h4>
					</div>
					<div className="mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:gap-4  w-full">
						<CardComponent
							tap={() => {
								navCxt.work!.current?.scrollIntoView();
							}}
							dest="work"
							name="Work"
							desc="Find out what kind of work I do and how I go about creating new projects."
						/>
						<CardComponent
							tap={() => {
								navCxt.experience!.current?.scrollIntoView();
							}}
							dest="experience"
							name="XPs"
							desc="Explore what kind of experiences I was already able to make."
						/>
						<CardComponent
							tap={() => {
								navCxt.projects!.current?.scrollIntoView();
							}}
							dest="projects"
							name="Projects"
							desc="Discover some of my projects where I was able to do things myself."
						/>
						<CardComponent
							tap={() => {
								navCxt.contact!.current?.scrollIntoView();
							}}
							dest="contact"
							name="Contact"
							desc="Get in touch with me :)"
						/>
					</div>
					<div className="absolute h-8 md:h-20  w-full bottom-0 left-0 bg-gradient-to-b from-transparent to-[#333333]"></div>
					<div className="absolute h-8 md:h-20  w-full top-0 left-0 bg-gradient-to-b from-[#333333] to-transparent"></div>
					<div className="absolute w-8 md:w-20  h-full top-0 left-0 bg-gradient-to-r from-[#333333] to-transparent"></div>
					<div className="absolute w-8 md:w-20  h-full top-0 right-0 bg-gradient-to-l from-[#333333] to-transparent"></div>
				</main>
			</div>
		</section>
	);
};

export default Landing;
