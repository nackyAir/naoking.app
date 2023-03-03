import { FC } from "react";
import { DiReact, DiRuby } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiTypescript, SiRubyonrails } from "react-icons/si";
import { Box, Container, createStyles, Grid, Text } from "@mantine/core";
import { Title } from "@/components/atom/Title";
import Link from "next/link";

export const Laaguage: FC = () => {
	const useStyles = createStyles((theme) => ({
		Container: {
			maxWidth: 1000,
			marginLeft: "auto",
			paddingTop: 50,
			paddingBottom: 50,
		},

		link: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		},
		Grid: {
			paddingTop: 30,
		},
		gridCol: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			paddingTop: 20,
			paddingBottom: 20,
			border: "1px solid",
			borderColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[2],
		},
		icon: {
			fontSize: 40,
			textAlign: "center",
		},
	}));
	const { classes } = useStyles();
	const item = [
		{
			icon: <AiFillHtml5 />,
			label: "HTML・CSS",
			href: "https://developer.mozilla.org/ja/docs/Web/HTML",
		},
		{
			icon: <SiJavascript />,
			label: "JavaScript",
			href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			icon: <SiTypescript />,
			label: "TypeScript",
			href: "https://www.typescriptlang.org/",
		},
		{
			icon: <DiReact />,
			label: "React",
			href: "https://ja.reactjs.org/",
		},
		{
			icon: <DiReact />,
			label: "React Native",
			href: "https://reactnative.dev/",
		},
		{
			icon: <DiRuby />,
			label: "Ruby",
			href: "https://www.ruby-lang.org/ja/",
		},
		{
			icon: <SiRubyonrails />,
			label: "Ruby on Rails",
			href: "https://rubyonrails.org/",
		},
	];

	return (
		<>
			<Container className={classes.Container}>
				<Title> Dev Language</Title>

				<Grid className={classes.Grid}>
					{item.map((item) => (
						<Link
							href={item.href}
							className={classes.link}
							legacyBehavior
							key={item.label}
						>
							<Grid.Col xs={12} sm={6} md={4} className={classes.gridCol}>
								<Text className={classes.icon}>{item.icon}</Text>
								<Text>{item.label}</Text>
							</Grid.Col>
						</Link>
					))}
				</Grid>
			</Container>
		</>
	);
};
