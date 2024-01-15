import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { IconPlay } from "@/components/elements/Icon";

let listImg = [
	{
		image: "/images/fnb/img-1.jpg",
	},
	{
		image: "/images/fnb/img-2.jpg",
	},
	{
		image: "/images/fnb/img-3.jpg",
	},
	{
		image: "/images/fnb/img-4.jpg",
	},
	{
		image: "/images/fnb/img-5.jpg",
	},
	{
		image: "/images/fnb/img-6.jpg",
	},
	{
		image: "/images/fnb/img-1.jpg",
	},
	{
		image: "/images/fnb/img-2.jpg",
	},
	{
		image: "/images/fnb/img-4.jpg",
	},
	{
		image: "/images/fnb/img-5.jpg",
	},
	{
		image: "/images/fnb/img-2.jpg",
	},
	{
		image: "/images/fnb/img-3.jpg",
	},
	{
		image: "/images/fnb/img-4.jpg",
	},
	{
		image: "/images/fnb/img-5.jpg",
	},
];

function SectionEventListImg({ ...props }) {
	const router = useRouter();

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		// autoplay: true,
		// speed: 2000,
		// autoplaySpeed: 2000,
		cssEase: "linear",
		rows: 2,
		slidesPerRow: 1,
		arrows: false,
		customPaging: (i: any) => <div className="cusDot h-[10px] w-[10px] rounded-full bg-[#55596f] duration-500 hover:opacity-75"></div>,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 1,
				},
			},
		],
	};

	return (
		<>
			<div className={`SectionEventListImg secSpacing`}>
				<div className="banner relative mb-[120px] mb:mb-[80px]">
					<img src="/images/fnb/banner.jpg" alt="" className="aspect-[144/60] object-cover mb:aspect-[375/450]" />
					<div className="hoverShadow absolute left-1/2 top-1/2 mb-[50px] flex aspect-1 w-[74px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-red fill-red duration-500 hover:border-white hover:fill-white">
						<IconPlay />
					</div>
				</div>

				<div className="cusContainer">
					<h2 className="mb-[60px] text-center text-[36px] font-bold uppercase mb:mb-[30px] mb:text-[20px]">square golf favorites</h2>
					<div className="listImg">
						<Slider {...settings} className="cusSlider">
							{listImg.map((e: any, i: number) => (
								<div className="itemImg px-[15px] pb-[30px]" key={i}>
									<img src={e.image} alt="" className="aspect-[350/425] object-cover" />
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionEventListImg);
