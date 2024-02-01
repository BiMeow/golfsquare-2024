import { useStorage } from "@/components/context/StorageProvider";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { memo, useState } from "react";

function SectionReady({ ...props }) {
	const router = useRouter();

	const { setIsModalOpen } = useStorage();

	return (
		<>
			<div className={`SectionReady fadeUp py-[75px]`}>
				<div className="cusContainer">
					<div className="flex items-center justify-between gap-x-[86px] gap-y-[30px] mb:flex-wrap mb:justify-center mb:text-center">
						<p className="text-[40px] font-bold mb:text-[32px]">
							READY TO <br className="mb:hidden" /> BOOK?
						</p>
						<p className="text-[20px] mb:text-[14px]">Request more info or call our Sales events team and start your event!</p>
						<a href="https://widget.wabify.com/654c28d3b73e21699490003?fbclid=IwAR0wEo9lXXHkiQBw6klSfamYZa420cvw9RdOJc3jQNhOTMXXmthns_2y-dw" target="_blank">
							<button className="mainBtn" onClick={() => setIsModalOpen(true)}>
								book a table
							</button>
						</a>
					</div>
				</div>
			</div>

			<style jsx global>
				{`
					.SectionReady {
						background: linear-gradient(180deg, rgba(237, 34, 36, 1) 0%, rgba(13, 19, 50, 1) 100%);
					}
				`}
			</style>
		</>
	);
}

export default memo(SectionReady);
