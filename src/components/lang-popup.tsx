import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

export const LangPopup = ({ onTap }: { onTap: () => {} }) => {
	const router = useRouter();

	useEffect(() => {
		console.log(router.locale);
	}, [router.locale]);

	const handleChangeLocale = (newLocale: string) => {
		console.log("triggered");
		router.push(router.pathname, router.asPath, { locale: newLocale });
	};

	return (
		<div className="w-[600px] h-[260px] text-white bg-neutral-700 rounded-lg top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 flex flex-col  relative   lg:border-t-2 border-[#5a5a5a] transition-all hover:bg-[#95b8d13e] hover:backdrop-blur-[2px] lg:bg-gradient-to-b lg:from-[#383838]  p-6 cursor-pointer hover:border-[#95B8D1]  md:mt-4 shadow-xl shadow-slate-50/20">
			<h1 className="text-[2.4rem] font-bold font-clash">Hey!</h1>
			{/* <span className="transition-transform font-bold font-inter text-3xl pb-4 lg:text-[3rem] ">
				-&gt;
			</span> */}
			<h2 className="text-[1.5rem] font-bold font-inter text-[#797c82]">
				Bevor du weiter stöberst bitte Ich dich eine passende Sprache zu wählen:
			</h2>
			<div className="flex-1"></div>
			<div className="font-bold text-[1.2rem] mb-2">Sprache</div>
			<div className="w-full flex font-bold text-[1.4rem] gap-4">
				<button
					className={` flex-1 h-[50px] bg-neutral-800 relative rounded-lg ${
						router.locale == "de-AT"
							? "border-2 border-pr-200 text-pr-200 "
							: ""
					}`}
					onClick={() => {
						setTimeout(() => {
							handleChangeLocale("de-at");
						}, 2000);
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
						handleChangeLocale("en-US");
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
