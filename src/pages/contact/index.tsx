import Curve from "@um-p4/components/Curve";
import { sendContactForm } from "@um-p4/lib/api";
import { NavContext } from "@um-p4/navcontext";

import Image from "next/image";
import { useContext, useState } from "react";

interface formValues {
	email: string;
	topic: string;
	text: string;
}

const ContactSection = () => {
	const navCxt = useContext(NavContext);
	const [email, setEmail] = useState("");
	const [topic, setTopic] = useState("");
	const [text, setText] = useState("");
	const [processingState, setProcessingState] = useState({
		loading: false,
		success: false,
		error: false,
	});

	const onSubmit = async (e: any) => {
		setProcessingState({ loading: true, success: false, error: false });
		try {
			e.preventDefault();
			const tels = e.target.elements;
			const formValues = {
				email,
				topic,
				text,
				access_key: "40d0da23-5d5e-4137-9c9b-62ed37580a5d",
			};
			// const resi = await sendContactForm(formValues);
			var json = JSON.stringify(formValues);

			fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: json,
			})
				.then(async (response) => {
					let json = await response.json();
					if (response.status == 200) {
						console.log("succ");
					} else {
						console.log(response);
					}
				})
				.catch((error) => {
					console.log(error);
					setProcessingState({
						loading: false,
						success: false,
						error: true,
					});
				})
				.then(function () {
					setProcessingState({
						loading: false,
						success: true,
						error: false,
					});
					setTimeout(() => {
						setProcessingState({
							loading: false,
							success: false,
							error: false,
						});
						setEmail("");
						setTopic("");
						setText("");
					}, 5000);
				});
		} catch (error) {
			console.log(error);
			setProcessingState({ loading: false, success: false, error: true });
		}
		// e.target.reset();
	};

	// const localDateTime = new Date();
	// const viennaDateTime = format(localDateTime, "yyyy-MM-dd HH:mm:ssXXX", {
	// 	timeZone: "Europe/Vienna",
	// });

	return (
		<Curve>
			<section
				ref={navCxt.contact}
				id="contact"
				className="w-full min-h-screen snap-start bg-[#333]"
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
						I am currently quite busy but definitly open to new offers!
					</h2>
					<div className="h-[3em]"></div>
					<form>
						<div className="relative z-0 mb-4">
							<input
								type="text"
								id="fsd"
								className="block py-2.5 px-0 w-full text-[1.6rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash"
								placeholder=" "
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
							<label
								htmlFor="fsd"
								className="absolute text-[1.2rem] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
							>
								your email-adress
							</label>
						</div>
						<div className="relative z-0 mb-4">
							<input
								type="text"
								id="fsd"
								className="block py-2.5 px-0 w-full text-[1.6rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash"
								placeholder=" "
								onChange={(e) => setTopic(e.target.value)}
								value={topic}
							/>
							<label
								htmlFor="fsd"
								className="absolute text-[1.2rem] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
							>
								your topic
							</label>
						</div>
						<div className="relative z-0 mb-4">
							<textarea
								rows={4}
								id="fsd"
								className="block py-2.5 px-0 w-full text-[1.6rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash overflow-hidden"
								placeholder=" "
								onChange={(e) => setText(e.target.value)}
								value={text}
							/>
							<label
								htmlFor="fsd"
								className="absolute text-[1.2rem] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
							>
								your text
							</label>
						</div>
						<div className="flex gap-4 items-center mb-4">
							<input
								onClick={onSubmit}
								type="button"
								value="send it"
								className="appearance-none border-2 rounded-full w-14 font-clash px-8 py-2 box-content hover:bg-white hover:text-[#333] hover:font-bold hover:cursor-pointer"
							/>
							{processingState.loading && (
								<p className="font-clash font-extrabold uppercase h-full text-white/50">
									loading
								</p>
							)}
							{processingState.success && (
								<p className="font-clash font-extrabold uppercase h-full text-green-200">
									success
								</p>
							)}
							{processingState.error && (
								<p className="font-clash font-extrabold uppercase h-full text-red-200">
									error, please contact me over the email listed below
								</p>
							)}
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
						<h3 className="font-clash text-[1.5rem] font-semibold">Location</h3>
						<h4 className="font-clash text-[1.5rem]">Ried, 20:00:0</h4>
					</div>
				</div>
			</section>
		</Curve>
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
