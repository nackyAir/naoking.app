import { TypographyStylesProvider } from "@mantine/core";
import dayjs from "dayjs";
import { Props } from "pages/blog/[id]";
import { FC } from "react";

export const BlogPageItem: FC<Props> = (props) => {
	return (
		<div>
			<p className="text-[12px] text-gray-500">Created</p>
			<time className="text-[12px] text-gray-500">
				{dayjs(props.createdAt).format("YYYY年MM月DD日 HH時mm分ss秒")}
			</time>
			<div className="py-12">
				<TypographyStylesProvider>
					<div dangerouslySetInnerHTML={{ __html: props.body }} />
				</TypographyStylesProvider>
			</div>
		</div>
	);
};
