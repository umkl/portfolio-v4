const ProjectsSection = () => {
	return (
		<div className="h-screen w-full bg-blue-200 snap-center">
			<div className=" h-full  bg-green-400 scro flex whitespace-nowrap snap-x snap-mandatory no-scrollbar overflow-x-auto">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

const ProjectCard = () => {
	return (
		<div className="snap-always w-screen shrink-0 h-full border-4 border-gray-50 relative inline-block bg-red-200">
			<div className="relative inline-block text-[6em]  top-0 left-0 font-druk">
				#1
			</div>
			<div className="text-[7em] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block text-center font-druk font-outline-2 text-transparent">
				Deets
			</div>
			<div className="absolute inline-block text-[2em] max-w-2xl  bottom-0 left-0 font-inter font-bold">
				a project i did with a couple of school homies
			</div>
			<div className="absolute  inline-block text-[6em]  bottom-0 right-0 font-druk">
				more
			</div>
			<div className="absolute  inline-block text-[6em] top-0 right-0 font-druk">
				2023
			</div>
		</div>
	);
};

export default ProjectsSection;
