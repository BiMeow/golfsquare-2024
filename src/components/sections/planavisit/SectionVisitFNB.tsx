import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listImage = [
	{
		image: "/images/visit/fnb-1.jpg",
	},
	{
		image: "/images/visit/fnb-2.jpg",
	},
	{
		image: "/images/visit/fnb-3.jpg",
	},
	{
		image: "/images/visit/fnb-4.jpg",
	},
];

function SecitonVisitFNB({ ...props }) {
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
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SecitonVisitFNB secSpacing`}>
				<div className="cusContainer relative z-10">
					<div className="visitTitle fadeUp relative mx-auto mb-[40px] w-max">
						<h2 className="text-50">F&B</h2>
						<div className="absolute left-1/2 top-full h-[4px] w-full max-w-[89px] -translate-x-1/2 bg-red"></div>
					</div>

					<p className="fadeUp mx-auto mb-[100px] max-w-[715px] text-center mb:mb-[50px]">
						No matter what you’re craving, Golf Square is the place for great food and drinks. <br className="mb:hidden" /> Whether you combine it
						with Golf Square game time or just visit one of our five bars and restaurants, we’re happy to serve you!
					</p>

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
					<img src="/images/visit/fnb-banner.jpg" alt="" className="fadeIn w-full mb:hidden" />
					<img src="/images/visit/fnb-banner-mb.jpg" alt="" className="fadeIn hidden w-full mb:block" />

					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
						<h3 className="text-52 fadeUp mb-[30px] mb:mb-[20px]">TRY OUR RESTAURANTS</h3>
						<button className="mainBtn fadeUp">LEARN MORE</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SecitonVisitFNB);
