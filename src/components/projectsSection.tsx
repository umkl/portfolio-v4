const ProjectsSection = () => {
	return (
		<div className="h-screen w-full bg-blue-200 p-5  ">
			<div className=" w-full h-full border-4 border-gray-50 relative bg-red-200">
				<div className="relative inline-block text-[6em] bg-red-400 top-0 left-0 font-druk">
					#1
				</div>
				<div className="text-[7em] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block text-center font-druk font-outline-2 text-transparent">
					Deets
				</div>
				<div className="absolute inline-block text-[2em] max-w-2xl bg-red-400 bottom-0 left-0 font-inter font-bold">
					a projcet i did with a couple of school homies
				</div>
				<div className="absolute  inline-block text-[6em] bg-red-400 bottom-0 right-0 font-druk">
					more
				</div>
				<div className="absolute  inline-block text-[6em] bg-red-400 top-0 right-0 font-druk">
					2023
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
