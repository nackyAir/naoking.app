import { client } from "@/client/client";
import { FixedLayout } from "@/layouts/FixedLayout";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import { BlogItemProps } from "pages/blog";
import { BlogPageItem } from "@/pages/blog/blogpage";

export type Props = BlogItemProps & MicroCMSContentId & MicroCMSDate;

export const BlogPage: CustomNextPage<Props> = (props) => {
	return <BlogPageItem {...props} />;
};

export default BlogPage;

BlogPage.getLayout = FixedLayout;

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
