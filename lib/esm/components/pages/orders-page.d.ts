import { IDBItem, IDateRange, IPageRange, ISessionUser, IUserDBItem } from "@lib/types";
interface IProps {
    session: ISessionUser;
    vendors: IDBItem[];
    members: IUserDBItem[];
    orderStatuses: IDBItem[];
    urlDates: IDateRange;
    urlPages?: IPageRange;
    urlStatus?: Set<string>;
}
export default function OrdersPage({ session, vendors, members, orderStatuses, urlDates, urlPages, urlStatus, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
