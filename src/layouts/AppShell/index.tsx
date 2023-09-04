import { FooterModule } from "@/layouts/footer";
import { HeaderModule } from "@/layouts/header";
import { LayoutErrorBandry } from "@/layouts/LayoutErrorBandry";
import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<AppShell header={<HeaderModule />} footer={<FooterModule />}>
			<Toaster />
			<LayoutErrorBandry>{children}</LayoutErrorBandry>
		</AppShell>
	);
};

export default Layout;
