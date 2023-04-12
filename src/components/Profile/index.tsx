import { Avatar, Box, Card, createStyles, Group, Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";
import { DiGithub } from "react-icons/di";
import { SiGithub, SiInstagram, SiTwitter } from "react-icons/si";

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
		socialMedia: {
			fontSize: 30,
			display: "flex",
			paddingTop: 20,
			flexDirection: "row",
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
				<Group className={classes.socialMedia}>
					<Link href="https://github.com/Naoki0509">
						<SiGithub size={35} />
					</Link>
					<Link href="https://twitter.com/naoki__0509">
						<SiTwitter size={35} />
					</Link>
					<Link href="https://www.instagram.com/naoking0509">
						<SiInstagram size={35} />
					</Link>
				</Group>
			</Card>
		</>
	);
};
