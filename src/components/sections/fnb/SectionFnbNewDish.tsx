import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listDish = [
	{
		title: "Chicken Snchitzel & Chips",
		image: "/images/fnb/dish-1.png",
	},
	{
		title: "Classic Fried Chicken",
		image: "/images/fnb/dish-2.png",
	},
	// {
	// 	title: "Shrimp Tacos with Best Shrimp Taco Sauce",
	// 	image: "/images/fnb/dish-3.png",
	// },
	// {
	// 	title: "Creamy Spinach & Shrimp Pesto Pasta",
	// 	image: "/images/fnb/dish-4.png",
	// },
];

function SectionFnbNewDish({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionFnbNewDish .listDish",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionFnbNewDish .listDish .itemDish", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionFnbNewDish mb-[30px]`}>
				<div className="mb:px-[20px]">
					<h2 className="text-36 fadeUp mb-[35px] text-center mb:mb-[16px]">NEW DISHES !</h2>
					<p className="fadeUp mx-auto mb-[70px] max-w-[920px] text-center font-GilroyMedium mb:mb-[60px]">
						At Golf Square, the fun extends beyond the greens. Catering to joy-seekers of all ages, our vibrant space is the perfect venue for family
						gatherings, group celebrations, or solo escapades. With a year-round calendar of events, engaging competitions, and exclusive promotions,
						there is always a compelling reason to return
					</p>
				</div>
				<div className="listDish mx-[-15px] mb-[30px] flex flex-wrap gap-y-[30px] mb:gap-y-[16px]">
					{listDish.map((e: any, i: number) => (
						<div className="itemDish w-1/2 px-[15px] mb:w-full" key={i}>
							<div className="bg-[#0F163C] p-[50px] mb:px-[30px] mb:py-[20px]">
								<div className="mx-[-15px] flex items-center">
									<img src={e.image} alt="" className="aspect-1 w-1/2 object-contain px-[15px]" />
									<p className="text-24 w-1/2 px-[15px] text-center font-extralight mb:text-[14px]">{e.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="bestSeller fadeUp bg-[#0F163C] pl-[14%] mb:pl-0">
					<div className="mx-[-50px] flex flex-wrap items-center gap-y-[30px] mb:pb-[45px] mb:pt-[65px]">
						<div className="c1 w-[35%] px-[50px] mb:w-full">
							<div className="relative mx-auto mb-[60px] w-fit">
								<p className="text-36 mb:text-[24px]">BEST SELLER</p>
								<img
									src="/images/fnb/bestseller-text-deco.png"
									alt=""
									className="absolute left-full top-0 w-[50px] -translate-x-[20%] -translate-y-[40%] rotate-180 mb:w-[35px]"
								/>
								<img
									src="/images/fnb/bestseller-text-deco.png"
									alt=""
									className="absolute right-full top-full w-[50px] -translate-y-[50%] translate-x-[20%] mb:w-[35px]"
								/>
							</div>
							<p className="text-center text-[22px] font-extralight mb:text-[18px]">Perfectly Juicy Grilled Steak & Chips</p>
						</div>
						<div className="c2 w-[65%] px-[50px] mb:w-full">
							<img src="/images/fnb/bestseller.png" alt="" className="w-full" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionFnbNewDish);
