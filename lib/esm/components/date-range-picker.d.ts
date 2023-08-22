import { IDateRange } from "@lib/types";
export interface IDateUpdate extends IDateRange {
    update: boolean;
}
interface IProps {
    currentDateRange: IDateUpdate;
    onDatesChange?: (dates: IDateUpdate) => void;
    onClose?: () => void;
}
export declare function DateRangePicker({ currentDateRange, onDatesChange, onClose, }: IProps): import("react/jsx-runtime").JSX.Element;
export {};
