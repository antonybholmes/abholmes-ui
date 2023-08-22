import type IClassProps from "@interfaces/class-props";
import { IDBItem, IInventoryDBItem, ISessionUser } from "@lib/types";
interface IProps extends IClassProps {
    session: ISessionUser;
    vendors: IDBItem[];
    inventoryTypes: IDBItem[];
    items: IInventoryDBItem[];
}
export default function OrderPage({ session, inventoryTypes, vendors, items, className, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
