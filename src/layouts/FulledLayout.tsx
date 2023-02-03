import { Header } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { CustomLayout } from "next";

export const FulledLayout: CustomLayout = (page) => {
	return (
		<div className="min-h-screen flex-col">
			<header>
				<Header />
			</header>
			<main className="flex-1">
				<LayoutErrorBandry>{page}</LayoutErrorBandry>
			</main>
		</div>
	);
};
