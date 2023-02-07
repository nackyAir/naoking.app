import { client } from "@/client/client";
import { FixedLayout } from "@/layouts/FixedLayout";
import { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";

export const BlogPage: CustomNextPage = () => {
	return <div>Blog</div>;
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
	const data = await client.getListDetail({
		endpoint: "blog",
		contentId: ctx.params.id,
	});
	return {
		props: data,
	};
};
