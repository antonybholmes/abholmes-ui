import { IElementProps } from "@interfaces/element-props";
import { MouseEvent, ReactNode } from "react";
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
export default function LineTabs({ tabs, activeTabIndex, onTabClick, className, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
