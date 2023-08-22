import IElementProps from "@interfaces/element-props";
import { IDateUpdate } from "../interfaces/date-update";
interface IProps extends IElementProps {
    dates: IDateUpdate;
    onDatesChange?: (dates: IDateUpdate) => void;
}
export declare function DateRangePickerDropdown({ dates, onDatesChange, className, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};