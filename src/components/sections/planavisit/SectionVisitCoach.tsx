import { useRouter } from "next/router";
import { memo } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let listCoach = [
	{
		image: "/images/visit/coach-1.png",
	},
	{
		image: "/images/visit/coach-2.png",
	},
	{
		image: "/images/visit/coach-2.png",
	},
	{
		image: "/images/visit/coach-1.png",
	},
	{
		image: "/images/visit/coach-1.png",
	},
	{
		image: "/images/visit/coach-2.png",
	},
	{
		image: "/images/visit/coach-1.png",
	},
	{
		image: "/images/visit/coach-2.png",
	},
];

function SectionVisitCoach({ ...props }) {
	const router = useRouter();

	const settings = {
		dots: true,
		infinite: true,
		centerPadding: "30px",
		slidesToShow: 1,
		speed: 500,
		rows: 2,
		slidesPerRow: 1,
		arrows: false,
		customPaging: (i: any) => (
			<div className="cusDot h-[10px] w-[10px] rounded-full bg-[#55596f] duration-500 hover:opacity-75"></div>
		),
	};

	return (
		<>
			<div className={`SectionVisitCoach secSpacing`}>
				<div className="cusContainer">
					<div className="visitTitle relative mx-auto mb-[40px] w-max">
						<h2 className="text-50">COACH</h2>
						<div className="absolute left-1/2 top-full h-[4px] w-full max-w-[89px] -translate-x-1/2 bg-red"></div>
					</div>

					<p className="mx-auto mb-[100px] max-w-[715px] text-center">
						Let our trained professionals coach you to be the best golfer you have ever
						been. <br /> They are skilled and are committed to help you be better.
					</p>

					<div className="listCoach">
						<Slider {...settings} className="cusSlider">
							{listCoach.map((e: any, i: number) => (
								<div
									className="itemCoach relative mb-[30px] bg-[#0F163C] px-[70px] pb-[40px] pt-[35px]"
									key={i}
								>
									<img
										src="/images/visit/coach-line.png"
										alt=""
										className="absolute bottom-[65px] left-[60px] w-[860px]"
									/>

									<div className="mx-[-30px] flex">
										<div className="image w-[35%] px-[30px]">
											<img
												src={e.image}
												alt=""
												className="mb-[20px] aspect-[275/330] object-contain object-bottom"
											/>

											<p className="text-24 text-center font-bold uppercase">
												steven paine
											</p>
										</div>

										<div className="info w-[65%] px-[30px] pt-[70px]">
											<p className="mb-[30px] font-bold">About:</p>

											<ul className="list-disc space-y-[10px] pl-[20px]">
												<li>
													<strong>PGA Membership No:</strong> KPGA Tour
													Pro, TP 2017-1847
												</li>
												<li>
													<strong>Coaching Expertise:</strong> All sorts
													(short game, beginners, field lesson, etc)
												</li>
												<li>
													<div className="flex space-x-[5px]">
														<strong>Experiences:</strong>
														<p>
															KPGA Challenge Tour 5th place (2017)
															<br />
															Frontise Tour 3rd (2018)
															<br />
															P2 Personal Training Staff (2019)
														</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.SectionVisitCoach {
					.cusSlider {
						.slick-list {
							position: relative;
							z-index: 10;
						}

						.slick-slide {
							height: unset;

							> div {
								height: 100%;
								display: flex;
								align-items: end;
							}
						}

						.slick-dots {
							position: absolute;
							bottom: -20px;
							left: 0;
							z-index: 10;
							display: flex !important;
							justify-content: center;

							li {
								width: fit-content;
								height: fit-content;

								&.slick-active {
									.cusDot {
										background: #ed2224;
									}
								}
							}
						}
					}
				}
			`}</style>
		</>
	);
}

export default memo(SectionVisitCoach);
