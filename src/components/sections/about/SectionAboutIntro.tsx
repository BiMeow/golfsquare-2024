import { useRouter } from "next/router";
import { memo } from "react";

let listImage = [
	{
		image: "/images/about/intro-1.jpg",
	},
	{
		image: "/images/about/intro-2.jpg",
	},
	{
		image: "/images/about/intro-3.jpg",
	},
	{
		image: "/images/about/intro-4.jpg",
	},
];

function SectionAboutIntro({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionAboutIntro secSpacing`}>
				<div className="cusContainer mb-[60px]">
					<h2 className="text-64 mb-[80px]">About us</h2>

					<div className="listImage mx-[-15px] mb-[80px] flex flex-wrap">
						{listImage.map((e: any, i: number) => (
							<div
								className={`
                                itemImage w-1/4 px-[15px]
                                ${i % 2 == 0 ? "" : "pt-[60px]"}
                                `}
								key={i}
							>
								<img
									src={e.image}
									alt=""
									className="aspect-[255/415] w-full object-cover"
								/>
							</div>
						))}
					</div>

					<div className="mx-auto max-w-[920px] text-center">
						<p>
							<span className="text-[24px] font-bold">Welcome to Golf Square!</span>
							<br />
							<br />
							Immerse yourself in a captivating world where state-of-the-art Korean
							Golf Simulator technology seamlessly combines with a love for sports,
							captivating entertainment, and delectable culinary delights. It's not
							just about golf - it's an unforgettable experience.
						</p>
					</div>
				</div>

				<div className="banner relative">
					<img
						src="/images/about/intro-banner.jpg"
						alt=""
						className="aspect-[145/75] object-cover"
					/>

					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
						<h2 className="text-52 mb-[40px] text-center uppercase">
							WE DON’T MAKE FUN
						</h2>
						<h1 className="w-full border-y border-red pb-[10px] text-center text-[125px] font-bold uppercase text-red">
							We make fun better
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionAboutIntro);
