import Link from "next/link";

const CardComponent = ({
	name,
	desc,
	dest,
	classname,
	tap,
}: {
	name: string;
	desc: string | JSX.Element;
	dest: string;
	classname?: string;
	tap?: () => void;
}) => {
	return (
		<a
			onClick={() => tap!()}
			className={`group rounded-xl p-4 border-t-2 border-[#5a5a5a] transition-all hover:bg-[#95b8d13e] hover:backdrop-blur-[2px] lg:bg-gradient-to-b lg:from-[#333333]  px-4 pr-6 cursor-pointer hover:border-[#95B8D1] ${classname} md:mt-4`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={`text-[#C2CAD1]`}>
				<span className="font-clash  font-[700] text-[1.875rem] md:text-[2rem]  lg:text-[2.3rem] lg:text-center lg:block leading-4 mt-4 lg:uppercase ">
					{name}{" "}
				</span>
				<br className="hidden lg:block" />
				<span className="inline-block lg:rotate-[-45deg] transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-bold font-inter relative text-3xl lg:text-[3rem] lg:-my-2 text-center w-full text-[#81899B]">
					-&gt;
				</span>
			</h2>
			<p
				className={`m-0 font-inter max-w-[30ch] text-left  li  mt-4 font-medium text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.3rem] text-[#797c82] `}
			>
				{desc}
			</p>
		</a>
	);
};

export default CardComponent;
