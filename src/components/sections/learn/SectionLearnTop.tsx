import asset from "@/utils/asset";
import { useRouter } from "next/router";
import { memo } from "react";

function SectionLearnTop({ banner, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionLearnTop secSpacing relative`}>
				<img
					src={banner?.bg ? asset(banner?.bg) : "/images/learn/top-man.jpg"}
					alt=""
					className="fadeIn aspect-[216/125] w-full object-cover mb:hidden"
				/>
				<img src="/images/learn/top-man-mb.jpg" alt="" className="fadeIn mb-[30px] hidden w-full mb:block" />

				<div className="content absolute left-0 top-0 h-full w-full mb:relative mb:px-[20px]">
					<div className="ml-auto w-fit pr-[25%] pt-[24%] mb:p-0">
						<h2 className="fadeUp mb-[20px] text-[90px] font-bold mb:text-[52px]">
							GET INTO
							<br />
							<span className="text-red">GOLF</span>
						</h2>
						{banner?.description && <p className="fadeUp mb-[20px] max-w-[495px] text-[16px] mb:max-w-none mb:text-[14px]">{banner?.description}</p>}
						<div className="fadeUp">
							<a target="_blank" href="https://swingsyncgolfacademy.as.me/schedule.php">
								<button className="mainBtn">BOOK LESSON NOW</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionLearnTop);
