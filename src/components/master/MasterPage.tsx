import Providers from "@/components/context/compose/Providers";
import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Preloader from "@/components/elements/Preloader";
import Head from "next/head";
import { useRouter } from "next/router";

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
					<div className={`pageContent`}>{children}</div>
					<Footer />
				</main>
			</Providers>
		</>
	);
}

export default MasterPage;
