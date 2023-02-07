import { FC } from "react";
import "animate.css";
import Image from "next/image";

export const Index: FC = () => {
	return (
		<div className="mx-auto flex-col  px-2">
			<div>
				<div className="xs:mx-4 flex flex-col items-center justify-center md:flex-row ">
					<div className="font-serif text-4xl font-bold">
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

				<div className="mx-4">
					<div className="flex flex-row items-center  md:flex-col  md:shadow-none">
						<div>
							<Image
								src="/profile.png"
								alt=""
								width={100}
								height={100}
								className="rounded-xl md:rounded-full"
							/>
						</div>

						<div className="px-4">
							<h2 className="font-serif text-xl font-bold">Naoki Hayashida</h2>
							<p className="font-serif ">Web Devropper</p>
							<p></p>
						</div>
					</div>
					<div className="pt-6">
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
