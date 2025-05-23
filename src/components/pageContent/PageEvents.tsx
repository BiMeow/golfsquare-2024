import SectionReady from "@/components/sections/common/SectionReady";
import SectionEventList from "@/components/sections/event/SectionEventList";
import SectionEventListImg from "@/components/sections/event/SectionEventListImg";
import SectionHomeAbout from "@/components/sections/home/SectionHomeAbout";
import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeHaveFun from "@/components/sections/home/SectionHomeHaveFun";
import SectionHomeYourChance from "@/components/sections/home/SectionHomeYourChance";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageEvents({ ...props }) {
	const router = useRouter();

	const [pageContent, setPageContent] = useState<any>();

	const getPageContent = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/EVENTS`);
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
			<div className={`PageEvents relative overflow-hidden pt-[230px] mb:pt-[120px]`}>
				<img src="/images/event/bg.jpg" alt="" className="absolute left-0 top-0 w-full mb:hidden" />
				<img src="/images/event/bg-mb.jpg" alt="" className="ob absolute left-0 top-0 hidden w-full mb:block" />

				<div className="relative z-10">
					<div className="cusContainer">
						<h2 className="fadeUp mb-[25px] text-center text-[90px] font-bold mb:mb-[30px] mb:text-[52px]">
							PARTIES &
							<br />
							<span className="text-red">EVENTS</span>
						</h2>
						<p className="fadeUp mx-auto mb-[100px] max-w-[920px] text-center font-GilroyMedium mb:mb-[60px]">{pageContent?.banner?.description}</p>
					</div>
					<SectionEventList highlights={pageContent?.highlights} squareGolf={pageContent?.squareGolf} />
					<SectionEventListImg data={pageContent?.square} />
					<SectionReady />
				</div>
			</div>
		</>
	);
}

export default memo(PageEvents);
