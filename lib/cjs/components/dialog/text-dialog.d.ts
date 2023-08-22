import { IModalProps } from "./modal-dialog";
export interface ITextModel extends IModalProps {
    title: string;
    text: string;
}
export default function TextDialog({ title, text, visible, children, }: ITextModel): import("react/jsx-runtime").JSX.Element;
