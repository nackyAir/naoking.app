import { FC } from "react";
import "animate.css";
import Image from "next/image";
import { Laaguage } from "@/components/DevLang";
import { Form } from "@/components/Form";
import { ProfileCard } from "@/components/Profile";
import { Box, Container, createStyles } from "@mantine/core";

export const Index: FC = () => {
	const useStyles = createStyles((theme) => ({
		Container: {
			marginBottom: "auto",
			marginTop: "auto",
			flexDirection: "column",
			paddingLeft: "0.5rem",
			paddingRight: "0.5rem",
		},
		Box: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",

			"@media (min-width: 992px)": {
				flexDirection: "row",
			},
			"@media (min-width: 576px)": {
				marginLeft: "1rem",
				marginRight: "1rem",
			},
		},
	}));
	const { classes } = useStyles();
	return (
		<Container className={classes.Container}>
			<Box className={classes.Box}>
				<div className="font-serif text-4xl font-bold">
					Hello!! <br /> I&apos;m <br /> Web Devropper.
				</div>
				<div>
					<Image
						src="/Web Developer_Monochromatic.svg"
						width={500}
						height={500}
						alt="Mobile_development"
						sizes="(max-width: 768px) 100vw"
					/>
				</div>
			</Box>

			<Laaguage />

			<ProfileCard />

			<Form />
		</Container>
	);
};
