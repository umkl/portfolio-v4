import { useEffect, useState } from "react";

const ScrollIndicator = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const handleScroll = () => {
		const documentHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		const scrollPosition = window.pageYOffset;

		// Calculate the scroll percentage
		const percentage = (scrollPosition / documentHeight) * 100;

		setScrollPercentage(percentage);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="scroll-indicator-container ">
			<div
				className="scroll-indicator"
				style={{ width: `${scrollPercentage}%` }}
			></div>
		</div>
	);
};

export default ScrollIndicator;
