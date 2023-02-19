import { Header } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { CustomLayout } from "next";
import { Toaster } from "react-hot-toast";

export const FulledLayout: CustomLayout = (page) => {
	return (
		<div className="flex-col min-h-screen px-2">
			<Toaster position="top-center" reverseOrder={false} />
			<header>
				<Header />
			</header>
			<main className="flex-1">
				<LayoutErrorBandry>{page}</LayoutErrorBandry>
			</main>
		</div>
	);
};
