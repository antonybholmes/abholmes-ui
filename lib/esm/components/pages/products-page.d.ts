import { IDBItem, IPageRange, ISessionUser } from "..lib/types";
interface IProps {
    session: ISessionUser;
    vendors: IDBItem[];
    dates?: Date[];
    pages?: IPageRange;
    status?: string[];
}
export default function ProductsPage({ session, vendors, pages, }: IProps): import("react/jsx-runtime").JSX.Element;
export { };

