import Link from "next/link";
import { BlogProps } from "pages/blog";
import { FC } from "react";

export const Blog: FC<BlogProps> = (props) => {
	return (
		<>
			<div className="mx-auto flex justify-between">
				{props.contents.map((item) => (
					<Link href={`/blog/${item.id}`} key={item.id}>
						<div>
							<div>{item.title}</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};
