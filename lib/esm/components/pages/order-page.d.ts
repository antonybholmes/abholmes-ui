import { IDBItem, IInventoryDBItem, ISessionUser } from "..lib/types";
import type IClassProps from "@interfaces/class-props";
interface IProps extends IClassProps {
    session: ISessionUser;
    vendors: IDBItem[];
    inventoryTypes: IDBItem[];
    items: IInventoryDBItem[];
}
export default function OrderPage({ session, inventoryTypes, vendors, items, className, }: IProps): import("react/jsx-runtime").JSX.Element;
export { };

