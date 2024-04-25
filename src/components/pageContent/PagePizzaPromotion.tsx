import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

let listMenu = [
	{
		image: "/images/pizzapromotion/menu-1.jpg",
	},
	{
		image: "/images/pizzapromotion/menu-2.jpg",
	},
	{
		image: "/images/pizzapromotion/menu-3.jpg",
	},
];

function PagePizzaPromotion({ ...props }) {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionPizzaPromotionBanner",
						start: "top top",
						end: "bottom top",
						scrub: 2,
					},
				})
				.fromTo(".SectionPizzaPromotionBanner .image", { y: 0 }, { y: -100 }, 0)
				.fromTo(".SectionPizzaPromotionBanner .content", { y: 0 }, { y: 150 }, 0);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".SectionPizzaPromotionBanner",
						start: "top bottom",
					},
				})

				.fromTo(".SectionPizzaPromotionBanner .moveUp", { y: 150, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.3 }, 0);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`PagePizzaPromotion`}>
				<div className={`SectionPizzaPromotionBanner relative mb-[80px] mb:mb-[60px]`}>
					<div className="relative aspect-[1445/795] w-full overflow-hidden bg-[#0D1332] mb:aspect-[375/600]">
						<img src="/images/pizzapromotion/banner-img.png" alt="" className="absFull image h-[calc(100%+100px)] object-cover" />
					</div>
					<div className="content absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center mb:px-[20px]">
						<h2 className="moveUp mb-[10px] text-center text-[48px] opacity-0 mb:text-[30px]">Wood Fired Pizzas</h2>
						<h3 className="moveUp mb-[15px] opacity-0">
							<img src="/images/pizzapromotion/banner-title.png" alt="buy 1 get 2 pizzas" className="w-full max-w-[600px]" />
						</h3>
						<p className="moveUp mb-[30px] text-center text-[20px] opacity-0 mb:text-[18px]">
							Buy one pizza and Coca Cola combo,
							<br />
							get two pizzas free
						</p>
						<div className="moveUp opacity-0">
							<a
								target="_blank"
								href="https://widget.wabify.com/654c28d3b73e21699490003?fbclid=IwAR0wEo9lXXHkiQBw6klSfamYZa420cvw9RdOJc3jQNhOTMXXmthns_2y-dw"
							>
								<button className="mainBtn">BOOK A TABLE</button>
							</a>
						</div>
						{/* <button className="mainBtn fadeUp">PLAN A VISIT</button> */}
					</div>
				</div>

				<div className="cusContainer mb-[135px] mb:mb-[60px]">
					<h3 className="text-36 fadeUp mb-[40px] text-center uppercase text-red">The menu</h3>

					<div className="listMenu mx-[-10px] mb-[130px] flex flex-wrap gap-y-[20px] mb:mb-[60px]">
						{listMenu.map((e: any, i: number) => (
							<div className="itemMenu fadeUp w-1/3 px-[10px] mb:w-full" key={i}>
								<img src={e.image} alt="" className="aspect-[354/653] w-full rounded-[30px] object-cover" />
							</div>
						))}
					</div>

					<p className="fadeUp mb-[20px] text-center text-[28px] mb:text-[24px]">Terms and Conditions</p>
					<p className="fadeUp mx-auto max-w-[1015px] text-center">
						The 'Buy one pizza and Coca Cola combo, get two pizzas free' promotion at Golf Square entitles customers to receive two pizzas at no
						additional cost when they purchase one pizza and Coke combo. Customers must pay the full price of the highest-priced pizza and Coca Cola
						in their order to receive the two lowest-priced pizzas free. The Coca Cola product in the Pizza and Coke Combo is a 375ml can of their
						choice of either Coca Cola Classic, Diet Coke or Coca Cola Zero Sugar.
						<br />
						<br />
						The 'Buy one pizza and Coca Cola combo, get two pizzas free' promotion at Golf Square, is only available to customers who present the
						applicable original pizza voucher at Golf Square at the time of order. Offer valid as one voucher per customer, per transaction only. Not
						valid with any other offer. Phone ordering must be paid in full at time of order. All prices include GST. Prices subject to change without
						notice.
					</p>
				</div>

				<div className="cusContainer fadeUp">
					<img src="/images/contact/banner.jpg" alt="" className="aspect-[1110/414] w-full rounded-[60px] object-cover mb:aspect-[327/414]" />
					<img src="/images/header-line.png" alt="" className="w-full -translate-y-[60%]" />
				</div>
			</div>
		</>
	);
}

export default memo(PagePizzaPromotion);
