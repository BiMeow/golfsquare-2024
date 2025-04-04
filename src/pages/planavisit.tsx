import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PagePlanAVisit = dynamic(() => import("@/components/pageContent/PagePlanAVisit"));

export default function PlanAVisit() {
	return (
		<MasterPage pageName={"Plan a visit"} activeNav={2}>
			<PagePlanAVisit />
		</MasterPage>
	);
}
