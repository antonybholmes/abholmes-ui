import type IClassProps from "@interfaces/class-props";
import { ISessionUser } from "@lib/types";
interface IProps extends IClassProps {
    session: ISessionUser;
}
export default function InvitePage({ session }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
