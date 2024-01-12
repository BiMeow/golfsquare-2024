import { useRouter } from "next/router";
import { memo } from "react";

function SectionLearnTop({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionLearnTop secSpacing relative`}>
				<img src="/images/learn/top-man.jpg" alt="" className="aspect-[145/70] w-full object-cover" />
				<div className="content absolute left-0 top-0 h-full w-full">
					<div className="ml-auto w-fit pr-[17%] pt-[15%]">
						<h2 className="mb-[20px] text-[90px] font-bold">
							GET INTO
							<br />
							<span className="text-red">GOLF</span>
						</h2>
						<p className="max-w-[495px] text-[16px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, sit venenatis vitae ut sollicitudin. Neque, dis vel velit arcu,
							sagittis at faucibus nisi nulla. Nunc leo neque risus mauris turpis.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionLearnTop);
