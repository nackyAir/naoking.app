import { Container, createStyles, Text } from "@mantine/core";
import { FC } from "react";

export const Footer: FC = () => {
	const styles = createStyles((theme) => ({
		footer: {
			backgroundColor:
				theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
			maxWidth: "100%",
			paddingTop: 10,
			display: "flex",
			justifyContent: "center",
			borderTop: "1px solid",
			alignItems: "center",
			borderColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[3]
					: theme.colors.gray[2],
		},
	}));
	const { classes } = styles();
	return (
		<Container className={classes.footer}>
			<Text>© Created by Naoki Hayashida. 2023</Text>
		</Container>
	);
};
