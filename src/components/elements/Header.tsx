import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import gsap from "gsap";

let listMenu = [
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Book a table",
		href: "/#",
	},
	{
		title: "Plan a visit",
		href: "/planavisit",
	},
	{
		title: "Membership",
		href: "/membership",
	},
	{
		title: "Learn",
		href: "/learn",
	},
	{
		title: "Have fun",
		href: "",
		children: [
			{
				title: "F&B",
				href: "/fnb",
				id: 79,
			},
			{
				title: "PARTIES & EVENTS",
				href: "/events",
				id: 98,
			},
		],
	},
];

function Header({ activeNav = -1, activeSubNav = -1, ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".MasterPage",
						start: "top top",
						end: "99% bottom",
						scrub: 2,
					},
				})
				.fromTo(".headerLine", { width: 0 }, { width: "100%" });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`Header //backdrop-blur-[5px] fixed top-0 z-[444] w-full pt-[30px]`}>
				<div className="cusContainerLarge">
					<div className="flex items-center justify-between">
						<Link href="/">
							<img src="/images/logo.png" alt="" className="w-[205px]" />
						</Link>

						<div className="listMenu flex space-x-[60px]">
							{listMenu.map((e: any, i: number) => (
								<div
									key={i}
									className={`
									group relative cursor-pointer font-GilroyBold text-[14px] uppercase duration-300
									${activeNav == i ? "text-white" : "text-red hover:text-[#c4c4c4]"}
									`}
								>
									{e.title}
									{e.href && <Link href={e.href} className="absFull" />}
									{e.children && (
										<div className="subNav absolute right-0 top-full z-10 pt-[20px]">
											<div className="max-h-0 overflow-hidden rounded-[10px]  bg-[#0D1332] shadow-[0px_0px_10px_#fff7] duration-500 group-hover:max-h-[200px]">
												<div className="listSub px-[20px] py-[10px]">
													{e.children.map((e2: any, i2: number) => (
														<div
															className={`
															itemSub relative whitespace-nowrap border-b border-[#55596f] py-[10px] text-center font-GilroyBold text-[14px] uppercase duration-300 last:border-none
															${activeSubNav == i2 ? "text-white" : "text-red hover:text-[#c4c4c4]"}
															`}
															key={i2}
														>
															{e2.title}
															{e2.href && <Link href={e2.href} className="absFull" />}
														</div>
													))}
												</div>
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="headerLine w-0 overflow-hidden">
					<div className="w-screen">
						<img src="/images/header-line.png" alt="" className="w-full" />
					</div>
				</div>
			</div>

			<style jsx global>{`
				.Header {
					background: linear-gradient(180deg, #0d1332 0%, #0d1332dd 50%, #0000 100%);
				}
			`}</style>
		</>
	);
}

export default memo(Header);
