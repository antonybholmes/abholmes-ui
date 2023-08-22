import { MouseEvent } from "react";
import { IElementProps } from "../../interfaces";
export interface IModalProps extends IElementProps {
    visible?: boolean;
    onCancel?: (e: MouseEvent | KeyboardEvent) => void;
}
export default function ModalDialog({ visible, onCancel, className, children, }: IModalProps): import("react/jsx-runtime").JSX.Element;
