import { IDBItem, IInventoryDBItem, ISessionUser } from "..lib/types";
import type IClassProps from "@interfaces/class-props";
interface IProps extends IClassProps {
    session: ISessionUser;
    items: IInventoryDBItem[];
    inventoryTypes: IDBItem[];
    vendors: IDBItem[];
}
export default function AddInventoryItemPage({ session, items, inventoryTypes, vendors, className, }: IProps): import("react/jsx-runtime").JSX.Element;
export { };

