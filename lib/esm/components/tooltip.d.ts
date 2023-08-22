import IElementProps from "@interfaces/element-props";
interface IProps extends IElementProps {
    direction?: string;
    delay?: number;
}
export default function LMTooltip({ content, children }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
