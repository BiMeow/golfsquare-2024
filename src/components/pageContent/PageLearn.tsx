import SectionLearnFee from "@/components/sections/learn/SectionLearnFee";
import SectionLearnJunior from "@/components/sections/learn/SectionLearnJunior";
import SectionLearnTop from "@/components/sections/learn/SectionLearnTop";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageLearn({ ...props }) {
	const router = useRouter();

	const [pageContent, setPageContent] = useState<any>();

	const getPageContent = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/LEARN`);
		const res = await ApiCall.json();

		if (res.status) {
			setPageContent(res.data?.content);
		}
	};

	useEffect(() => {
		getPageContent();
	}, []);

	return (
		<>
			<div className={`PageLearn relative overflow-hidden`}>
				{pageContent?.banner && <SectionLearnTop banner={pageContent?.banner} />}
				<SectionLearnFee data={pageContent?.lessonPackageFees} />
				<SectionLearnJunior data={{ info: pageContent?.juniorGolf, fee: pageContent?.juniorLessonFees, timing: pageContent?.lessonTimming }} />
			</div>
		</>
	);
}

export default memo(PageLearn);
