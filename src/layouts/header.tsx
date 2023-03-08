import {
	createStyles,
	Header,
	Group,
	Container,
	Burger,
	Text,
	Stack,
	Drawer,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { pagesPath } from "@/lib/$path";
import Link from "next/link";
import { FC } from "react";
import { ThemeButton } from "@/components/atom/ThemeButton";

const useStyles = createStyles((theme) => ({
	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: 56,

		[theme.fn.smallerThan("md")]: {
			justifyContent: "bitween",
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan("md")]: {
			display: "none",
		},
	},
	links: {
		width: 260,

		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},
	link: {
		marginLeft: theme.spacing.sm,
		fontWeight: 700,
		padding: theme.spacing.xs,
		"&:hover": {
			color: theme.colors.blue[6],
		},
	},
	button: {
		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},
	title: {
		fontWeight: 700,
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
				.color,
		},
	},
}));

export const HeaderModule: FC = () => {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes } = useStyles();

	const LinkProps = [
		{
			link: pagesPath.$url().pathname,
			label: "Home",
		},
		{
			link: pagesPath.about.$url().pathname,
			label: "About",
		},
		{
			link: pagesPath.blog.$url().pathname,
			label: "Blog",
		},
	];

	const LinkItem = LinkProps.map((item) => (
		<Link href={item.link} key={item.label} className={classes.link}>
			{item.label}
		</Link>
	));

	return (
		<Header height={56} mb={120}>
			<Container className={classes.inner}>
				<Burger
					aria-label="Open navigation menu"
					onClick={toggle}
					className={classes.burger}
					opened={opened}
				/>
				<Drawer
					opened={opened}
					onClose={toggle}
					size="50%"
					className={classes.burger}
				>
					<Stack p={"md"} hidden={!opened}>
						{LinkItem}
					</Stack>
				</Drawer>
				<Link href="/">
					<Text className={classes.title}>Naoki Hayashida</Text>
				</Link>
				<Group className={classes.links}>{LinkItem}</Group>
				<ThemeButton />
			</Container>
		</Header>
	);
};
