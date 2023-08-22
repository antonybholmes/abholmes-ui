"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePicker = exports.sortDateRange = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const base_button_1 = require("./button/base-button");
const blue_link_button_1 = require("./button/blue-link-button");
const chevron_right_1 = require("../icons/chevron-right");
const class_names_1 = require("../lib/class-names");
const date_fns_1 = require("date-fns");
const lodash_1 = require("lodash");
const react_1 = require("react");
const consts_1 = require("src/consts");
const base_col_1 = __importDefault(require("./base-col"));
const theme_1 = require("../theme");
const base_row_1 = require("./base-row");
const h_center_row_1 = __importDefault(require("./h-center-row"));
const toolbar_button_1 = __importDefault(require("./toolbar/toolbar-button"));
const toolbar_icon_button_1 = __importDefault(require("./toolbar/toolbar-icon-button"));
const SHORT_DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const SIZE = "h-8 w-8";
const W = "14rem";
function sortDateRange(dateRange) {
    // swap to keep dates in order
    if (dateRange.from > dateRange.to) {
        return { from: dateRange.to, to: dateRange.from };
    }
    else {
        return dateRange;
    }
}
exports.sortDateRange = sortDateRange;
// function getDaysInMonth(date:Date) {
//   let year = date.getFullYear()
//   let month = date.getMonth() + 1
//   if (month === 12) {
//     month = 0
//     ++year
//   }
//   return new Date(year, month, 0)
// }
function getPrevMonthAsDate(date) {
    const d = (0, date_fns_1.subMonths)(date, 1);
    return new Date(d.getFullYear(), d.getMonth(), 1); // month to display
}
function getNextMonthAsDate(date) {
    const d = (0, date_fns_1.addMonths)(date, 1);
    return new Date(d.getFullYear(), d.getMonth(), 1);
}
/**
 * returns days in month as array
 * @param {number} month the month to display
 * @param {number} year the year to display
 */
function getDaysGrid(startDate) {
    let calendar = [];
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    const monthDate = new Date(year, month, 1); // month to display
    const prevMonthDate = getPrevMonthAsDate(monthDate);
    const nextMonthDate = getNextMonthAsDate(monthDate);
    //const prevFirstDay = new Date(prevYear, prevMonth, 1).getDay() // first weekday of month
    const prevLastDate = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), 0).getDate(); // last day of month
    //const nextFirstDay = new Date(nextYear, nextMonth, 1).getDay() // first weekday of month
    //const nextLastDate = new Date(nextYear, nextMonth + 1, 0).getDate() // last date of month
    const firstDay = (0, date_fns_1.getDay)(monthDate); // first weekday of month
    const lastDate = (0, date_fns_1.getDaysInMonth)(monthDate); // last date of month
    let day = 1;
    // the calendar is 7*6 fields big, so 42 loops
    for (let i = 0; i < 42; i++) {
        if (i < firstDay) {
            // prev
            calendar.push({
                date: new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), prevLastDate - (firstDay - i)),
                enabled: false,
            });
        }
        else if (day > lastDate) {
            calendar.push({
                date: new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), i - lastDate - firstDay + 1),
                enabled: false,
            });
        }
        else {
            const date = new Date(year, month, day);
            calendar.push({
                date: date,
                enabled: true,
            });
            ++day;
        }
    }
    return calendar;
}
const DAY_BUTTON_CLS = (0, class_names_1.cn)(theme_1.CENTERED_BUTTON_CLS, theme_1.PILL_BUTTON_CLS, SIZE, theme_1.FOCUS_BORDER_CLS, theme_1.PRIMARY_FOCUS_BORDER_CLS, "relative shrink-0 grow-0 border-2");
function MonthView({ date, now, dateRange, rangeMode, onDayClick, onDayHover, }) {
    const days = getDaysGrid(date);
    const lastDay = (0, date_fns_1.getDaysInMonth)(date);
    const [hover, setHover] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(base_col_1.default, { className: "gap-y-2", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), children: [(0, jsx_runtime_1.jsx)(h_center_row_1.default, { children: (0, date_fns_1.format)(date, "LLLL") }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-7 gap-y-1 ", style: { width: W }, children: [SHORT_DAYS.map((day, di) => ((0, jsx_runtime_1.jsx)("div", { className: (0, class_names_1.cn)(theme_1.CENTERED_BUTTON_CLS, SIZE, "text-xs font-semibold text-slate-400 dark:text-gray-400"), children: day }, di))), days.map((day, di) => {
                        const selected = day.date.getTime() === dateRange.from.getTime() ||
                            day.date.getTime() === dateRange.to.getTime();
                        const highlighted = (hover || !rangeMode) &&
                            day.enabled &&
                            day.date.getTime() >= dateRange.from.getTime() &&
                            day.date.getTime() <= dateRange.to.getTime();
                        const today = day.date.getTime() === now.getTime();
                        return ((0, jsx_runtime_1.jsxs)("div", { className: (0, class_names_1.cn)("relative text-xs", SIZE, theme_1.CENTERED_BUTTON_CLS, [highlighted, "bg-theme-100 dark:bg-gray-600 "], [di % 7 === 0 || day.date.getDate() === 1, "rounded-l-full"], [
                                di % 7 === 6 || day.date.getDate() === lastDay,
                                "rounded-r-full",
                            ]), children: [day.date.getTime() === dateRange.from.getTime() && ((0, jsx_runtime_1.jsx)("span", { className: "bg-popover absolute left-0 top-0 h-full w-1/2" })), day.date.getTime() === dateRange.to.getTime() && ((0, jsx_runtime_1.jsx)("span", { className: "bg-popover absolute right-0 top-0 h-full w-1/2" })), day.enabled && ((0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { className: (0, class_names_1.cn)(DAY_BUTTON_CLS, [today, "text-theme-500 font-bold"], [
                                        selected,
                                        "bg-theme-600 font-semibold text-white",
                                        "hover:border-theme-300 dark:hover:border-gray-600",
                                    ]), onClick: e => onDayClick && onDayClick(day.date), onMouseEnter: e => onDayHover && onDayHover(day.date), onFocus: e => onDayHover && onDayHover(day.date), "aria-label": "Select date", children: day.date.getDate() }))] }, di));
                    })] })] }));
}
function DateRangePicker({ currentDateRange, onDatesChange, onClose, }) {
    // represents today when user is looking at calendar
    const [now, setNow] = (0, react_1.useState)(currentDateRange.from);
    // which dates to highlight. This can be the same as currentDateRange
    // if currentDateRange.update = true. This determines which
    //const [highlightDateRange, setHighlightDateRange] =
    //  useState<IDateRange>(currentDateRange)
    const [highlightDateRange, setHighlightDateRange] = (0, react_1.useState)(currentDateRange);
    // the start date the user picks
    const [startMonthDate, setStartMonthDate] = (0, react_1.useState)(currentDateRange.from);
    const [endMonthDate, setEndMonthDate] = (0, react_1.useState)(currentDateRange.from);
    //const [displayMonth, setDisplayMonth] = useState(0)
    //const [displayYear, setDisplayYear] = useState(EPOCH_YEAR)
    const [yearMode, setYearMode] = (0, react_1.useState)(false);
    const [rangeMode, setRangeMode] = (0, react_1.useState)(false);
    const [years, setYears] = (0, react_1.useState)([]);
    const yearMenuRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const now = new Date();
        // now must ignore time so that comparison of time stamps is based
        // on date diffs and not time
        setNow(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
        // display some years
        //setYears(range(now.getFullYear() - 10, now.getFullYear() + 10))
        setYears((0, lodash_1.range)(now.getFullYear() - 10, now.getFullYear() + 1).reverse());
    }, []);
    (0, react_1.useEffect)(() => {
        if (currentDateRange.update) {
            setStartMonthDate(currentDateRange.from);
        }
        setHighlightDateRange(sortDateRange(currentDateRange));
    }, [currentDateRange]);
    (0, react_1.useEffect)(() => {
        // when start date changes, change the end month on display
        setEndMonthDate(getNextMonthAsDate(startMonthDate));
    }, [startMonthDate]);
    // useEffect(() => {
    //   setSortedHighlightDateRange(sortDateRange(highlightDateRange))
    // }, [highlightDateRange])
    (0, react_1.useEffect)(() => {
        if (yearMode) {
            yearMenuRef?.current?.scrollTo(0, (now.getFullYear() - years[0]) * 30);
        }
    }, [now, yearMode, years]);
    function closeDatePicker() {
        onClose && onClose();
    }
    /**
     * Gets fired when a day gets clicked.
     */
    function onStartDayClick(date) {
        // update the state
        //setStartMonthDate(date)
        //onDateChange && onDateChange(date)
        //e.stopPropagation()
        // let d = rangeMode
        //   ? { from: dateRange.from, to: date, update: false }
        //   : { from: date, to: date, update: false }
        // // swap to keep dates in order
        // if (d.from > d.to) {
        //   d = { from: d.to, to: d.from, update: d.update }
        // }
        // setDateRange(d)
        const d = rangeMode
            ? { ...highlightDateRange, update: false }
            : { from: date, to: date, update: false };
        //setHighlightDateRange(d)
        setRangeMode(!rangeMode);
        onDatesChange && onDatesChange(d);
    }
    function onDayHover(date) {
        // update the state
        //setStartMonthDate(date)
        //onDateChange && onDateChange(date)
        //e.stopPropagation()
        let d = {
            ...sortDateRange({ from: currentDateRange.from, to: date }),
            update: false,
        };
        if (rangeMode) {
            setHighlightDateRange(d);
        }
        return d;
    }
    /**
     * Display previous month by updating state
     */
    function displayPrevMonth(e) {
        e.stopPropagation();
        setYearMode(false);
        setStartMonthDate((0, date_fns_1.subMonths)(startMonthDate, 1));
    }
    function displayNextMonth(e) {
        e.stopPropagation();
        setYearMode(false);
        setStartMonthDate((0, date_fns_1.addMonths)(startMonthDate, 1));
    }
    /**
     * Display the selected month (gets fired when clicking on the date string)
     */
    function displaySelectedMonth(e) {
        if (yearMode) {
            toggleYearSelector(e);
        }
    }
    function toggleYearSelector(e) {
        e.stopPropagation();
        setYearMode(!yearMode);
    }
    function changeDisplayYear(e, year) {
        toggleYearSelector(e);
        const date = new Date(year, 0, 1);
        onDateClick(date);
    }
    function onDateClick(date) {
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        setStartMonthDate(date);
        onStartDayClick(date);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-2", children: [(0, jsx_runtime_1.jsxs)("nav", { className: "flex flex-row items-center justify-center gap-x-1 font-semibold", onClick: () => setYearMode(false), children: [(0, jsx_runtime_1.jsx)(toolbar_icon_button_1.default, { onClick: displayPrevMonth, "aria-label": "Previous month", children: (0, jsx_runtime_1.jsx)(chevron_right_1.ChevronRightIcon, { className: (0, class_names_1.cn)(consts_1.CHEVRON_CLS, "rotate-180"), size: "w-3" }) }), (0, jsx_runtime_1.jsx)(toolbar_button_1.default, { onClick: toggleYearSelector, "aria-label": "Change year", children: startMonthDate.getFullYear() }), (0, jsx_runtime_1.jsx)(toolbar_icon_button_1.default, { onClick: displayNextMonth, "aria-label": "Next month", children: (0, jsx_runtime_1.jsx)(chevron_right_1.ChevronRightIcon, { className: consts_1.CHEVRON_CLS, size: "w-3" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative py-2", children: [(0, jsx_runtime_1.jsxs)(base_row_1.BaseRow, { className: "gap-x-8", children: [(0, jsx_runtime_1.jsx)(MonthView, { date: startMonthDate, dateRange: highlightDateRange, rangeMode: rangeMode, now: now, onDayClick: onStartDayClick, onDayHover: onDayHover }), (0, jsx_runtime_1.jsx)(MonthView, { date: endMonthDate, dateRange: highlightDateRange, rangeMode: rangeMode, now: now, onDayClick: onStartDayClick, onDayHover: onDayHover })] }), (0, jsx_runtime_1.jsx)("div", { className: "px-2 py-2", children: (0, jsx_runtime_1.jsx)(blue_link_button_1.BlueLinkButton, { onClick: (e) => onDateClick(new Date()), "aria-label": "Today", className: "text-sm", children: "Today" }) }), yearMode && ((0, jsx_runtime_1.jsx)("ul", { ref: yearMenuRef, className: "bg-popover absolute left-0 top-0 flex h-full w-full flex-col overflow-y-auto font-semibold", children: years.map(year => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(base_button_1.BaseButton, { id: `year-${year}`, className: (0, class_names_1.cn)(theme_1.MENU_BUTTON_CLS, "shrink-0", [
                                    year === now.getFullYear(),
                                    "text-theme-500",
                                ]), onClick: e => changeDisplayYear(e, year), "aria-label": `Select ${year}`, children: year }) }, year))) }))] })] }));
}
exports.DateRangePicker = DateRangePicker;
//# sourceMappingURL=date-range-picker.js.map