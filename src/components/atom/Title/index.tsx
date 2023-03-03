import { createStyles, Text, TextProps } from "@mantine/core";

export const Title = ({ children, ...props }: TextProps) => {
	const useStyles = createStyles({
		title: {
			fontSize: 30,
			fontWeight: 700,
			textAlign: "center",
		},
	});
	const { classes } = useStyles();
	return (
		<Text {...props} className={classes.title}>
			{children}
		</Text>
	);
};
