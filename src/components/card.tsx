import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import LinkArrowIcon from "../../public/svgs/arrow-link.svg";
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
		<FancyResponsiveBox
			onTap={(e) => {
				tap && tap();
				if (window.innerWidth > 1024) {
					gsap.to(e.current, {
						marginTop: "-100px",
					});
				}
			}}
			classname={classname}
		>
			<h2 className="text-left font-[600] bg-clip-text text-transparent bg-gradient-to-b text-[2rem] sm:tex from-ne-200 to-ne-600 font-clash uppercase whitespace-nowrap">
				<LinkArrowIcon
					className={
						"!relative !w-[20px] !h-[20px] !scale-[140%] mr-2 ml-2 !inline"
					}
				/>
				{name}
			</h2>

			{/* <span
				aria-hidden="true"
				className="hidden lg:inline-block lg:rotate-[-45deg] transition-transform group-hover:rotate-[-90deg] motion-reduce:transform-none font-bold font-inter relative text-3xl lg:text-[3rem] lg:-my-2 lg:text-center lg:w-full lg:text-[#81899B]"
			>
				-&gt;
			</span> */}
			<p
				className={`m-0 font-inter text-left text-ne-400 font-medium break-words hyphens-auto text-[1.2rem] sm:text-[1.5rem] md:text-[1.5rem] lg:text-[1.5rem]  lg:pb-[4rem] `}
			>
				{desc}
			</p>
		</FancyResponsiveBox>
	);
};

const FancyResponsiveBox = ({
	classname,
	children,
	onTap,
}: {
	classname: string | undefined;
	children: JSX.Element[] | JSX.Element | null;
	onTap: (e: any) => void;
}) => {
	return (
		<div
			className={`px-2 py-2 lg:pt-2 from-ne-600/80 bg-gradient-to-r lg:bg-gradient-to-b transition-all backdrop-blur-[1px] cursor-pointer ${classname}`}
		>
			<div
				onClick={onTap}
				className={`group block relative  border-neutral-600/90 hover:border-ne-100 bg-gradient-to-r lg:bg-gradient-to-b drop-shadow-lg from-ne-700/50 pl-4 py-4`}
			>
				{children}
			</div>
		</div>
	);
};

export default CardComponent;
