import { IconPlay } from "@/components/elements/Icon";
import { useRouter } from "next/router";
import { memo } from "react";

function SectionHomeBanner({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionHomeBanner secSpacing relative`}>
				<img src="/images/home/banner.jpg" alt="" className="aspect-[144/84] object-cover" />
				<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
					<h2 className="text-64 mb-[16px] text-center">
						WE DON’T MAKE FUN, <br /> WE MAKE FUN BETTER
					</h2>
					<div className="hoverShadow mb-[50px] flex aspect-1 w-[74px] cursor-pointer items-center justify-center rounded-full border-4 border-red fill-red duration-500 hover:border-white hover:fill-white">
						<IconPlay />
					</div>
					<button className="mainBtn">BOOK A TABLE</button>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeBanner);
