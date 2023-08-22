import { ISessionUser } from "..lib/types";
import type IClassProps from "@interfaces/class-props";
interface IProps extends IClassProps {
    session: ISessionUser;
}
export default function InvitePage({ session }: IProps): import("react/jsx-runtime").JSX.Element;
export { };

