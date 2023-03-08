import { FC } from "react";
import "animate.css";
import Image from "next/image";
import { Laaguage } from "@/components/Language";
import { Form } from "@/components/Form";
import { ProfileCard } from "@/components/Profile";

export const Index: FC = () => {
	return (
		<div className="flex-col px-2 mx-auto">
			<div>
				<div className="flex flex-col items-center justify-center xs:mx-4 md:flex-row ">
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
				</div>

				<Laaguage />

				<ProfileCard />

				<Form />
			</div>
		</div>
	);
};
