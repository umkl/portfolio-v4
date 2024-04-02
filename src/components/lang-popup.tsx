import { useRouter } from "next/router";
import { useEffect } from "react";

export const LangPopup = () => {
	const router = useRouter();

	useEffect(() => {
		console.log(router.locale);
	}, [router.locale]);

	const handleChangeLocale = (newLocale: string) => {
		console.log("triggered");
		router.push(router.pathname, router.asPath, { locale: newLocale });
	};

	return (
		<div className="w-[200px] h-[200px] bg-red-50 fixed top-1/2 left-1/2 z-50">
			<input
				className="bg-blue-200"
				name="english"
				value={"english"}
				onClick={() => {
					handleChangeLocale("en-US");
				}}
			/>
			<button
				onClick={() => {
					handleChangeLocale("de-at");
				}}
			>
				german
			</button>
		</div>
	);
};
