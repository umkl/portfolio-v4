import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

export const LangPopup = ({ onTap }: { onTap: () => {} }) => {
	const router = useRouter();

	const handleChangeLocale = (newLocale: string) => {
		router.push(router.pathname, router.asPath, { locale: newLocale });
		var langPref = localStorage.getItem("language-preference");
	};

	return (
		<div className="w-[600px] h-fit text-white bg-neutral-700 rounded-sm z-50 flex flex-col relative lg:border-t-2 border-[#5a5a5a] transition-all  lg:bg-gradient-to-b lg:from-[#383838] p-6 cursor-pointer hover:border-[#95B8D1] md:mt-4">
			<h1 className="text-[2.4rem] font-bold font-clash">Sprache ändern</h1>
			<h2 className="text-[1.5rem] font-bold font-inter text-[#797c82] mb-[40px]">
				Wähle eine passende Sprache aus
			</h2>
			<div className="flex-1"></div>
			{/* <div className="font-bold text-[1.2rem] mb-2">Sprache</div> */}
			<div className="w-full flex font-bold text-[1.4rem] gap-4">
				<button
					className={` flex-1 h-[50px] bg-neutral-800 relative rounded-lg ${
						router.locale == "de-AT"
							? "border-2 border-pr-200 text-pr-200 "
							: ""
					}`}
					onClick={() => {
						setTimeout(() => {
							handleChangeLocale("de-AT");
							localStorage.setItem("language-preference", "de-AT");
						}, 1000);
						onTap();
					}}
				>
					🇦🇹/🇩🇪 Deutsch
				</button>
				<button
					className={` flex-1 h-[50px] bg-neutral-800 relative rounded-lg ${
						router.locale == "en-US"
							? "border-2 border-pr-200 text-pr-200 "
							: ""
					}`}
					name="english"
					value={"english"}
					onClick={() => {
						setTimeout(() => {
							handleChangeLocale("en-US");
							localStorage.setItem("language-preference", "en-US");
						}, 1000);
						onTap();
					}}
				>
					🇬🇧 English
					<div className="absolute left-2 top-1/2 -translate-y-1/2"></div>
				</button>
			</div>
		</div>
	);
};
