import { useStorage } from "@/components/context/StorageProvider";
import { IconPlay } from "@/components/elements/Icon";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import SplitType from "split-type";

function SectionHomeBanner({ ...props }) {
	const router = useRouter();

	const { setIsModalOpen } = useStorage();

	useEffect(() => {
		setTimeout(() => {
			const splitText = SplitType.create(".splitText", { types: "words,chars" });

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionHomeBanner",
						start: "top bottom",
						end: "bottom 75%",
						//toggleActions: "restart reverse restart none",
					},
				})
				.fromTo(".SectionHomeBanner .moveUp", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 }, 0.3);
			// .to(
			// 	splitText.chars,
			// 	{
			// 		stagger: 0.05,
			// 		color: "#ED2224",
			// 	},
			// 	0.5
			// );

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionHomeBanner",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionHomeBanner .image", { y: 0 }, { y: -100 }, 0)
				.fromTo(".SectionHomeBanner .moveUp", { y: 0 }, { y: 150 }, 0);

			gsap.to(splitText.chars, {
				scrollTrigger: {
					trigger: ".SectionHomeBanner",
					start: "10px top",
					end: `20% top`,
					scrub: true,
				},
				stagger: 0.5,
				color: "#ff0000",
			});
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionHomeBanner fadeIn secSpacing relative`}>
				<div className="relative aspect-[144/84] overflow-hidden mb:aspect-[375/780]">
					<img src="/images/home/banner.jpg" alt="" className="image absFull h-[calc(100%+100px)] object-cover" />
				</div>
				<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center tl-l:px-[20px]">
					<h2 className="text-64 moveUp splitText mb-[16px] text-center opacity-0">
						WE DON’T MAKE FUN, <br className="mb:hidden" /> WE MAKE FUN BETTER
					</h2>
					<div className="moveUp opacity-0">
						<div className="hoverShadow mb-[50px] flex aspect-1 w-[74px] cursor-pointer items-center justify-center rounded-full border-4 border-red fill-red duration-500 hover:border-white hover:fill-white mb:w-[50px] mb:border-2">
							<div className=" mb:ml-[3px] mb:scale-75">
								<IconPlay />
							</div>
						</div>
					</div>
					<div className="moveUp opacity-0" onClick={() => setIsModalOpen(true)}>
						<button className="mainBtn">BOOK A TABLE</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeBanner);
