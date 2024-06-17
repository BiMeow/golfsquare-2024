import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SecitonVisitFNB({ data, dataTry, ...props }: any) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SecitonVisitFNB",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SecitonVisitFNB .image", { y: 100 }, { y: 0 }, 0);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SecitonVisitFNB .listImage",
						start: "10% bottom",
					},
				})
				.fromTo(".SecitonVisitFNB .itemImage", { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.3 }, 0);
		}, 1500);
	}, []);

	let listImage = [
		{
			image: data?.bg ? asset(data?.bg) : "/images/visit/fnb-1.jpg",
		},
		{
			image: data?.bg1 ? asset(data?.bg1) : "/images/visit/fnb-2.jpg",
		},
		{
			image: data?.bg2 ? asset(data?.bg2) : "/images/visit/fnb-3.jpg",
		},
		{
			image: data?.bg3 ? asset(data?.bg3) : "/images/visit/fnb-4.jpg",
		},
	];

	return (
		<>
			<div className={`SecitonVisitFNB secSpacing`}>
				<div className="cusContainer relative z-10">
					<div className="visitTitle fadeUp relative mx-auto mb-[40px] w-max">
						<h2 className="text-50">F&B</h2>
						<div className="absolute left-1/2 top-full h-[4px] w-full max-w-[89px] -translate-x-1/2 bg-red"></div>
					</div>

					<p className="fadeUp mx-auto mb-[100px] max-w-[715px] whitespace-pre-wrap text-center mb:mb-[50px]">{data?.description}</p>

					<div className="listImage relative mx-[-15px] flex flex-wrap mb:mx-[-8px] mb:gap-y-[16px]">
						{listImage.map((e: any, i: number) => (
							<div className="itemImage w-1/4 px-[15px] mb:w-1/2 mb:px-[8px]" key={i}>
								<img src={e.image} alt="" className="aspect-[255/415] object-cover" />
							</div>
						))}
					</div>
				</div>
				<img src="/images/visit/fnb-bg.png" alt="" className="image mt-[-200px] w-full mb:mt-0" />

				<div className="banner relative">
					<img src={dataTry?.bg ? asset(dataTry?.bg) : "/images/visit/fnb-banner.jpg"} alt="" className="fadeIn w-full mb:hidden" />
					<img src="/images/visit/fnb-banner-mb.jpg" alt="" className="fadeIn hidden w-full mb:block" />

					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
						<h3 className="text-52 fadeUp mb-[30px] mb:mb-[20px]">{dataTry?.title || "TRY OUR RESTAURANTS"}</h3>
						<a href={dataTry?.link || "/fnb"}>
							<button className="mainBtn fadeUp">{dataTry?.titleBtn || "LEARN MORE"}</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SecitonVisitFNB);
