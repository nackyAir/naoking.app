import { Header } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { CustomLayout } from "next";

export const FixedLayout: CustomLayout = (page) => {
	return (
		<div className="mx-auto flex min-h-screen max-w-xl flex-col px-2 py-7">
			<header>
				<Header />
			</header>
			<main>
				<LayoutErrorBandry>{page}</LayoutErrorBandry>
			</main>
		</div>
	);
};
