import { Container } from "@/components/container";
import { RouterConfig } from "@/configs/router.config";
import Link from "next/link";

const Notfound = () => {
	return (
		<html lang="ru">
			<body className="bg-gray-100 text-gray-900 text-center h-[100vh]">
				<main className="py-[calc((100vh-130px)/2)]">
					<Container>
						<div className="space-y-5">
							<h1 className=" text-4xl font-bold text-red-600">
								404 - Страница не найдена
							</h1>
							<p>К сожалению, запрашиваемая вами страница не найдена.</p>
							<Link
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
								href={RouterConfig.homePage}
							>
								Вернуться на главную
							</Link>
						</div>
					</Container>
				</main>
			</body>
		</html>
	);
};

export default Notfound;
