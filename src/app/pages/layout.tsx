import { Footer } from "@/layout/footer";
import { Navigation } from "@/layout/nav";
import { cn } from "@/libs/utils";
import type { Layout } from "@/types/types";
import NavImage from "@public/images/nav.jpg";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
});

const RootLayout: Layout = ({ children }) => {
	return (
		<html lang="ru" translate="no">
			<body
				className={cn(
					"flex flex-col min-h-screen justify-between",
					ptSans.className,
				)}
			>
				<header
					className="flex-shrink-0 relative z-10 bg-primary min-h-[100px]"
					style={{ backgroundImage: `url(${NavImage.src})` }}
				>
					<Navigation />
				</header>

				<main className={"flex-1 py-[100px]"}>{children}</main>

				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
