import asset from "@/utils/asset";
import { useRouter } from "next/router";
import { memo } from "react";
import Slider from "react-slick";

function SectionVisitCoach({ data, ...props }: any) {
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
		customPaging: (i: any) => <div className="cusDot h-[10px] w-[10px] rounded-full bg-[#55596f] duration-500 hover:opacity-75"></div>,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					rows: 1,
				},
			},
		],
	};

	let listCoach = [
		{
			image: data?.bg ? asset(data?.bg) : "/images/visit/coach-1.png",
			desc: data?.description,
		},
	];

	return (
		<>
			<div className={`SectionVisitCoach secSpacing`}>
				<div className="cusContainer">
					<div className="visitTitle fadeUp relative mx-auto mb-[40px] w-max">
						<h2 className="text-50">{data?.title}</h2>
						<div className="absolute left-1/2 top-full h-[4px] w-full max-w-[89px] -translate-x-1/2 bg-red"></div>
					</div>

					<p className="fadeUp mx-auto mb-[100px] max-w-[710px] whitespace-pre-wrap text-center mb:mb-[50px]">{data?.subTitle}</p>

					<div className="listCoach fadeUp">
						<Slider {...settings} className="cusSlider">
							{listCoach.map((e: any, i: number) => (
								<div className="itemCoach relative mb-[30px] bg-[#0F163C] px-[70px] pb-[40px] pt-[35px] mb:px-[20px] mb:py-[30px]" key={i}>
									{/* <img src="/images/visit/coach-line.png" alt="" className="absolute bottom-[65px] left-[60px] z-10 w-[80%] mb:!hidden" /> */}

									<div className="mx-[-30px] flex flex-wrap">
										<div className="image relative w-[35%] px-[30px] mb:mb-[20px] mb:w-full">
											<div className="relative">
												<img src={e.image} alt="" className="aspect-[275/330] object-contain object-bottom mb:mx-auto mb:max-w-[155px]" />
												<img src="/images/visit/coach-line.png" alt="" className="absolute bottom-0 left-0 w-full" />
											</div>
											{/* <p className="text-24 text-center font-bold uppercase">steven paine</p> */}
										</div>

										<div className="info w-[65%] px-[30px] pt-[70px] mb:w-full mb:pt-[20px]">
											{e.desc ? (
												<div className="contentEditor" dangerouslySetInnerHTML={{ __html: e.desc }}></div>
											) : (
												<>
													<p className="mb-[30px] font-bold mb:mb-[10px]">About:</p>

													<ul className="list-disc space-y-[10px] pl-[20px]">
														<li>
															<strong>PGA Membership No:</strong> KPGA Tour Pro, TP 2017-1847
														</li>
														<li>
															<strong>Coaching Expertise:</strong> All sorts (short game, beginners, field lesson, etc)
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
												</>
											)}
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionVisitCoach);
