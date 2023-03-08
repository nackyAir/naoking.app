import { Title } from "@/components/atom/Title";
import { Box, Container, createStyles, Paper, Text } from "@mantine/core";
import { FC } from "react";

export const About: FC = () => {
	const styles = createStyles((theme) => ({
		Text: {
			fontSize: "1.5rem",
			fontWeight: 700,
		},
	}));

	const { classes } = styles();
	return (
		<Container>
			<Title>About Page</Title>
			<Box>
				<Text className={classes.Text}>Profile</Text>
			</Box>
		</Container>
	);
};
