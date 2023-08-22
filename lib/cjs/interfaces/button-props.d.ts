import { ComponentPropsWithoutRef } from "react";
export default interface IButtonProps extends ComponentPropsWithoutRef<"button"> {
    isSelected?: boolean;
    selectedClassName?: string;
    unSelectedClassName?: string;
}
