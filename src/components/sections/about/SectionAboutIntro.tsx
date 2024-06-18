import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import asset from "@/utils/asset";

function SectionAboutIntro({ data, banner, ...props }: any) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionAboutIntro .listImage",
						start: "75px bottom",
						end: "bottom top",
					},
				})
				.fromTo(".SectionAboutIntro .itemImage", { x: -100, opacity: 0 }, { x: 0, stagger: 0.3, opacity: 1 }, 0.3);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionAboutIntro .banner",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionAboutIntro .banner .image", { y: 0 }, { y: -100 }, 0);

			const splitText = SplitType.create(".splitText", { types: "chars" });

			// gsap.to(splitText.chars, {
			// 	scrollTrigger: {
			// 		trigger: ".SectionAboutIntro .textRun",
			// 		start: "10px top",
			// 		end: `bottom 50%`,
			// 		scrub: true,
			// 	},
			// 	stagger: 0.5,
			// 	color: "#fff",
			// });

			gsap.to(splitText.chars, {
				scrollTrigger: {
					trigger: ".SectionAboutIntro .splitText",
					start: "50px bottom",
				},
				stagger: 0.01,
				color: "#fff",
			});

			ScrollTrigger.refresh();
		}, 1500);
	}, []);

	let listImage = [
		{
			image: asset(data?.bg),
		},
		{
			image: asset(data?.bg1),
		},
		{
			image: asset(data?.bg2),
		},
		{
			image: asset(data?.bg3),
		},
	];

	return (
		<>
			<div className={`SectionAboutIntro secSpacing`}>
				<div className="textRun cusContainer mb-[102px]">
					<h2 className="text-64 fadeUp mb-[80px] uppercase mb:mb-[30px]">About us</h2>

					<div className="listImage mx-[-15px] mb-[80px] flex flex-wrap mb:hidden">
						{listImage.map((e: any, i: number) => (
							<div
								className={`
                                itemImage w-1/4 px-[15px] opacity-0
                                ${i % 2 == 0 ? "" : "pt-[60px]"}
                                `}
								key={i}
							>
								<img src={e.image} alt="" className="aspect-[255/415] w-full object-cover" />
							</div>
						))}
					</div>

					<div className="listImageMb mx-[-8px] mb-[80px] hidden flex-wrap mb:flex">
						<div className="c1 w-1/2 space-y-[16px] px-[8px]">
							{listImage.map(
								(e: any, i: number) =>
									i % 2 == 0 && (
										<div className="itemImage" key={i}>
											<img src={e.image} alt="" className="aspect-[255/415] w-full object-cover" />
										</div>
									)
							)}
						</div>
						<div className="c2 w-1/2 space-y-[16px] px-[8px] pt-[60px]">
							{listImage.map(
								(e: any, i: number) =>
									i % 2 != 0 && (
										<div className="itemImage" key={i}>
											<img src={e.image} alt="" className="aspect-[255/415] w-full object-cover" />
										</div>
									)
							)}
						</div>
					</div>

					<div className="fadeUp splitText mx-auto max-w-[920px] text-center text-[#fff7]">
						<p>
							<span className="text-[24px] font-bold">{data?.title}</span>
							<br />
							<br />
							{data?.description}
						</p>
					</div>
				</div>

				<div className="banner relative">
					<div className="fadeIn relative aspect-[145/75] overflow-hidden mb:aspect-[375/620]">
						<img
							src={banner?.bg ? asset(banner?.bg) : "/images/about/intro-banner.jpg"}
							alt=""
							className="image absFull h-[calc(100%+100px)] object-cover"
						/>
					</div>

					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
						<h2 className="text-52 fadeUp mb-[40px] text-center uppercase">{banner?.title}</h2>
						<h1 className="fadeUp w-full border-y border-red py-[20px] pb-[0px] text-center text-[125px] font-bold uppercase text-red mb:font-GilroyBold mb:text-[54px]">
							{banner?.description}
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionAboutIntro);
