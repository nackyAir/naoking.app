import "src/styles/globals.css";
import "animate.css";
import type { CustomAppPage } from "next/app";
import { MantineProvider } from "@mantine/core";

const App: CustomAppPage = ({ Component, pageProps }) => {
	const getLayout =
		Component.getLayout ||
		((page) => {
			return page;
		});

	return (
		<>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "light",
				}}
			>
				{getLayout(<Component {...pageProps} />)}
			</MantineProvider>
		</>
	);
};

export default App;
