/// <reference types="react" />
import IButtonProps from "../../interfaces/button-props";
export interface IMenuButtonProps extends IButtonProps {
    showMenu: boolean;
}
declare const SideMenuButton: import("react").ForwardRefExoticComponent<IMenuButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default SideMenuButton;
