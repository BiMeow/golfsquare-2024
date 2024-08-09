import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { message, Modal } from "antd";
import { useStorage } from "@/components/context/StorageProvider";
import { useForm } from "react-hook-form";

function PopupIframe({ ...props }) {
	const router = useRouter();

	const { isModalRegisterOpen, setIsModalRegisterOpen } = useStorage();

	const handleOk = () => {
		setIsModalRegisterOpen(false);
	};

	const handleCancel = () => {
		setIsModalRegisterOpen(false);
	};

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<any>({ mode: "all" });

	const onRegister = async (data: any) => {
		console.log(`BiMeow log on register`, data);
		const ApiCall = await fetch(`${process.env.NEXT_PUBLIC_BASE_ULR_API}/api/v1/fe/signup`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		const res = await ApiCall.json();

		if (res.status) {
			message.success("You have successfully registered. Thank you!");
			reset();
			handleCancel();
		} else {
			message.warning("Please try again!");
		}
	};

	return (
		<>
			<Modal
				open={isModalRegisterOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
				footer={null}
				className="PopupRegister cusModal _md:px-[20px] !w-full max-w-[350px]"
			>
				<div className="relative overflow-hidden rounded-[15px] bg-red px-[20px] pb-[30px] pt-[65px] font-GilroyMedium text-[16px]">
					<p className="mb-[30px] text-white">
						Sign up to receive the latest deals, special offers, events and news. We will never spam you or share your details.
					</p>
					<form className="formLogin" onSubmit={handleSubmit(onRegister)}>
						<div className="itemForm mb-[10px]">
							<input
								id="name"
								className="cusInput rounded-[10px] px-[10px]"
								type="text"
								placeholder="First Name"
								{...register("name", { required: true })}
							/>
							{errors?.firstName && <div className="errors text-yellow-300">Please check your First Name!</div>}
						</div>
						<div className="itemForm mb-[10px]">
							<input
								id="email"
								className="cusInput rounded-[10px] px-[10px]"
								type="email"
								placeholder="Email"
								{...register("email", { required: true })}
							/>
							{errors?.email && <div className="errors text-yellow-300">Please check your Email!</div>}
						</div>
						<div className="itemForm mb-[40px]">
							<p className="mb-[5px] text-white">Closest venue</p>
							<input
								id="venue"
								className="cusInput rounded-[10px] px-[10px]"
								type="text"
								placeholder="Postcode"
								{...register("venue", { required: true })}
							/>
							{errors?.postcode && <div className="errors text-yellow-300">Please check your Postcode!</div>}
						</div>
						<button
							type="submit"
							className="w-full border-2 border-white p-[15px] text-center font-GilroyBold  text-[16px] uppercase text-white duration-500 hover:bg-white hover:text-black"
						>
							Sign Up
						</button>
					</form>
				</div>
			</Modal>
		</>
	);
}

export default memo(PopupIframe);
