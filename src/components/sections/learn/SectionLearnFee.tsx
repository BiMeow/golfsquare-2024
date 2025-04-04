import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function SectionLearnFee({ title = "Lesson Package Fees (Off-Peak Rate Only)", data, ...props }: any) {
	const router = useRouter();

	const [activeTab, setActiveTab] = useState<any>(0);

	useEffect(() => {
		//gsap.timeline().fromTo(".feeContent", { y: 200 }, { y: 0 });
	}, [activeTab]);

	let listTab = [
		{
			title: data?.name,
			individualFee: data?.individualLesson,
			groupFee: data?.groupLesson,
			desc: data?.detail,
		},
		{
			title: data?.name1,
			individualFee: data?.individualLesson1,
			groupFee: data?.groupLesson1,
			desc: data?.detail1,
		},
		{
			title: data?.name2,
			individualFee: data?.individualLesson2,
			groupFee: data?.groupLesson2,
			desc: data?.detail2,
		},
		{
			title: data?.name3,
			individualFee: data?.individualLesson3,
			groupFee: data?.groupLesson3,
			desc: data?.detail3,
		},
	];

	return (
		<>
			<div className={`SectionLearnFee secSpacing`}>
				<h2 className="text-36 fadeUp mb-[60px] px-[10%] tl-l:px-[20px] mb:mb-[25px]">{title}</h2>

				<div className="cusContainer fadeUp hideScrollbar mb-[50px] overflow-y-hidden overflow-x-scroll mb:mb-[40px] mb:pr-0">
					<div className="listTab flex items-center space-x-[60px] mb:w-fit mb:max-w-none mb:space-x-[30px] mb:pr-[20px]">
						{listTab.map((e: any, i: number) => (
							<div
								className={`
								itemTab text-24 relative cursor-pointer whitespace-nowrap pb-[15px] duration-300
								${activeTab == i ? "font-bold text-red" : "font-medium text-[#55596f] hover:opacity-75"}
								`}
								key={i}
								onClick={() => setActiveTab(i)}
							>
								<p>{e.title}</p>
								<div
									className={`
									borderTab absolute bottom-0 left-0 h-[6px] w-full bg-red duration-500
									${activeTab == i ? "max-w-[200px]" : "max-w-0"}
									`}
								></div>
							</div>
						))}
					</div>
				</div>

				<div className="cusContainer">
					<div className="feeContent flex flex-wrap items-center overflow-hidden rounded-[6px] bg-[#0C2C44]">
						<div className="c1 fadeIn w-1/2 mb:w-full">
							<img src={data?.bg ? asset(data?.bg) : "/images/learn/fee.jpg"} alt="" className="aspect-[56/67] w-full object-cover" />
						</div>

						<div className="c2 w-1/2 py-[40px] mb:mt-[-50px] mb:w-full mb:p-[20px] mb:pt-0">
							<div className="fadeLeft">
								<div className="box mb-[40px] translate-x-[-10%] rounded-[6px] bg-red px-[40px] py-[50px] mb:mb-[30px] mb:translate-x-0 mb:px-[20px] mb:py-[30px]">
									<h3 className="mb-[20px] border-b-2 border-[#fff9] pb-[20px] text-[32px] font-bold">{listTab[activeTab]?.title}</h3>
									<div className="flex flex-wrap justify-between gap-y-[25px]">
										<div className="mb:flex mb:w-full mb:items-center mb:justify-between">
											<p className="text-[14px] font-bold text-[#fff9] mb:w-1/2">Individual Lesson</p>
											<p className="font-GilroyBlack text-[30px] font-bold mb:mx-auto mb:text-[24px]">{listTab[activeTab]?.individualFee}</p>
										</div>
										<div className="mb:flex mb:w-full mb:items-center mb:justify-between">
											<p className="text-[14px] font-bold text-[#fff9] mb:w-1/2">Group Lesson (Max 2 in a Group)/pax</p>
											<p className="font-GilroyBlack text-[30px] font-bold mb:mx-auto mb:text-[24px]">{listTab[activeTab]?.groupFee}</p>
										</div>
									</div>
								</div>
							</div>

							<div className="content fadeUp px-[40px] mb:px-0">
								<div className="contentEditor" dangerouslySetInnerHTML={{ __html: listTab[activeTab]?.desc }}></div>
								{/* <p className="mb-[16px] font-bold mb:text-[18px]">Details:</p>
								<div className="listDetail mb-[40px] space-y-[14px] pl-[10px]">
									{["Period: N/A", "Simulator (9 Hole) - 1 hour", "Field Lesson: $200"].map((e: any, i: number) => (
										<div className="itemDetail flex items-center">
											<div className="mr-[10px] aspect-1 w-[4px] bg-red"></div>
											<p className="text-[14px]">{e}</p>
										</div>
									))}
								</div>
								<p className="text-[14px] italic">
									*50 minutes lesson time at the bay indoor practice facility (Offset bay fee).
									<br />
									<br />
									*2:1 golf lessons with an instructor (Max 2 people). $50 Bay Club fee for the guest student.
								</p> */}
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.borderTab {
					clip-path: polygon(4% 0, 100% 0, 96% 100%, 0% 100%);
				}
			`}</style>
		</>
	);
}

export default memo(SectionLearnFee);
