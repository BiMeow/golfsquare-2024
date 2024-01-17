import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { useStorage } from "@/components/context/StorageProvider";
import { useWindowSize } from "usehooks-ts";
import gsap from "gsap";

function Preloader({ ...props }) {
	const router = useRouter();

	const { width } = useWindowSize();

	const { isLoading } = useStorage();

	useEffect(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: ".Preloader",
					start: "75px bottom",
					end: "bottom bottom",
				},
			})
			.fromTo(".Preloader .logoIcon", { rotate: 360 }, { rotate: 0, duration: 0.4 })
			.fromTo(".Preloader .logoIcon", { right: 100 }, { right: 0, duration: 0.4 }, 0.5)
			.fromTo(".Preloader .logoText", { maxHeight: 0 }, { maxHeight: 100, duration: 0.4 }, 1);
	}, []);

	return (
		<>
			<div className={`Preloader`}>
				<div
					className={`
          fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden duration-700
          ${isLoading ? "" : "scale-0 rounded-full opacity-0"}
          `}
				>
					<div className="overlay absolute left-0 top-0 h-full w-full bg-[#0007] backdrop-blur-[40px]"></div>
					<div className="relative flex items-center justify-center pr-[85px]">
						<img src="/images/logo-text.png" alt="" className="w-[125px] opacity-0" />

						<div className="logoText absolute left-0 top-0 max-h-0 overflow-hidden">
							<img src="/images/logo-text.png" alt="" className="w-[125px]" />
						</div>
						<img src="/images/logo-icon.png" alt="" className="logoIcon absolute right-[100px] top-[-10px] w-[75px] " />
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(Preloader);
