import { IconFb, IconInsta, IconTiktok, IconTwitter, IconYt } from "@/components/elements/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

let listSocial = [
	{
		icon: <IconFb />,
		link: "https://www.facebook.com/golfsquare.australia",
	},
	{
		icon: <IconInsta />,
		link: "https://www.instagram.com/golfsquare_australia",
	},
	{
		icon: <IconTiktok />,
		link: "https://www.tiktok.com/@golfsquare_australia",
	},
	{
		icon: <IconYt />,
		link: "https://www.youtube.com/channel/UC2rsIsWzbO1FfSDYV2K650w",
	},
];

// let listMore = [
// 	{
// 		title: "TERM OF USE",
// 		link: "/#",
// 	},
// 	{
// 		title: "CAREER",
// 		link: "/#",
// 	},
// 	{
// 		title: "SITE MAP",
// 		link: "/#",
// 	},
// 	{
// 		title: "FAQs",
// 		link: "/#",
// 	},
// ];

function Footer({ ...props }) {
	const router = useRouter();

	const [setting, setSetting] = useState<any>();

	const getSetting = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/SETTINGS`);
		const res = await ApiCall.json();

		if (res.status) {
			setSetting(res.data?.content?.settings);
		}
	};

	useEffect(() => {
		getSetting();
	}, []);

	let listSocial: any = [
		{
			icon: <IconFb />,
			link: setting?.facebook,
		},
		{
			icon: <IconInsta />,
			link: setting?.instagram,
		},
		{
			icon: <IconTiktok />,
			link: setting?.tiktok,
		},
		{
			icon: <IconYt />,
			link: setting?.youtube,
		},
	];

	return (
		<>
			<div
				className={`Footer fadeIn flex flex-col items-center justify-center py-[50px] text-[16px] text-red tl-l:px-[20px] mb:pb-[60px] mb:pt-[20px] mb:text-[14px]`}
			>
				<p className="mb-[20px] text-center text-[16px]">{setting?.title}</p>
				<img src="/images/logo-icon.png" alt="" className="mb-[20px] w-[65px]" />
				<p className="mb-[20px] whitespace-pre-wrap text-center font-semibold">{setting?.address}</p>
				<a href="https://maps.app.goo.gl/qC1kKUyrNi9FxSmV6" target="_blank" className="mainBtn mb-[20px] text-white">
					Google map
				</a>
				<div className="mx-[-25px] mb-[30px] flex mb:flex-wrap mb:space-y-[20px]">
					<div className="c1 px-[25px] mb:w-full">
						<p className="font-semibold">Opening Hours:</p>
					</div>
					<div className="c2 px-[25px] mb:w-full">
						<p className="mb-[10px] font-semibold">Golf:</p>
						<p className="whitespace-pre-wrap text-[13px] tracking-[1px]">{setting?.golf}</p>
					</div>
					<div className="c3 px-[25px] mb:w-full">
						<p className="mb-[10px] font-semibold">Kitchen</p>
						<p className="whitespace-pre-wrap text-[13px] tracking-[1px]">{setting?.kitchen}</p>
					</div>
				</div>
				<p className="mb-[30px] flex items-center text-center font-bold mb:flex-col">
					Contact Us:{" "}
					<a className="mx-[5px] duration-500 hover:text-white" href={`tel:${setting?.hotline}`}>
						{setting?.hotline}
					</a>
					<span className="mx-[10px] mb:hidden">|</span>
					<br className="hidden mb:block" />
					<br className="hidden mb:block" />
					<a className="mx-[5px] duration-500 hover:text-white" href={`mailto:${setting?.email}`}>
						{setting?.email}
					</a>
				</p>
				<div className="listSocial flex items-center space-x-[30px]">
					{listSocial.map((e: any, i: number) => (
						<div className="itemSocial relative cursor-pointer fill-red duration-300 hover:fill-white" key={i}>
							{e.icon}
							{e.link && <Link href={e.link} className="absFull" target="_blank" />}
						</div>
					))}
				</div>
				{/* <div className="listMore flex flex-wrap items-center gap-y-[25px] space-x-[40px] mb:w-full mb:space-x-0">
					{listMore.map((e: any, i: number) => (
						<div
							className="itemMore relative cursor-pointer font-bold text-red duration-300 hover:text-white mb:w-1/2 mb:text-center mb:text-[16px]"
							key={i}
						>
							<p>{e.title}</p>
							<Link href={e.link} className="absFull" target="_blank" />
						</div>
					))}
				</div> */}
			</div>
		</>
	);
}

export default memo(Footer);
