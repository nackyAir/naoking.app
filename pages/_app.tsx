import "src/styles/globals.css";
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { AppProps } from "next/app";
import Layout from "@/layouts/AooShell";
import { Provider } from "jotai";

const App = ({ Component, pageProps }: AppProps) => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "light",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	//TODO: Atomを使ったLanguage Changeの実装

	return (
		<>
			<Provider>
				<ColorSchemeProvider
					colorScheme={colorScheme}
					toggleColorScheme={toggleColorScheme}
				>
					<MantineProvider
						withGlobalStyles
						withNormalizeCSS
						theme={{ colorScheme }}
					>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</MantineProvider>
				</ColorSchemeProvider>
			</Provider>
		</>
	);
};

export default App;
