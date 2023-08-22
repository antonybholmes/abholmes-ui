import { IElementProps } from "@interfaces/element-props";
import { MouseEvent, ReactNode } from "react";
export declare const PILL_CLS: any;
export declare const SELECTED_PILL_CLS = "trans-300 absolute bottom-0 left-0 top-0 z-0 block h-full rounded-full bg-theme-100 transition-all dark:bg-gray-600";
export type ITabClick = (e: MouseEvent, index: number) => void;
export interface ITab {
    tab: ReactNode;
    content?: ReactNode | null;
}
interface IProps extends IElementProps {
    tabs: ITab[];
    activeTabIndex: number;
    onTabClick?: ITabClick;
}
export default function PillTabs({ tabs, activeTabIndex, onTabClick, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
