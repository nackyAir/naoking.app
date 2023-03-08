import { Index } from "@/pages";
import { NextPage } from "next";
import "animate.css";
import { NextSeo } from "next-seo";

export const IndexPage: NextPage = () => {
	return (
		<>
			<NextSeo
				title="Naoki Hayashida | FrontEnd Debropper."
				description="林田 直樹のポートフォリオページです。"
			/>
			<Index />
		</>
	);
};

export default IndexPage;
