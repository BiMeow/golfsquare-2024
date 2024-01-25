import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listCeleb = [
	{
		title: "NEW YEAR EVE",
		description: "Enjoy live bands, refreshing drinks, and a captivating atmosphere at this vibrant venue.",
		image: "/images/visit/celeb-1.jpg",
	},
	{
		title: "Christmas celebration",
		description: "Enjoy live bands, refreshing drinks, and a captivating atmosphere at this vibrant venue.",
		image: "/images/visit/celeb-2.jpg",
	},
	{
		title: "memorable birthday",
		description: "Enjoy live bands, refreshing drinks, and a captivating atmosphere at this vibrant venue.",
		image: "/images/visit/celeb-3.jpg",
	},
	{
		title: "MEETINGS LIKE NO OTHER",
		description: "Meeting room plus coffee and lunch break",
		image: "/images/visit/celeb-4.jpg",
	},
	{
		title: "MEET & PLAY",
		description: "A combined package of meeting sessions and the Square Golf game experience",
		image: "/images/visit/celeb-5.jpg",
	},
	{
		title: "PRIVATE EVENT",
		description: "Gather up for a good time at any of our bars & restaurants add other event spaces",
		image: "/images/visit/celeb-6.jpg",
	},
];

function SectionVisitCelebration({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionVisitCelebration .listCeleb",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionVisitCelebration .listCeleb .itemCeleb", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionVisitCelebration mb-[40px]`}>
				<div className="cusContainer">
					<div className="visitTitle fadeUp relative mx-auto mb-[40px] w-max">
						<h2 className="text-50">CELEBRATIONS</h2>
						<div className="absolute left-1/2 top-full h-[4px] w-full max-w-[89px] -translate-x-1/2 bg-red"></div>
					</div>

					<p className="fadeUp mx-auto mb-[100px] max-w-[715px] text-center mb:mb-[50px]">
						Rain or shine, day or night, make your next party or group event more eventful at Square Golf. We offer versatile event catering packages
						perfect for your next birthday party, company event, or social get-together!
					</p>

					<div className="listCeleb mx-[-15px] flex flex-wrap items-stretch gap-y-[30px]">
						{listCeleb.map((e: any, i: number) => (
							<div className="itemCeleb group w-1/3 px-[15px] mb:w-full" key={i}>
								<div className="h-full bg-[#202642]">
									<div className="overflow-hidden">
										<img src={e.image} alt="" className="aspect-[35/41] object-cover duration-500 group-hover:scale-[1.01]" />
									</div>
									<div className="p-[30px]">
										<p className="text-24 mb-[16px] font-bold">{e.title}</p>
										<p className="text-[14px] italic">{e.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionVisitCelebration);
