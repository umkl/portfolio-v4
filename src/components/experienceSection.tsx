const ExperienceSection = () => {
	return (
		<div className="h-fit w-full bg-slate-300">
			<div className="py-8 relative">
				<h1 className="text-4xl text-center">experiences</h1>
				<h2 className="text-2xl text-center">
					places were I got to experience things related to work
				</h2>
			</div>
			<div className="flex justify-center relative left-1/2 -translate-x-1/2 w-full  h-fit bg-red-500">
				{/* <div className="flex absolute">
					<div className="w-[10px] h-fit bg-red-500"></div>
					<div className="flex flex-col">
						<div className=" bg-red-300 w-[20px] h-[20px] sticky top-0">
							now
						</div>
						<div className=" bg-red-300 w-[20px] h-[200px]">now</div>
						<div className=" bg-red-300 w-[20px] h-[20px] sticky top-0">
							2023
						</div>
					</div>
				</div> */}
				{/* <div className="w-[80px]"></div> */}
				<div className="w-full h-fit bg-green-500/20 relative">
					<div className="h-fit w-full flex">
						<div className="flex-1 ">
							<div className="h-[70px]"></div>
							<div className="h-[200px] bg-orange-400 w-full"></div>
							<div className="h-[200px] bg-orange-500 w-full"></div>
							<div className="h-[200px] bg-orange-600 w-full"></div>
						</div>
						<div className="w-32 "></div>
						<div className="flex-1 bg-red-200">
							<div className="h-[200px] bg-orange-400 w-full"></div>
							<div className="h-[200px] bg-orange-500 w-full"></div>
						</div>
					</div>
				</div>
				{/* <div className="top-40 w-full h-fit relative bg-purple-200">
					<div className="h-[500px] w-full flex">
						<div className="flex-1 bg-red-200/40"></div>
						<div className="w-32 "></div>
						<div className="flex-1 "></div>
					</div>
					<div className="h-[500px] w-full flex">
						<div className="flex-1 bg-red-200"></div>
						<div className="w-32 "></div>
						<div className="flex-1 "></div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default ExperienceSection;
