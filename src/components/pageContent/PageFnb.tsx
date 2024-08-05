import SectionReady from "@/components/sections/common/SectionReady";
import SectionFnbListImg from "@/components/sections/fnb/SectionFnbListImg";
import SectionFnbNewDish from "@/components/sections/fnb/SectionFnbNewDish";
import asset from "@/utils/asset";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageFnb({ ...props }) {
	const router = useRouter();

	const [pageContent, setPageContent] = useState<any>();

	const getPageContent = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/FAB`);
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
			<div className={`PageFnb relative overflow-hidden pt-[230px] mb:pt-[120px]`}>
				{pageContent?.banner && (
					<div className="cusContainer">
						<img
							src={pageContent?.banner?.bg ? asset(pageContent?.banner?.bg) : "/images/fnb/top.png"}
							alt=""
							className="fadeUp mx-auto mb-[50px] w-full max-w-[1030px]"
						/>

						<div className="fadeUp mb-[100px] flex justify-center space-x-[20px] mb:mb-[60px]">
							<a
								target="_blank"
								href="https://widget.wabify.com/654c28d3b73e21699490003?fbclid=IwAR0wEo9lXXHkiQBw6klSfamYZa420cvw9RdOJc3jQNhOTMXXmthns_2y-dw"
							>
								<button className="mainBtn">BOOK NOW</button>
							</a>

							<a target="_blank" href="/menu.pdf#toolbar=0">
								<button className="mainBtn">MENU</button>
							</a>
						</div>
					</div>
				)}
				{pageContent?.dishes && <SectionFnbNewDish data={pageContent?.dishes} bestSeller={pageContent?.bestSeller} />}
				{pageContent?.square && <SectionFnbListImg data={pageContent?.square} />}
				<SectionReady />
			</div>
		</>
	);
}

export default memo(PageFnb);
