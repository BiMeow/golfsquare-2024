import { IconArrow } from "@/components/elements/Icon";
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

function SectionAboutFacilities({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionAboutFacilities secSpacing`}>
				<div className="mb-[30px] flex justify-center">
					<div className="relative w-full max-w-[730px]">
						<img src="/images/golfman.png" alt="" className="w-full" />
					</div>
					<div className="content ml-[-300px] w-full max-w-[525px] pt-[150px]">
						<img
							src="/images/logo-icon-white.png"
							alt=""
							className="mb-[50px] w-[50px]"
						/>
						<p className="mb-[20px]">
							At Golf Square, golf is more than just a sport; it is an opportunity to
							create lasting memories, push your limits, and indulge in pure
							enjoyment. We envision a haven where golf enthusiasts of all levels,
							from beginners to seasoned professionals, come together to embrace the
							essence of the game in a cozy environment.
						</p>
					</div>
				</div>

				<div className="cusContainer">
					<h3 className="text-36 mb-[40px] ">FACILITIES INCLUDE</h3>
					<div className="listHappen mx-[-20px] flex">
						{listHappen.map((e: any, i: number) => (
							<div
								className={`
								itemHappen w-1/3 px-[20px]
								`}
								key={i}
							>
								<div className="content group relative">
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
