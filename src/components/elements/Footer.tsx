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
			<div
				className={`Footer fadeIn flex flex-col items-center justify-center py-[130px] text-[16px] text-red tl-l:px-[20px] mb:pb-[60px] mb:pt-[80px] mb:text-[14px]`}
			>
				<img src="/images/logo-icon.png" alt="" className="mb-[32px] w-[65px]" />
				<p className="mb-[50px] text-center">
					Light density, portable, easy for installation. <br /> Labor cost saving and project schedule shortening.
				</p>

				<div className="listSocial mb-[50px] flex items-center space-x-[30px]">
					{listSocial.map((e: any, i: number) => (
						<div className="itemSocial relative cursor-pointer fill-red duration-300 hover:fill-white" key={i}>
							{e.icon}
							<Link href={e.link} className="absFull" target="_blank" />
						</div>
					))}
				</div>

				<p className="mb-[30px] flex items-center text-center font-bold mb:flex-col">
					HOTLINE: (+84) 969 87 3300
					<span className="mx-[10px] mb:hidden">|</span>
					<br className="hidden mb:block" />
					<br className="hidden mb:block" />
					sales@golfsquare.com.au
				</p>

				<div className="listMore flex flex-wrap items-center gap-y-[25px] space-x-[40px] mb:w-full mb:space-x-0">
					{listMore.map((e: any, i: number) => (
						<div
							className="itemMore relative cursor-pointer font-bold text-red duration-300 hover:text-white mb:w-1/2 mb:text-center mb:text-[16px]"
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
