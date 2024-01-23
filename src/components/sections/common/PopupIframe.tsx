import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useStorage } from "@/components/context/StorageProvider";

function PopupIframe({ ...props }) {
	const router = useRouter();

	const { isModalOpen, setIsModalOpen } = useStorage();

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Modal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				footer={null}
				className="PopupIframe cusModal _md:px-[20px] !w-full max-w-[700px]"
			>
				<div className="relative aspect-[1] overflow-hidden rounded-[15px]">
					<iframe
						src={"https://widget.wabify.com/654c28d3b73e21699490003?fbclid=IwAR3ivt_Ta6FHzNZkX58g4qaKR1s_sb-GE-e1Jk2yF7DifcqRj6JnJJDwgpw"}
						className=" h-full w-full"
					></iframe>
				</div>
			</Modal>
		</>
	);
}

export default memo(PopupIframe);
