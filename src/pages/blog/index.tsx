import { Title } from "@/components/atom/Title";
import { Box, Card, Container, createStyles, Group, Text } from "@mantine/core";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { BlogProps } from "pages/blog";
import { FC } from "react";

export const Blog: FC<BlogProps> = (props) => {
	const styles = createStyles((theme) => ({
		Container: {
			minWidth: 100,
			maxWidth: 700,
			marginLeft: "auto",
			marginRight: "auto",
		},
		Card: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			boxShadow: "0 0 0 1px rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.1)",
			marginTop: 20,
		},
	}));

	const { classes } = styles();
	return (
		<>
<<<<<<< HEAD
			<Title>Blog List</Title>
			<Container className={classes.Container}>
				{props.contents.map((item) => {
					return (
						<Link href={`/blog/${item.id}`} key={item.id}>
							<Card className={classes.Card}>
								<Box>
									<time className="text-[14px]">
										{dayjs(item.createdAt).format("更新日:YYYY年MM月DD日")}
									</time>
									<Text>{item.title}</Text>
								</Box>
								<Box>
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
								</Box>
							</Card>
=======
			<div>
				<h1 className="pb-8 text-center text-4xl font-bold">Blog List</h1>
			</div>
			<div className="mx-auto min-h-screen">
				{props.contents.map((item) => {
					return (
						<Link href={`/blog/${item.id}`} key={item.id}>
							<div className="py-3">
								<div className="flex items-center justify-between border border-gray-200 p-4 shadow-lg">
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
>>>>>>> main
						</Link>
					);
				})}
			</Container>
		</>
	);
};
