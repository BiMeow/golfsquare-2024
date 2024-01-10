import React, { Fragment } from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

let listMembership = [
	{
		title: "RED Membership\n(5 Days)",
		image: "/images/membership/mem-1.png",
	},
	{
		title: "WHITE Membership\n(7 Days)",
		image: "/images/membership/mem-2.png",
	},
	{
		title: "BLUE Membership\n(7 Days)",
		image: "/images/membership/mem-3.png",
	},
	{
		title: "BLACK Membership\n(7 Days)",
		image: "/images/membership/mem-4.png",
	},
];

function SectionMemberShipCompare({ data = [], ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionMemberShipCompare`}>
				<div className="listMem mx-[-15px] mb-[50px] flex">
					<div className="c1 w-[20%] px-[15px]"></div>
					<div className="c2 w-[80%] px-[15px]">
						<div className="mx-[-15px] flex">
							{listMembership.map((e: any, i: number) => (
								<div className="itemMem w-1/4 px-[15px]" key={i}>
									<img src={e.image} alt="" className="mb-[25px] w-full" />
									<p className="whitespace-pre-wrap text-center font-bold">
										{e.title}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="listCompare mb-[50px]">
					{data.map((e: any, i: number) => (
						<div
							className="itemCompare border-t border-white py-[30px] last:border-y"
							key={i}
						>
							<div className="mx-[-15px] flex">
								<div className="c1 w-[20%] px-[15px]">
									<p className="whitespace-pre-wrap font-bold dt-exl:whitespace-normal">
										{e.title}
									</p>
								</div>
								<div className="c2 w-[80%] px-[15px]">
									{e.list?.map((e2: any, i2: number) => (
										<div
											className={`
                      dataCompare mx-[-10px] flex
                      ${e.list?.length > 1 ? "mb-[30px] last:mb-0" : ""}
                      `}
											key={i2}
										>
											{e2.map((e3: any, i3: number) => (
												<div className="w-1/4 px-[10px]" key={i3}>
													<p className="whitespace-pre-wrap text-center">
														{e3}
													</p>
												</div>
											))}
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

export default memo(SectionMemberShipCompare);
