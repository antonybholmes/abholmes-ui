/// <reference types="react" />
import IButtonProps from "@interfaces/button-props";
export type ICheckClick = (index: number, selected: boolean) => void;
export interface ICheckBoxProps extends IButtonProps {
    index?: number;
    isSelected?: boolean;
    onCheckClick?: ICheckClick;
}
export declare const CHECK_CLS: any;
export declare const TICK_CLS: any;
declare const CheckBox: import("react").ForwardRefExoticComponent<ICheckBoxProps & import("react").RefAttributes<HTMLButtonElement>>;
export default CheckBox;
