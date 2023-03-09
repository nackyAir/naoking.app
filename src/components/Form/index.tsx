import { FC } from "react";
import emailjs from "@emailjs/browser";
import {
	Box,
	Button,
	Card,
	Container,
	createStyles,
	Textarea,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { toast } from "react-hot-toast";
import { Title } from "@/components/atom/Title";

export const Form: FC = () => {
	const styles = createStyles({
		Container: {
			paddingTop: 50,
			paddingBottom: 50,
			maxWidth: 700,
			marginLeft: "auto",
			marginRight: "auto",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		},
		Box: {
			width: "100%",
			maxWidth: 400,
			paddingLeft: "auto",
			paddingRight: "auto",
		},
	});

	const { classes } = styles();

	const form = useForm({
		initialValues: {
			name: "",
			company: "",
			email: "",
			message: "",
		},
		validate: {
			name: (value) =>
				value.length < 2 ? "Name must have at least 2 letters" : null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
			message: (value) => (value.length > 0 ? null : "Invalid message"),
		},
	});

	const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
	const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
	const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

	return (
		<div>
			<Container className={classes.Container}>
				<Title>Contact</Title>

				<Box className={classes.Box}>
					<form
						onSubmit={form.onSubmit(() => {
							emailjs.send(serviceID, templateID, form.values, userID).then(
								function (response) {
									toast.success("Your message has been sent!");
								},
								function (error) {
									toast.error("Your message has not been sent!");
								}
							);
						})}
						className="flex flex-col space-y-4"
					>
						<TextInput
							label="Name"
							type="text"
							placeholder="Your name"
							withAsterisk
							{...form.getInputProps("name")}
						/>
						<TextInput
							label="company"
							type="text"
							placeholder="Company"
							{...form.getInputProps("company")}
						/>

						<TextInput
							label="Email"
							type="text"
							placeholder="your@examle.com"
							withAsterisk
							{...form.getInputProps("email")}
						/>

						<Textarea
							placeholder="Your comment"
							label="Your comment"
							withAsterisk
							{...form.getInputProps("message")}
						/>

						<Button type="submit" variant="outline">
							送信
						</Button>
					</form>
				</Box>
			</Container>
		</div>
	);
};
