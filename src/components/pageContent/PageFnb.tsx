import SectionReady from "@/components/sections/common/SectionReady";
import SectionFnbListImg from "@/components/sections/fnb/SectionFnbListImg";
import SectionFnbNewDish from "@/components/sections/fnb/SectionFnbNewDish";
import { useRouter } from "next/router";
import { memo } from "react";

function PageFnb({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PageFnb relative overflow-hidden pt-[230px] mb:pt-[120px]`}>
				<div className="cusContainer">
					<img src="/images/fnb/top.png" alt="" className="fadeUp mx-auto mb-[50px] w-full max-w-[1030px]" />

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
				<SectionFnbNewDish />
				<SectionFnbListImg />
				<SectionReady />
			</div>
		</>
	);
}

export default memo(PageFnb);
