import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import gsap from "gsap";

let listMenu = [
	{
		title: "About",
		href: "/#",
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

function Header({ ...props }) {
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
			<div className={`Header sticky top-0 bg-[#0d133277] py-[30px] backdrop-blur-[10px]`}>
				<div className="cusContainer">
					<div className="flex items-center justify-between">
						<Link href="/">
							<img src="/images/logo.png" alt="" className="w-[205px]" />
						</Link>

						<div className="listMenu flex space-x-[60px]">
							{listMenu.map((e: any, i: number) => (
								<Link href={e.href} key={i} className="text-red font-GilroyBold text-[14px] uppercase">
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
		</>
	);
}

export default memo(Header);
