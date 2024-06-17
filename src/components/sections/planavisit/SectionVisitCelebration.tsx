import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SectionVisitCelebration({ data, ...props }: any) {
	const router = useRouter();

	let listCeleb = [
		{
			title: data?.title1,
			description: data?.description1,
			image: asset(data?.bg1),
		},
		{
			title: data?.title2,
			description: data?.description2,
			image: asset(data?.bg2),
		},
		{
			title: data?.title3,
			description: data?.description3,
			image: asset(data?.bg3),
		},
		{
			title: data?.title4,
			description: data?.description4,
			image: asset(data?.bg4),
		},
		{
			title: data?.title5,
			description: data?.description5,
			image: asset(data?.bg5),
		},
		{
			title: data?.title6,
			description: data?.description6,
			image: asset(data?.bg6),
		},
	];

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionVisitCelebration .listCeleb",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionVisitCelebration .listCeleb .itemCeleb", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionVisitCelebration mb-[40px]`}>
				<div className="cusContainer">
					<div className="visitTitle fadeUp relative mx-auto mb-[40px] w-max">
						<h2 className="text-50">{data?.title}</h2>
						<div className="absolute left-1/2 top-full h-[4px] w-full max-w-[89px] -translate-x-1/2 bg-red"></div>
					</div>

					<p className="fadeUp mx-auto mb-[100px] max-w-[715px] whitespace-pre-wrap text-center mb:mb-[50px]">{data?.subTitle}</p>

					<div className="listCeleb mx-[-15px] flex flex-wrap items-stretch gap-y-[30px]">
						{listCeleb.map((e: any, i: number) => (
							<div className="itemCeleb group w-1/3 px-[15px] mb:w-full" key={i}>
								<div className="h-full bg-[#202642]">
									<div className="overflow-hidden">
										<img src={e.image} alt="" className="aspect-[35/41] object-cover duration-500 group-hover:scale-[1.01]" />
									</div>
									<div className="p-[30px]">
										<p className="text-24 mb-[16px] font-bold">{e.title}</p>
										<p className="text-[14px] italic">{e.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionVisitCelebration);
