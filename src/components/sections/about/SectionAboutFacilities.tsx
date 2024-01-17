import { IconArrow } from "@/components/elements/Icon";
import gsap from "gsap";
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

function SectionAboutFacilities({ ...props }) {
	const router = useRouter();

	const { width } = useWindowSize();

	useEffect(() => {
		if (width) {
			setTimeout(() => {
				gsap
					.timeline({
						scrollTrigger: {
							trigger: ".SectionAboutFacilities .listHappen",
							start: "75px bottom",
							end: "bottom bottom",
							//toggleActions: "restart reverse restart none",
						},
					})
					.fromTo(".SectionAboutFacilities .listHappen .itemHappen", { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.3 });

				if (width > 1280) {
					gsap
						.timeline({
							scrollTrigger: {
								trigger: ".SectionAboutFacilities .listHappen",
								start: "75px bottom",
								end: "bottom center",
								scrub: 2,
								//toggleActions: "restart reverse restart none",
							},
						})
						.fromTo(".SectionAboutFacilities .listHappen .itemHappen1", { y: 0 }, { y: 60 }, 0)
						.fromTo(".SectionAboutFacilities .listHappen .itemHappen2", { y: 0 }, { y: -60 }, 0)
						.fromTo(".SectionAboutFacilities .listHappen .itemHappen3", { y: 0 }, { y: 60 }, 0);
				}
			}, 1500);
		}
	}, [width]);

	return (
		<>
			<div className={`SectionAboutFacilities secSpacing`}>
				<div className="mb-[30px] flex flex-wrap justify-center tl-l:px-[20px]">
					<div className="relative w-full max-w-[730px]">
						<img src="/images/golfman.png" alt="" className="fadeRight w-full" />
					</div>
					<div className="content ml-[-300px] w-full max-w-[525px] pt-[150px] mb:ml-0 mb:pt-[20px]">
						<img src="/images/logo-icon-white.png" alt="" className="fadeUp mb-[50px] w-[50px] mb:mb-[25px] mb:w-[35px]" />
						<p className="fadeUp mb-[20px]">
							At Golf Square, golf is more than just a sport; it is an opportunity to create lasting memories, push your limits, and indulge in pure
							enjoyment. We envision a haven where golf enthusiasts of all levels, from beginners to seasoned professionals, come together to embrace
							the essence of the game in a cozy environment.
						</p>
					</div>
				</div>

				<div className="cusContainer">
					<h3 className="text-36 fadeUp mb-[40px] mb:mb-[25px]">FACILITIES INCLUDE</h3>
					<div className="listHappen mx-[-20px] flex flex-wrap gap-y-[25px]">
						{listHappen.map((e: any, i: number) => (
							<div
								className={`
								itemHappen itemHappen${i + 1} w-1/3 px-[20px] mb:w-full
								`}
								key={i}
							>
								<div className="content group relative">
									<div className="overflow-hidden rounded-[60px]">
										<img src={e.image} alt="" className="aspect-[360/425] w-full duration-500 group-hover:scale-[1.01]" />
									</div>
									<p className="font absolute bottom-[40px] left-[30px] text-[24px] font-bold">{e.title}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionAboutFacilities);
