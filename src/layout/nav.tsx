import { RouterConfig } from "@/configs/router.config";
import Link from "next/link";
import { Container } from "../components/container";
import { Logo } from "./logo";

export const Navigation = () => {
	return (
		<Container>
			<div className="relative">
				<nav className="flex justify-between items-center gap-5 absolute top-0 left-0 right-0 py-[25px]">
					<Logo />

					<ul className="flex gap-5 text-white text-2xl">
						<li>
							<Link
								className="relative after:transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:right-0"
								href={RouterConfig.homePage}
							>
								Главная
							</Link>
						</li>

						<li>
							<Link
								className="relative after:transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:right-0"
								href={RouterConfig.toursPage}
							>
								Туры и направления
							</Link>
						</li>
						<li>
							<Link
								className="relative after:transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:right-0"
								href={RouterConfig.homePage}
							>
								О компании
							</Link>
						</li>
						<li>
							<Link
								className="relative after:transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:right-0"
								href={RouterConfig.homePage}
							>
								Галерея
							</Link>
						</li>
						<li>
							<Link
								className="relative after:transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white hover:after:right-0"
								href={RouterConfig.homePage}
							>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</Container>
	);
};
