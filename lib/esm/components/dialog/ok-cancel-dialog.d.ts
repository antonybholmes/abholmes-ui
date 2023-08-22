import { MouseEvent } from "react";
import { ITextModel } from "./text-dialog";
export interface IOKCancelModel extends ITextModel {
    title: string;
    text: string;
    onClick?: (e: MouseEvent) => void;
}
export declare function OKCancelDialog({ title, text, visible, onClick, onCancel, }: IOKCancelModel): import("react/jsx-runtime").JSX.Element;
