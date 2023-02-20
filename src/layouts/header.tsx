import { pagesPath } from "@/lib/$path";
import { Burger, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import Link from "next/link";
import { FC, useState } from "react";

const Links = [
	{
		href: pagesPath.$url().pathname,
		label: "Home",
	},
	{
		href: pagesPath.blog.$url().pathname,
		label: "Blog",
	},
];

export const Header: FC = () => {
	const sm = useMediaQuery("sm");
	const [opem, setOpen] = useState(false);
	const [opened, { toggle, open }] = useDisclosure(false);

	const items = Links.map((link) => (
		<NextLink key={link.label} href={link.href}>
			<Text
				size="sm"
				weight={700}
				style={{ borderRadius: "2px", cursor: "pointer" }}
				onClick={() => close()}
			>
				{link.label}
			</Text>
		</NextLink>
	));

	return (
		<>
			<div className="mx-auto flex justify-between">
				<div>
					<div>
						<ul className="flex flex-row space-x-4">
							{Links.map((item) => (
								<li key={item.href}>
									<Link href={item.href}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
