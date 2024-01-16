import { Modal } from "antd";
import { useRouter } from "next/router";
import { memo, useState } from "react";

function SectionReady({ ...props }) {
	const router = useRouter();

	const [isModalOpen, setIsModalOpen] = useState<any>(false);

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className={`SectionReady py-[75px]`}>
				<div className="cusContainer">
					<div className="flex items-center justify-between gap-x-[86px] gap-y-[30px] mb:flex-wrap mb:justify-center mb:text-center">
						<p className="text-[40px] font-bold mb:text-[32px]">
							READY TO <br className="mb:hidden" /> BOOK?
						</p>
						<p className="text-[20px] mb:text-[14px]">Request more info or call our Sales events team and start your event!</p>
						<button className="mainBtn" onClick={() => setIsModalOpen(true)}>
							book a table
						</button>
					</div>
				</div>
			</div>

			<Modal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				footer={null}
				className="cusModal _md:px-[20px] !w-full max-w-[700px]"
			>
				<div className="relative aspect-[1] overflow-hidden rounded-[15px]">
					<iframe src={"https://golfsquare-2024.vercel.app/"} className=" h-full w-full"></iframe>
				</div>
			</Modal>

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
