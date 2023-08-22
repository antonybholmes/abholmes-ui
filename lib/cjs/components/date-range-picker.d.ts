import { IDateUpdate } from "@interfaces";
import { IDateRange } from "@interfaces/date-range";
export declare function sortDateRange(dateRange: IDateRange): IDateRange;
interface IProps {
    currentDateRange: IDateUpdate;
    onDatesChange?: (dates: IDateUpdate) => void;
    onClose?: () => void;
}
export declare function DateRangePicker({ currentDateRange, onDatesChange, onClose, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
