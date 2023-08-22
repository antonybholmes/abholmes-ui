import IButtonProps from "@interfaces/button-props";
export declare const SIDE_OVERLAY_CLS: string | undefined;
export interface IMenuButtonProps extends IButtonProps {
    showMenu: boolean;
}
export default function SideMenu({ onClick, className, ...props }: IButtonProps): import("react/jsx-runtime").JSX.Element;
