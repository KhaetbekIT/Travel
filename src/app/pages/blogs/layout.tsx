import { cn } from "@/libs/utils";
import type { Layout } from "@/types/types";
import { PT_Sans } from "next/font/google";
import { Sidebar } from "./_components/sidebar";

const ptSans = PT_Sans({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "700"],
});

const RootLayout: Layout = ({ children }) => {
	return (
		<main className={cn("flex-1 py-[100px] flex gap-5", ptSans.className)}>
			<Sidebar />

			<article>{children}</article>
		</main>
	);
};

export default RootLayout;
