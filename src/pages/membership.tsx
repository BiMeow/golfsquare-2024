import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageMembership = dynamic(() => import("@/components/pageContent/PageMembership"));

export default function Membership() {
	return (
		<MasterPage pageName={"Membership"} activeNav={3}>
			<PageMembership />
		</MasterPage>
	);
}
