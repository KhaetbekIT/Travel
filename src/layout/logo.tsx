import { RouterConfig } from "@/configs/router.config";
import { cn } from "@/libs/utils";
import { Lobster } from "next/font/google";
import Link from "next/link";

const lobster = Lobster({
	subsets: ["latin"],
	weight: ["400"],
});

export const Logo = () => {
	return (
		<Link
			className={cn("text-white text-[40px] inline-block", lobster.className)}
			href={RouterConfig.homePage}
		>
			ФорестТревел
		</Link>
	);
};
