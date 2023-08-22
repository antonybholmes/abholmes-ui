import type IElementProps from "@interfaces/element-props";
export declare const BASE_DROPDOWN_CLS: string | undefined;
interface IProps extends IElementProps {
    dropDownVisible: boolean;
    onClose?: () => void;
    menuClassName?: string;
}
export declare function BaseDropDown({ dropDownVisible, onClose, menuClassName, className, children, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
