import "src/styles/globals.css";
import "animate.css";
import type { CustomAppPage } from "next/app";
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

const App: CustomAppPage = ({ Component, pageProps }) => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	const getLayout =
		Component.getLayout ||
		((page) => {
			return page;
		});

	return (
		<>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{ colorScheme }}
				>
					{getLayout(<Component {...pageProps} />)}
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

export default App;
