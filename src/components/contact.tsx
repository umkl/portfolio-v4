import Image from "next/image";

const ContactSection = () => {
	return (
		<div className="w-screen h-screen bg-red-200 flex">
			<div className="w-[500px] h-full bg-red-500">jeöö</div>
			<div className="w-full h-full bg-red-500 relative">
				<Image
					src="/waldlandschaft.jpg"
					alt="Vercel Logo"
					className=""
					fill
					priority
				/>
			</div>
		</div>
	);
};

export default ContactSection;
