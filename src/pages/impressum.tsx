import Curve from "@um-p4/components/Curve";
import { GoBack } from "./services";

const ImpressumPage = () => {
	return (
		<Curve>
			<GoBack />
			<div className="h-fit w-full flex justify-center p-10">
				<div className="max-w-[1200px] w-full mb-[100px] impressum-text-styling">
					<h1>Impressum</h1>
					<p>
						Informationspflicht laut §5 E-Commerce Gesetz, §14
						Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht
						laut §25 Mediengesetz.
					</p>
					&nbsp;
					<p className=" !text-neutral-300">Michael Ungar</p>
					<p>4932 Kirchheim · Österreich</p>
					&nbsp;
					<p>
						<span>Mail:</span>{" "}
						<a
							className="!text-neutral-200 hover:font-medium"
							href="mailto:michael.ungar03@gmail.com"
						>
							michael.ungar03@gmail.com
						</a>
						<br />
						<span>Phone:</span>
						<a
							className="!text-neutral-200 hover:font-medium"
							href="tel:+43 677 614 514 90"
						>
							+43 677 614 514 90
						</a>
						<br />
						<span>VAT No.:</span> ATU75538946
					</p>
					&nbsp;
					<p>
						Unternehmensgegenstand: Erstellung, Vertrieb und Wartung von
						Software.
					</p>
					<h2>Static Web Hosting</h2>
					<p>
						Our website is hosted on Vercel. Vercel offers a content delivery
						network, or CDN. They store a copy of this website on many servers
						around the world, so no matter where you are, the website is
						delivered quickly. Vercel has access to your HTTP request, the
						website request required to view this website or any other website.
						This request includes your IP address and a user agent, a string
						with the name of your browser and the version you are using.
					</p>
					&nbsp;
					<p>
						If you have any questions, please contact us by email at&nbsp;
						<a
							href="mailto:michael.ungar03@gmail.com"
							className="text-neutral-300"
						>
							michael.ungar03@gmail.com
						</a>
					</p>
					&nbsp;
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
