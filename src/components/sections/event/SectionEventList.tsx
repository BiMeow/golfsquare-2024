import { IconPlay } from "@/components/elements/Icon";
import { useRouter } from "next/router";
import { memo } from "react";

let listEvents = [
	{
		title: "HIGHLIGHTS EVENTS",
		list: [
			{
				title: "NEW YEAR EVE",
				description: "Enjoy live bands, refreshing drinks, and a captivating atmosphere at this vibrant venue.",
				image: "/images/visit/celeb-1.jpg",
			},
			{
				title: "Christmas celebration",
				description: "Enjoy live bands, refreshing drinks, and a captivating atmosphere at this vibrant venue.",
				image: "/images/visit/celeb-2.jpg",
			},
			{
				title: "memorable birthday",
				description: "Enjoy live bands, refreshing drinks, and a captivating atmosphere at this vibrant venue.",
				image: "/images/visit/celeb-3.jpg",
			},
		],
	},
	{
		title: "square golf event spaces",
		list: [
			{
				title: "MEETINGS LIKE NO OTHER",
				description: "Meeting room plus coffee and lunch break",
				image: "/images/visit/celeb-4.jpg",
			},
			{
				title: "MEET & PLAY",
				description: "A combined package of meeting sessions and the Square Golf game experience",
				image: "/images/visit/celeb-5.jpg",
			},
			{
				title: "PRIVATE EVENT",
				description: "Gather up for a good time at any of our bars & restaurants add other event spaces",
				image: "/images/visit/celeb-6.jpg",
			},
		],
	},
];

function SectionEventList({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionEventList mb-[160px]`}>
				<div className="cusContainer">
					{listEvents.map((e: any, i: number) => (
						<div className="listEvent mb-[100px] last:mb-0" key={i}>
							<h2 className="mb-[50px] text-center text-[36px] font-bold uppercase">{e.title}</h2>

							<div className="listEvents mx-[-15px] flex flex-wrap items-stretch">
								{e.list?.map(
									(e: any, i: number) =>
										i < 3 && (
											<div className="itemCeleb group w-1/3 px-[15px]" key={i}>
												<div className="h-full bg-[#0D133277] backdrop-blur-[5px]">
													<div className="overflow-hidden">
														<img src={e.image} alt="" className="aspect-[35/41] object-cover duration-500 group-hover:scale-[1.01]" />
													</div>
													<div className="p-[20px]">
														<p className="text-24 mb-[16px] font-bold">{e.title}</p>
														<p className="text-[14px] italic">{e.description}</p>
													</div>
												</div>
											</div>
										)
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default memo(SectionEventList);
