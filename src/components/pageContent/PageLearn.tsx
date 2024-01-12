import SectionLearnFee from "@/components/sections/learn/SectionLearnFee";
import SectionLearnJunior from "@/components/sections/learn/SectionLearnJunior";
import SectionLearnTop from "@/components/sections/learn/SectionLearnTop";
import { useRouter } from "next/router";
import { memo } from "react";

function PageLearn({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PageLearn relative overflow-hidden pt-[180px]`}>
				<SectionLearnTop />
				<SectionLearnFee />
				<SectionLearnJunior />
			</div>
		</>
	);
}

export default memo(PageLearn);
