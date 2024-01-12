import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageLearn = dynamic(() => import("@/components/pageContent/PageLearn"));

export default function Learn() {
	return (
		<MasterPage pageName={"Learn"} activeNav={4}>
			<PageLearn />
		</MasterPage>
	);
}
