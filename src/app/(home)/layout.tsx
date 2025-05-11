import { Footer } from "@/layout/footer";
import { Navigation } from "@/layout/nav";
import { cn } from "@/libs/utils";
import type { Layout } from "@/types/types";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
});

const RootLayout: Layout = ({ children }) => {
	return (
		<html lang="ru" translate="no" className="scroll-smooth">
			<body
				className={cn(
					"flex flex-col min-h-screen justify-between",
					ptSans.className,
				)}
			>
				<div className="flex-shrink-0 relative z-10">
					<Navigation />
				</div>

				<main className={"flex-1"}>{children}</main>

				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
