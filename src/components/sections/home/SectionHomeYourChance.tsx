import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listPromo = [
	{
		title: "Promotion 1",
		description:
			"Redeemable on Topgolf game play, food and drinks, Lifetime Memberships, lessons and gear.",
	},
	{
		title: "Promotion 2",
		description: "Gift cards can be redeemed at any Topgolf location in the United States.",
	},
	{
		title: "Promotion 3",
		description: "Send via email or get a traditional gift card via mail.",
	},
];

function SectionHomeYourChance({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".SectionHomeYourChance",
					start: "top bottom",
					end: "bottom top",
					scrub: 4,
				},
			}).fromTo(".SectionHomeYourChance .moveBanner", { y: 300 }, { y: 0 });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionHomeYourChance relative`}>
				<img
					src="/images/home/yourchance-banner.jpg"
					alt=""
					className="moveBanner absolute top-0 aspect-[144/77] w-full rounded-b-[75px] object-cover"
				/>
				<div className="cusContainer relative">
					<h2 className="titleStoke relative z-10 mb-[80px]">
						GRAB YOUR <br /> CHANCE
					</h2>

					<div className="listPromo mx-[-40px] mb-[80px] flex">
						{listPromo.map((e: any, i: number) => (
							<div
								className="itemPromo w-1/3 px-[40px] text-center font-medium"
								key={i}
							>
								<p className="mb-[20px] text-[24px] font-semibold">{e.title}</p>
								<p className="text-[16px] font-medium">{e.description}</p>
							</div>
						))}
					</div>

					<div className="mb-[80px] flex justify-center">
						<button className="mainBtn">all promos</button>
					</div>

					<img
						src="/images/home/yourchance-banner-2.jpg"
						alt=""
						className="mx-auto aspect-[144/77] w-full max-w-[1110px] rounded-[50px]"
					/>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeYourChance);
