import { Index } from "@/pages";
import { CustomNextPage } from "next";
import { FulledLayout } from "@/layouts/FulledLayout";
import "animate.css";
import { Blog } from "@/pages/blog";

export const BlogPage: CustomNextPage = () => {
	return <Blog />;
};

BlogPage.getLayout = FulledLayout;

export default BlogPage;
