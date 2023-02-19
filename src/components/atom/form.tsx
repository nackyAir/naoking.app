import { FC } from "react";
import emailjs from "@emailjs/browser";
import { Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { toast } from "react-hot-toast";

export const Form: FC = () => {
	const form = useForm({
		initialValues: {
			name: {
				first_name: "",
				last_name: "",
			},
			company: "",
			tel: "",
			email: "",
			message: "",
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
							id="name"
							label="Name"
							type="text"
							placeholder="name"
							withAsterisk
							{...form.getInputProps("form_name")}
						/>

						<TextInput
							id="email"
							label="Email"
							type="text"
							placeholder="your@examle.com"
							withAsterisk
							{...form.getInputProps("email")}
						/>

						<Textarea
							id="content"
							placeholder="Your comment"
							label="Your comment"
							withAsterisk
							{...form.getInputProps("message")}
						/>

						<Button type="submit">Submit</Button>
					</form>
				</div>
			</div>
		</div>
	);
};
