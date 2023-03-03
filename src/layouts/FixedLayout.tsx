import { HeaderModule } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { Footer } from "@mantine/core";
import { CustomLayout } from "next";

export const FixedLayout: CustomLayout = (page) => {
	return (
		<div className="mx-auto flex min-h-screen max-w-xl flex-col px-2 py-7">
			<header>
				<HeaderModule />
			</header>
			<main>
				<LayoutErrorBandry>{page}</LayoutErrorBandry>
			</main>
			<footer></footer>
		</div>
	);
};
