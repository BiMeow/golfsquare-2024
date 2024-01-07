import { useRouter } from "next/router";
import { memo } from "react";
import { useForm } from "react-hook-form";

function SectionContact({ ...props }) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<any>({ mode: "all" });

	const onSubmitContact = (data: any) => {
		console.log(`BiMeow contact`, data);
	};

	return (
		<>
			<div className={`SectionContact relative`}>
				<img src="/images/bg-contact.png" alt="" className="w-full" />
				<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
					<h2 className="titleStoke mb-[60px]">Contact Us</h2>

					<form
						className="formContact w-[700px]"
						onSubmit={handleSubmit(onSubmitContact)}
					>
						<div className="mx-[-10px] flex flex-wrap gap-y-[20px]">
							<div className="itemForm w-1/2 px-[10px] mb:w-full">
								<label htmlFor="name" className="cusLabel">
									Customer Name *
								</label>
								<input
									id="name"
									className="cusInput"
									type="text"
									placeholder="Type your name"
									{...register("name", { required: true })}
								/>
								{errors?.name && (
									<div className="errors">Please check Customer Name!</div>
								)}
							</div>

							<div className="itemForm w-1/2 px-[10px] mb:w-full">
								<label htmlFor="phone" className="cusLabel">
									Phone number *
								</label>
								<input
									id="phone"
									className="cusInput"
									type="tel"
									placeholder="+84"
									{...register("phone", { required: true })}
								/>
								{errors?.phone && (
									<div className="errors">Please check Phone number!</div>
								)}
							</div>

							<div className="itemForm w-full px-[10px]">
								<label htmlFor="email" className="cusLabel">
									Email *
								</label>
								<input
									id="email"
									className="cusInput"
									type="email"
									placeholder="email@gmail.com"
									{...register("email", { required: true })}
								/>
								{errors?.email && (
									<div className="errors">Please check Phone number!</div>
								)}
							</div>

							<div className="mt-[30px] flex w-full justify-center">
								<button type="submit" className="mainBtn">
									REQUEST
								</button>
							</div>
						</div>
					</form>
				</div>

				<img
					src="/images/header-line.png"
					alt=""
					className="absolute bottom-0 left-0 w-full"
				/>
			</div>
		</>
	);
}

export default memo(SectionContact);
