import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageEvents = dynamic(() => import("@/components/pageContent/PageEvents"));

export default function Event() {
	return (
		<MasterPage pageName={"Parties & Events"} activeNav={5} activeSubNav={1}>
			<PageEvents />
		</MasterPage>
	);
}
