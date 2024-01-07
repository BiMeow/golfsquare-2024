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
		href: "/#",
	},
	{
		title: "Membership",
		href: "/#",
	},
	{
		title: "Learn",
		href: "/#",
	},
	{
		title: "Have fun",
		href: "/#",
	},
];

function Header({ activeNav = -1, ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".MasterPage",
					start: "top top",
					end: "99% bottom",
					scrub: 2,
				},
			}).fromTo(".headerLine", { width: 0 }, { width: "100%" });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`Header //backdrop-blur-[10px] fixed top-0 z-[444] w-full py-[30px]`}>
				<div className="cusContainerLarge">
					<div className="flex items-center justify-between">
						<Link href="/">
							<img src="/images/logo.png" alt="" className="w-[205px]" />
						</Link>

						<div className="listMenu flex space-x-[60px]">
							{listMenu.map((e: any, i: number) => (
								<Link
									href={e.href}
									key={i}
									className={`
									font-GilroyBold text-[14px] uppercase duration-300 
									${activeNav == i ? "text-white" : "text-red hover:text-white hover:opacity-75"}
									`}
								>
									{e.title}
								</Link>
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
