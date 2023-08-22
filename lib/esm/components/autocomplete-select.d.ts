import IChildrenProps from "@interfaces/children-props";
import { IDBItem } from "@lib/types";
import { ReactElement } from "react";
export type ISelectClick<T extends IDBItem> = (selected: T[]) => void;
export type IRemoveClick<T extends IDBItem> = (item: T) => void;
export declare function defaultRenderListItem<T extends IDBItem>(item: T, selected: boolean, onClick: (item: T, selected: boolean) => void): ReactElement;
export declare function defaultRenderRemoveItem<T extends IDBItem>(item: T, onClick: IRemoveClick<T>): ReactElement;
export type ICheckClick<T extends IDBItem> = (item: T, selected: boolean) => void;
interface IProps<T extends IDBItem> extends IChildrenProps {
    id: string;
    name: string;
    items: T[];
    onClick?: ISelectClick<T>;
    renderListItem?: (item: T, selected: boolean, onClick: ICheckClick<T>) => ReactElement;
    renderRemoveItem?: (item: T, onClick: IRemoveClick<T>) => ReactElement;
    showRemoveItems?: boolean;
    selectedMap?: Set<string>;
    placeholder?: string;
    maxItems?: number;
}
export default function AutocompleteSelect<T extends IDBItem>({ id, name, items, onClick, placeholder, maxItems, showRemoveItems, selectedMap, renderListItem, renderRemoveItem, className, children, }: IProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
