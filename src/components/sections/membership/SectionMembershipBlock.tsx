import React, { Fragment } from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

function SectionMemberShipBlock({ data = [], ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionMemberShipBlock`}>
				<div className="listMem mx-[-15px] mb-[50px] flex flex-wrap items-stretch gap-y-[180px] mb:gap-y-[75px]">
					{data.map((e: any, i: number) => (
						<div className="itemMem fadeUp w-1/2 px-[15px] mb:w-full" key={i}>
							<div className="rounded-[30px] bg-[#202642] px-[50px] pb-[60px] mb:px-[20px] mb:pb-[40px]">
								<img src={e.image} alt="" className="w-full translate-y-[-20%] mb:mb-[20px]" />

								<h2 className="text-24 mb-[20px] mt-[-30px] text-center font-GilroyBold font-bold">{e.title}</h2>

								<div className="price flex items-end justify-center">
									{e.price?.min ? (
										<Fragment>
											<p className="text-[42px] font-extralight mb:text-[32px]">
												${e.price.min}
												<span className="text-[18px] mb:text-[14px]">/month</span>
											</p>
											<p className="mx-[10px] my-[5px] font-extralight">-</p>
										</Fragment>
									) : (
										""
									)}
									<p className="text-[42px] font-extralight mb:text-[32px]">
										${e.price?.max}
										<span className="text-[18px] mb:text-[14px]">/year</span>
									</p>
								</div>

								<hr className="my-[30px] border-white" />

								<div className="listDes space-y-[16px]">
									{e.description?.map((e2: any, i2: number) => (
										<div className="itemDes flex items-center" key={i2}>
											<div className="mr-[10px] aspect-1 w-[10px] bg-white mb:w-[8px]"></div>
											<p>{e2}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<p className="text-center italic">*Guest Invitation: 1 pass or $10 per booking</p>
			</div>
		</>
	);
}

export default memo(SectionMemberShipBlock);
