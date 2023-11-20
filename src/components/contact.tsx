import Image from "next/image";

const ContactSection = () => {
	return (
		<div className="w-full h-screen bg-red-200 flex snap-start relative">
			<div className="w-[800px] h-full art-bg flex justify-center items-center">
				<div className="w-full h-fit mx-14">
					<h1 className="text-2xl font-druk text-[#D9C2A7] inset-8">
						contact me
					</h1>
					<h1 className="text-3xl font-druk">lets get in touch</h1>
					<h2 className="text-lg font-inter font-bold text-[#B2B2B2]">
						what are you waiting for?
					</h2>
					<form>
						<input
							type="text"
							placeholder="Deine Email"
							className=" bg-[#4a4a4a44] backdrop-blur-sm focus:ring-[#d9c2a7c3]  focus:outline-none ring-2 ring-[#4a4a4aad] focus:ring-4 focus:border-teal focus:border-red-500 outline-teal-200 caret-[#d9c2a7c3]  rounded-md w-full mt-2 p-4 font-mono "
						/>
						<textarea
							placeholder="Verfasse hier eine nette Nachricht an mich :)"
							rows={4}
							cols={50}
							className=" bg-[#4a4a4a44] backdrop-blur-sm focus:ring-[#d9c2a7c3]  focus:outline-none ring-2 ring-[#4a4a4aad] focus:ring-4 focus:border-teal focus:border-red-500 outline-teal-200 caret-[#d9c2a7c3] h-[200px] rounded-md w-full mt-4 p-4 font-mono "
						/>
						<div className="w-full flex">
							<input
								type="button"
								value="Nachricht absenden"
								className=" bg-[#4A4A4A] hover:cursor-pointer focus:border-turquoise-500 h-[60px] ring-2 ring-[#4a4a4aad] hover:ring-[#d9c2a7c3] hover:ring-4 border-none  font-druk  mt-2 flex-1 rounded-md text-xs"
							/>
						</div>
					</form>
				</div>
				<div className="absolute translate-x-2 bottom-[50px]  h-fit flex ">
					<Image
						src="/logo-skeleton.svg"
						alt="Vercel Logo"
						className=""
						objectFit=""
						height={60}
						width={60}
						priority
					/>
					<div className="h-full w-full relative flex flex-col justify-center ml-4 ">
						<h2 className="font-mono">made with &lt;3</h2>
						<h2 className="font-mono">by ungarmichael</h2>
					</div>
				</div>
			</div>
			<div className="w-full h-full contact-image relative">
				<h2 className="absolute bottom-10 right-10 font-mono italic text-gray-400">
					my first coding setup, 2018
				</h2>
			</div>
		</div>
	);
};

export default ContactSection;
