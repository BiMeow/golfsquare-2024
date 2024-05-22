import { useStorage } from "@/components/context/StorageProvider";
import { IconPlay } from "@/components/elements/Icon";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import SplitType from "split-type";

function SectionHomeBanner({ ...props }) {
	const router = useRouter();

	const { setIsModalOpen } = useStorage();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		const splitText = SplitType.create(".splitText", { types: "words,chars" });

	// 		gsap
	// 			.timeline({
	// 				scrollTrigger: {
	// 					trigger: ".SectionHomeBanner",
	// 					start: "top bottom",
	// 					end: "bottom 75%",
	// 					//toggleActions: "restart reverse restart none",
	// 				},
	// 			})
	// 			.fromTo(".SectionHomeBanner .moveUp", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 }, 0.3);
	// 		// .to(
	// 		// 	splitText.chars,
	// 		// 	{
	// 		// 		stagger: 0.05,
	// 		// 		color: "#ED2224",
	// 		// 	},
	// 		// 	0.5
	// 		// );

	// 		gsap
	// 			.timeline({
	// 				scrollTrigger: {
	// 					trigger: ".SectionHomeBanner",
	// 					start: "top top",
	// 					end: "bottom top",
	// 					scrub: 2,
	// 				},
	// 			})
	// 			.fromTo(".SectionHomeBanner .image", { y: 0 }, { y: -100 }, 0)
	// 			.fromTo(".SectionHomeBanner .moveUp", { y: 0 }, { y: 150 }, 0);

	// 		gsap.to(splitText.chars, {
	// 			scrollTrigger: {
	// 				trigger: ".SectionHomeBanner",
	// 				start: "10px top",
	// 				end: `20% top`,
	// 				scrub: true,
	// 			},
	// 			stagger: 0.5,
	// 			color: "#ff0000",
	// 		});
	// 	}, 1500);
	// }, []);

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionTournamentBanner",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionTournamentBanner .image", { y: 0 }, { y: -100 }, 0)
				.fromTo(".SectionTournamentBanner .content", { y: 0 }, { y: 100 }, 0);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionTournamentBanner",
						start: "top bottom",
					},
				})
				.fromTo(".SectionTournamentBanner .image", { filter: "grayscale(100%)" }, { filter: "grayscale(0%)", duration: 1.5 }, 0)
				.fromTo(".SectionTournamentBanner .moveUp", { y: 150, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 }, 1);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionHomeBanner secSpacing relative`}>
				{/* <div className="relative aspect-[144/84] overflow-hidden mb:aspect-[375/780]">
					<img src="/images/home/banner.jpg" alt="" className="image absFull h-[calc(100%+100px)] object-cover" />
				</div>
				<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center tl-l:px-[20px]">
					<h2 className="text-64 moveUp splitText mb-[16px] text-center opacity-0">
						WE DON’T MAKE FUN, <br className="mb:hidden" /> WE MAKE FUN BETTER
					</h2>
					<div className="moveUp opacity-0">
						<a
							target="_blank"
							href="https://widget.wabify.com/654c28d3b73e21699490003?fbclid=IwAR0wEo9lXXHkiQBw6klSfamYZa420cvw9RdOJc3jQNhOTMXXmthns_2y-dw"
						>
							<button className="mainBtn">BOOK A TABLE</button>
						</a>
					</div>
				</div> */}

				<div className={`SectionTournamentBanner relative`}>
					<div className="relative aspect-[1445/795] w-full overflow-hidden mb:aspect-[375/600]">
						<img src="/images/tournament/banner.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover grayscale" />
					</div>
					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center pt-[15vh] mb:px-[20px]">
						<img src="/images/tournament/banner-title.png" alt="" className="moveUp mb-[15px] w-full max-w-[315px] opacity-0 mb:max-w-[250px]" />

						<img src="/images/tournament/banner-price.png" alt="" className="moveUp mb-[30px] w-full max-w-[315px] opacity-0 mb:max-w-[250px]" />

						<p className="moveUp mb-[30px] text-center text-[28px] opacity-0 mb:text-[20px]">Play Big - Win Bigger!</p>
						<div className="moveUp opacity-0">
							<a target="_blank" href="https://www.trybooking.com/CSCSL">
								<button className="mainBtn">REGISTER NOW</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeBanner);
