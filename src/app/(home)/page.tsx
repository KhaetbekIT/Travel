import ArticleImage1 from "@public/images/home-image-1.jpg";
import ArticleImage2 from "@public/images/home-image-2.jpg";
import Link from "next/link";
import { Article } from "./_components/article";
import { Header } from "./_components/header";

const Page = () => {
	return (
		<>
			<Header />
			<section className="py-[120px] space-y-[120px]">
				<Article
					id="popular"
					image={ArticleImage1}
					title={"Популярные направления"}
					description={() => (
						<p>
							Когда <strong>Горный Алтай</strong> называют второй Швейцарией,
							алтайцы отвечают, что нужно еще разобраться, кто тут второй. Чтобы
							расставить все по местам, отправляйтесь в путешествие по Чуйскому
							тракту , по
							<Link href="#">Горному Алтаю</Link> до самой Монголии. 962 км —
							полный маршрут{" "}
							<strong>Новосибирск—Новоалтайск—Бийск—Майма</strong>{" "}
							—государственная граница с Монголией.
						</p>
					)}
				/>

				<Article
					className="flex-row-reverse"
					image={ArticleImage2}
					title={"Впечатляющие маршруты"}
					description={() => (
						<p>
							Вишенкой на торте станет поездка в Национальный парк{" "}
							<strong>Порт-Кэмпбелл</strong> через Ocean Road, которая сама по
							себе стоит визита в <Link href="#">Австралию</Link>. Полюбуетесь
							одной из главных достопримечательностей страны — скалами, которые
							до 1922 года были известны в народе как{" "}
							<strong>
								<q>Хрюшка и поросята</q>
							</strong>{" "}
							, а сегодня носят название <q>Двенадцать апостолов</q>.
						</p>
					)}
				/>
			</section>
		</>
	);
};

export default Page;
