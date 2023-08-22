import IElementProps from "@interfaces/element-props";
import { IDBItem } from "@lib/types";
import type { DropDownClick, DropDownRenderer } from "./dropdown";
interface IProps<T extends IDBItem> extends IElementProps {
    id: string;
    name: string;
    value?: string;
    items: T[];
    onDropClick?: DropDownClick<T>;
    renderListItem?: DropDownRenderer<T>;
    placeholder?: string;
    menuClassName?: string;
}
export default function InputDropdown<T extends IDBItem>({ id, name, value, items, onDropClick, placeholder, renderListItem, className, menuClassName, }: IProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
