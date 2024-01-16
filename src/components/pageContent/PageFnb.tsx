import SectionReady from "@/components/sections/common/SectionReady";
import SectionFnbListImg from "@/components/sections/fnb/SectionFnbListImg";
import SectionFnbNewDish from "@/components/sections/fnb/SectionFnbNewDish";
import { useRouter } from "next/router";
import { memo } from "react";

function PageFnb({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PageFnb relative overflow-hidden pt-[200px] mb:pt-[100px]`}>
				<div className="cusContainer">
					<img src="/images/fnb/top.png" alt="" className="mx-auto mb-[50px] w-full max-w-[1030px]" />

					<div className="mb-[100px] flex justify-center mb:mb-[60px]">
						<button className="mainBtn">View menu</button>
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
