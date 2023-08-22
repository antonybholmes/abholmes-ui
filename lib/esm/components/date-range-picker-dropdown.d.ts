import type IClassProps from "@interfaces/class-props";
import { IDateUpdate } from "./date-range-picker";
interface IProps extends IClassProps {
    dates: IDateUpdate;
    onDatesChange?: (dates: IDateUpdate) => void;
}
export default function DateRangePickerDropdown({ dates, onDatesChange, className, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
