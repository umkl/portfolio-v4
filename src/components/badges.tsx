import Image from "next/image";

export const UiUxBadge = () => {
	return (
		<Badge
			img={"/svgs/service-icons/icon-ui_ux-design.svg"}
			name={"UI/UX Desgin"}
		/>
	);
};

export const FrontendBadge = () => {
	return (
		<Badge
			img={"/svgs/service-icons/icon-frontend-dev.svg"}
			name={"Frontend Development"}
		/>
	);
};

const Badge = ({ img, name }: { img: string; name: string }) => {
	return (
		<div className="relative m-8">
			<Image className="relative" src={img} alt={""} width={200} height={100} />
			<p className="absolute font-clash uppercase whitespace-nowrap text-center w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-neutral-200 text-2xl ">
				{name}
			</p>
		</div>
	);
};
