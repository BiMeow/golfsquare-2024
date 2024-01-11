import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageFnb = dynamic(() => import("@/components/pageContent/PageFnb"));

export default function Membership() {
	return (
		<MasterPage pageName={"Membership"} activeNav={5} activeSubNav={1}>
			<PageFnb />
		</MasterPage>
	);
}
