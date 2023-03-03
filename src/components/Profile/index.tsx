import { Avatar, Box, Card, createStyles, Text } from "@mantine/core";
import { FC } from "react";

export const ProfileCard: FC = () => {
	const styles = createStyles((theme) => ({
		card: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			maxWidth: 400,
			margin: "auto",
			borderRadius: 20,
			border: "1px solid",
			boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
			borderColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[2],
		},
		title: {
			fontWeight: 700,
			fontSize: 25,
			marginBottom: 40,
		},

		NameBox: {
			marginTop: 10,
			marginBottom: 40,
		},
		Profile: {
			paddingBottom: 20,
		},
	}));

	const { classes } = styles();
	return (
		<>
			<Card className={classes.card}>
				<Text className={classes.title}>Profile</Text>
				<Box>
					<Avatar src={"/profile.png"} radius="xl" size={70} />
				</Box>
				<Box className={classes.NameBox}>
					<Text>Naoki Hayashida</Text>
				</Box>
				<Box className={classes.Profile}>
					<Text>Frontend Engineer</Text>
					<Text>Japan,Yokohama</Text>
				</Box>
			</Card>
		</>
	);
};
