import { NavContext } from "@um-p4/app/navcontext";
import Image from "next/image";
import { useContext } from "react";

const ContactSection = () => {
	const navCxt = useContext(NavContext);

	return (
		<section
			ref={navCxt.contact}
			id="contact"
			className="w-full min-h-screen snap-start "
		>
			<div className="p-4">
				<div className="h-[2rem]"></div>
				<h1 className="font-clash font-bold text-3xl ">
					Awesome concept in mind?
				</h1>
				<h1 className="font-clash font-bold text-3xl ">
					Let's get in contact!
				</h1>
				<h2 className="font-clash font-[500] text-2xl ">
					I am currently quite busy but definetly open to new offers!
				</h2>
				<div className="h-[3em]"></div>
				<form>
					<div className="relative z-0 mb-4">
						<input
							type="text"
							id="fsd"
							className="block py-2.5 px-0 w-full text-[1.6rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash"
							placeholder=" "
						/>
						<label
							htmlFor="fsd"
							className="absolute text-[1.2rem] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
						>
							Floating standard
						</label>
					</div>
					<div className="relative z-0 mb-4">
						<input
							type="text"
							id="fsd"
							className="block py-2.5 px-0 w-full text-[1.6rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash"
							placeholder=" "
						/>
						<label
							htmlFor="fsd"
							className="absolute text-[1.2rem] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
						>
							Floating standard
						</label>
					</div>
					<div className="relative z-0 mb-4">
						<textarea
							rows={4}
							id="fsd"
							className="block py-2.5 px-0 w-full text-[1.6rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash overflow-hidden"
							placeholder=" "
						/>
						<label
							htmlFor="fsd"
							className="absolute text-[1.2rem] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
						>
							Floating standard
						</label>
					</div>
				</form>
				<div className="mb-4">
					<h3 className="font-clash text-[1.5rem] font-bold">
						Contact Details
					</h3>
					<h4 className="font-clash text-[1.5rem]">hello@ungarmichael.me</h4>
				</div>
				<div className="mb-4">
					<h3 className="font-clash text-[1.5rem] font-bold">
						My other digital places
					</h3>
					<h4 className="font-clash text-[1.5rem]">Bento</h4>
					<h4 className="font-clash text-[1.5rem]">GitHub</h4>
					<h4 className="font-clash text-[1.5rem]">YouTube</h4>
				</div>
				<div className="mb-4">
					<h3 className="font-clash text-[1.5rem] font-bold">Location</h3>
					<h4 className="font-clash text-[1.5rem]">Ried, 20:00:00</h4>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;

// <Image
// 					src="/logo-skeleton.svg"
// 					alt="Vercel Logo"
// 					className=""
// 					objectFit=""
// 					height={60}
// 					width={60}
// 					priority
// 				/>
