import type { FC, ReactNode } from "react";

export interface ParamsWithLocale {
	[key: string]: string;
}

export type Layout = FC<{
	children: ReactNode;
}>;

export type PageType<Params extends ParamsWithLocale = ParamsWithLocale> = FC<{
	params: Promise<Params>;
}>;
