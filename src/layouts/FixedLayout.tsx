import { Header } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { CustomLayout } from "next";

export const FixedLayout: CustomLayout = (page) => {
	return (
		<div className="mx-auto flex min-h-screen max-w-xl flex-col bg-slate-200 py-7 px-2">
			<header>
				<Header />
			</header>
			<main>
				<LayoutErrorBandry>{page}</LayoutErrorBandry>
			</main>
		</div>
	);
};
