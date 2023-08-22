import { BaseDropDown } from "@abholmes/ui";
import CalendarIcon from "@icons/calendar";
import ChevronRightIcon from "@icons/chevron-right";
import cn from "@lib/class-names";
import { FOCUS_RING_CLS, INPUT_DARK_CLS, ROUNDED_BUTTON_CLS } from "@theme";
import { addDays, format, subDays } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BaseRow } from "./base-row";
import { DateRangePicker } from "./date-range-picker";
import ToolbarButton from "./toolbar/toolbar-button";
import VCenterRow from "./v-center-row";
var OUTPUT_DATE_FORMAT = "EEE, MMM d";
function DayInput(_a) {
    var id = _a.id, date = _a.date, onDateChange = _a.onDateChange;
    var _b = useState(""), dateValue = _b[0], setDateValue = _b[1];
    useEffect(function () {
        setDateValue(format(date, OUTPUT_DATE_FORMAT));
        //onDatesChange && onDatesChange(_dates)
    }, [date]);
    function onKeyDown(e) {
        if (e.key === "Enter") {
            var s = e.target.value;
            var d = void 0;
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
                onKeyDown: onKeyDown, onChange: function (e) { return setDateValue(e.target.value); } }), _jsx(ToolbarButton, { className: "px-1", "aria-label": "Previous day", onClick: function () { return onDateChange(subDays(date, 1)); }, children: _jsx(ChevronRightIcon, { className: "stroke-foreground -scale-x-100", size: "w-3" }) }), _jsx(ToolbarButton, { className: "px-1", onClick: function () { return onDateChange(addDays(date, 1)); }, children: _jsx(ChevronRightIcon, { className: "stroke-foreground", size: "w-3" }) })] }));
}
export default function DateRangePickerDropdown(_a) {
    var dates = _a.dates, onDatesChange = _a.onDatesChange, className = _a.className;
    var _b = useState(dates), _dates = _b[0], setDates = _b[1];
    var _c = useState(false), dropDownVisible = _c[0], setDropDownVisible = _c[1];
    var buttonRef = useRef(null);
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
    return (_jsxs(BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, children: [_jsxs(VCenterRow, { className: cn(FOCUS_RING_CLS, ROUNDED_BUTTON_CLS, "gap-x-2 border bg-white pl-2 ring-2", INPUT_DARK_CLS, [dropDownVisible, "ring-theme-200", "ring-transparent"]), onFocus: function () { return setDropDownVisible(true); }, tabIndex: 0, children: [_jsx(CalendarIcon, {}), _jsx(DayInput, { id: "start-date", date: _dates.from, onDateChange: function (date) {
                            return onDaySelect({ from: date, to: _dates.to, update: true });
                        } }), _jsx("span", { className: "h-5 border-l border-gray-300", style: { width: 1 } }), _jsx(DayInput, { id: "end-date", date: _dates.to, onDateChange: function (date) {
                            return onDaySelect({ from: _dates.from, to: date, update: true });
                        } })] }), _jsx("div", { role: "dialog", "aria-label": "DayPicker calendar", children: _jsx(DateRangePicker, { currentDateRange: _dates, onDatesChange: function (dates) { return onDaySelect(dates); } }) })] }));
}
//# sourceMappingURL=date-range-picker-dropdown.js.map