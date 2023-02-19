import { FC } from "react";
import { AiFillSetting } from "react-icons/ai";
import { TbHeartHandshake } from "react-icons/tb";
import { MdDeveloperMode } from "react-icons/md";

export const About: FC = () => {
	return (
		<div>
			<div>
				<div className="flex items-center">
					<AiFillSetting className="text-6xl text-blue-300 " />
					<h2 className="text-2xl font-bold text-gray-500">サポート</h2>
				</div>
				<p>サイト制作後も、アフターサポートをしっかりと行います。</p>
			</div>

			<div>
				<div className="flex items-center">
					<TbHeartHandshake className="text-6xl text-blue-300 " />
					<h2 className="text-2xl font-bold text-gray-500">寄り添った開発</h2>
				</div>
				<p>依頼していただいた方の気持ちに寄り添った開発を行なっていきます。</p>
			</div>
			<div>
				<div className="flex items-center">
					<MdDeveloperMode className="text-6xl text-blue-300 " />
					<h2 className="text-2xl font-bold text-gray-500">モダンな開発言語</h2>
				</div>
				<p>モダンな開発言語を使って、レスポンスの早いサイトを構築します。</p>
			</div>
		</div>
	);
};
