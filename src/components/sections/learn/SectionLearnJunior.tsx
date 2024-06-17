import SectionLearnFee from "@/components/sections/learn/SectionLearnFee";
import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SecitonLearnJunior({ data, ...props }: any) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SecitonLearnJunior",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SecitonLearnJunior .image", { y: 0 }, { y: -100 }, 0);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SecitonLearnJunior .listFeature",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SecitonLearnJunior .listFeature .itemFeature", { opacity: 0, x: -100 }, { opacity: 1, x: 0, stagger: 0.3 });
		}, 1500);
	}, []);

	let listFeature = [
		{
			image: asset(data?.info?.image),
			desc: data?.info?.text,
		},
		{
			image: asset(data?.info?.image1),
			desc: data?.info?.text1,
		},
		{
			image: asset(data?.info?.image2),
			desc: data?.info?.text2,
		},
		{
			image: asset(data?.info?.image3),
			desc: data?.info?.text3,
		},
		{
			image: asset(data?.info?.image4),
			desc: data?.info?.text4,
		},
		{
			image: asset(data?.info?.image5),
			desc: data?.info?.text5,
		},
	];

	return (
		<>
			<div className={`SecitonLearnJunior`}>
				<div className="banner relative">
					<div className="relative aspect-[144/65] overflow-hidden mb:aspect-[375/650]">
						<img src="/images/learn/junior-banner.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover" />
					</div>
					<div className="content absolute left-0 top-0 h-full w-full">
						<div className="ml-auto w-fit pr-[10%] pt-[10%] mb:px-[20px] mb:pt-[60px]">
							<div className="flex gap-y-[16px] mb:flex-wrap">
								<div>
									<img src="/images/logo-icon.png" alt="" className="fadeUp mr-[35px] w-[105px] mb:w-[55px]" />
								</div>
								<div className="fadeUp max-w-[460px] mb:max-w-none">
									<h2 className="text-64 mb-[20px]">{data?.info?.title}</h2>
									<p className="mb-[40px] text-[22px] mb:mb-[20px] mb:text-[16px]">{data?.info?.subTitle}</p>
									<p className="text-[16px] mb:text-[14px]">{data?.info?.description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cusContainer mb-[100px] mt-[-120px] mb:mb-[60px] mb:mt-[-250px]">
					<div className="listFeature relative mb-[100px] overflow-hidden rounded-[6px] px-[100px] py-[135px] mb:mb-[60px] mb:px-[20px] mb:py-[40px]">
						<img src="/images/learn/feature-bg.jpg" alt="" className="absolute left-0 top-0 h-full w-full object-cover mb:hidden" />
						<img src="/images/learn/feature-bg-mb.jpg" alt="" className="absolute left-0 top-0 hidden h-full w-full object-cover mb:block" />

						<div className="list relative mx-[-10px] flex flex-wrap gap-y-[70px] mb:gap-y-[30px]">
							{listFeature.map((e: any, i: number) => (
								<div className="itemFeature w-1/2 px-[10px] mb:w-full" key={i}>
									<div className="border-l-[3px] border-white">
										<img src={e.image} alt="" className="ml-[20px] aspect-1 w-[100px] object-contain object-center mb:w-[60px]" />
										<p className="ml-[40px] text-[20px] mb:ml-[20px] mb:text-[14px]">{e.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="timing">
						<h2 className="text-36 fadeUp mb-[75px] mb:mb-[40px]">Lesson Timing and Date</h2>

						<div className="mx-[-15px] flex flex-wrap gap-y-[60px] text-[#00FFFF]">
							<div className="c1 fadeUp relative w-1/2 px-[15px] mb:w-full">
								<div className="h-full rounded-[60px] border border-[#00FFFF] px-[80px] py-[65px] mb:px-[50px] mb:py-[45px]">
									<p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-blue px-[20px] font-GilroyBold text-[24px] uppercase mb:text-[18px]">
										Group Lesson
									</p>
									<div className="relative mb-[20px] flex items-center pb-[25px]">
										<p className="mr-[10px] text-[90px] font-bold mb:text-[52px]">{data?.timing?.time}</p>
										<p className="text-[32px] mb:text-[18px]">{data?.timing?.text}</p>
										<div className="absolute bottom-0 left-0 h-[1px] w-[175px] bg-[#00FFFF] mb:w-full"></div>
									</div>
									<p className="mb:text-center">{data?.timing?.pax}</p>
								</div>
							</div>
							<div className="c2 fadeUp relative w-1/2 px-[15px] mb:w-full">
								<div className="h-full rounded-[60px] border border-[#00FFFF] px-[80px] py-[70px] mb:px-[50px] mb:py-[45px]">
									<p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-blue px-[20px] font-GilroyBold text-[24px] uppercase mb:text-[18px]">
										Personal Makeup Lesson
									</p>
									<div className="relative mb-[20px] flex items-center pb-[25px]">
										<p className="mr-[10px] text-[90px] font-bold mb:text-[52px]">{data?.timing?.time1}</p>
										<p className="text-[32px] mb:text-[18px]">{data?.timing?.text1}</p>
										<div className="absolute bottom-0 left-0 h-[1px] w-[175px] bg-[#00FFFF] mb:w-full"></div>
									</div>
									<p className="mb:text-center">{data?.timing?.pax1}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<SectionLearnFee title="Junior Lesson Fees (Off-Peak Rate Only)" data={data?.fee} />
			</div>
		</>
	);
}

export default memo(SecitonLearnJunior);
