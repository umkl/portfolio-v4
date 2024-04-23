"use client";
import Curve from "@um-p4/components/Curve";
import { sendContactForm } from "@um-p4/lib/api";
import Image from "next/image";
import { useContext, useState } from "react";
import Clock from "react-live-clock";
import { GoBack } from "../services";
import Head from "next/head";
import { useTranslations } from "next-intl";

interface formValues {
	email: string;
	topic: string;
	text: string;
}

const ContactSection = () => {
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
				.catch((error) => {
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
			setProcessingState({ loading: false, success: false, error: true });
		}
	};

	const t = useTranslations("Contact");
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Ungar Michael ✹ Creative App Development</title>
				<meta name="title" content="Michael Ungar - Contact" />
				<meta name="description" content="Creative App Development" />
				<meta property="og:url" content="https://ungarmichael.me" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Ungar Michael - Contact" />
				<meta property="og:description" content="Creative App Development" />
				<meta
					property="og:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="ungarmichael.me" />
				<meta property="twitter:url" content="https://ungarmichael.me" />
				<meta name="twitter:title" content="Ungar Michael - Contact" />
				<meta name="twitter:description" content="Creative App Development" />
				<meta
					name="twitter:image"
					content="https://ungarmichael.me/banner.png"
				/>
				<meta name="theme-color" content="#333333"></meta>
			</Head>
			<Curve>
				<GoBack />
				<div className="h-fit w-full flex justify-center p-10">
					<div className="max-w-[1200px] mr-8 w-full mb-[100px] contact-text-styling">
						<h1>{t("concept")}</h1>
						<p className="font-bold">{t("lets")}</p>

						<h2>Kontaktformular</h2>
						<form className="w-full">
							<div className="relative z-0 mb-10">
								<input
									type="text"
									id="email"
									className="block py-2.5 px-0 w-full text-[2rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-white peer font-clash"
									placeholder=" "
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
								<label
									htmlFor="email"
									className="absolute text-[2rem] text-white duration-300 transform -translate-y-7 scale-50 top-0 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-50 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
								>
									{t("your-email")}
								</label>
							</div>
							<div className="relative z-0 mb-10">
								<input
									type="text"
									id="topic"
									className="block  py-2.5 px-0 w-full text-[2rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash"
									placeholder=" "
									onChange={(e) => setTopic(e.target.value)}
									value={topic}
								/>
								<label
									htmlFor="topic"
									className="absolute text-[2rem] text-white duration-300 transform -translate-y-7 scale-50 top-0 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-50 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
								>
									{t("your-topic")}
								</label>
							</div>
							<div className="relative z-0 mb-10">
								<textarea
									rows={4}
									id="fsd"
									className="block py-2.5 px-0 w-full text-[2rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-white peer font-clash overflow-hidden"
									placeholder=" "
									onChange={(e) => setText(e.target.value)}
									value={text}
								/>
								<label
									htmlFor="fsd"
									className="absolute text-[2rem] text-white duration-300 transform -translate-y-7 scale-50 top-0 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-4 peer-focus:scale-50 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
								>
									{t("your-text")}
								</label>
							</div>
							<div className="flex gap-4 items-center mb-4">
								<input
									onClick={onSubmit}
									type="button"
									value={t("send-it")}
									className="appearance-none border-2 font-medium rounded-full text-[1.8rem] w-fit font-clash px-8 py-2 box-content hover:bg-white hover:text-[#333] hover:font-bold hover:cursor-pointer text-neutral-100"
								/>
								{processingState.loading && (
									<p className="font-clash font-extrabold uppercase h-full text-white/50">
										loading
									</p>
								)}
								{processingState.success && (
									<p className="font-clash font-extrabold uppercase h-full text-green-200">
										sent!
									</p>
								)}
								{processingState.error && (
									<p className="font-clash font-extrabold uppercase h-full text-red-200">
										error, please contact me over the email listed below
									</p>
								)}
							</div>
						</form>
						<h2>{t("further")}</h2>
						<p>Youtube - @ungarmichael - Coding Videos</p>
						<p>Instagram - @ungrmkl - UI-Challenges</p>
						<h2>{t("time-place")}</h2>
						<p>
							{" "}
							<Clock
								format={"HH:mm:ss"}
								ticking={true}
								timezone={"Europe/Vienna"}
							/>
							, Ried im Innkreis
						</p>
					</div>
				</div>
			</Curve>
		</>
	);
};

export default ContactSection;

export async function getStaticProps(context: any) {
	return {
		props: {
			messages: (await import(`../../messages/${context.locale}.json`)).default,
		},
	};
}
