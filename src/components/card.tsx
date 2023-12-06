import Link from "next/link";

const CardComponent = ({
	name,
	desc,
	dest,
	tap,
}: {
	name: string;
	desc: string;
	dest: string;
	tap?: () => void;
}) => {
	return (
		<a
			// onClick={() => {
			// 	window.scrollTo({
			// 		behavior: "smooth",
			// 	});
			// }}
			onClick={() => tap!()}
			className="group rounded-lg border-2 transition-all hover:bg-[#95b8d13e] hover:backdrop-blur-[2px]  border-transparent py-4 px-6   hover:border-[#95B8D1]  "
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={` text-3xl text-left  text-[#C2CAD1]`}>
				<span className="font-clash ">{name} </span>
				<span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-bold font-inter ">
					-&gt;
				</span>
			</h2>
			<p
				className={`m-0 max-w-[30ch] text-left text-[0.9em] opacity-75 font-medium leading-[1.3em] li text-[#81899B] mt-4`}
			>
				{desc}
			</p>
		</a>
	);
};

export default CardComponent;
