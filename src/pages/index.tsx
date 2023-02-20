import { FC } from "react";
import "animate.css";
import Image from "next/image";
import { Laaguage } from "@/components/atom/language";
import { Form } from "@/components/atom/form";

export const Index: FC = () => {
	return (
		<div className="mx-auto flex-col px-2">
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

				<Laaguage />

				{/* Forn / Infomation */}
				<Form />

				{/* //! Profileの作成 !//  */}
			</div>
		</div>
	);
};
