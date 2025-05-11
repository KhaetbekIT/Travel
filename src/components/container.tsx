import type { ReactNode } from "react";

export const Container = ({ children }: Props) => {
	return (
		<div className="w-[calc(var(--container)+(var(--container-padding-x)*2))] mx-auto px-[var(--padding-x)]">
			{children}
		</div>
	);
};

interface Props {
	children: ReactNode;
}
