import { MouseEvent } from "react";
import { IElementProps } from "../interfaces/element-props";
export interface ISearchBarProps extends IElementProps {
    id: string;
    search: string;
    placeholder?: string;
    showClearButton?: boolean;
    onClearClick?: (e: MouseEvent) => void;
}
export default function BaseSearchBar({ id, search, placeholder, onChange, onClick, onClearClick, onKeyDown, showClearButton, onFocus, onBlur, className, }: ISearchBarProps): import("react/jsx-runtime").JSX.Element;
