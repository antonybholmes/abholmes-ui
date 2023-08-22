import type ILinkProps from "@interfaces/link-props";
interface IProps extends ILinkProps {
    selected?: boolean;
}
export default function ModuleButtonLink({ selected, className, children, ...props }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
