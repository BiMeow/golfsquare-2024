import { IconMemBlock, IconMemCompare } from "@/components/elements/Icon";
import SectionMembershipBlock from "@/components/sections/membership/SectionMembershipBlock";
import SectionMembershipCompare from "@/components/sections/membership/SectionMembershipCompare";
import asset from "@/utils/asset";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect, useMemo, useState } from "react";

function PageMembership({ ...props }) {
	const router = useRouter();

	const [activeTab, setActiveTab] = useState<any>(1);
	const [pageContent, setPageContent] = useState<any>();

	const getPageContent = async () => {
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/pages/MEMBERSHIP`);
		const res = await ApiCall.json();

		if (res.status) {
			setPageContent(res.data?.content);
		}
	};

	useEffect(() => {
		getPageContent();
	}, []);

	useEffect(() => {
		gsap.timeline().fromTo(".membershipContent", { y: 400 }, { y: 0 });
	}, [activeTab]);

	let listMembershipInfo = [
		{
			title: `${pageContent?.red?.name}\n${pageContent?.red?.days}`,
			image: asset(pageContent?.red?.bg),
		},
		{
			title: `${pageContent?.white?.name}\n${pageContent?.white?.days}`,
			image: asset(pageContent?.white?.bg),
		},
		{
			title: `${pageContent?.blue?.name}\n${pageContent?.blue?.days}`,
			image: asset(pageContent?.blue?.bg),
		},
		{
			title: `${pageContent?.black?.name}\n${pageContent?.black?.days}`,
			image: asset(pageContent?.black?.bg),
		},
	];

	let listCompare = [
		{
			title: "MEMBERSHIP FEE",
			list: [[pageContent?.red?.fee, pageContent?.white?.fee, pageContent?.blue?.fee, pageContent?.black?.fee]],
		},
		{
			title: "Tire Type",
			list: [[pageContent?.red?.type, pageContent?.white?.type, pageContent?.blue?.type, pageContent?.black?.type]],
		},
		{
			title: "Entitlement",
			list: [[pageContent?.red?.entitlement, pageContent?.white?.entitlement, pageContent?.blue?.entitlement, pageContent?.black?.entitlement]],
		},
		{
			title: "Complimentary\nSimulator Use",
			list: [
				[pageContent?.red?.simulator, pageContent?.white?.simulator, pageContent?.blue?.simulator, pageContent?.black?.simulator],
				[pageContent?.red?.simulator1, pageContent?.white?.simulator1, pageContent?.blue?.simulator1, pageContent?.black?.simulator1],
				[pageContent?.red?.simulator2, pageContent?.white?.simulator2, pageContent?.blue?.simulator2, pageContent?.black?.simulator2],
				[pageContent?.red?.simulator3, pageContent?.white?.simulator3, pageContent?.blue?.simulator3, pageContent?.black?.simulator3],
				[pageContent?.red?.simulator4, pageContent?.white?.simulator4, pageContent?.blue?.simulator4, pageContent?.black?.simulator4],
				[pageContent?.red?.simulator5, pageContent?.white?.simulator5, pageContent?.blue?.simulator5, pageContent?.black?.simulator5],
				[pageContent?.red?.simulator6, pageContent?.white?.simulator6, pageContent?.blue?.simulator6, pageContent?.black?.simulator6],
				[pageContent?.red?.simulator7, pageContent?.white?.simulator7, pageContent?.blue?.simulator7, pageContent?.black?.simulator7],
				[pageContent?.red?.simulator8, pageContent?.white?.simulator8, pageContent?.blue?.simulator8, pageContent?.black?.simulator8],
			],
		},
		{
			title: "LoCker Hire",
			list: [[pageContent?.red?.hire, pageContent?.white?.hire, pageContent?.blue?.hire, pageContent?.black?.hire]],
		},
		{
			title: "Access at\nDiffrent Venue",
			list: [[pageContent?.red?.venue, pageContent?.white?.venue, pageContent?.blue?.venue, pageContent?.black?.venue]],
		},
		{
			title: "Value",
			list: [[pageContent?.red?.value, pageContent?.white?.value, pageContent?.blue?.value, pageContent?.black?.value]],
		},
	];

	let listMembership = [
		{
			title: "RED Membership (5 Days)",
			price: { min: 150, max: 1500 },
			image: "/images/membership/mem-1.png",
			description: [
				"Premium - 1 pax",
				"Monday - Friday Off-Peak Hours",
				"6 free guest pass/month",
				"20% Discount during peak hours/extra time",
				"10% Discount on F&B service",
				"1 hour of Golf Lesson Yearly Payment",
				"Locker hire: $400/Year",
				"Access at Diffrent Venue",
				"Value: Worth ($1,800/Month or $24,000/Year)",
			],
		},
		{
			title: "WHITE Membership (7 Days)",
			price: { min: 200, max: 2000 },
			image: "/images/membership/mem-2.png",
			description: [
				"Premium - 1 pax",
				"Monday - Friday Off-Peak Hours",
				"6 free guest pass/month",
				"20% Discount during peak hours/extra time",
				"10% Discount on F&B service",
				"1 hour of Golf Lesson Yearly Payment",
				"Locker hire: $400/Year",
				"Access at Diffrent Venue",
				"Value: Worth ($2,500/Month or 32,000/Year)",
			],
		},
		{
			title: "BLUE Membership (7 Days)",
			price: { min: 0, max: 2500 },
			image: "/images/membership/mem-3.png",
			description: [
				"Premium - 1 pax",
				"Monday - Friday Off-Peak Hours",
				"6 free guest pass/month",
				"20% Discount during peak hours/extra time",
				"10% Discount on F&B service",
				"1 hour of Golf Lesson Yearly Payment",
				"Locker hire: $400/Year",
				"Access at Diffrent Venue",
				"Value: Worth (40,000/Year)",
			],
		},
		{
			title: "BLACK Membership (7 Days)",
			price: { min: 0, max: 3500 },
			image: "/images/membership/mem-4.png",
			description: [
				"Premium - 1 pax",
				"Monday - Friday Off-Peak Hours",
				"6 free guest pass/month",
				"20% Discount during peak hours/extra time",
				"10% Discount on F&B service",
				"1 hour of Golf Lesson Yearly Payment",
				"Locker hire: $400/Year",
				"Access at Diffrent Venue",
				"Value: Worth (50,000/Year)",
			],
		},
	];

	let listTab = [
		{
			title: "Block view",
			icon: <IconMemBlock />,
		},
		{
			title: "Compare view",
			icon: <IconMemCompare />,
		},
	];

	const membershipContent = useMemo(() => {
		switch (activeTab) {
			case 0:
				return (
					<div className="cusContainer mt-[180px] mb:mt-[100px]">
						<SectionMembershipBlock data={listMembership} />
					</div>
				);

			case 1:
				return (
					<div className="cusContainerMd">
						<SectionMembershipCompare data={listCompare} listMembership={listMembershipInfo} />
					</div>
				);

			default:
				break;
		}

		return <></>;
	}, [activeTab, pageContent]);

	return (
		<>
			<div className={`PageMembership pt-[230px] mb:pt-[120px]`}>
				<div className="cusContainer">
					<h2 className="text-64 fadeUp mb-[45px] text-center uppercase">Membership</h2>

					{/* <div className="listTab fadeUp mb-[100px] flex items-center justify-center space-x-[70px] tl-p:hidden">
						{listTab.map((e: any, i: number) => (
							<div
								className={`
								itemTab text-24 relative flex cursor-pointer items-center pb-[8px] duration-300
								${activeTab == i ? "font-bold text-red" : "font-medium text-white hover:opacity-75"}
								`}
								key={i}
								onClick={() => setActiveTab(i)}
							>
								<div className="mr-[14px]">{e.icon}</div>
								<p>{e.title}</p>
								<div
									className={`
									borderTab absolute left-0 top-full h-[6px] w-full bg-red duration-500
									${activeTab == i ? "max-w-[200px]" : "max-w-0"}
									`}
								></div>
							</div>
						))}
					</div> */}
				</div>
				<div className="membershipContent fadeUp">{membershipContent}</div>
			</div>

			<style jsx global>{`
				.borderTab {
					clip-path: polygon(4% 0, 100% 0, 96% 100%, 0% 100%);
				}
			`}</style>
		</>
	);
}

export default memo(PageMembership);
