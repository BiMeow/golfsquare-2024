import SectionAboutFacilities from "@/components/sections/about/SectionAboutFacilities";
import SectionAboutFunBetter from "@/components/sections/about/SectionAboutFunBetter";
import SectionAboutIntro from "@/components/sections/about/SectionAboutIntro";
import SectionAboutSimulator from "@/components/sections/about/SectionAboutSimulator";
import SectionAboutWhy from "@/components/sections/about/SectionAboutWhy";
import SectionContact from "@/components/sections/common/SectionContact";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageAbout({ ...props }) {
	const router = useRouter();

	const [pageContent, setPageContent] = useState<any>();

	const getPageContent = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/ABOUT`);
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
			<div className={`PageAbout pt-[230px] mb:pt-[120px]`}>
				<SectionAboutIntro data={pageContent?.abouts} banner={pageContent?.banner} />
				<SectionAboutFacilities data={pageContent?.facilities} />
				<SectionAboutWhy data={pageContent?.golfSquare} />
				<SectionAboutFunBetter data={pageContent?.golfSquare} />
				<SectionAboutSimulator data={pageContent?.simulator} />
				<SectionContact />
			</div>
		</>
	);
}

export default memo(PageAbout);
