import Link from "next/link";

export const Widget = ({ title, list }: Props) => {
	return (
		<div className="text-white space-y-[30px]">
			<h3 className="text-[24px] font-bold">{title}</h3>

			<ul className="text-[18px] space-y-7">
				{list.map((item) => (
					<li key={item.label}>
						<Link href={item.link} scroll={item.link !== "#"}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

interface Props {
	title: string;
	list: {
		label: string;
		link: string;
	}[];
}
