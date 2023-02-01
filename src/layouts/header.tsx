import { pagesPath } from "@/lib/$path";
import Link from "next/link";
import { FC } from "react";

const items = [
	{
		href: pagesPath.$url().pathname,
		label: "Home",
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
						<ul>
							<li>
								<Link href="/">Home</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
