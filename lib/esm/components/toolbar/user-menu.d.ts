import { ISessionUser } from "..lib/types";
import type IClassProps from "@interfaces/class-props";
interface IProps extends IClassProps {
    session: ISessionUser;
}
export default function UserMenu({ session, className }: IProps): import("react/jsx-runtime").JSX.Element;
export { };

