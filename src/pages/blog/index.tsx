import { Title } from "@/components/atom/Title";
import { Box, Card, Container, createStyles, Text } from "@mantine/core";
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
						</Link>
					);
				})}
			</Container>
		</>
	);
};
