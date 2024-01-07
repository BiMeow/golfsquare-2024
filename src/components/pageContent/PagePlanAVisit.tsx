import SectionContact from "@/components/sections/common/SectionContact";
import SectionVisitBanner from "@/components/sections/planavisit/SectionVisitBanner";
import SectionVisitCelebration from "@/components/sections/planavisit/SectionVisitCelebration";
import SectionVisitCoach from "@/components/sections/planavisit/SectionVisitCoach";
import SectionVisitFNB from "@/components/sections/planavisit/SectionVisitFNB";
import { useRouter } from "next/router";
import { memo } from "react";

function PagePlanAVisit({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PagePlanAVisit`}>
				<SectionVisitBanner />
				<SectionVisitFNB />
				<SectionVisitCoach />
				<SectionVisitCelebration />
				<SectionContact />
			</div>
		</>
	);
}

export default memo(PagePlanAVisit);
