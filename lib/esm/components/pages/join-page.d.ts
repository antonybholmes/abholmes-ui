import IClassProps from "@interfaces/class-props";
interface IProps extends IClassProps {
    token: string;
    email: string;
}
export default function JoinPage({ token, email }: IProps): import("react/jsx-runtime").JSX.Element;
export {};