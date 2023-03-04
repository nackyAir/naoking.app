import { client } from "@/client/client";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogItemProps } from "pages/blog";
import { BlogPageItem } from "@/pages/blog/blogpage";

export type Props = BlogItemProps & MicroCMSContentId & MicroCMSDate;

export const BlogPage: NextPage<Props> = (props) => {
	return <BlogPageItem {...props} />;
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	const data = await client.getList({
		endpoint: "blog",
	});
	const ids = data.contents.map((content) => `/blog/${content.id}`);

	return {
		paths: ids,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<{}, { id: string }> = async (
	ctx
) => {
	if (!ctx.params) {
		return { notFound: true };
	}
	const data = await client.getListDetail<BlogItemProps>({
		endpoint: "blog",
		contentId: ctx.params.id,
	});
	return {
		props: data,
	};
};
