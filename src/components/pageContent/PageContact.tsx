import SectionHomeAbout from "@/components/sections/home/SectionHomeAbout";
import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeHaveFun from "@/components/sections/home/SectionHomeHaveFun";
import SectionHomeYourChance from "@/components/sections/home/SectionHomeYourChance";
import { useRouter } from "next/router";
import { memo } from "react";

function PageContact({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PageContact pt-[150px] mb:pt-[120px]`}>
				<div className="pl-[10%] tl-l:px-[20px]">
					<div className="mx-[-35px] flex flex-wrap">
						<div className="c1 fadeLeft w-[30%] px-[35px] pt-[100px] mb:mb-[50px] mb:w-full mb:pt-0">
							<div className="sticky top-[150px]">
								<h2 className="text-64 uppercase mb:mb-[10px]">Contact us</h2>
								<img src="/images/header-line.png" alt="" className="mb-[40px] w-full mb:w-[70%]" />

								<div className="flex justify-between mb:flex-wrap">
									<p className="w-[175px] mb:mb-[20px] mb:w-full">
										Address:
										<br />
										<strong>8 Annastasia Way Sunshine North Victoria 3020 Australia</strong>
									</p>
									<div className="space-y-[20px]">
										<p>
											Email:
											<br />
											<strong>sales@golfsquare.com.au</strong>
										</p>
										<p>
											Phone:
											<br />
											<strong>1800 166 168</strong>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="c2 fadeRight w-[70%] px-[35px] mb:w-full">
							<img src="/images/contact/man.png" alt="" className="w-full mb:hidden" />
							<img src="/images/contact/man-mb.png" alt="" className="hidden w-full mb:block" />
						</div>
					</div>
				</div>
				<div className="cusContainer fadeUp">
					<img src="/images/contact/banner.jpg" alt="" className="aspect-[1110/414] w-full rounded-[60px] object-cover mb:aspect-[327/414]" />
					<img src="/images/header-line.png" alt="" className="w-full -translate-y-[60%]" />
				</div>
			</div>
		</>
	);
}

export default memo(PageContact);
