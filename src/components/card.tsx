const CardComponent = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<a
			href="ggl.com"
			className="group rounded-lg border border-transparent py-4 px-6 transition-colors  hover:border-gray-300  "
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={` text-3xl text-left  text-[#C2CAD1]`}>
				<span className="font-clash ">{name} </span>
				<span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none font-bold font-inter ">
					-&gt;
				</span>
			</h2>
			<p
				className={`m-0 max-w-[30ch] text-left text-[1.1em] opacity-50 font-bold text-[#81899B]`}
			>
				{desc}
			</p>
		</a>
	);
};

export default CardComponent;
