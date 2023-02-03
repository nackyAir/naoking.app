import { FC } from "react";
import "animate.css";
import Image from "next/image";

export const Index: FC = () => {
	return (
		<div className="mx-auto flex-col">
			<div>
				<div className="xs:mx-4 flex flex-col items-center justify-center md:flex-row ">
					<div className="font-mono text-5xl font-bold">
						Hello!! <br /> I&apos;m <br /> Web Devropper.
					</div>
					<div>
						<Image
							src="/Mobile_development.png"
							width={600}
							height={600}
							alt="Mobile_development"
							sizes="(max-width: 768px) 100vw"
						/>
					</div>
				</div>

				<div className="mx-16 ">
					<div className="flex flex-row items-center">
						<div>
							<Image
								src="/profile.png"
								alt=""
								width={180}
								height={180}
								className="rounded-xl"
							/>
						</div>

						<div>
							<h2 className="font-serif text-2xl font-bold">Naoki Hayashida</h2>
							<p className="font-serif ">Web Devropper</p>
						</div>
					</div>
					<div>
						<h2 className="font-serif text-4xl font-bold">Language</h2>
					</div>
					<div>
						<h2>Product</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
