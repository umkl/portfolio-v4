import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";
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
	const ref = useRef<any>(null);
	return (
		<div
			onClick={(e) => {
				tap && tap();

				if (window.innerWidth > 1024) {
					gsap.to(ref.current, {
						marginTop: "-200px",
					});
				}
			}}
			ref={ref}
			className={`group rounded-xl block relative p-4 lg:px-0  lg:border-t-2 border-[#5a5a5a] transition-all hover:bg-[#95b8d13e] hover:backdrop-blur-[2px] lg:bg-gradient-to-b lg:from-[#383838]  px-4 pr-6 cursor-pointer hover:border-[#95B8D1] ${classname} md:mt-4 `}
		>
			<h2 className={`text-[#C2CAD1] text-left lg:text-center `}>
				<span className="font-clash  font-[600] text-[1.875rem] md:text-[2rem] lg:text-[1.75rem] xl:text-[2.25rem] xl:mb-3 text-left lg:text-center lg:block leading-4 mt-4 lg:uppercase ">
					{name}{" "}
				</span>
				<br className="hidden lg:block" />
				<span className="inline-block lg:rotate-[-45deg] transition-transform group-hover:rotate-[-90deg] motion-reduce:transform-none font-bold font-inter relative text-3xl lg:text-[3rem] lg:-my-2 lg:text-center lg:w-full lg:text-[#81899B]">
					-&gt;
				</span>
			</h2>
			<p
				className={`m-0 font-inter max-w-[30ch] text-left  lg:mx-4  mt-4 font-medium text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.3rem] text-[#797c82] `}
			>
				{desc}
			</p>
		</div>
	);
};

export default CardComponent;
