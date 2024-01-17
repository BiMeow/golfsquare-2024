import { IconArrow } from "@/components/elements/Icon";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

let listHappen = [
	{
		title: "Golf Simulator",
		image: "/images/home/happen-1.jpg",
	},
	{
		title: "Sports Bar",
		image: "/images/home/happen-2.jpg",
	},
	{
		title: "Dine With Us",
		image: "/images/home/happen-3.jpg",
	},
];

function SectionHomeAbout({ ...props }) {
	const router = useRouter();

	const { width } = useWindowSize();

	useEffect(() => {
		if (width) {
			setTimeout(() => {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: ".SectionHomeAbout .listHappen",
							start: "75px bottom",
							end: "bottom bottom",
							//toggleActions: "restart reverse restart none",
						},
					})
					.fromTo(".SectionHomeAbout .listHappen .itemHappen", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });

				if (width > 1280) {
					gsap
						.timeline({
							scrollTrigger: {
								trigger: ".SectionHomeAbout .listHappen",
								start: "75px bottom",
								end: "bottom center",
								scrub: 2,
								//toggleActions: "restart reverse restart none",
							},
						})
						.fromTo(".SectionHomeAbout .listHappen .itemHappen1", { y: 0 }, { y: 60 }, 0)
						.fromTo(".SectionHomeAbout .listHappen .itemHappen2", { y: 0 }, { y: -60 }, 0)
						.fromTo(".SectionHomeAbout .listHappen .itemHappen3", { y: 0 }, { y: 60 }, 0);
				}
			}, 1500);
		}
	}, [width]);

	return (
		<>
			<div className={`SectionHomeAbout secSpacing`}>
				<div className="mb-[30px] flex justify-center tl-l:px-[20px] mb:mb-[60px] mb:flex-wrap">
					<div className="relative w-full max-w-[730px]">
						<img src="/images/golfman.png" alt="" className="fadeRight w-full" />
						<img
							src="/images/golfman-ball.png"
							alt=""
							className="fadeRight absolute bottom-[20%] right-[-100px] w-[70px] mb:right-[20px] mb:w-[30px]"
						/>
					</div>
					<div className="content fadeUp ml-[-320px] w-full max-w-[525px] pt-[100px] mb:ml-0 mb:pt-[10px] mb:text-center">
						<h2 className="text-48 mb-[15px] text-red">About GolfSquare</h2>
						<p className="mb-[20px] text-[16px] mb:text-[14px]">
							One of the most visually striking settings in the city. It is the first-ever library dedicated to entertainment enthusiasts, offering a
							range of services all conveniently located in one place.
						</p>
						<button className="mainBtn relative">
							READ MORE
							<Link href={"/about"} className="absFull" />
						</button>
					</div>
				</div>

				<div className="cusContainerLarge">
					<h3 className="text-36 fadeUp mb-[30px] text-red">
						WHAT’S HAPPENING AT <br /> GOLFSQUARE
					</h3>
					<div className="listHappen mx-[-40px] flex flex-wrap gap-y-[25px] mb:mx-0">
						{listHappen.map((e: any, i: number) => (
							<div
								className={`
								itemHappen itemHappen${i + 1} w-1/3 cursor-pointer px-[40px]
								mb:w-full mb:px-0 
								${i == 1 ? "pt-[60px] mb:pt-0" : ""}
								`}
								key={i}
							>
								<div className="content group relative pr-[30px] mb:pr-[20px]">
									<div className="overflow-hidden rounded-[60px]">
										<img src={e.image} alt="" className="aspect-[360/425] w-full duration-500 group-hover:scale-[1.01]" />
									</div>
									<p className="font absolute bottom-[40px] left-[30px] text-[24px] font-bold">{e.title}</p>
									<div className="hoverShadow absolute right-0 top-1/2 flex aspect-1 w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-red fill-white duration-500 group-hover:bg-white group-hover:fill-blue mb:w-[40px]">
										<div className="mb:scale-75">
											<IconArrow />
										</div>
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

export default memo(SectionHomeAbout);
