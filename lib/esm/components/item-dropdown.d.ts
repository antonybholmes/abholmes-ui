import { IDBItem } from "..lib/types";
import { DropDownClick, DropDownRenderer, IDropDownMenuItem } from "@abholmes/ui";
import IElementProps from "@interfaces/element-props";
interface IProps<T extends IDBItem> extends IElementProps {
    name: string;
    items: IDropDownMenuItem<T>[];
    onDropClick?: DropDownClick<T>;
    renderListItem?: DropDownRenderer<T>;
    placeholder?: string;
    menuClassName?: string;
}
export default function ItemDropdown<T extends IDBItem>({ name, items, onDropClick, renderListItem, className, menuClassName, }: IProps<T>): import("react/jsx-runtime").JSX.Element;
export { };

