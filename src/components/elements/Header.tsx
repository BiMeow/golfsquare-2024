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
		href: "/contact",
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

	const [showNav, setShowNav] = useState<any>(false);

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".MasterPage",
						start: "10px top",
						end: "99% bottom",
						scrub: 2,
					},
				})
				.fromTo(".headerLine", { width: 0 }, { width: "100%" });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`Header fadeDown //backdrop-blur-[5px] fixed top-0 z-[444] w-full pt-[30px] mb:pt-[20px]`}>
				<div className="cusContainerLarge mb:mb-[10px]">
					<div className="flex items-center justify-between">
						<Link href="/" className="relative z-10">
							<img src="/images/logo.png" alt="" className="w-[205px] mb:w-[95px]" />
						</Link>

						<div
							className={`
							listMenu flex space-x-[60px] duration-500
							tl-l:px-[20px] mb:absolute mb:left-0 mb:top-0 mb:h-[100dvh] mb:w-screen mb:flex-col mb:space-x-0 mb:space-y-[25px] mb:bg-blue mb:py-[75px]
							${showNav ? "mb:translate-x-0" : "mb:translate-x-[-100%]"}
							`}
						>
							<img src="/images/header-line.png" alt="" className="mb-[50px] hidden w-full mb:block" />
							{listMenu.map((e: any, i: number) => (
								<div
									key={i}
									className={`
									group relative cursor-pointer font-GilroyBold text-[14px] uppercase duration-300 
									mb:font-[Gilroy] mb:text-[24px]
									${activeNav == i ? "text-white mb:text-red" : "text-red hover:text-[#c4c4c4] mb:text-white"}
									${e.children ? "mb:pb-[10px] mb:hover:border-b mb:hover:border-red mb:hover:text-red" : ""}

									`}
								>
									{e.title}
									{e.href && <Link href={e.href} className="absFull" />}
									{e.children && (
										<div className={`absolute right-0 top-[3px] hidden aspect-1 w-[24px]  mb:block`}>
											<div className="absolute left-1/2 top-1/2 h-[2px] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white group-hover:bg-red"></div>
											<div className="absolute left-1/2 top-1/2 h-[2px] w-[90%] -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full bg-white duration-300 group-hover:rotate-0 group-hover:bg-red"></div>
										</div>
									)}
									{e.children && (
										<div
											className={`
											subNav absolute right-0 top-full z-10 pt-[20px] 
											mb:right-[unset] mb:top-[unset] mb:w-full
											`}
										>
											<div
												className={`
												max-h-0 overflow-hidden rounded-[10px] bg-[#0D1332] shadow-[0px_0px_10px_#fff7] duration-500 group-hover:max-h-[200px]
												mb:bg-transparent mb:shadow-none
												`}
											>
												<div className="listSub px-[20px] py-[10px]">
													{e.children.map((e2: any, i2: number) => (
														<div
															className={`
															itemSub relative whitespace-nowrap border-b border-[#55596f] py-[10px] text-center font-GilroyBold text-[14px] uppercase duration-300 last:border-none
															mb:border-none mb:pt-0 mb:text-left mb:font-[Gilroy] mb:text-[24px]
															${activeSubNav == i2 ? "text-white mb:text-red" : "text-red hover:text-[#c4c4c4] mb:text-white"}
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

						<div className="hamburger-lines relative hidden mb:flex" onClick={() => setShowNav(!showNav)}>
							<span className={`line line1 ${showNav ? "rotate-45" : ""}`}></span>
							<span className={`line line2 ${showNav ? "scale-y-0" : ""}`}></span>
							<span className={`line line3 ${showNav ? "-rotate-45" : ""}`}></span>
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

				.hamburger-lines {
					height: 19px;
					width: 24px;
					z-index: 10;
					flex-direction: column;
					justify-content: space-between;
				}

				.hamburger-lines .line {
					display: block;
					height: 3px;
					width: 100%;
					border-radius: 10px;
					background: #ed2224;
				}

				.hamburger-lines .line1 {
					transform-origin: 0% 0%;
					transition: transform 0.4s ease-in-out;
				}

				.hamburger-lines .line2 {
					transition: transform 0.2s ease-in-out;
				}

				.hamburger-lines .line3 {
					transform-origin: 0% 100%;
					transition: transform 0.4s ease-in-out;
				}

				.navCheckbox:checked ~ .hamburger-lines .line1 {
					transform: rotate(45deg);
				}

				.navCheckbox:checked ~ .hamburger-lines .line2 {
					transform: scaleY(0);
				}

				.navCheckbox:checked ~ .hamburger-lines .line3 {
					transform: rotate(-45deg);
				}
			`}</style>
		</>
	);
}

export default memo(Header);
