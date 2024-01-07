import { useRouter } from "next/router";
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";

import "swiper/css/effect-fade";

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

	const [mainSwiper, setMainSwiper] = useState<any>(null);
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
	const [activeSlide, setActiveSlide] = useState<any>(0);

	return (
		<>
			<div className={`SectionAboutSimulator secSpacing mb-[60px]`}>
				<div className="cusContainer">
					<h2 className="text-64 mb-[20px]">Golf simulator</h2>
					<p className="mb-[80px] max-w-[800px]">
						Embark on a golfing adventure and explore the world's most prestigious
						courses right at your fingertips. Unleash the power of our advanced Korean
						golf simulator technology to play rounds, perfect your swing, or engage in
						thrilling tournaments against other players. Prepare for a vivid, precise,
						and sensational golfing experience like no other.
					</p>

					<div className="listCol mx-[-30px] mb-[60px] flex flex-wrap">
						{listCol.map((e: any, i: number) => (
							<div
								className="itemCol relative flex w-1/3 flex-col justify-around space-y-[40px] px-[30px]"
								key={i}
							>
								{e.map((e2: any, i2: number) => (
									<div className="colContent flex items-center" key={i2}>
										<div className="aspect-1 w-[22px] rounded-full bg-red"></div>
										<p className="w-[calc(100%-22px)] pl-[25px]">{e2.text}</p>
									</div>
								))}

								<div className="absolute left-[40px] top-1/2 !m-0 h-[85%] w-[1px] -translate-y-1/2 bg-red"></div>
							</div>
						))}
					</div>

					<div className="sliderSimulator">
						<div className="mx-[-25px] flex">
							<div className="mainSlider w-[25%] px-[25px]">
								<div className="relative h-full w-full">
									<Swiper
										direction={"vertical"}
										className="cusSwiperSimulator !absolute !h-full !w-full"
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
                                                ${
													activeSlide == i
														? "border-2 border-white grayscale-0"
														: "grayscale"
												}
                                                `}
											>
												<img
													src={e.image}
													alt=""
													className="h-full w-full object-cover"
												/>
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							</div>

							<div className="navSlider w-[75%] px-[25px]">
								<Swiper
									className="cusSwiperSimulator h-full w-full"
									slidesPerView={1}
									effect={"fade"}
									modules={[EffectFade]}
									onSwiper={setThumbsSwiper}
									allowTouchMove={false}
								>
									{listImage.map((e: any, i: number) => (
										<SwiperSlide
											key={i}
											className="itemSliderSimulator !h-full overflow-hidden rounded-[30px]"
										>
											<img
												src={e.image}
												alt=""
												className="aspect-[255/160] w-full object-cover"
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionAboutSimulator);
