import { pagesPath } from "@/lib/$path";
import Link from "next/link";
import { FC } from "react";

const items = [
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
	return (
		<>
			<div className="mx-auto flex justify-between">
				<div>
					<div>N</div>
				</div>
				<div>
					<div>
						<ul className="flex flex-row space-x-4">
							{items.map((item) => (
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
