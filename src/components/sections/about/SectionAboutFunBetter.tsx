import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SectionAboutFunBetter({ data, ...props }: any) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionAboutFunBetter",
						start: "top bottom",
						end: "bottom top",
						scrub: 4,
					},
				})
				.fromTo(".SectionAboutFunBetter .moveBanner", { y: 300 }, { y: 0 });

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionAboutFunBetter .listBetter",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionAboutFunBetter .listBetter .itemBetter", { opacity: 0, x: -100 }, { opacity: 1, x: 0, stagger: 0.3 });
		}, 1500);
	}, []);

	let listBetter = [
		{
			title: data?.text,
			image: asset(data?.bg),
		},
		{
			title: data?.text1,
			image: asset(data?.bg1),
		},
		{
			title: data?.text2,
			image: asset(data?.bg2),
		},
	];

	return (
		<>
			<div className={`SectionAboutFunBetter secSpacing relative`}>
				<div className="moveBanner absolute left-0 top-[50px] max-h-[90%] w-full overflow-hidden opacity-80 blur-[5px] mb:max-h-[97%]">
					<img
						src={data?.banner ? asset(data?.banner) : "/images/about/funbetter-banner.jpg"}
						alt=""
						className="fadeUp aspect-[144/140] w-full object-cover mb:aspect-[375/2121]"
					/>
				</div>
				<div className="cusContainer relative mb-[84px]">
					<h2 className="titleStoke fadeUp relative z-10 mb-[80px] mb:mb-[40px]">
						MAKE FUN <br /> BETTER
					</h2>

					<p className="fadeUp mx-auto mb-[120px] max-w-[920px] text-center mb:mb-[60px]">{data?.description}</p>

					<div className="listBetter mb-[40px] flex flex-wrap mb:gap-y-[25px]">
						{listBetter.map((e: any, i: number) => (
							<div className="itemBetter group relative w-1/3 overflow-hidden mb:w-full" key={i}>
								<img
									src={e.image}
									alt=""
									className="//rounded-[5px] aspect-[395/615] w-full grayscale duration-300 group-hover:scale-[1.01] group-hover:grayscale-0"
								/>
								<p className="absolute bottom-[50px] left-[50px] z-10 border-red font-GilroyBold font-bold duration-300 group-hover:border-l-[5px] group-hover:pl-[5px] group-hover:text-red mb:bottom-[30px] mb:left-[30px]">
									{e.title}
								</p>
								<div className="absolute bottom-0 left-0 h-[40%] w-full bg-gradient-to-t from-[#010101] to-[#0000]"></div>
							</div>
						))}
					</div>

					<div className="fadeUp flex justify-center">
						<button className="mainBtn">MAKE FUN BETTER NOW</button>
					</div>
				</div>
				<img src="/images/header-line.png" alt="" className="fadeRight relative z-10 w-full" />
			</div>
		</>
	);
}

export default memo(SectionAboutFunBetter);
