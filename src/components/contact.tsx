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
				<h1 className="font-clash text-3xl ">Having a project idea in mind?</h1>
				<h1 className="font-clash text-3xl ">Let's get in contact!</h1>
				<h1 className="font-clash font-[500] text-2xl ">
					I am currently busy with projects and but always down for a little
					chat!
				</h1>
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
