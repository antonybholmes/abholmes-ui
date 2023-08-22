import IElementProps from "@interfaces/element-props";
interface IProps extends IElementProps {
    direction?: string;
    delay?: number;
}
export declare function Tooltip({ content, children }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
