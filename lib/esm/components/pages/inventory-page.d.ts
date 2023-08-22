import { IDBItem, IPageRange, ISessionUser } from "..lib/types";
interface IProps {
    session: ISessionUser;
    vendors: IDBItem[];
    inventoryTypes: IDBItem[];
    pages?: IPageRange;
}
export default function InventoryPage({ session, vendors, inventoryTypes, pages, }: IProps): import("react/jsx-runtime").JSX.Element;
export { };

