import Curve from "@um-p4/components/Curve";
import UmFooter from "@um-p4/components/UmFooter";

const Page = () => {
	return (
		<Curve>
			<div className="flex flex-col min-h-screen">
				<h1 className="font-clash text-[6em] leading-[1em] whitespace-wrap uppercase font-bold">
					frontend development
				</h1>
				<h2 className="font-clash text-[4em] leading-[1em] mt-2 mb-4 whitespace-wrap uppercase font-normal">
					the process from getting a design concept to the actual customer
				</h2>
				<h3 className="font-clash text-[2em] leading-[1em] mt-2 mb-4 whitespace-wrap font-normal">
					I have been developing web applications since 2019 in the beginning
					mostly for educational purposes.
				</h3>
				<div className="flex-1 w-full"></div>
				<UmFooter />
			</div>
		</Curve>
	);
};

export default Page;
