import Curve from "@um-p4/components/Curve";
import { GoBack } from "./services";
import { useTranslations } from "next-intl";

const ImpressumPage = () => {
	const t = useTranslations("Impressum");
	return (
		<Curve>
			<GoBack />
			<div className="h-fit w-full flex justify-center p-10">
				<div className="max-w-[1200px] w-full mb-[100px] impressum-text-styling">
					<h1>Impressum</h1>
					<p>{t("why")}</p>
					&nbsp;
					<p className=" !text-neutral-300">Michael Ungar</p>
					<p>4932 Kirchheim · {t("austria")}</p>
					&nbsp;
					<p>
						<span>Mail:&nbsp;</span>{" "}
						<a
							className="!text-neutral-200 hover:font-medium"
							href="mailto:michael.ungar03@gmail.com"
						>
							michael.ungar03@gmail.com
						</a>
					</p>
					<p>
						<span>{t("phone")}:&nbsp;</span>
						<a
							className="!text-neutral-200 hover:font-medium"
							href="tel:+43 677 614 514 90"
						>
							+43 677 614 514 90
						</a>
					</p>
					<br />
					<p>
						<span>GLN:</span> 9110034873240
					</p>
					<p>
						<span>GISA:</span> 36419524
					</p>
					<br />
					<p>
						<span>{t("profession")}:</span> {t("it-services")}
					</p>
					<p>
						<span>{t("commercial")}: </span>
						{t("commercial-value")}
					</p>
					&nbsp;
					<h2>{t("static")}</h2>
					<p>{t("static-value")}</p>
					&nbsp; <br /> &nbsp;
					<p>
						{t("further-questions")}&nbsp;
						<a
							className="!text-neutral-200 hover:font-medium"
							href="mailto:michael.ungar03@gmail.com"
						>
							michael.ungar03@gmail.com
						</a>
					</p>
				</div>
			</div>
		</Curve>
	);
};

export default ImpressumPage;

export async function getStaticProps(context: any) {
	return {
		props: {
			messages: (await import(`../messages/${context.locale}.json`)).default,
		},
	};
}

{
	/* <section
					ref={navCxt.contact}
					id="contact"
					className="w-full relative min-h-screen snap-start bg-[#333] text-white"
				>
					<GoBack />
					<div className="p-4 left-1/2 -translate-x-1/2 w-full relative max-w-[1000px] ]">
						<h1 className="font-clash font-bold text-[3rem] leading-7 mb-2">
							{t("concept")}
						</h1>
						<h2 className="font-clash font-bold text-neutral-300 text-[2.4rem]">
							{t("lets")}
						</h2>
						<div className="h-[3em]"></div>
						<form className="w-full">
							<div className="relative z-0 mb-4">
								<input
									type="text"
									id="email"
									className="block  py-2.5 px-0 w-full text-[1.6rem] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white   focus:outline-none focus:ring-0 focus:border-white peer font-clash"
									placeholder=" "
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
								<label
									htmlFor="email"
									className="absolute text-[1.2rem] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-clash"
								>
									{t("your-email")}
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
									{t("your-topic")}
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
									{t("your-text")}
								</label>
							</div>
							<div className="flex gap-4 items-center mb-4">
								<input
									onClick={onSubmit}
									type="button"
									value={t("send-it")}
									className="appearance-none border-2 rounded-full text-[1.6rem] w-fit font-clash px-8 py-2 box-content hover:bg-white hover:text-[#333] hover:font-bold hover:cursor-pointer"
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
						<div className="mb-4">
							<h3 className="font-clash text-[2.4rem] font-bold">
								{t("contact-details")}
							</h3>
							<h4 className="font-clash text-[2rem]">
								michael.ungar03@gmail.com
							</h4>
							<a className="font-clash text-[2rem]" href="tel:004367761451490">
								+43 677 614 514 90
							</a>
						</div>
						<div className="">
							<h3 className="font-clash text-[2.4rem] font-bold">
								{t("location")}
							</h3>
							<h4 className="font-clash text-[2rem]">
								Ried im Innkreis,{" "}
								<Clock
									format={"HH:mm:ss"}
									ticking={true}
									timezone={"Europe/Vienna"}
								/>
							</h4>
						</div>
						<div className="mb-4 mt-4">
							<h3 className="font-clash text-[2.4rem] font-bold">
								{t("qualifications")}
							</h3>
							<a href="https://bento.me/ungarmichael">
								<h4 className="font-clash text-[2rem]">{t("cv")}</h4>
							</a>
							<a href="https://github.com/ungarmichael">
								<h4 className="font-clash text-[2rem]">Graduation Paper</h4>
							</a>
							<a href="https://youtube.com/@ungarmichael">
								<h4 className="font-clash text-[2rem]">
									selbststudium.ungarmichael.me
								</h4>
							</a>
						</div>
						<div className="mb-4 mt-4">
							<h3 className="font-clash text-[2.4rem] font-bold">
								{t("digital-spaces")}
							</h3>
							<a href="https://bento.me/ungarmichael">
								<h4 className="font-clash text-[2rem]">Bento</h4>
							</a>
							<a href="https://github.com/ungarmichael">
								<h4 className="font-clash text-[2rem]">GitHub</h4>
							</a>
							<a href="https://youtube.com/@ungarmichael">
								<h4 className="font-clash text-[2rem]">YouTube</h4>
							</a>
						</div>
						<div className="h-[100px]"></div>
					</div>
				</section> */
}
