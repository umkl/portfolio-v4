"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParaTest = () => {
	return (
		<div className="bg-red-200 flex flex-col">
			<div className="h-[1300px] w-[200px] bg-blue-200"></div>
			<Parallax
				pages={6}
				className="bg-green-800 snap-mandatory snap-x overflow-auto relative"
			>
				<ParallaxLayer className="snap-center bg-red-400">
					<div className="snap-center w-full h-screen bg-red-900"></div>
				</ParallaxLayer>
				<ParallaxLayer className="snap-center" offset={1} speed={0.5}>
					<div className="snap-center w-full h-screen bg-green-900 flex justify-center items-center">
						Disclaimer
					</div>
				</ParallaxLayer>
				<div className="snap-center">
					<ParallaxLayer offset={2}>
						<div className="snap-center w-1/2 h-screen bg-purple-900"> </div>
					</ParallaxLayer>
					<ParallaxLayer offset={2} speed={0.5}>
						<div className="w-full sm:w-1/2 sm:left-1/2 h-screen bg-gray-900 relative">
							{" "}
						</div>
					</ParallaxLayer>
					<ParallaxLayer offset={3} speed={0.5}>
						<div className="w-full md:w-1/2 h-screen bg-purple-900"> </div>
					</ParallaxLayer>
					<ParallaxLayer offset={3}>
						<div className="w-full sm:w-1/2 sm:left-1/2 h-screen bg-gray-900 relative">
							{" "}
						</div>
					</ParallaxLayer>
				</div>
				<ParallaxLayer offset={4} className="">
					<div className="w-full sm:w-1/2 sm:left-1/2 h-screen bg-yellow-900 relative">
						{" "}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={5}>
					<div className="w-full max-w-screen h-screen bg-green-400 relative p-4 overflow-scroll whitespace-nowrap snap-y snap-mandatory rotate-90">
						<div className=" w-full snap-center h-full bg-red-200 flex-auto  relative"></div>
						<div className=" w-full snap-center h-full bg-blue-200 flex-auto relative"></div>
						<div className=" w-full snap-center h-full bg-red-200 flex-auto  relative"></div>
						<div className=" w-full snap-center h-full bg-blue-200 flex-auto relative"></div>
						<div className=" w-full snap-center h-full bg-red-200 flex-auto  relative"></div>
						<div className=" w-full snap-center h-full bg-blue-200 flex-auto relative"></div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default ParaTest;
