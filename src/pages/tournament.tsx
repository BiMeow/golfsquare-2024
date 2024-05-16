import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageTournament = dynamic(() => import("@/components/pageContent/PageTournament"));

export default function Event() {
	return (
		<MasterPage pageName={"Tournament"} activeNav={-1}>
			<PageTournament />
		</MasterPage>
	);
}
