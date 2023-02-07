import { CustomNextPage, GetStaticProps } from "next";
import { FulledLayout } from "@/layouts/FulledLayout";
import "animate.css";
import { Blog } from "@/pages/blog";
import { client } from "@/client/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

export type BlogProps = MicroCMSListResponse<BlogItemProps>;

export type BlogItemProps = {
	title: string;
	body: string;
};

export const BlogPage: CustomNextPage<BlogProps> = (props) => {
	return <Blog {...props} />;
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const data = await client.getList<BlogItemProps>({
		endpoint: "blog",
	});

	return {
		props: data,
	};
};

BlogPage.getLayout = FulledLayout;

export default BlogPage;
