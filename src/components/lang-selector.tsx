import { useEffect, useState } from "react";
import LangItemAt from "../../public/svgs/lang-icons/icon-at.svg";
import LangItemEn from "../../public/svgs/lang-icons/icon-en.svg";
import Pyramid from "../../public/svgs/pyramid.svg";
import { useLocale } from "next-intl";
import ISO6391 from "iso-639-1";
import nextConf from "../../next.config";
import { useRouter } from "next/router";

const LangSelector = () => {
	const langOptions = [];
	const l = useLocale();
	const router = useRouter();

	const handleChangeLocale = (locale: string) => {
		router.push(router.pathname, router.asPath, { locale: locale });
		localStorage.setItem("language-preference", locale);
		var langPref = localStorage.getItem("language-preference");
	};

	const [optionsShown, setOptionsShown] = useState(false);
	useEffect(() => {}, []);

	return (
		<>
			<div
				className={`flex flex-row  cursor-pointer select-none gap-4 relative items-center w-[300px] ${
					optionsShown ? "bg-ne-700/40 backdrop-blur-[1px]  rounded-b-xl" : ""
				}`}
				onClick={() => {
					setOptionsShown(!optionsShown);
				}}
			>
				<div
					className={`bg-ne-700/40 backdrop-blur-[1px] w-[300px]  rounded-t-xl absolute bottom-[100%] h-fit  flex-col justify-end ${
						optionsShown ? "flex" : "hidden"
					}`}
				>
					{nextConf.i18n.locales
						.reduce((x, i) => {
							if (i != l) {
								x.push(i);
								return x;
							}
							return x;
						}, [] as string[])
						.map((x) => {
							return (
								<LangOption
									key={x}
									name={x}
									onTap={() => {
										handleChangeLocale(x);
									}}
								/>
							);
						})}
				</div>
				<LangOption
					name={l}
					onTap={() => {
						setOptionsShown(false);
					}}
				/>
				<Pyramid
					className={`!relative !w-[42px] !h-[42px] scale-[40%] ${
						optionsShown ? "rotate-180" : ""
					}`}
				/>
			</div>
		</>
	);
};

const LangOption = ({ name, onTap }: { name: string; onTap?: () => void }) => {
	const [SvgComponent, setSvgComponent] = useState(null);
	const countryCode = name.match(/(?<=-)[A-Z]{2}$/);

	return (
		<div
			className="flex flex-row cursor-pointer gap-4 relative items-center p-2 w-[300px]"
			onClick={onTap}
		>
			{countryCode![0] == "AT" ? (
				<LangItemAt className="!relative !w-[57px] !h-[57px]" />
			) : (
				<LangItemEn className="!relative !w-[57px] !h-[57px]" />
			)}
			<p className="flex-1">
				{countryCode![0] == "AT" ? "Deutsch" : "English"}
			</p>
		</div>
	);
};

export default LangSelector;
