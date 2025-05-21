import { Container } from "@/components/container";
import { RouterConfig } from "@/configs/router.config";
import type { PageType } from "@/types/types";
import { redirect } from "next/navigation";

const Page: PageType = async ({ params }) => {
	// const { id } = await params;

	// if (!id) {
	// 	redirect(RouterConfig.toursPage);
	// }

	return (
		<section>
			<Container>
				<div className="space-y-5">ok</div>
			</Container>
		</section>
	);
};

export default Page;
