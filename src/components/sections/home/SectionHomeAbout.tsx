import { IconArrow } from "@/components/elements/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

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

	return (
		<>
			<div className={`SectionHomeAbout secSpacing`}>
				<div className="mb-[30px] flex justify-center">
					<div className="relative w-full max-w-[730px]">
						<img src="/images/golfman.png" alt="" className="w-full" />
						<img
							src="/images/golfman-ball.png"
							alt=""
							className="absolute bottom-[20%] right-[-100px] w-[70px]"
						/>
					</div>
					<div className="content ml-[-320px] w-full max-w-[525px] pt-[100px]">
						<h2 className="text-48 mb-[15px] text-red">About GolfSquare</h2>
						<p className="mb-[20px] text-[16px]">
							One of the most visually striking settings in the city. It is the
							first-ever library dedicated to entertainment enthusiasts, offering a
							range of services all conveniently located in one place.
						</p>
						<button className="mainBtn relative">
							READ MORE
							<Link href={"/about"} className="absFull" />
						</button>
					</div>
				</div>

				<div className="cusContainerLarge">
					<h3 className="text-36 mb-[30px] text-red">
						WHAT’S HAPPENING AT <br /> GOLFSQUARE
					</h3>
					<div className="listHappen mx-[-40px] flex">
						{listHappen.map((e: any, i: number) => (
							<div
								className={`
								itemHappen w-1/3 cursor-pointer px-[40px]
								${i == 1 ? "pt-[60px]" : ""}
								`}
								key={i}
							>
								<div className="content group relative  pr-[30px]">
									<div className="overflow-hidden rounded-[60px]">
										<img
											src={e.image}
											alt=""
											className="aspect-[360/425] w-full duration-500 group-hover:scale-[1.01]"
										/>
									</div>
									<p className="font absolute bottom-[40px] left-[30px] text-[24px] font-bold">
										{e.title}
									</p>
									<div className="hoverShadow absolute right-0 top-1/2 flex aspect-1 w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-red fill-white duration-500 group-hover:bg-white group-hover:fill-blue">
										<IconArrow />
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
