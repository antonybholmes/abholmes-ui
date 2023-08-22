import IElementProps from "@interfaces/element-props";
import { IDBItem } from "@lib/types";
import { DropDownClick, DropDownRenderer } from "@abholmes/ui";
export type IAutoCompleteOnChange = (text: string) => void;
interface IProps<T extends IDBItem> extends IElementProps {
    id: string;
    name: string;
    text: string;
    items: T[];
    onValueChange?: IAutoCompleteOnChange;
    onDropClick?: DropDownClick<T>;
    renderListItem?: DropDownRenderer<T>;
    placeholder?: string;
    menuClassName?: string;
}
export default function Autocomplete<T extends IDBItem>({ id, name, text, items, onValueChange, onDropClick, placeholder, renderListItem, menuClassName, className, }: IProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
