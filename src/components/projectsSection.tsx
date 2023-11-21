import Image from "next/image";

interface ProjectType {
	name: string;
}

const projects: ProjectType[] = [
	{
		name: "preojct 1",
	},
	{
		name: "preojct 2",
	},
	{
		name: "preojct 3",
	},
];

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
		<div className="snap-center w-screen shrink-0 h-full relative inline-block bg-[#333333] p-9">
			<div className="relative h-full w-full border-4 border-gray-50">
				<div className="relative inline-block text-[6em] leading-[0.8em] m-4 top-0 left-0 font-druk">
					#1
				</div>
				<div className="text-[9em] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block text-center font-druk font-outline-2 text-transparent">
					Deets
				</div>
				<div className="absolute inline-block text-[2em] max-w-full  bottom-0 left-0 font-inter font-bold">
					a project i did with a couple of school homies
				</div>
				<div className="absolute  inline-block text-[6em] leading-[0.8em] p-8 bottom-0 right-0 font-druk border-t-4 border-l-4 border-white focus-cross-bg">
					more
				</div>
				<div className="absolute  inline-block text-[6em] leading-[0.8em] m-4 top-0 right-0 font-druk">
					2023
				</div>
				<div className="absolute  inline-block text-[6em] top-1/2 -translate-y-1/2 left-0 font-druk border-y-4 border-r-4 border-white p-5 focus-cross-bg">
					<Image
						src="/arrow-l.svg"
						alt="Vercel Logo"
						className="stroke-white fill-white"
						width={80}
						height={80}
						priority
					/>
				</div>
				<div className="absolute  inline-block text-[6em] top-1/2 -translate-y-1/2 right-0 font-druk border-y-4 border-l-4 border-white p-5 focus-cross-bg">
					<Image
						src="/arrow-r.svg"
						alt="Vercel Logo"
						className="stroke-white fill-white"
						width={80}
						height={80}
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
