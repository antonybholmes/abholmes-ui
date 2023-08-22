import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addDays, format, subDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { CalendarIcon } from "../icons/calendar";
import { cn } from "../lib/class-names";
import { DateRangePicker } from "./date-range-picker";
import { ChevronRightIcon } from "../icons/chevron-right";
import { FOCUS_RING_CLS, INPUT_DARK_CLS, ROUNDED_BUTTON_CLS } from "../theme";
import { BaseDropDown } from "./base-dropdown";
import { BaseRow } from "./base-row";
import ToolbarButton from "./toolbar/toolbar-button";
import VCenterRow from "./v-center-row";
const OUTPUT_DATE_FORMAT = "EEE, MMM d";
function DayInput({ id, date, onDateChange }) {
    const [dateValue, setDateValue] = useState("");
    useEffect(() => {
        setDateValue(format(date, OUTPUT_DATE_FORMAT));
        //onDatesChange && onDatesChange(_dates)
    }, [date]);
    function onKeyDown(e) {
        if (e.key === "Enter") {
            const s = e.target.value;
            let d;
            if (s.match(/(\d{1,2}\/\d{1,2}\/\d{2}\d{0,2}|\d{4}-\d{2}-\d{2})/)) {
                d = new Date(s);
            }
            else {
                d = date;
            }
            setDateValue(format(d, OUTPUT_DATE_FORMAT));
            onDateChange(d);
        }
    }
    return (_jsxs(BaseRow, { children: [_jsx("input", { id: id, type: "text", "aria-label": "Date", value: dateValue, className: cn("w-20 bg-transparent outline-none"), 
                //onClick={_onClick}
                onKeyDown: onKeyDown, onChange: e => setDateValue(e.target.value) }), _jsx(ToolbarButton, { className: "px-1", "aria-label": "Previous day", onClick: () => onDateChange(subDays(date, 1)), children: _jsx(ChevronRightIcon, { className: "stroke-foreground -scale-x-100", size: "w-3" }) }), _jsx(ToolbarButton, { className: "px-1", onClick: () => onDateChange(addDays(date, 1)), children: _jsx(ChevronRightIcon, { className: "stroke-foreground", size: "w-3" }) })] }));
}
export function DateRangePickerDropdown({ dates, onDatesChange, className, }) {
    const [_dates, setDates] = useState(dates);
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const buttonRef = useRef(null);
    function onClose() {
        setDropDownVisible(false);
    }
    // const closePopper = () => {
    //   setDropDownVisible(false)
    //   buttonRef?.current?.focus()
    // }
    // function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    //   const value = (e.target as HTMLInputElement).value
    //   const d = new Date(value)
    //   onDaySelect({ from: d, to: _dates.to })
    // }
    function onDaySelect(d) {
        // if (!isValid(d)) {
        //   d = _dates
        // }
        setDates(d);
        onDatesChange && onDatesChange(d);
        //onClose()
    }
    return (_jsxs(BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, children: [_jsxs(VCenterRow, { className: cn(FOCUS_RING_CLS, ROUNDED_BUTTON_CLS, "gap-x-2 border bg-white pl-2 ring-2", INPUT_DARK_CLS, [dropDownVisible, "ring-theme-200", "ring-transparent"]), onFocus: () => setDropDownVisible(true), tabIndex: 0, children: [_jsx(CalendarIcon, {}), _jsx(DayInput, { id: "start-date", date: _dates.from, onDateChange: (date) => onDaySelect({ from: date, to: _dates.to, update: true }) }), _jsx("span", { className: "h-5 border-l border-gray-300", style: { width: 1 } }), _jsx(DayInput, { id: "end-date", date: _dates.to, onDateChange: (date) => onDaySelect({ from: _dates.from, to: date, update: true }) })] }), _jsx("div", { role: "dialog", "aria-label": "DayPicker calendar", children: _jsx(DateRangePicker, { currentDateRange: _dates, onDatesChange: (dates) => onDaySelect(dates) }) })] }));
}
//# sourceMappingURL=date-range-picker-dropdown.js.map