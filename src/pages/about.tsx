import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PageAbout = dynamic(() => import("@/components/pageContent/PageAbout"));

export default function Home() {
	return (
		<MasterPage pageName={"About"} activeNav={0}>
			<PageAbout />
		</MasterPage>
	);
}
