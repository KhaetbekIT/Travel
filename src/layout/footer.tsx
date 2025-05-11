import { Container } from "@/components/container";
import { Widgets } from "./_components/widgets";
import { Logo } from "./logo";

export const Footer = () => {
	return (
		<footer className="bg-primary pt-[71px] pb-[94px]">
			<Container>
				<div className="flex gap-2 justify-between ">
					<div className="w-[270px] space-y-7 text-white flex-shrink-0">
						<Logo />

						<p className="text-sm">
							При поддержке Управления по туризму Российской Федерации.
							ФорестТревел. Все права защищены. Copyright &copy; 2021
						</p>
					</div>

					<Widgets />
				</div>
			</Container>
		</footer>
	);
};
