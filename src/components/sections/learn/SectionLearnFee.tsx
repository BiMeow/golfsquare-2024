import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

let listTab = [
	{
		title: "1 Lesson",
	},
	{
		title: "5 Lessons Package",
	},
	{
		title: "10 Lessons Package",
	},
	{
		title: "20 Lessons Package",
	},
];

function SectionLearnFee({ title = "Lesson Package Fees (Off-Peak Rate Only)", ...props }) {
	const router = useRouter();

	const [activeTab, setActiveTab] = useState<any>(0);

	useEffect(() => {
		//gsap.timeline().fromTo(".feeContent", { y: 200 }, { y: 0 });
	}, [activeTab]);

	return (
		<>
			<div className={`SectionLearnFee secSpacing`}>
				<div className="cusContainer">
					<h2 className="text-36 mb-[60px]">{title}</h2>

					<div className="listTab mb-[50px] flex items-center space-x-[60px]">
						{listTab.map((e: any, i: number) => (
							<div
								className={`
								itemTab text-24 relative cursor-pointer pb-[8px] duration-300
								${activeTab == i ? "font-bold text-red" : "font-medium text-[#55596f] hover:opacity-75"}
								`}
								key={i}
								onClick={() => setActiveTab(i)}
							>
								<p>{e.title}</p>
								<div
									className={`
									borderTab absolute left-0 top-full h-[6px] w-full bg-red duration-500
									${activeTab == i ? "max-w-[200px]" : "max-w-0"}
									`}
								></div>
							</div>
						))}
					</div>

					<div className="feeContent flex items-center overflow-hidden rounded-[6px] bg-[#0C2C44]">
						<div className="c1 w-1/2">
							<img src="/images/learn/fee.jpg" alt="" className="aspect-[56/67] w-full object-cover" />
						</div>

						<div className="c2 w-1/2 py-[40px]">
							<div className="box mb-[40px] translate-x-[-10%] rounded-[6px] bg-red px-[40px] py-[50px]">
								<h3 className="mb-[20px] border-b-2 border-[#fff9] pb-[20px] text-[32px] font-bold">{listTab[activeTab].title}</h3>
								<div className="flex justify-between">
									<div>
										<p className="text-[14px] font-bold text-[#fff9]">Individual Lesson</p>
										<p className="font-GilroyBlack text-[30px] font-bold">$150</p>
									</div>
									<div>
										<p className="text-[14px] font-bold text-[#fff9]">Group Lesson (Max 2 in a Group)/pax</p>
										<p className="font-GilroyBlack text-[30px] font-bold">$120</p>
									</div>
								</div>
							</div>

							<div className="content px-[40px]">
								<p className="mb-[16px] font-bold">Details:</p>
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
								</p>
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
