import { IconPlay } from "@/components/elements/Icon";
import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SectionEventList({ highlights, squareGolf, ...props }: any) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionEventList .listEvents",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionEventList .listEvents .itemEvent", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });
		}, 1500);
	}, []);

	let listEvents = [
		{
			title: "HIGHLIGHTS EVENTS",
			list: [
				{
					title: highlights?.text,
					description: highlights?.description,
					image: asset(highlights?.image),
				},
				{
					title: highlights?.text1,
					description: highlights?.description1,
					image: asset(highlights?.image1),
				},
				{
					title: highlights?.text2,
					description: highlights?.description2,
					image: asset(highlights?.image2),
				},
			],
		},
		{
			title: "square golf event spaces",
			list: [
				{
					title: squareGolf?.text,
					description: squareGolf?.description,
					image: asset(squareGolf?.image),
				},
				{
					title: squareGolf?.text1,
					description: squareGolf?.description1,
					image: asset(squareGolf?.image1),
				},
				{
					title: squareGolf?.text2,
					description: squareGolf?.description2,
					image: asset(squareGolf?.image2),
				},
			],
		},
	];

	return (
		<>
			<div className={`SectionEventList mb-[160px] mb:mb-[100px]`}>
				<div className="cusContainer">
					{listEvents.map((e: any, i: number) => (
						<div className="listEvent fadeUp mb-[100px] last:mb-0" key={i}>
							<h2 className="mb-[50px] text-center text-[36px] font-bold uppercase mb:mb-[30px] mb:text-[20px]">{e.title}</h2>

							<div className="listEvents mx-[-15px] flex flex-wrap items-stretch gap-y-[25px]">
								{e.list?.map(
									(e: any, i: number) =>
										i < 3 && (
											<div className="itemEvent group w-1/3 px-[15px] mb:w-full" key={i}>
												<div className="h-full bg-[#0D133277] backdrop-blur-[5px] mb:bg-[#0D1332]">
													<div className="overflow-hidden">
														<img src={e.image} alt="" className="aspect-[35/41] object-cover duration-500 group-hover:scale-[1.01]" />
													</div>
													<div className="p-[30px]">
														<p className="text-24 mb-[16px] font-bold">{e.title}</p>
														<p className="text-[14px] italic">{e.description}</p>
													</div>
												</div>
											</div>
										)
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default memo(SectionEventList);
