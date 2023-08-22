import type IClassProps from "@interfaces/class-props";
import { IDBItem, IInventoryDBItem, ISessionUser } from "@lib/types";
interface IProps extends IClassProps {
    session: ISessionUser;
    items: IInventoryDBItem[];
    inventoryTypes: IDBItem[];
    vendors: IDBItem[];
}
export default function AddProductPage({ session, items, inventoryTypes, vendors, className, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
