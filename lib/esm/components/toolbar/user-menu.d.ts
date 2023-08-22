import type IClassProps from "@interfaces/class-props";
import { ISessionUser } from "@lib/types";
interface IProps extends IClassProps {
    session: ISessionUser;
}
export default function UserMenu({ session, className }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
