import { IElementProps } from "../interfaces/element-props";
export declare const DROPDOWN_CLS = "left-0";
interface IProps extends IElementProps {
    dropDownVisible: boolean;
    onClose?: () => void;
    menuClassName?: string;
    onOpenAutoFocus?: (e: Event) => void;
}
export declare function BaseDropDown({ dropDownVisible, onClose, onOpenAutoFocus, menuClassName, className, children, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
