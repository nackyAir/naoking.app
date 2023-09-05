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
import { useForm, zodResolver } from "@mantine/form";
import { toast } from "react-hot-toast";
import { Title } from "@/components/atom/Title";
import { z } from "zod";

const formShema = z.object({
	name: z.string().min(1, {
		message: "名前を入力してください。",
	}),
	company: z.string(),
	email: z.string().email({
		message: "メールアドレスが無効です。",
	}),
	message: z.string().min(1, {
		message: "メッセージを入力してください。",
	}),
});

type FormInputType = z.infer<typeof formShema>;

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

	const form = useForm<FormInputType>({
		initialValues: {
			name: "",
			company: "",
			email: "",
			message: "",
		},
		validateInputOnBlur: true,
		validate: zodResolver(formShema),
	});

	const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
	const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
	const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

	const handleSubmit = async () => {
		await emailjs
			.send(serviceID, templateID, form.values, userID)
			.then(() => {
				toast.success("フォームが送信されました！", {
					position: "top-center",
				});
				form.reset();
			})
			.catch(() => {
				toast.error("送信に失敗しました。", {
					position: "top-center",
				});
				form.reset();
			});
	};

	return (
		<div>
			<Container className={classes.Container}>
				<Title>Contact</Title>

				<Box className={classes.Box}>
					<form
						onSubmit={form.onSubmit(handleSubmit)}
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
