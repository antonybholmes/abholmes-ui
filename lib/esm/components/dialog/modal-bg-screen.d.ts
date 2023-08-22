import { ComponentPropsWithoutRef } from "react";
interface IProps extends ComponentPropsWithoutRef<"div"> {
    visible: boolean;
}
export declare const SCREEN_CLS: string | undefined;
export default function ModalBgScreen({ visible, className, children, ...props }: IProps): import("react/jsx-runtime").JSX.Element;
export {};