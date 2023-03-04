import { FC, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export const LayoutFallback = ({ error }: FallbackProps) => {
	return (
		<div>
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
		</div>
	);
};

export const LayoutErrorBandry: FC<{ children: ReactNode }> = ({
	children,
}) => {
	return (
		<ErrorBoundary FallbackComponent={LayoutFallback}>{children}</ErrorBoundary>
	);
};
