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
						start: "top bottom",
						end: "bottom 75%",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionVisitBanner .moveUp", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 }, 0.3);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionVisitBanner",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionVisitBanner .image", { y: 0 }, { y: -100 }, 0)
				.fromTo(".SectionVisitBanner .moveUp", { y: 0 }, { y: 150 }, 0);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionVisitBanner relative mb-[40px]`}>
				<div className="relative aspect-[145/84] mb:aspect-[375/780]">
					<img src="/images/visit/banner.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover" />
				</div>
				<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
					<h2 className="moveUp mb-[40px] text-center text-[90px] font-bold opacity-0 mb:text-[52px]">
						MORE THAN JUST <span className="text-red">GOLF</span>
					</h2>
					<div className="moveUp flex space-x-[20px] opacity-0">
						<a
							target="_blank"
							href="https://widget.wabify.com/654c28d3b73e21699490003?fbclid=IwAR0wEo9lXXHkiQBw6klSfamYZa420cvw9RdOJc3jQNhOTMXXmthns_2y-dw"
						>
							<button className="mainBtn">BOOK NOW</button>
						</a>
						<a target="_blank" href="/menu.pdf#toolbar=0">
							<button className="mainBtn">MENU</button>
						</a>
					</div>
					{/* <button className="mainBtn fadeUp">PLAN A VISIT</button> */}
				</div>
			</div>
		</>
	);
}

export default memo(SectionVisitBanner);
