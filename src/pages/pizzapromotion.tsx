import dynamic from "next/dynamic";

const MasterPage = dynamic(() => import("@/components/master/MasterPage"));
const PagePizzaPromotion = dynamic(() => import("@/components/pageContent/PagePizzaPromotion"));

export default function Event() {
	return (
		<MasterPage pageName={"Pizza Promotion"} activeNav={-1}>
			<PagePizzaPromotion />
		</MasterPage>
	);
}
