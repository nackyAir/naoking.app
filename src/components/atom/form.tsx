import { FC } from "react";
import emailjs from "@emailjs/browser";
import { Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { toast } from "react-hot-toast";

export const Form: FC = () => {
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

	const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;
	const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
	const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;

	return (
		<div>
			<div className="mx-auto flex max-w-lg flex-col items-center justify-center">
				<h2 className="text-4xl font-bold">Contact</h2>

				<div className="w-full px-12">
					<form
						onSubmit={form.onSubmit(() => {
							emailjs.send(serviceID, templateID, form.values, userID).then(
								function (response) {
									toast.success("Your message has been sent!");
									console.log("SUCCESS!", response.status, response.text);
								},
								function (error) {
									toast.error("Your message has not been sent!");
									console.log("FAILED...", error);
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
							placeholder="会社名"
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
							Submit
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};
