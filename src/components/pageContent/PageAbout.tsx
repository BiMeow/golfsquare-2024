import SectionAboutFacilities from "@/components/sections/about/SectionAboutFacilities";
import SectionAboutFunBetter from "@/components/sections/about/SectionAboutFunBetter";
import SectionAboutIntro from "@/components/sections/about/SectionAboutIntro";
import SectionAboutSimulator from "@/components/sections/about/SectionAboutSimulator";
import SectionAboutWhy from "@/components/sections/about/SectionAboutWhy";
import SectionContact from "@/components/sections/common/SectionContact";
import { useRouter } from "next/router";
import { memo } from "react";

function PageAbout({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PageAbout pt-[200px]`}>
				<SectionAboutIntro />
				<SectionAboutFacilities />
				<SectionAboutWhy />
				<SectionAboutFunBetter />
				<SectionAboutSimulator />
				<SectionContact />
			</div>
		</>
	);
}

export default memo(PageAbout);
