import gsap from "gsap";

const UmFooter = () => {
	let t: gsap.core.Timeline = null;
	return (
		<footer className="font-clash	 w-full p-2 box-border bottom-0 flex justify-between font-semibold">
			<span className=" h-[1.2rem] overflow-hidden flex ">
				<span className="h-[1.2rem] leading-[1em]">202</span>
				<span
					id="parent-span"
					className="flex flex-col cursor-pointer"
					onMouseEnter={(e) => {
						t = gsap
							.timeline({ repeat: -1 })
							.to("#parent-span", {
								marginTop: "-100px",
								duration: 3,
							})
							.to("#parent-span", {
								marginTop: "0px",
								duration: 0.1,
							});

						t.play();
					}}
					onMouseLeave={(e) => {
						t.pause();
						gsap.to("#parent-span", {
							marginTop: "0px",
						});
					}}
				>
					<span className="leading-[1em]">4</span>
					<span className="leading-[1em]">5</span>
					<span className="leading-[1em]">6</span>
					<span className="leading-[1em]">7</span>
					<span className="leading-[1em]">8</span>
					<span className="leading-[1em]">9</span>
				</span>
			</span>
			<p
				onMouseEnter={(e) => {
					gsap.to(e.target, {
						rotateY: 360,
					});
				}}
				onMouseLeave={(e) => {
					gsap.to(e.target, {
						rotateY: 0,
					});
				}}
			>
				ungarmichael
			</p>
		</footer>
	);
};
export default UmFooter;
