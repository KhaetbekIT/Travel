import { Container } from "@/components/container";
import HeaderInageBg from "@public/images/home-header.jpg";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="bg-primary overflow-hidden">
			<div
				style={{ backgroundImage: `url(${HeaderInageBg.src})` }}
				className="bg-cover bg-center"
			>
				<Container>
					<div className="pt-[344px] pb-[327px] text-center text-white relative">
						<h1 className="text-[60px] font-bold">
							Путешествие всегда хорошая идея
						</h1>
						<p className="text-2xl">Турпоходы по дикой природе</p>

						<Link
							className="inline-flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2"
							href="#popular"
						>
							<span>cкролл вниз</span>

							<span>
								<ArrowDown />
							</span>
						</Link>
					</div>
				</Container>
			</div>
		</header>
	);
};
