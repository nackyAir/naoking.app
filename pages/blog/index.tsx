import { GetStaticProps, NextPage } from "next";
import "animate.css";
import { Blog } from "@/pages/blog";
import { client } from "@/client/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

export type BlogProps = MicroCMSListResponse<BlogItemProps>;

export type BlogItemProps = {
	title: string;
	body: string;
	image?: {
		url: string;
		width: number;
		height: number;
		alt: string;
	};
};

export const BlogPage: NextPage<BlogProps> = (props) => {
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

export default BlogPage;
