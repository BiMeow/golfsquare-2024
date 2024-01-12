import SectionLearnFee from "@/components/sections/learn/SectionLearnFee";
import { useRouter } from "next/router";
import { memo } from "react";

let listFeature = [
	{
		image: "/images/learn/feature-1.png",
		desc: "Beginner, Intermediate and Advanced level class",
	},
	{
		image: "/images/learn/feature-2.png",
		desc: "Instructed by PGA coaches",
	},
	{
		image: "/images/learn/feature-3.png",
		desc: "Group lesson (max 5 pax), 50 mins lesson time",
	},
	{
		image: "/images/learn/feature-4.png",
		desc: "Weekly competitons and challenges for prizes",
	},
	{
		image: "/images/learn/feature-5.png",
		desc: "Unique and advanced skills programme available",
	},
	{
		image: "/images/learn/feature-6.png",
		desc: "It’s fun and exciting for both boys and girls",
	},
];

function SecitonLearnJunior({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SecitonLearnJunior`}>
				<div className="banner relative">
					<img src="/images/learn/junior-banner.jpg" alt="" className="aspect-[144/65] w-full object-cover" />
					<div className="content absolute left-0 top-0 h-full w-full">
						<div className="ml-auto w-fit pr-[10%] pt-[10%]">
							<div className="flex">
								<div>
									<img src="/images/logo-icon.png" alt="" className="mr-[35px] w-[105px]" />
								</div>
								<div className="max-w-[460px]">
									<h2 className="text-64 mb-[20px]">JUNIOR GOLF PROGRAMME</h2>
									<p className="mb-[40px] text-[22px]">Excellent for children aged 5 to 15 years old</p>
									<p className="text-[16px]">
										Golf is a life skill. Teaching your children how to golf will instill discipline, self-confidence, concentration, and patience.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cusContainer mb-[100px] mt-[-120px]">
					<div className="listFeature relative mb-[100px] overflow-hidden rounded-[6px] px-[100px] py-[135px]">
						<img src="/images/learn/feature-bg.jpg" alt="" className="absolute left-0 top-0 h-full w-full object-cover" />

						<div className="list relative mx-[-10px] flex flex-wrap gap-y-[70px]">
							{listFeature.map((e: any, i: number) => (
								<div className="itemFeature w-1/2 px-[10px]" key={i}>
									<div className="border-l-[3px] border-white">
										<img src={e.image} alt="" className="ml-[20px] aspect-1 w-[100px] object-contain object-center" />
										<p className="ml-[40px] text-[20px]">{e.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="timing">
						<h2 className="text-36 mb-[75px]">Lesson Timing and Date</h2>

						<div className="mx-[-15px] flex text-[#00FFFF]">
							<div className="c1 relative w-1/2 px-[15px]">
								<div className="h-full rounded-[60px] border border-[#00FFFF] px-[80px] py-[65px]">
									<p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-blue px-[20px] font-GilroyBold text-[24px] uppercase">
										Group Lesson
									</p>
									<div className="relative mb-[20px] flex items-center pb-[25px]">
										<p className="mr-[10px] text-[90px] font-bold">50</p>
										<p className="text-[32px]">minutes lesson time</p>
										<div className="absolute bottom-0 left-0 h-[1px] w-[175px] bg-[#00FFFF]"></div>
									</div>
									<p>Max 5 pax</p>
								</div>
							</div>
							<div className="c2 relative w-1/2 px-[15px]">
								<div className="h-full rounded-[60px] border border-[#00FFFF] px-[80px] py-[70px]">
									<p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-blue px-[20px] font-GilroyBold text-[24px] uppercase">
										Personal Makeup Lesson
									</p>
									<div className="relative mb-[20px] flex items-center pb-[25px]">
										<p className="mr-[10px] text-[90px] font-bold">30</p>
										<p className="text-[32px]">minutes lesson time</p>
										<div className="absolute bottom-0 left-0 h-[1px] w-[175px] bg-[#00FFFF]"></div>
									</div>
									<p>Limited to 3 Make-Up Lessons for every 10 Group Lessons credits</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<SectionLearnFee title="Junior Lesson Fees (Off-Peak Rate Only)" />
			</div>
		</>
	);
}

export default memo(SecitonLearnJunior);
