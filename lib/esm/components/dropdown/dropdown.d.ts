import IElementProps from "@interfaces/element-props";
import { ReactElement } from "react";
export declare const DROPDOWN_CLS = "left-0";
export interface IDropDownMenuItem<T> {
    id: string | number;
    label: string;
    item: T;
}
export type DropDownClick<T> = (index: number, id: string | number, label: string, item: T) => void;
export type DropDownRenderer<T> = (index: number, id: string | number, label: string, item: T, onClick: DropDownClick<T>) => ReactElement;
export declare function defaultRenderListItem<T>(index: number, id: string | number, label: string, item: T, onClick: DropDownClick<T>): import("react/jsx-runtime").JSX.Element;
interface IProps<T> extends IElementProps {
    dropDownVisible: boolean;
    items: IDropDownMenuItem<T>[];
    onDropClick?: DropDownClick<T>;
    renderListItem?: DropDownRenderer<T>;
    onClose?: () => void;
    placeholder?: string;
    autoClose?: boolean;
}
export declare function Dropdown<T>({ dropDownVisible, items, onDropClick, renderListItem, onClose, className, children, }: IProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
