import type IChildProps from "@interfaces/child-props";
export declare const DROPDOWN_CLS = "left-0";
interface IProps extends IChildProps {
    dropDownVisible: boolean;
    onClose?: () => void;
    menuClassName?: string;
    onOpenAutoFocus?: (e: Event) => void;
}
export declare function BaseDropDown({ dropDownVisible, onClose, onOpenAutoFocus, menuClassName, className, children, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
