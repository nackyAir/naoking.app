import { Index } from "@/pages";
import { CustomNextPage } from "next";
import { FulledLayout } from "@/layouts/FulledLayout";
import "animate.css";

export const IndexPage: CustomNextPage = () => {
	return <Index />;
};

IndexPage.getLayout = FulledLayout;

export default IndexPage;
