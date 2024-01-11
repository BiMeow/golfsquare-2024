import { useRouter } from "next/router";
import { memo } from "react";

let listDish = [
	{
		title: "Southern Fried Catfish & Chips",
		image: "/images/fnb/dish-1.png",
	},
	{
		title: "Classic Fried Chicken",
		image: "/images/fnb/dish-2.png",
	},
	{
		title: "Shrimp Tacos with Best Shrimp Taco Sauce",
		image: "/images/fnb/dish-3.png",
	},
	{
		title: "Creamy Spinach & Shrimp Pesto Pasta",
		image: "/images/fnb/dish-4.png",
	},
];

function SectionFnbNewDish({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionFnbNewDish mb-[30px]`}>
				<h2 className="text-36 mb-[35px] text-center">NEW DISHES !</h2>
				<p className="mx-auto mb-[70px] max-w-[920px] text-center font-GilroyMedium">
					At Golf Square, the fun extends beyond the greens. Catering to joy-seekers of all ages, our vibrant space is the perfect venue for family
					gatherings, group celebrations, or solo escapades. With a year-round calendar of events, engaging competitions, and exclusive promotions,
					there is always a compelling reason to return
				</p>
				<div className="listDish mx-[-15px] mb-[30px] flex flex-wrap gap-y-[30px]">
					{listDish.map((e: any, i: number) => (
						<div className="itemDish w-1/2 px-[15px]" key={i}>
							<div className="bg-[#0F163C] p-[50px]">
								<div className="mx-[-15px] flex items-center">
									<img src={e.image} alt="" className="aspect-1 w-1/2 object-contain px-[15px]" />
									<p className="text-24 w-1/2 px-[15px] text-center font-extralight">{e.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="bestSeller bg-[#0F163C] pl-[14%]">
					<div className="mx-[-50px] flex items-center">
						<div className="c1 w-[35%] px-[50px]">
							<div className="relative mx-auto mb-[60px] w-fit">
								<p className="text-36">BEST SELLER</p>
								<img
									src="/images/fnb/bestseller-text-deco.png"
									alt=""
									className="absolute left-full top-0 w-[50px] -translate-x-[20%] -translate-y-[40%] rotate-180"
								/>
								<img
									src="/images/fnb/bestseller-text-deco.png"
									alt=""
									className="absolute right-full top-full w-[50px] -translate-y-[50%] translate-x-[20%]"
								/>
							</div>
							<p className="text-center text-[22px] font-extralight">Perfectly Juicy Grilled Steak & Chips</p>
						</div>
						<div className="c2 w-[65%] px-[50px]">
							<img src="/images/fnb/bestseller.png" alt="" className="w-full" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionFnbNewDish);
