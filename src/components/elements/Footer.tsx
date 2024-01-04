import { IconFb, IconGoogle, IconTwitter } from "@/components/elements/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

let listSocial = [
	{
		icon: <IconFb />,
		link: "https://www.google.com/",
	},
	{
		icon: <IconGoogle />,
		link: "https://www.google.com/",
	},
	{
		icon: <IconTwitter />,
		link: "https://www.google.com/",
	},
];

let listMore = [
	{
		title: "TERM OF USE",
		link: "/#",
	},
	{
		title: "CAREER",
		link: "/#",
	},
	{
		title: "SITE MAP",
		link: "/#",
	},
	{
		title: "FAQs",
		link: "/#",
	},
];

function Footer({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`Footer text-red flex flex-col items-center justify-center py-[130px] text-[16px]`}>
				<img src="/images/logo-icon.png" alt="" className="mb-[32px] w-[65px]" />
				<p className="mb-[50px] text-center">
					Light density, portable, easy for installation. <br /> Labor cost saving and project schedule
					shortening.
				</p>

				<div className="listSocial mb-[50px] flex items-center space-x-[30px]">
					{listSocial.map((e: any, i: number) => (
						<div
							className="itemSocial fill-red relative cursor-pointer duration-300 hover:fill-white"
							key={i}
						>
							{e.icon}
							<Link href={e.link} className="absFull" target="_blank" />
						</div>
					))}
				</div>

				<p className="mb-[30px] text-center font-bold">HOTLINE: (+84)969 87 3300 | sales@golfsquare.com.au</p>

				<div className="listMore flex items-center space-x-[40px]">
					{listMore.map((e: any, i: number) => (
						<div
							className="itemMore text-red relative cursor-pointer font-bold duration-300 hover:text-white"
							key={i}
						>
							<p>{e.title}</p>
							<Link href={e.link} className="absFull" target="_blank" />
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default memo(Footer);
