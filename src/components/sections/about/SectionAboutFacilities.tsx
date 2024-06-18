import { IconArrow } from "@/components/elements/Icon";
import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

function SectionAboutFacilities({ data, ...props }: any) {
	const router = useRouter();

	const { width } = useWindowSize();

	useEffect(() => {
		if (width) {
			setTimeout(() => {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: ".SectionAboutFacilities .listHappen",
							start: "75px bottom",
							end: "bottom bottom",
							//toggleActions: "restart reverse restart none",
						},
					})
					.fromTo(".SectionAboutFacilities .listHappen .itemHappen", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });

				// if (width > 1280) {
				// 	gsap
				// 		.timeline({
				// 			scrollTrigger: {
				// 				trigger: ".SectionAboutFacilities .listHappen",
				// 				start: "75px bottom",
				// 				end: "bottom center",
				// 				scrub: 2,
				// 				//toggleActions: "restart reverse restart none",
				// 			},
				// 		})
				// 		.fromTo(".SectionAboutFacilities .listHappen .itemHappen1", { y: 0 }, { y: 60 }, 0)
				// 		.fromTo(".SectionAboutFacilities .listHappen .itemHappen2", { y: 0 }, { y: -60 }, 0)
				// 		.fromTo(".SectionAboutFacilities .listHappen .itemHappen3", { y: 0 }, { y: 60 }, 0);
				// }
			}, 1500);
		}
	}, [width]);

	let listHappen = [
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
	];

	return (
		<>
			<div className={`SectionAboutFacilities mb-[126px] mb:mb-[60px]`}>
				<div className="mb-[30px] flex flex-wrap justify-center tl-l:px-[20px]">
					<div className="relative w-full max-w-[730px]">
						<img src={data?.bg ? asset(data?.bg) : "/images/golfman.png"} alt="" className="fadeRight w-full" />
					</div>
					<div className="content ml-[-300px] w-full max-w-[525px] pt-[150px] mb:ml-0 mb:pt-[20px]">
						<img
							src={data?.bg1 ? asset(data?.bg1) : "/images/logo-icon-white.png"}
							alt=""
							className="fadeUp mb-[50px] w-[50px] mb:mb-[25px] mb:w-[35px]"
						/>
						<p className="fadeUp mb-[20px]">{data?.description}</p>
					</div>
				</div>

				<div className="cusContainer">
					<h3 className="text-36 fadeUp mb-[40px] whitespace-pre-wrap mb:mb-[25px]">{data?.titleService}</h3>
					<div className="listHappen mx-[-20px] flex flex-wrap gap-y-[25px]">
						{listHappen.map((e: any, i: number) => (
							<div
								className={`
								itemHappen itemHappen${i + 1} w-1/3 px-[20px] mb:w-full
								`}
								key={i}
							>
								<div className="content group relative">
									<div className="overflow-hidden rounded-[60px]">
										<img src={e.image} alt="" className="aspect-[360/425] w-full duration-500 group-hover:scale-[1.01]" />
									</div>
									<p className="font absolute bottom-[40px] left-[30px] text-[24px] font-bold">{e.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionAboutFacilities);
