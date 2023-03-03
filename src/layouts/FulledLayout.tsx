import { Footer } from "@/layouts/footer";
import { HeaderModule } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { CustomLayout } from "next";
import { Toaster } from "react-hot-toast";

export const FulledLayout: CustomLayout = (page) => {
	return (
		<div className="min-h-screen flex-col px-2 py-7">
			<Toaster position="top-center" reverseOrder={false} />
			<header>
				<HeaderModule />
			</header>
			<main className="flex-1">
				<LayoutErrorBandry>{page}</LayoutErrorBandry>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};
