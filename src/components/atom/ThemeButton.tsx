import { ActionIcon, createStyles, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { FC } from "react";

export const ThemeButton: FC = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	return (
		<ActionIcon
			variant="outline"
			color={dark ? "yellow" : "blue"}
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
		>
			{dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
		</ActionIcon>
	);
};
