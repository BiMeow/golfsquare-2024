import SectionHomeAbout from "@/components/sections/home/SectionHomeAbout";
import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeHaveFun from "@/components/sections/home/SectionHomeHaveFun";
import SectionHomeYourChance from "@/components/sections/home/SectionHomeYourChance";
import { useRouter } from "next/router";
import { memo } from "react";

function PageHome({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PageHome`}>
				<SectionHomeBanner />
				<SectionHomeAbout />
				<SectionHomeHaveFun />
				<SectionHomeYourChance />
			</div>
		</>
	);
}

export default memo(PageHome);
