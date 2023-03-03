import { HeaderModule } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { Footer } from "@/layouts/footer";
import { CustomLayout } from "next";

export const FixedLayout: CustomLayout = (page) => {
	return (
		<div className="flex flex-col max-w-xl min-h-screen px-2 mx-auto py-7">
			<header>
				<HeaderModule />
			</header>
			<main>
				<LayoutErrorBandry>{page}</LayoutErrorBandry>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};
