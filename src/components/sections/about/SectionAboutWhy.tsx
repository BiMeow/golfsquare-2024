import { IconArrow } from "@/components/elements/Icon";
import { useRouter } from "next/router";
import { memo } from "react";

let listWhy = [
	{
		title: "High - end golf simulator technology",
		image: "/images/about/why-1.png",
	},
	{
		title: "Wide selection of renowned golf courses",
		image: "/images/about/why-2.png",
	},
	{
		title: "Friendly and welcoming environment",
		image: "/images/about/why-3.png",
	},
	{
		title: "Vibrant sports bar with an extensive beverage menu",
		image: "/images/about/why-4.png",
	},
	{
		title: "Delectable restaurant \noffering a diverse menu",
		image: "/images/about/why-5.png",
	},
	{
		title: "Event hosting and special promotions",
		image: "/images/about/why-6.png",
	},
	{
		title: "Entertainment suitable for golfers of all skill levels.",
		image: "/images/about/why-7.png",
	},
];

function SectionAboutWhy({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionAboutWhy secSpacing`}>
				<div className="cusContainer">
					<div className="heading mb-[80px] flex items-center space-x-[35px] mb:space-x-[15px]">
						<img src="/images/logo-icon.png" alt="" className="w-[105px] mb:w-[55px]" />
						<h2 className="text-40 uppercase">
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
