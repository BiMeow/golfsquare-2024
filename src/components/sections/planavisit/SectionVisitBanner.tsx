import { IconPlay } from "@/components/elements/Icon";
import { useRouter } from "next/router";
import { memo } from "react";

function SectionVisitBanner({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionVisitBanner relative mb-[40px]`}>
				<img src="/images/visit/banner.jpg" alt="" className="aspect-[145/84] object-cover mb:aspect-[375/780]" />
				<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
					<h2 className="mb-[40px] text-center text-[90px] font-bold mb:text-[52px]">
						MORE THAN <br /> JUST <span className="text-red">GOLF</span>
					</h2>
					<button className="mainBtn">PLAN A VISIT</button>
				</div>
			</div>
		</>
	);
}

export default memo(SectionVisitBanner);
