import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageFnb = dynamic(() => import("@/components/pageContent/PageFnb"));

export default function Fnb() {
	return (
		<MasterPage pageName={"F&B"} activeNav={5} activeSubNav={0}>
			<PageFnb />
		</MasterPage>
	);
}
