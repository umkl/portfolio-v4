import gsap from "gsap";

const UmFooter = () => {
	let t: gsap.core.Timeline = null;
	return (
		<footer className="font-clash z-50 w-full p-4 box-border bottom-0 flex justify-between font-semibold">
			<p className=" h-[1.2rem]  ">2024</p>
			<p
				className=" h-[1.2rem] cursor-pointer"
				onMouseEnter={(e) => {
					gsap.to(e.target, {
						rotateX: 30,
						rotateY: 30,
					});
				}}
				onMouseLeave={(e) => {
					gsap.to(e.target, {
						rotateX: 0,
						rotateY: 0,
						rotateZ: 0,
					});
				}}
			>
				ungarmichael
			</p>
		</footer>
	);
};
export default UmFooter;
