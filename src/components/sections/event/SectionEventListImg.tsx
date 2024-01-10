import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";

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
	};

	return (
		<>
			<div className={`SectionEventListImg secSpacing`}>
				<div className="cusContainer">
					<h2 className="mb-[60px] text-center text-[36px] font-bold uppercase">square golf favorites</h2>
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
