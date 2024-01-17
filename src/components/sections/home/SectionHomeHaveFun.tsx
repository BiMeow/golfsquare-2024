import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

let listHaveFun = [
	{
		title: "Happy Voucher",
		image: "/images/home/havefun-1.jpg",
	},
	{
		title: "after event party",
		image: "/images/home/havefun-2.jpg",
	},
	{
		title: "MEMBERSHIP",
		image: "/images/home/havefun-3.jpg",
	},
];

function SectionHomeHaveFun({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionHomeHaveFun",
						start: "top bottom",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionHomeHaveFun .image", { y: 0 }, { y: -100 }, 0);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionHomeHaveFun .listHaveFun",
						start: "75px bottom",
						end: "bottom bottom",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionHomeHaveFun .listHaveFun .itemHaveFun", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionHomeHaveFun .listHaveFun",
						start: "75px bottom",
						end: "bottom center",
						scrub: 2,
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionHomeHaveFun .listHaveFun .itemHaveFun1", { y: 0 }, { y: 30 }, 0)
				.fromTo(".SectionHomeHaveFun .listHaveFun .itemHaveFun2", { y: 0 }, { y: -30 }, 0)
				.fromTo(".SectionHomeHaveFun .listHaveFun .itemHaveFun3", { y: 0 }, { y: 30 }, 0);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionHomeHaveFun secSpacing`}>
				<div className="banner relative">
					<div className="relative aspect-[146/75] overflow-hidden mb:aspect-[375/620]">
						<img src="/images/home/havefun-banner.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover" />
					</div>
					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center tl-l:px-[20px]">
						<h2 className="mb-[60px] text-center text-[170px] font-bold text-white mb:mb-[25px] mb:text-[70px]">
							HAVE. <span className="text-red">FUN!</span>
						</h2>
						<button className="mainBtn">plan a visit</button>
					</div>
				</div>
				<img src="/images/header-line.png" alt="" className="relative z-10 mb-[100px] mt-[-25px] w-full mb:mb-[60px] mb:mt-[-5px]" />

				<div className="listHaveFun mx-auto max-w-[1050px] tl-l:px-[20px]">
					<div className="mx-[-15px] flex flex-wrap gap-y-[25px]">
						{listHaveFun.map((e: any, i: number) => (
							<div className={`itemHaveFun w-1/3 px-[15px] mb:w-full itemHaveFun${i + 1}`} key={i}>
								<img src={e.image} alt="" className="aspect-[323/460] object-cover" />
								<div className="relative z-10 mt-[-25px] w-[80%] bg-red py-[15px] text-center font-bold uppercase">{e.title}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeHaveFun);
