import { Container } from "@/components/container";
import { cn } from "@/libs/utils";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const Article = ({
	image,
	title,
	className,
	description,
	id,
}: Props) => {
	return (
		<article id={id}>
			<Container>
				<div className={cn("flex gap-5 justify-between", className)}>
					<div className="w-[470px] space-y-10 flex-shrink-0">
						<div className="space-y-5">
							<h2 className="text-black text-[54px] font-bold">{title}</h2>

							<div className="prose-a:text-[#138ECE] prose-a:px-1 text-black text-[20px]">
								{description?.()}
							</div>
						</div>

						<Link
							className="px-10 py-3 bg-greean text-white inline-block rounded-full shadow-2xl"
							href="#"
							scroll={false}
						>
							Подробнее
						</Link>
					</div>

					<div className="w-[570px]">
						<Image
							className="object-cover object-center"
							width={570}
							height={400}
							src={image}
							alt={title}
						/>
					</div>
				</div>
			</Container>
		</article>
	);
};

interface Props {
	className?: string;
	image: string | StaticImport;
	title: string;
	id?: string;
	description?(): ReactNode;
}
