import { IconMemBlock, IconMemCompare } from "@/components/elements/Icon";
import SectionMembershipBlock from "@/components/sections/membership/SectionMembershipBlock";
import SectionMembershipCompare from "@/components/sections/membership/SectionMembershipCompare";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect, useMemo, useState } from "react";

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

let listCompare = [
	{
		title: "MEMBERSHIP FEE",
		list: [["$150/month - $1500/Year", "$200/month - $2000/year", "$2500/year", "$3500/year"]],
	},
	{
		title: "Tire Type",
		list: [["Premium", "Premium", "VIP", "VIP"]],
	},
	{
		title: "Entitlement",
		list: [["1 Pax", "1 Pax", "Family PackFamily Pack\n(2 Adults & 2 Children)", "1 Pax"]],
	},
	{
		title: "Complimentary\nSimulator Use",
		list: [
			["Monday - Friday\nOff-Peak Hours", "Monday - Friday\nOff-Peak Hours", "Monday - Friday\nOff-Peak Hours", "All Day\n(Peak & Off-Peak)"],
			["Max 2 hours\nper day", "Max 2 hours\nper day", "Max 2 hours\nper day", "Max 2 hours\nper day"],
			["Max 1 booth\nper booking", "Max 1 booth\nper booking", "Max 1 booth\nper booking", "Max 1 booth\nper booking"],
			["6 free guest\npass/month", "6 free guest\npass/month", "6 free guest\npass/month", "Free Guest\nInvitation"],
			[
				"20% Discount during\npeak hours/extra time",
				"20% Discount during\npeak hours/extra time",
				"20% Discount during\npeak hours/extra time",
				"30% Discount\nextra time booking",
			],
			["10% Discount on\nF&B service", "10% Discount on\nF&B service", "10% Discount on\nF&B service", "20% Discount on\nF&B service"],
			["Reciprocal Discounty", "Reciprocal Discounty", "Reciprocal Discounty", "Reciprocal Discounty"],
			["Welcome Gift", "Welcome Gift", "Welcome Gift", "Welcome Gift"],
			["1 hour of Golf Lesson\nYearly Payment", "1 hour of Golf Lesson\nYearly Payment", "1 hour of\nGolf Lesson", "5 hour of\nGolf Lesson"],
		],
	},
	{
		title: "LoCker Hire",
		list: [["$400/Year", "$400/Year", "$400/Year", "$400/Year"]],
	},
	{
		title: "Access at\nDiffrent Venue",
		list: [["YES", "YES", "YES", "YES"]],
	},
	{
		title: "Value",
		list: [["Worth ($1,800/Month or\n$24,000/Year)", "Worth ($2,500/Month or\n32,000/Year)", "Worth (40,000/Year)", "Worth (50,000/Year)"]],
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

function PageMembership({ ...props }) {
	const router = useRouter();

	const [activeTab, setActiveTab] = useState<any>(1);

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
						<SectionMembershipCompare data={listCompare} />
					</div>
				);

			default:
				break;
		}

		return <></>;
	}, [activeTab]);

	useEffect(() => {
		gsap.timeline().fromTo(".membershipContent", { y: 400 }, { y: 0 });
	}, [activeTab]);

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
