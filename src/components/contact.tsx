import { NavContext } from "@um-p4/app/navcontext";
import Image from "next/image";
import { useContext } from "react";

const ContactSection = () => {
	const navCxt = useContext(NavContext);

	return (
		<section
			ref={navCxt.contact}
			id="contact"
			className="w-full min-h-screen snap-start bg-red-200"
		>
			<div className="p-4">
				<div className="h-[4em]"></div>
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
					<input
						type="text"
						id="name"
						placeholder="Your Name"
						className="w-full border-t-0 focus:border-none border-white border-b-2 text-2xl font-clash bg-transparent font-bold  my-2 pb-2 placeholder:text-white selection:border-none focus:outline-none "
					/>
					<label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">
						YOUR NAME
					</label>
					<input
						type="text"
						value="Your Name"
						placeholder="Your Name"
						className="w-full border-none border-b-2 text-2xl font-clash bg-transparent font-bold border-white"
					/>
					<div className="relative z-0">
						<input
							type="text"
							id="fsd"
							className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-clash"
							placeholder=" "
						/>
						<label
							htmlFor="fsd"
							className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
						>
							Floating standard
						</label>
					</div>
				</form>
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
