import { IDateRange } from "../interfaces/date-range";
import { IDateUpdate } from "../interfaces/date-update";
export declare function sortDateRange(dateRange: IDateRange): IDateRange;
interface IProps {
    currentDateRange: IDateUpdate;
    onDatesChange?: (dates: IDateUpdate) => void;
    onClose?: () => void;
}
export declare function DateRangePicker({ currentDateRange, onDatesChange, onClose, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
