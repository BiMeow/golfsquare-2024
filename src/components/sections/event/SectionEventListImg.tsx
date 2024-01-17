import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { IconPlay } from "@/components/elements/Icon";
import gsap from "gsap";

let listImg = [
	{
		image: "/images/event/img-1.jpg",
	},
	{
		image: "/images/event/img-2.jpg",
	},
	{
		image: "/images/event/img-3.jpg",
	},
	{
		image: "/images/event/img-4.jpg",
	},
	{
		image: "/images/event/img-5.jpg",
	},
	{
		image: "/images/event/img-6.jpg",
	},
	{
		image: "/images/event/img-1.jpg",
	},
	{
		image: "/images/event/img-2.jpg",
	},
	{
		image: "/images/event/img-4.jpg",
	},
	{
		image: "/images/event/img-5.jpg",
	},
	{
		image: "/images/event/img-2.jpg",
	},
	{
		image: "/images/event/img-3.jpg",
	},
	{
		image: "/images/event/img-4.jpg",
	},
	{
		image: "/images/event/img-5.jpg",
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

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionEventListImg .banner",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionEventListImg .banner .image", { y: 0 }, { y: -100 }, 0);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionEventListImg secSpacing`}>
				<div className="banner relative mb-[120px] mb:mb-[80px]">
					<div className="relative aspect-[144/60] overflow-hidden mb:aspect-[375/450]">
						<img src="/images/event/banner.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover" />
					</div>
					<div className="hoverShadow absolute left-1/2 top-1/2 mb-[50px] flex aspect-1 w-[74px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-red fill-red duration-500 hover:border-white hover:fill-white">
						<IconPlay />
					</div>
				</div>

				<div className="cusContainer">
					<h2 className="fadeUp mb-[60px] text-center text-[36px] font-bold uppercase mb:text-[20px]">square golf favorites</h2>
					<div className="listImg fadeUp">
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
