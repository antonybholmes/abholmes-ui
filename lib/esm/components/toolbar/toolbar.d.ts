import type IClassProps from "@interfaces/class-props";
import type { ISessionUser } from "@/lib/types";
import type IQueryStatus from "@interfaces/query-status";
import { ReactElement } from "react";
interface IProps extends IClassProps {
    session?: ISessionUser;
    tab?: string;
    showAlert?: boolean;
    middle?: ReactElement;
    small?: ReactElement;
    alert?: IQueryStatus | null;
}
export default function Toolbar({ session, tab, showAlert, middle, small, className, alert, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
