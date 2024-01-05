import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

let listHaveFun = [
	{
		title: "Happy Voucher",
		image: "/images/home/havefun-1.jpg",
	},
	{
		title: "after event party",
		image: "/images/home/havefun-2.jpg",
	},
	{
		title: "MEMBERSHIP",
		image: "/images/home/havefun-3.jpg",
	},
];

function SectionHomeHaveFun({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionHomeHaveFun secSpacing`}>
				<div className="banner relative">
					<img
						src="/images/home/havefun-banner.jpg"
						alt=""
						className="aspect-[146/75] object-cover"
					/>
					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
						<h2 className="mb-[60px] text-[170px] font-bold text-white">
							HAVE. <span className="text-red">FUN!</span>
						</h2>
						<button className="mainBtn">plan a visit</button>
					</div>
				</div>
				<img
					src="/images/header-line.png"
					alt=""
					className="relative z-10 mb-[100px] mt-[-25px] w-full"
				/>

				<div className="listHaveFun mx-auto max-w-[1050px]">
					<div className="mx-[-15px] flex">
						{listHaveFun.map((e: any, i: number) => (
							<div className="itemHaveFun px-[15px]" key={i}>
								<img
									src={e.image}
									alt=""
									className="aspect-[323/460] object-cover"
								/>
								<div className="relative z-10 mt-[-25px] w-[80%] bg-red py-[15px] text-center font-bold uppercase">
									{e.title}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeHaveFun);
