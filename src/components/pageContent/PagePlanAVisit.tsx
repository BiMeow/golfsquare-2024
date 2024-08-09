import { useStorage } from "@/components/context/StorageProvider";
import SectionContact from "@/components/sections/common/SectionContact";
import SectionVisitBanner from "@/components/sections/planavisit/SectionVisitBanner";
import SectionVisitCelebration from "@/components/sections/planavisit/SectionVisitCelebration";
import SectionVisitCoach from "@/components/sections/planavisit/SectionVisitCoach";
import SectionVisitFNB from "@/components/sections/planavisit/SectionVisitFNB";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PagePlanAVisit({ ...props }) {
	const router = useRouter();

	const { setIsModalRegisterOpen } = useStorage();

	const [pageContent, setPageContent] = useState<any>();

	const getPageContent = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/PLAN`);
		const res = await ApiCall.json();

		if (res.status) {
			setPageContent(res.data?.content);
		}
	};

	useEffect(() => {
		getPageContent();
		setTimeout(() => {
			setIsModalRegisterOpen(true);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`PagePlanAVisit`}>
				{pageContent?.hero && <SectionVisitBanner data={pageContent?.hero} />}
				{pageContent?.fab && <SectionVisitFNB data={pageContent?.fab} dataTry={pageContent?.tor} />}
				{pageContent?.coach && <SectionVisitCoach data={pageContent?.coach} />}
				{pageContent?.celebrations && <SectionVisitCelebration data={pageContent?.celebrations} />}
				<SectionContact />
			</div>
		</>
	);
}

export default memo(PagePlanAVisit);
