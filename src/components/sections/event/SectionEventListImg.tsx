import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { IconPlay } from "@/components/elements/Icon";
import gsap from "gsap";
import asset from "@/utils/asset";

function SectionEventListImg({ data, ...props }: any) {
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

	let listImg = [
		{
			image: data?.image ? asset(data?.image) : "",
		},
		{
			image: data?.image1 ? asset(data?.image1) : "",
		},
		{
			image: data?.image2 ? asset(data?.image2) : "",
		},
		{
			image: data?.image3 ? asset(data?.image3) : "",
		},
		{
			image: data?.image4 ? asset(data?.image4) : "",
		},
		{
			image: data?.image5 ? asset(data?.image5) : "",
		},
		{
			image: data?.image6 ? asset(data?.image6) : "",
		},
		{
			image: data?.image7 ? asset(data?.image7) : "",
		},
		{
			image: data?.image8 ? asset(data?.image8) : "",
		},
		{
			image: data?.image9 ? asset(data?.image9) : "",
		},
		{
			image: data?.image10 ? asset(data?.image10) : "",
		},
		{
			image: data?.image11 ? asset(data?.image11) : "",
		},
		{
			image: data?.image12 ? asset(data?.image12) : "",
		},
		{
			image: data?.image13 ? asset(data?.image13) : "",
		},
		{
			image: data?.image14 ? asset(data?.image14) : "",
		},
		{
			image: data?.image15 ? asset(data?.image15) : "",
		},
		{
			image: data?.image16 ? asset(data?.image16) : "",
		},
		{
			image: data?.image17 ? asset(data?.image17) : "",
		},
	];

	return (
		<>
			<div className={`SectionEventListImg secSpacing`}>
				<div className="banner relative mb-[120px] mb:mb-[80px]">
					<div className="relative aspect-[144/60] overflow-hidden mb:aspect-[375/450]">
						<img src="/images/event/banner.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover" />
					</div>
					{/* <div className="hoverShadow absolute left-1/2 top-1/2 mb-[50px] flex aspect-1 w-[74px] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-red fill-red duration-500 hover:border-white hover:fill-white">
						<IconPlay />
					</div> */}
				</div>

				<div className="cusContainer">
					<h2 className="fadeUp mb-[60px] text-center text-[36px] font-bold uppercase mb:text-[20px]">square golf favorites</h2>
					<div className="listImg fadeUp">
						<Slider {...settings} className="cusSlider">
							{listImg.map(
								(e: any, i: number) =>
									e.image && (
										<div className="itemImg px-[15px] pb-[30px]" key={i}>
											<img src={e.image} alt="" className="aspect-[350/425] object-cover" />
										</div>
									)
							)}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionEventListImg);
