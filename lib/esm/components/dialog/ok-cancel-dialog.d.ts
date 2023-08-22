import { MouseEvent } from "react";
import { ITextModel } from "./text-dialog";
export interface IOKCancelModel extends ITextModel {
    title: string;
    text: string;
    onClick?: (e: MouseEvent) => void;
}
export default function OKCancelDialog({ title, text, visible, onClick, onCancel, className, }: IOKCancelModel): import("react/jsx-runtime").JSX.Element;
