import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageContact = dynamic(() => import("@/components/pageContent/PageContact"));

export default function Event() {
	return (
		<MasterPage pageName={"Contact"} activeNav={-1}>
			<PageContact />
		</MasterPage>
	);
}
