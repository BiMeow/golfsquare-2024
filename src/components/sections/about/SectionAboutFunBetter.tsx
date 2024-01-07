import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listBetter = [
	{
		title: "Party up with buddies",
		image: "/images/about/funbetter-1.jpg",
	},
	{
		title: "Endless fun with family",
		image: "/images/about/funbetter-2.jpg",
	},
	{
		title: "Eat & Drink",
		image: "/images/about/funbetter-3.jpg",
	},
];

function SectionAboutFunBetter({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".SectionAboutFunBetter",
					start: "top bottom",
					end: "bottom top",
					scrub: 4,
				},
			}).fromTo(".SectionAboutFunBetter .moveBanner", { y: 300 }, { y: 0 });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionAboutFunBetter secSpacing relative`}>
				<div className="moveBanner absolute left-0 top-[50px] w-full opacity-80 blur-[5px]">
					<img
						src="/images/about/funbetter-banner.jpg"
						alt=""
						className="aspect-[144/140] w-full object-cover"
					/>
				</div>
				<div className="cusContainer relative mb-[40px]">
					<h2 className="titleStoke relative z-10 mb-[80px]">
						MAKE FUN <br /> BETTER
					</h2>

					<p className="mx-auto mb-[120px] max-w-[920px] text-center">
						Eat, Drink and Play - At GolfSquare, we redefine leisure and elevate
						enjoyment. Our state-of-the-art indoor golfing facility is paired with a
						dining experience that tantalizes the senses, exceptional event hosting, and
						wine cocktails that are nothing short of perfection.  Dive into an
						experience where every moment is crafted for delight. After all, 'We make
						fun better'. Packages to suit all occasions and budgets.
					</p>

					<div className="listBetter mb-[40px] flex">
						{listBetter.map((e: any, i: number) => (
							<div
								className="itemBetter group relative w-1/3 overflow-hidden"
								key={i}
							>
								<img
									src={e.image}
									alt=""
									className="aspect-[395/615] w-full grayscale duration-300 group-hover:scale-[1.01] group-hover:grayscale-0"
								/>
								<p className="absolute bottom-[50px] left-[50px] border-red font-GilroyBold font-bold duration-300 group-hover:border-l-[5px] group-hover:pl-[5px] group-hover:text-red">
									{e.title}
								</p>
							</div>
						))}
					</div>

					<div className="flex justify-center">
						<button className="mainBtn">MAKE FUN BETTER NOW</button>
					</div>
				</div>
				<img src="/images/header-line.png" alt="" className="relative z-10 w-full" />
			</div>
		</>
	);
}

export default memo(SectionAboutFunBetter);
