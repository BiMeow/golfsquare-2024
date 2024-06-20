import { IconArrow } from "@/components/elements/Icon";
import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SectionAboutWhy({ data, ...props }: any) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionAboutWhy .listWhy",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionAboutWhy .listWhy .itemWhy", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });
		}, 1500);
	}, []);

	let listWhy = [
		{
			title: data?.title,
			image: asset(data?.image),
		},
		{
			title: data?.title1,
			image: asset(data?.image1),
		},
		{
			title: data?.title2,
			image: asset(data?.image2),
		},
		{
			title: data?.title3,
			image: asset(data?.image3),
		},
		{
			title: data?.title4,
			image: asset(data?.image4),
		},
		{
			title: data?.title5,
			image: asset(data?.image5),
		},
		{
			title: data?.title6,
			image: asset(data?.image6),
		},
	];

	return (
		<>
			<div className={`SectionAboutWhy secSpacing`}>
				<div className="cusContainer">
					<div className="heading mb-[80px] flex items-center space-x-[35px] mb:space-x-[15px]">
						<img src="/images/logo-icon.png" alt="" className="fadeRight w-[105px] mb:w-[55px]" />
						<h2 className="text-40 fadeLeft uppercase">
							Why is <br /> <span className="text-64 mb:text-[32px]">GolfSquare?</span>
						</h2>
					</div>

					<div className="listWhy mx-[-15px] flex flex-wrap gap-y-[80px] mb:gap-y-[30px]">
						{listWhy.map((e: any, i: number) => (
							<div className="itemWhy w-1/4 px-[15px] mb:w-1/2" key={i}>
								<img src={e.image} alt="" className="mb-[40px] h-[84px] w-auto dt-exl:mx-auto" />

								<p className="whitespace-pre-wrap dt-exl:whitespace-normal dt-exl:text-center">{e.title}</p>
							</div>
						))}

						<div className="itemWhy group w-1/4 cursor-pointer px-[15px] mb:flex mb:w-1/2 mb:flex-col mb:justify-center">
							<p className="text-36 mb-[20px] text-red duration-500 group-hover:text-white dt-exl:text-center">PLAN A VISIT</p>
							<div
								className={`
								hoverShadow flex aspect-1 w-[60px] items-center justify-center rounded-full bg-red fill-white duration-500 group-hover:bg-white group-hover:fill-blue 
								dt-exl:mx-auto 
								mb:w-[40px]
								`}
							>
								<div className="mb:scale-75">
									<IconArrow />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionAboutWhy);
