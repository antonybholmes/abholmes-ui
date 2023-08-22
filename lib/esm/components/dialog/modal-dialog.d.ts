import type IChildrenProps from "@interfaces/children-props";
import { MouseEvent } from "react";
export interface IModalProps extends IChildrenProps {
    visible?: boolean;
    onCancel?: (e: MouseEvent | KeyboardEvent) => void;
}
export default function ModalDialog({ visible, onCancel, className, children, }: IModalProps): import("react/jsx-runtime").JSX.Element;
