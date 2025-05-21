import { RouterConfig } from "@/configs/router.config";
import TourImage1 from "@public/images/blog-1.jpg";
import TourImage2 from "@public/images/blog-2.jpg";
import TourImage3 from "@public/images/blog-3.jpg";
import TourImage4 from "@public/images/blog-4.jpg";
import TourImage5 from "@public/images/blog-5.jpg";
import Image from "next/image";
import Link from "next/link";

export const Content = () => {
	return (
		<>
			<div className="flex gap-5 flex-wrap">
				<Link href={RouterConfig.blogByIdPage(1)} className="group">
					<div className="overflow-hidden w-[570px]">
						<Image
							className="w-full h-full duration-200 ease-in group-hover:scale-105"
							src={TourImage1}
							alt="forest"
						/>
					</div>
				</Link>

				<Link href={RouterConfig.blogByIdPage(2)} className="group">
					<div className="overflow-hidden w-[570px]">
						<Image
							className="w-full h-full duration-200 ease-in group-hover:scale-105"
							src={TourImage2}
							alt="desert"
						/>
					</div>
				</Link>

				<div className="w-[670px] space-y-5">
					<Link
						href={RouterConfig.blogByIdPage(3)}
						className="group inline-block"
					>
						<div className="overflow-hidden h-[calc((680px-20px)/2)]">
							<Image
								className="w-full h-full duration-200 ease-in group-hover:scale-105"
								src={TourImage3}
								alt="lake"
							/>
						</div>
					</Link>

					<Link
						href={RouterConfig.blogByIdPage(4)}
						className="group inline-block"
					>
						<div className="overflow-hidden h-[calc((680px-20px)/2)]">
							<Image
								className="w-full h-full duration-200 ease-in group-hover:scale-105"
								src={TourImage4}
								alt="mountain"
							/>
						</div>
					</Link>
				</div>

				<Link href={RouterConfig.blogByIdPage(5)} className="group">
					<div className="overflow-hidden w-[470px]">
						<Image
							className="w-full h-full duration-200 ease-in group-hover:scale-105"
							src={TourImage5}
							alt="djungle"
						/>
					</div>
				</Link>
			</div>
		</>
	);
};
