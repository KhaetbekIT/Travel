import { RouterConfig } from "@/configs/router.config";
import Link from "next/link";

export const Sidebar = () => {
	return (
		<aside className="w-[300px] flex-none">
			<ul>
				<li>
					<Link
						className="font-semibold hover:text-red-500"
						href={RouterConfig.blogByIdPage(1)}
					>
						Лесной тур
					</Link>
				</li>

				<li>
					<Link
						className="font-semibold hover:text-red-500"
						href={RouterConfig.blogByIdPage(2)}
					>
						Пустынный тур
					</Link>
				</li>

				<li>
					<Link
						className="font-semibold hover:text-red-500"
						href={RouterConfig.blogByIdPage(3)}
					>
						Озёрный тур
					</Link>
				</li>

				<li>
					<Link
						className="font-semibold hover:text-red-500"
						href={RouterConfig.blogByIdPage(4)}
					>
						Горный тур
					</Link>
				</li>

				<li>
					<Link
						className="font-semibold hover:text-red-500"
						href={RouterConfig.blogByIdPage(5)}
					>
						Джунглий тур
					</Link>
				</li>
			</ul>
		</aside>
	);
};
