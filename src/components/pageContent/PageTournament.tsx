import { IconPlay } from "@/components/elements/Icon";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect, useRef, useState } from "react";

function PageTournament({ ...props }) {
	const router = useRouter();

	const refVideo = useRef<any>(null);

	const [isPlaying, setIsPlaying] = useState<any>(false);

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
						trigger: ".SectionTournamentBanner2",
						start: "top bottom",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionTournamentBanner2 .image", { y: 0 }, { y: -100 }, 0)
				.fromTo(".SectionTournamentBanner2 .content", { y: 0 }, { y: 50 }, 0);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".thumbVideo",
						start: "top bottom",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".thumbVideo .image", { y: 0 }, { y: -100 }, 0);

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

	useEffect(() => {
		if (refVideo)
			if (isPlaying) {
				refVideo?.current.play();
			} else {
				refVideo?.current.pause();
			}
	}, [isPlaying, refVideo]);

	return (
		<>
			<div className={`PageTournament w-screen overflow-x-hidden`}>
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

				<div className={`SectionTournamentBanner2 fadeIn relative mb-[30px]`}>
					<div className="relative aspect-[1445/795] w-full overflow-hidden mb:aspect-[375/600]">
						<img src="/images/tournament/register.jpg" alt="" className="absFull image h-[calc(100%+100px)] object-cover grayscale" />
					</div>
					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center mb:px-[20px]">
						<p className="fadeUp mb-[30px] text-center text-[28px] opacity-0 mb:text-[20px]">
							Want to Win $7500 First Prize and share up to <br /> $30000 in cash and prizes
						</p>
						<div className="fadeUp opacity-0">
							<a target="_blank" href="https://www.trybooking.com/CSCSL">
								<button className="mainBtn">REGISTER NOW</button>
							</a>
						</div>
					</div>
				</div>

				<div className="cusContainer overflow-hidden">
					<p className="fadeUp mb-[80px] text-center text-[38px] mb:mb-[60px]">Sponsored by</p>

					<div className="mb-[30px] flex items-center justify-center gap-[60px] mb:mb-[60px]">
						<img src="/images/logo.png" alt="" className="fadeUp w-[155px] " />
						<img src="/images/logo-mizuno.png" alt="" className="fadeUp w-[120px] " />
					</div>

					<p className="mb-[70px] text-center text-[14px]">Mizuno Oceania Australia sponsoring Tournament prizes excluding cash prizes.</p>

					<div className="mx-auto mb-[120px] max-w-[860px] mb:mb-[60px]">
						<div
							className="thumbVideo fadeUp group relative mb-[100px] cursor-pointer overflow-hidden rounded-[20px]"
							onClick={() => {
								setIsPlaying(!isPlaying);
							}}
						>
							<video
								ref={refVideo}
								className="w-full"
								preload={"auto"}
								muted={false}
								autoPlay={false}
								playsInline={true}
								poster="/images/tournament/thumb-video.jpg"
								loop={false}
								src="/video/tournament.mp4"
								//controls
							/>
							<div
								className={`
								absolute left-1/2 top-1/2 flex -translate-x-[15%] -translate-y-1/2 cursor-pointer items-center justify-center duration-300
								${isPlaying ? "opacity-0" : ""}
								`}
							>
								<div
									className={`
									icon hoverShadow flex aspect-1 w-[74px] items-center justify-center rounded-full border-4 border-red fill-red duration-500 
									group-hover:border-white group-hover:fill-white
									`}
								>
									<IconPlay />
								</div>
								<p className="ml-[20px] text-[28px]">Introduction</p>
							</div>
						</div>
						<div className="mx-[-25px] flex flex-wrap gap-y-[50px]">
							<div className="c1 w-1/2 px-[25px] mb:w-full">
								<p className="fadeUp mb-[20px] text-[28px] text-red">
									Australia’s Biggest Indoor <br /> Golf Tournament
								</p>
								<p className="fadeUp mb-[50px] text-[16px]">
									Golf Square is launching Australia’s biggest indoor golf tournament on 17 June 2024.
									<br />
									<br />
									Spanning 10 weeks across 10 premier digital courses, this major event will see entrants compete for cash and prizes up to $30000 and
									a First Prize of $7500.
									<br />
									Registration closes Friday 7 June.
									<br />
									<br />
									Handicaps: Australian G. A handicap
									<br />
									Venue: Golf Square, Sunshine North
								</p>
								<p className="fadeUp mb-[20px] text-[28px] text-red">Participation Fee</p>
								<p className="fadeUp text-[16px]">
									Tee off for just $50 per week for 12 weeks. Includes tournament entry and 3-months free Golf Square membership. Every entrant
									receives a welcome package of gifts and vouchers worth over $700 from our sponsors.
								</p>
							</div>
							<div className="c2 w-1/2 px-[25px] mb:w-full">
								<p className="fadeUp mb-[20px] text-[28px] text-red">Cash & Prize Pool Includes</p>
								<p className="fadeUp mb-[80px] text-[16px] mb:mb-[50px]">
									First Place: $7500
									<br />
									Second: $4000
									<br />
									3rd: $2500
									<br />
									4th: $1500
									<br />
									5th: $1000
									<br />
									6th - 10th: $600
								</p>
								<p className="fadeUp mb-[20px] text-[28px] text-red">Ride Solo or Play with Mates! </p>
								<div className="flex justify-between gap-[20px]">
									<div className="fadeUp">
										<a target="_blank" href="https://www.trybooking.com/CSCSL">
											<button className="mainBtn text-[16px]">REGISTER NOW</button>
										</a>
									</div>
									<div className="fadeUp">
										<a target="_blank" href="/Tournament_TC.pdf#toolbar=0">
											<button className="mainBtn text-[16px]">TERMS & CONDITIONS</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<h2 className="fadeUp mb-[90px] text-center text-[38px] text-red mb:mb-[60px] mb:text-[30px]">
						Your $7500 First Place Prize is <br /> Ready and Waiting!
					</h2>
				</div>

				<div className="cusContainer overflow-hidden">
					<img src="/images/contact/banner.jpg" alt="" className="fadeUp aspect-[1110/414] w-full rounded-[60px] object-cover mb:aspect-[327/414]" />
					<img src="/images/header-line.png" alt="" className="fadeUp w-full -translate-y-[60%]" />
				</div>
			</div>
		</>
	);
}

export default memo(PageTournament);
