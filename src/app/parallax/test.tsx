import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParaTest = () => {
	return (
		<Parallax pages={6} className="bg-blue-200 snap-mandatory snap-y">
			<ParallaxLayer>
				<div className="snap-center w-full h-screen bg-red-900"></div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0.5}>
				<div className="snap-center w-full h-screen bg-green-900 flex justify-center items-center">
					Disclaimer
				</div>
			</ParallaxLayer>
			<div className="">
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
			<ParallaxLayer offset={4}>
				<div className="w-full sm:w-1/2 sm:left-1/2 h-screen bg-yellow-900 relative">
					{" "}
				</div>
			</ParallaxLayer>
		</Parallax>
	);
};

export default ParaTest;
