"use client";
import Image from "next/image";
import { useEffect } from "react";

const ExperienceSection = () => {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			console.log("scroll");
		});
	}, []);

	return (
		<>
			<h2>Sticky Element: Scroll Down to See the Effect</h2>
			<p>Scroll down this page to see how sticky positioning works.</p>
			<div className="wrapper">
				asjdflskj
				<div className="sticky">
					I will stick to the screen when you reach my scroll position
				</div>
				<div className="daitem"></div>
			</div>

			<p>Some example text..</p>
			<h2>Scroll back up again to "remove" the sticky position.</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
				imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
				scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
				congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
				aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
				Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
				sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
				sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
				tellus gravida venenatis. Integer fringilla congue eros non fermentum.
				Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
				diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
				vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
				ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
				augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
				in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
				congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
				In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
				dui eget tellus gravida venenatis. Integer fringilla congue eros non
				fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
				Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
				lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
				Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
				luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
				ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
				hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
				dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
				turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
				congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
				ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
				interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
				venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
				vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
				ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
				urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
				nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
				venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
				gravida venenatis. Integer fringilla congue eros non fermentum. Sed
				dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
				velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
				vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
				ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
				augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
				in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
				congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
				In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
				dui eget tellus gravida venenatis. Integer fringilla congue eros non
				fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
				Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
				lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
				Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
				luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
				ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
				hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
				dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
				turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
				congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
				ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
				interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
				venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
				vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
				ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
				urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
				nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
				venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
				gravida venenatis. Integer fringilla congue eros non fermentum. Sed
				dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
				velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
				vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
				ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
				augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
				in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
				congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
				In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
				dui eget tellus gravida venenatis. Integer fringilla congue eros non
				fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
				Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
				lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
				Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
				luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
				ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
				hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
				dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
				turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
				congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
				ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
				interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
				venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
				vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
				ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
				urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
				nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
				venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
				gravida venenatis. Integer fringilla congue eros non fermentum. Sed
				dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
				velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
				vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
				ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
				augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
				in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
				congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
				In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
				dui eget tellus gravida venenatis. Integer fringilla congue eros non
				fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
				Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
				lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
				Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
				luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
				ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
				hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
				dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
				turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
				congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
				ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
				interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
				venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
				vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
				ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
				urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
				nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
				venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
				gravida venenatis. Integer fringilla congue eros non fermentum. Sed
				dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
				velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
				vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
				ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
				augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
				in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
				congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
				In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
				dui eget tellus gravida venenatis. Integer fringilla congue eros non
				fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
				Mauris quis diam velit.Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
				lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
				Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
				luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
				ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
				hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
				dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
				turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
				congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
				ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
				interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
				venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
				vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
				ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
				urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
				nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
				venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
				gravida venenatis. Integer fringilla congue eros non fermentum. Sed
				dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
				velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
				vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
				ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
				augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
				in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
				congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
				In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
				dui eget tellus gravida venenatis. Integer fringilla congue eros non
				fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
				Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
				lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
				Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
				luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
				ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
				hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
				dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
				turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
				congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
				ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
				interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
				venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
				vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
				ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
				urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
				nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
				venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
				gravida venenatis. Integer fringilla congue eros non fermentum. Sed
				dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
				velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
				vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
				ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
				augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
				in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
				congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
				In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
				dui eget tellus gravida venenatis. Integer fringilla congue eros non
				fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
				Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
				lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
				Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
				luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
				ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
				hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
				dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
				turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
				congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
				ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
				interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
				venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
				vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
				ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
				urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
				nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
				venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
				gravida venenatis. Integer fringilla congue eros non fermentum. Sed
				dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
				velit.
			</p>
		</>
		// <div className="h-fit w-full art-bg">
		// 	<div className="py-8 relative">
		// 		<h1 className="font-druk text-[2.7em] lg:text-8xl leading-10 font-medium text-[#c2cad100] drop-shadow-[0_0_0.3rem_#ffffff70] text-center font-outline-2">
		// 			experiences
		// 		</h1>
		// 		<h2 className="font-druk text-[2.7em] lg:text-2xl leading-10 font-medium text-[#c2cad193] drop-shadow-[0_0_0.3rem_#ffffff70]  text-center  max-w-[600px] left-1/2 relative -translate-x-1/2 mt-2">
		// 			places were I got to experience things related to work
		// 		</h2>
		// 	</div>

		// 	<div className="flex justify-center relative left-1/2 -translate-x-1/2 w-full  h-fit">
		// 		<div className="w-full h-fit">

		// 			<div className="w-full h-fit flex">
		// 				<div className="flex-1 ">
		// 					<div className="h-[200px]"></div>
		// 					<ExperienceCard />
		// 					<ExperienceCard />
		// 					<ExperienceCard />
		// 				</div>
		// 				<div className="w-32 "></div>
		// 				<div className="flex-1">
		// 					<ExperienceCard />
		// 					<ExperienceCard />
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default ExperienceSection;

const ExperienceCard = () => {
	return (
		<div className=" w-full">
			<div className="w-full h-full p-[50px] flex flex-col ">
				<Image
					src="/coding.png"
					alt="Vercel Logo"
					className="drop-shadow-[0_0_0.3rem_#ffffff20]"
					style={{
						width: "100%",
						height: "auto",
					}}
					width={500}
					height={300}
					priority
				/>
				<h1
					className={`font-clash text-6xl  drop-shadow-[0_0_0.3rem_#ffffff70]`}
				>
					asdf
				</h1>
				<p className={`font-inter text-md  text-[#C2CAD1]`}>
					before I start a project I always like to spill out all of my thoughts
					on a piece of paper so I can fuel my creativity and don’t have to
					think too much about the business logic during the implementation
					phase
				</p>
			</div>
		</div>
	);
};
