import SectionHomeAbout from "@/components/sections/home/SectionHomeAbout";
import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeHaveFun from "@/components/sections/home/SectionHomeHaveFun";
import SectionHomeYourChance from "@/components/sections/home/SectionHomeYourChance";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageHome({ ...props }) {
	const router = useRouter();

	const [pageContent, setPageContent] = useState<any>();

	const getPageContent = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/HOME`);
		const res = await ApiCall.json();

		if (res.status) {
			setPageContent(res.data?.content);
		}
	};

	useEffect(() => {
		getPageContent();
	}, []);

	console.log(`BiMeow log pageContent`, pageContent);

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
