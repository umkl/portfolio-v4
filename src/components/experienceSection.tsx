import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ExperienceSection = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		<>
			{isMobile ? (
				<>
					<div>Welcom!</div>
				</>
			) : (
				<>
					<ParallaxLayer offset={1} className="z-10" speed={0}>
						<div className="h-[400px] z-10 w-full flex flex-col justify-center items-center">
							<p className="text-2xl font-bold text-red-200">Disclaimer</p>
							<p className="text-2xl ">
								The following section will represent what kind of work i do
							</p>
						</div>
					</ParallaxLayer>
					<>
						<ParallaxLayer offset={1.2} speed={1.8} className="z-20">
							<div className="h-screen z-20  w-1/2  snap-start  flex justify-end items-center  ">
								<div className="w-2/3 left-1/2 flex font-druk ">
									<div className="max-w-[400px] text-right ">
										<h1 className="font-clash text-3xl text-right">
											#1 Sketching
										</h1>
										<p className="font-inter text-md text-right text-[#C2CAD1]">
											the first stage of creating things is always thinking. In
											this area I like to capture my thoughts using a notepad in
											an oldschool fashion. After having done that I continue on
											with the next stage:{" "}
										</p>
									</div>
								</div>
							</div>
						</ParallaxLayer>
						<ParallaxLayer offset={1.5} speed={1.4} className="z-20">
							<div className="left-1/2 z-20  relative h-screen w-1/2">
								<div className="max-w-[400px]">
									<Image
										src="/coding.png"
										alt="Vercel Logo"
										className=""
										style={{
											width: "100%",
											height: "auto",
										}}
										width={500}
										height={300}
										priority
									/>
								</div>
							</div>
						</ParallaxLayer>
					</>
				</>
			)}
		</>
	);
};

export default ExperienceSection;
