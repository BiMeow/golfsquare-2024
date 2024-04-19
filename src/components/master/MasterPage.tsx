import Providers from "@/components/context/compose/Providers";
import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Preloader from "@/components/elements/Preloader";
import PopupIframe from "@/components/sections/common/PopupIframe";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

function MasterPage({
	title = "GOLF SQUARE",
	description = "WE DON'T MAKE FUN, WE MAKE FUN BETTER",
	pageName,
	activeNav,
	activeSubNav,
	...props
}: any) {
	const router = useRouter();

	const { children } = props;

	return (
		<>
			<Script id="facebook-pixel">
				{`
					!function(f,b,e,v,n,t,s)
					{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};
					if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
					n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];
					s.parentNode.insertBefore(t,s)}(window,document,'script',
					'https://connect.facebook.net/en_US/fbevents.js');
					fbq('init', '1432708464323815'); 
					fbq('track', 'PageView');
      	`}
			</Script>

			<Script src="https://www.googletagmanager.com/gtag/js?id=G-QQMQ32F432" />
			<Script id="google-analytics">
				{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
        
                gtag('config', 'G-QQMQ32F432');
                `}
			</Script>

			<Head>
				<title>GolfSquare {pageName && `| ${pageName}`}</title>

				<meta charSet="UTF-8" key="charset" />

				<link rel="shortcut icon" href={`/images/logo-icon.png`} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={`https://golfsquare-2024.vercel.app/images/home/banner.jpg`} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

				<meta name="viewport" key="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</Head>

			<Providers>
				<Preloader />

				<main className={`MasterPage flex min-h-screen flex-col justify-between`}>
					<Header activeNav={activeNav} activeSubNav={activeSubNav} />
					<div className="hideLine absolute top-[100px]"></div>
					<div className={`pageContent`}>{children}</div>
					<Footer />
					<PopupIframe />

					<noscript
						dangerouslySetInnerHTML={{
							__html: (
								<img
									src="https://www.facebook.com/tr?id=1432708464323815&ev=PageView&noscript=1"
									height="0"
									width="0"
									style={{ display: "none", visibility: "hidden" }}
								></img>
							),
						}}
					/>
				</main>
			</Providers>
		</>
	);
}

export default MasterPage;
