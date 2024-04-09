import Curve from "@um-p4/components/Curve";

const ImpressumPage = () => {
	return (
		<Curve>
			<div className="bg-pr-900 h-screen w-full p-10">
				<h1 className="font-clash text-white text-[4rem] font-bold">
					Impressum
				</h1>
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
