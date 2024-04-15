import { useRouter } from "next/router";

const PopUp = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => {
				router.push("/");
			}}
		>
			<h1>Hold up</h1>
			<h2>Before you continue</h2>
			<div></div>
		</div>
	);
};

export default PopUp;
