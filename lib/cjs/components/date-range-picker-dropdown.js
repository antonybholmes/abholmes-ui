"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePickerDropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const date_fns_1 = require("date-fns");
const react_1 = require("react");
const calendar_1 = require("../icons/calendar");
const class_names_1 = __importDefault(require("../lib/class-names"));
const date_range_picker_1 = require("./date-range-picker");
const _theme_1 = require("@theme");
const chevron_right_1 = require("../icons/chevron-right");
const base_dropdown_1 = require("./base-dropdown");
const base_row_1 = require("./base-row");
const toolbar_button_1 = __importDefault(require("./toolbar/toolbar-button"));
const v_center_row_1 = __importDefault(require("./v-center-row"));
const OUTPUT_DATE_FORMAT = "EEE, MMM d";
function DayInput({ id, date, onDateChange }) {
    const [dateValue, setDateValue] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        setDateValue((0, date_fns_1.format)(date, OUTPUT_DATE_FORMAT));
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
            setDateValue((0, date_fns_1.format)(d, OUTPUT_DATE_FORMAT));
            onDateChange(d);
        }
    }
    return ((0, jsx_runtime_1.jsxs)(base_row_1.BaseRow, { children: [(0, jsx_runtime_1.jsx)("input", { id: id, type: "text", "aria-label": "Date", value: dateValue, className: (0, class_names_1.default)("w-20 bg-transparent outline-none"), 
                //onClick={_onClick}
                onKeyDown: onKeyDown, onChange: e => setDateValue(e.target.value) }), (0, jsx_runtime_1.jsx)(toolbar_button_1.default, { className: "px-1", "aria-label": "Previous day", onClick: () => onDateChange((0, date_fns_1.subDays)(date, 1)), children: (0, jsx_runtime_1.jsx)(chevron_right_1.ChevronRightIcon, { className: "stroke-foreground -scale-x-100", size: "w-3" }) }), (0, jsx_runtime_1.jsx)(toolbar_button_1.default, { className: "px-1", onClick: () => onDateChange((0, date_fns_1.addDays)(date, 1)), children: (0, jsx_runtime_1.jsx)(chevron_right_1.ChevronRightIcon, { className: "stroke-foreground", size: "w-3" }) })] }));
}
function DateRangePickerDropdown({ dates, onDatesChange, className, }) {
    const [_dates, setDates] = (0, react_1.useState)(dates);
    const [dropDownVisible, setDropDownVisible] = (0, react_1.useState)(false);
    const buttonRef = (0, react_1.useRef)(null);
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
    return ((0, jsx_runtime_1.jsxs)(base_dropdown_1.BaseDropDown, { dropDownVisible: dropDownVisible, className: className, onClose: onClose, children: [(0, jsx_runtime_1.jsxs)(v_center_row_1.default, { className: (0, class_names_1.default)(_theme_1.FOCUS_RING_CLS, _theme_1.ROUNDED_BUTTON_CLS, "gap-x-2 border bg-white pl-2 ring-2", _theme_1.INPUT_DARK_CLS, [dropDownVisible, "ring-theme-200", "ring-transparent"]), onFocus: () => setDropDownVisible(true), tabIndex: 0, children: [(0, jsx_runtime_1.jsx)(calendar_1.CalendarIcon, {}), (0, jsx_runtime_1.jsx)(DayInput, { id: "start-date", date: _dates.from, onDateChange: (date) => onDaySelect({ from: date, to: _dates.to, update: true }) }), (0, jsx_runtime_1.jsx)("span", { className: "h-5 border-l border-gray-300", style: { width: 1 } }), (0, jsx_runtime_1.jsx)(DayInput, { id: "end-date", date: _dates.to, onDateChange: (date) => onDaySelect({ from: _dates.from, to: date, update: true }) })] }), (0, jsx_runtime_1.jsx)("div", { role: "dialog", "aria-label": "DayPicker calendar", children: (0, jsx_runtime_1.jsx)(date_range_picker_1.DateRangePicker, { currentDateRange: _dates, onDatesChange: (dates) => onDaySelect(dates) }) })] }));
}
exports.DateRangePickerDropdown = DateRangePickerDropdown;
//# sourceMappingURL=date-range-picker-dropdown.js.map