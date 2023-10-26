import Image from "next/image";

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-between p-24 ">
				<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
					<Image
						src="/logo.svg"
						alt="Vercel Logo"
						className=""
						width={80}
						height={80}
						priority
					/>
				</div>
				<div
					className=" relative flex flex-col w-full max-w-5xl before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial  before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
				before:dark:to-[#95B8D1]-700 before:dark:opacity-10
				after:from-[#95B8D1] after:dark:via-[#95B8D1] after:dark:opacity-40
				before:lg:h-[360px] after:absolute after:-z-20 after:h-[180px] after:w-[240px]
				after:translate-x-1/3 after:bg-gradient-conic 
				after:via-[#95B8D1]-200 after:blur-2xl after:content-[''] z-[-1]"
				>
					{/* <Image	
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/> */}
					<h1 className="text-left font-sora text-2xl text-[#95B8D1]">
						Hallo, mein Name ist
					</h1>
					<h1 className="font-clash text-8xl font-medium text-[#C2CAD1] dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
						Michael Ungar
					</h1>
					<h2 className="font-druk text-4xl text-[#81899B]">
						Developer and Designer from Austria{" "}
					</h2>
					<h3 className="font-sora text-1xl text-[#686C76] mt-4">
						I’m a frontend dev and creator currently working as a freelancer{" "}
						<br></br>
						focused on creating flawless code and magnificent designs.
					</h3>
				</div>
				<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left lg:gap-4">
					<CardComponent
						name="Work"
						desc="Finde mehr über meine Tätigkeiten heraus"
					/>
					<CardComponent
						name="Experiencies"
						desc="Erfahre wo ich meine Fertigkeiten schon anwenden durfte."
					/>
					<CardComponent
						name="Projects"
						desc="Finde mehr über meine Tätigkeiten heraus"
					/>
					<CardComponent
						name="Contact"
						desc="Finde mehr über meine Tätigkeiten heraus"
					/>
				</div>
			</main>
			<div className="h-screen">
				<h1 className="font-clash text-w text-5xl text-center">
					{" "}
					now I would like to show you what work i do
				</h1>
			</div>
			<div
				id="section-1"
				className=" h-screen bg-red-200 relative flex items-center flex-col"
			>
				<h1 className="w-full text-5xl text-black bg-red-400 font-druk text-center static inline-block">
					My Work
				</h1>
				<div className="w-full bg-red-200 flex max-w-6xl">
					<div>
						<h1>Heading</h1>
						<h2>what about</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
							sapiente!
						</p>
					</div>
					<Image
						src="/coding.jpg"
						alt="coding"
						className=""
						objectFit=""
						width={700}
						height={600}
						priority
					/>
				</div>
				<div className="w-full bg-red-200 flex max-w-6xl">
					<div>
						<h1>Heading</h1>
						<h2>what about</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
							sapiente!
						</p>
					</div>
					<Image
						src="/coding.jpg"
						alt="coding"
						className=""
						objectFit=""
						width={700}
						height={600}
						priority
					/>
				</div>
			</div>
			<div className="h-screen bg-red-200">
				<h1>Experiences</h1>
				<div className="flex left-1/2 -translate-x-1/2 max-w-5xl bg-red-500 relative">
					<div className="h-44 bg-white w-5"></div>
					<div>aksldfjl</div>
				</div>
			</div>
			<div className="h-screen bg-slate-300">
				<h1>Projects</h1>
			</div>
		</>
	);
}

const CardComponent = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<a
			href="ggl.com"
			className="group rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300  "
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={` text-2xl font-clash text-[#C2CAD1]`}>
				{name}{" "}
				<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
					-&gt;
				</span>
			</h2>
			<p className={`m-0 max-w-[30ch] text-sm opacity-50 text-[#81899B]`}>
				{desc}
			</p>
		</a>
	);
};
