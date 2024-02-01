import { IconPlay } from "@/components/elements/Icon";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

function SectionVisitBanner({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionVisitBanner",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionVisitBanner .image", { y: 0 }, { y: -100 }, 0);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionVisitBanner relative mb-[40px]`}>
				<div className="relative aspect-[145/84] mb:aspect-[375/780]">
					<img src="/images/visit/banner.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover" />
				</div>
				<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
					<h2 className="fadeUp mb-[40px] text-center text-[90px] font-bold mb:text-[52px]">
						MORE THAN <br /> JUST <span className="text-red">GOLF</span>
					</h2>
					{/* <button className="mainBtn fadeUp">PLAN A VISIT</button> */}
				</div>
			</div>
		</>
	);
}

export default memo(SectionVisitBanner);
