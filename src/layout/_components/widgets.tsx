import { RouterConfig } from "@/configs/router.config";
import { Widget } from "./widget";

export const Widgets = () => {
	return (
		<div className="grid grid-cols-3 gap-3 justify-end max-w-[770px] pt-2.5">
			{WidgetArray.map((item) => (
				<Widget key={item.title} title={item.title} list={item.list} />
			))}
		</div>
	);
};

const WidgetArray = [
	{
		title: "Информация",
		list: [
			{
				label: "Главная",
				link: "#",
			},
			{
				label: "О компании",
				link: "#",
			},
			{
				label: "Галерея",
				link: "#",
			},
			{
				label: "Блог",
				link: "#",
			},
		],
	},

	{
		title: "Услуги",
		list: [
			{
				label: "Бесплатные туры",
				link: RouterConfig.toursPage,
			},
			{
				label: "Невероятные приключения",
				link: "#",
			},
			{
				label: "Экстремальный отдых",
				link: "#",
			},
			{
				label: "Экзотические джунгли",
				link: "#",
			},
			{
				label: "Трекинг походы",
				link: "#",
			},
		],
	},

	{
		title: "Контакты",
		list: [
			{
				label: "+7 (905) 555-55-55",
				link: "tel:+79055555555",
			},
			{
				label: "info@foresttravel.com",
				link: "mailto:info@foresttravel.com",
			},
			{
				label: "г. Москва, Рязанский проспект 54, офис 112.",
				link: "https://www.google.com/maps/place/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80.,+54,+112,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+109377/@55.7159379,37.792927,17z/data=!4m5!3m4!1s0x414ab59b3be61f9b:0x71e8ca6a8cffd5fb!8m2!3d55.7159349!4d37.7955019?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D",
			},
		],
	},
];
