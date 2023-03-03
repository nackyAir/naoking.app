import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { BlogProps } from "pages/blog";
import { FC } from "react";

export const Blog: FC<BlogProps> = (props) => {
	return (
		<>
			<div>
				<h1 className="pb-8 text-4xl font-bold text-center">Blog List</h1>
			</div>
			<div className="min-h-screen mx-auto">
				{props.contents.map((item) => {
					return (
						<Link href={`/blog/${item.id}`} key={item.id}>
							<div className="py-3">
								<div className="flex items-center justify-between p-4 border border-gray-200 shadow-lg">
									<div>
										<time className="text-[14px]">
											{dayjs(item.createdAt).format("更新日:YYYY年MM月DD日")}
										</time>
										<h2 className="font-serif text-xl font-bold">
											{item.title}
										</h2>
									</div>
									<div>
										{!item.image ? (
											<Image
												src="icon_default_image.svg"
												width={150}
												height={150}
												alt="No Images."
											/>
										) : (
											<Image
												src={item.image.url}
												width={item.image.width}
												height={item.image.height}
												alt={item.image.alt}
											/>
										)}
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};
