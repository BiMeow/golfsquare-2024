import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";

import "swiper/css/effect-fade";
import { useWindowSize } from "usehooks-ts";
import gsap from "gsap";
import { IconArrowSlider } from "@/components/elements/Icon";

let listCol = [
	[
		{
			text: "4 Languages (Korea, Chinese, Vietnamese, English)",
		},
		{
			text: "150 field games (6-players)",
		},
		{
			text: "Full HD Real 3D Graphic",
		},
	],
	[
		{
			text: "Driving, Practice on field software Console",
		},
		{
			text: `Built-in computer, 21.5" monitor`,
		},
		{
			text: "Analysis camera",
		},
	],
	[
		{
			text: "Ceilng camera sensor",
		},
		{
			text: "Rough / Bunker Mat",
		},
		{
			text: "Semi auto tee-up box",
		},
	],
];

let listImage = [
	{
		image: "/images/about/simulator-1.jpg",
	},
	{
		image: "/images/about/simulator-2.jpg",
	},
	{
		image: "/images/about/simulator-3.jpg",
	},
	{
		image: "/images/about/simulator-2.jpg",
	},
	{
		image: "/images/about/simulator-1.jpg",
	},
	{
		image: "/images/about/simulator-2.jpg",
	},
	{
		image: "/images/about/simulator-1.jpg",
	},
	{
		image: "/images/about/simulator-3.jpg",
	},
];

function SectionAboutSimulator({ ...props }) {
	const router = useRouter();

	const { width } = useWindowSize();

	const [mainSwiper, setMainSwiper] = useState<any>(null);
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
	const [activeSlide, setActiveSlide] = useState<any>(0);

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionAboutSimulator .listCol",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionAboutSimulator .listCol .itemCol p", { opacity: 0 }, { opacity: 1, stagger: 0.3 });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionAboutSimulator secSpacing mb-[60px]`}>
				<div className="cusContainer">
					<h2 className="text-64 fadeUp mb-[20px] uppercase">Golf simulator</h2>
					<p className="fadeUp mb-[80px] max-w-[800px] mb:mb-[30px]">
						Embark on a golfing adventure and explore the world's most prestigious courses right at your fingertips. Unleash the power of our advanced
						Korean golf simulator technology to play rounds, perfect your swing, or engage in thrilling tournaments against other players. Prepare for
						a vivid, precise, and sensational golfing experience like no other.
					</p>

					<div className="listCol relative mx-[-30px] mb-[60px] flex flex-wrap gap-y-[40px]">
						{listCol.map((e: any, i: number) => (
							<div className="itemCol relative flex w-1/3 flex-col justify-around space-y-[40px] px-[30px] mb:w-full" key={i}>
								{e.map((e2: any, i2: number) => (
									<div className="colContent flex items-center" key={i2}>
										<div className="aspect-1 w-[22px] rounded-full bg-red mb:w-[15px]"></div>
										<p className="w-[calc(100%-22px)] pl-[25px] mb:pl-[10px] mb:text-red">{e2.text}</p>
									</div>
								))}

								<div className="absolute left-[40px] top-1/2 !m-0 h-[85%] w-[2px] -translate-y-1/2 bg-red mb:left-[36px]"></div>
							</div>
						))}
						<div className="absolute left-[40px] top-1/2 !m-0 h-[85%] w-[2px] -translate-y-1/2 bg-red mb:left-[36px] "></div>
					</div>

					<div className="sliderSimulator fadeUp">
						<div className="mx-[-25px] flex flex-wrap">
							<div className="mainSlider w-[25%] px-[25px] mb:order-2 mb:w-full">
								<div className="relative h-full w-full mb:h-auto">
									{!thumbsSwiper?.destroyed && (
										<Swiper
											direction={width > 767 ? "vertical" : "horizontal"}
											className="cusSwiperSimulator !absolute !h-full !w-full mb:!relative mb:!h-auto"
											slidesPerView={3}
											spaceBetween={15}
											onSlideChange={(e) => {
												setActiveSlide(e.realIndex);
												thumbsSwiper?.slideTo(e.realIndex);
											}}
											loop={true}
											onSwiper={setMainSwiper}
											slideToClickedSlide
										>
											{listImage.map((e: any, i: number) => (
												<SwiperSlide
													key={i}
													className={`
                                                itemSliderSimulator h-full w-full overflow-hidden rounded-[30px] duration-500
												mb:h-auto mb:rounded-[20px]
                                                ${activeSlide == i ? "border-2 border-white grayscale-0" : "grayscale"}
                                                `}
												>
													<img src={e.image} alt="" className="h-full w-full object-cover" />
												</SwiperSlide>
											))}
										</Swiper>
									)}
								</div>
							</div>

							<div className="navSlider relative w-[75%] px-[25px] mb:order-1 mb:mb-[15px] mb:w-full">
								<Swiper
									className="cusSwiperSimulator h-full w-full mb:h-[200px]"
									slidesPerView={1}
									effect={"fade"}
									modules={[EffectFade]}
									onSwiper={setThumbsSwiper}
									allowTouchMove={false}
								>
									{listImage.map((e: any, i: number) => (
										<SwiperSlide key={i} className="itemSliderSimulator !h-full overflow-hidden rounded-[30px]">
											<img src={e.image} alt="" className="aspect-[255/160] w-full object-cover" />
										</SwiperSlide>
									))}
								</Swiper>

								<div
									className="iconArrowPrev absolute left-[50px] top-1/2 z-10 -translate-y-1/2 rotate-180 cursor-pointer duration-300 hover:opacity-70"
									onClick={() => mainSwiper.slidePrev()}
								>
									<IconArrowSlider />
								</div>
								<div
									className="iconArrowPrev absolute right-[50px] top-1/2 z-10 -translate-y-1/2 cursor-pointer duration-300 hover:opacity-70"
									onClick={() => mainSwiper.slideNext()}
								>
									<IconArrowSlider />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionAboutSimulator);
