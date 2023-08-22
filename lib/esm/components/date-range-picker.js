var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BaseButton } from "@components/button/base-button";
import BlueLinkButton from "@components/button/blue-link-button";
import ChevronRightIcon from "@icons/chevron-right";
import cn from "@lib/class-names";
import { addMonths, format, getDay, getDaysInMonth, subMonths } from "date-fns";
import { range } from "lodash";
import { useEffect, useRef, useState } from "react";
import { CHEVRON_CLS } from "src/consts";
import BaseCol from "./base-col";
import { CENTERED_BUTTON_CLS, FOCUS_BORDER_CLS, MENU_BUTTON_CLS, PILL_BUTTON_CLS, PRIMARY_FOCUS_BORDER_CLS, } from "@theme";
import { BaseRow } from "./base-row";
import HCenterRow from "./h-center-row";
import { sortDateRange } from "@lib/utils";
import ToolbarButton from "./toolbar/toolbar-button";
import ToolbarIconButton from "./toolbar/toolbar-icon-button";
var SHORT_DAYS = ["S", "M", "T", "W", "T", "F", "S"];
var SIZE = "h-8 w-8";
var W = "14rem";
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
    var d = subMonths(date, 1);
    return new Date(d.getFullYear(), d.getMonth(), 1); // month to display
}
function getNextMonthAsDate(date) {
    var d = addMonths(date, 1);
    return new Date(d.getFullYear(), d.getMonth(), 1);
}
/**
 * returns days in month as array
 * @param {number} month the month to display
 * @param {number} year the year to display
 */
function getDaysGrid(startDate) {
    var calendar = [];
    var year = startDate.getFullYear();
    var month = startDate.getMonth();
    var monthDate = new Date(year, month, 1); // month to display
    var prevMonthDate = getPrevMonthAsDate(monthDate);
    var nextMonthDate = getNextMonthAsDate(monthDate);
    //const prevFirstDay = new Date(prevYear, prevMonth, 1).getDay() // first weekday of month
    var prevLastDate = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), 0).getDate(); // last day of month
    //const nextFirstDay = new Date(nextYear, nextMonth, 1).getDay() // first weekday of month
    //const nextLastDate = new Date(nextYear, nextMonth + 1, 0).getDate() // last date of month
    var firstDay = getDay(monthDate); // first weekday of month
    var lastDate = getDaysInMonth(monthDate); // last date of month
    var day = 1;
    // the calendar is 7*6 fields big, so 42 loops
    for (var i = 0; i < 42; i++) {
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
            var date = new Date(year, month, day);
            calendar.push({
                date: date,
                enabled: true,
            });
            ++day;
        }
    }
    return calendar;
}
var DAY_BUTTON_CLS = cn(CENTERED_BUTTON_CLS, PILL_BUTTON_CLS, SIZE, FOCUS_BORDER_CLS, PRIMARY_FOCUS_BORDER_CLS, "relative shrink-0 grow-0 border-2");
function MonthView(_a) {
    var date = _a.date, now = _a.now, dateRange = _a.dateRange, rangeMode = _a.rangeMode, onDayClick = _a.onDayClick, onDayHover = _a.onDayHover;
    var days = getDaysGrid(date);
    var lastDay = getDaysInMonth(date);
    var _b = useState(false), hover = _b[0], setHover = _b[1];
    return (_jsxs(BaseCol, { className: "gap-y-2", onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, children: [_jsx(HCenterRow, { children: format(date, "LLLL") }), _jsxs("div", { className: "grid grid-cols-7 gap-y-1 ", style: { width: W }, children: [SHORT_DAYS.map(function (day, di) { return (_jsx("div", { className: cn(CENTERED_BUTTON_CLS, SIZE, "text-xs font-semibold text-slate-400 dark:text-gray-400"), children: day }, di)); }), days.map(function (day, di) {
                        var selected = day.date.getTime() === dateRange.from.getTime() ||
                            day.date.getTime() === dateRange.to.getTime();
                        var highlighted = (hover || !rangeMode) &&
                            day.enabled &&
                            day.date.getTime() >= dateRange.from.getTime() &&
                            day.date.getTime() <= dateRange.to.getTime();
                        var today = day.date.getTime() === now.getTime();
                        return (_jsxs("div", { className: cn("relative text-xs", SIZE, CENTERED_BUTTON_CLS, [highlighted, "bg-theme-100 dark:bg-gray-600 "], [di % 7 === 0 || day.date.getDate() === 1, "rounded-l-full"], [
                                di % 7 === 6 || day.date.getDate() === lastDay,
                                "rounded-r-full",
                            ]), children: [day.date.getTime() === dateRange.from.getTime() && (_jsx("span", { className: "bg-popover absolute left-0 top-0 h-full w-1/2" })), day.date.getTime() === dateRange.to.getTime() && (_jsx("span", { className: "bg-popover absolute right-0 top-0 h-full w-1/2" })), day.enabled && (_jsx(BaseButton, { className: cn(DAY_BUTTON_CLS, [today, "text-theme-500 font-bold"], [
                                        selected,
                                        "bg-theme-600 font-semibold text-white",
                                        "hover:border-theme-300 dark:hover:border-gray-600",
                                    ]), onClick: function (e) { return onDayClick && onDayClick(day.date); }, onMouseEnter: function (e) { return onDayHover && onDayHover(day.date); }, onFocus: function (e) { return onDayHover && onDayHover(day.date); }, "aria-label": "Select date", children: day.date.getDate() }))] }, di));
                    })] })] }));
}
export function DateRangePicker(_a) {
    var currentDateRange = _a.currentDateRange, onDatesChange = _a.onDatesChange, onClose = _a.onClose;
    // represents today when user is looking at calendar
    var _b = useState(currentDateRange.from), now = _b[0], setNow = _b[1];
    // which dates to highlight. This can be the same as currentDateRange
    // if currentDateRange.update = true. This determines which
    //const [highlightDateRange, setHighlightDateRange] =
    //  useState<IDateRange>(currentDateRange)
    var _c = useState(currentDateRange), highlightDateRange = _c[0], setHighlightDateRange = _c[1];
    // the start date the user picks
    var _d = useState(currentDateRange.from), startMonthDate = _d[0], setStartMonthDate = _d[1];
    var _e = useState(currentDateRange.from), endMonthDate = _e[0], setEndMonthDate = _e[1];
    //const [displayMonth, setDisplayMonth] = useState(0)
    //const [displayYear, setDisplayYear] = useState(EPOCH_YEAR)
    var _f = useState(false), yearMode = _f[0], setYearMode = _f[1];
    var _g = useState(false), rangeMode = _g[0], setRangeMode = _g[1];
    var _h = useState([]), years = _h[0], setYears = _h[1];
    var yearMenuRef = useRef(null);
    useEffect(function () {
        var now = new Date();
        // now must ignore time so that comparison of time stamps is based
        // on date diffs and not time
        setNow(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
        // display some years
        //setYears(range(now.getFullYear() - 10, now.getFullYear() + 10))
        setYears(range(now.getFullYear() - 10, now.getFullYear() + 1).reverse());
    }, []);
    useEffect(function () {
        if (currentDateRange.update) {
            setStartMonthDate(currentDateRange.from);
        }
        setHighlightDateRange(sortDateRange(currentDateRange));
    }, [currentDateRange]);
    useEffect(function () {
        // when start date changes, change the end month on display
        setEndMonthDate(getNextMonthAsDate(startMonthDate));
    }, [startMonthDate]);
    // useEffect(() => {
    //   setSortedHighlightDateRange(sortDateRange(highlightDateRange))
    // }, [highlightDateRange])
    useEffect(function () {
        var _a;
        if (yearMode) {
            (_a = yearMenuRef === null || yearMenuRef === void 0 ? void 0 : yearMenuRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0, (now.getFullYear() - years[0]) * 30);
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
        var d = rangeMode
            ? __assign(__assign({}, highlightDateRange), { update: false }) : { from: date, to: date, update: false };
        //setHighlightDateRange(d)
        setRangeMode(!rangeMode);
        onDatesChange && onDatesChange(d);
    }
    function onDayHover(date) {
        // update the state
        //setStartMonthDate(date)
        //onDateChange && onDateChange(date)
        //e.stopPropagation()
        var d = __assign(__assign({}, sortDateRange({ from: currentDateRange.from, to: date })), { update: false });
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
        setStartMonthDate(subMonths(startMonthDate, 1));
    }
    function displayNextMonth(e) {
        e.stopPropagation();
        setYearMode(false);
        setStartMonthDate(addMonths(startMonthDate, 1));
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
        var date = new Date(year, 0, 1);
        onDateClick(date);
    }
    function onDateClick(date) {
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        setStartMonthDate(date);
        onStartDayClick(date);
    }
    return (_jsxs("div", { className: "p-2", children: [_jsxs("nav", { className: "flex flex-row items-center justify-center gap-x-1 font-semibold", onClick: function () { return setYearMode(false); }, children: [_jsx(ToolbarIconButton, { onClick: displayPrevMonth, "aria-label": "Previous month", children: _jsx(ChevronRightIcon, { className: cn(CHEVRON_CLS, "rotate-180"), size: "w-3" }) }), _jsx(ToolbarButton, { onClick: toggleYearSelector, "aria-label": "Change year", children: startMonthDate.getFullYear() }), _jsx(ToolbarIconButton, { onClick: displayNextMonth, "aria-label": "Next month", children: _jsx(ChevronRightIcon, { className: CHEVRON_CLS, size: "w-3" }) })] }), _jsxs("div", { className: "relative py-2", children: [_jsxs(BaseRow, { className: "gap-x-8", children: [_jsx(MonthView, { date: startMonthDate, dateRange: highlightDateRange, rangeMode: rangeMode, now: now, onDayClick: onStartDayClick, onDayHover: onDayHover }), _jsx(MonthView, { date: endMonthDate, dateRange: highlightDateRange, rangeMode: rangeMode, now: now, onDayClick: onStartDayClick, onDayHover: onDayHover })] }), _jsx("div", { className: "px-2 py-2", children: _jsx(BlueLinkButton, { onClick: function (e) { return onDateClick(new Date()); }, "aria-label": "Today", className: "text-sm", children: "Today" }) }), yearMode && (_jsx("ul", { ref: yearMenuRef, className: "bg-popover absolute left-0 top-0 flex h-full w-full flex-col overflow-y-auto font-semibold", children: years.map(function (year) { return (_jsx("li", { children: _jsx(BaseButton, { id: "year-".concat(year), className: cn(MENU_BUTTON_CLS, "shrink-0", [
                                    year === now.getFullYear(),
                                    "text-theme-500",
                                ]), onClick: function (e) { return changeDisplayYear(e, year); }, "aria-label": "Select ".concat(year), children: year }) }, year)); }) }))] })] }));
}
//# sourceMappingURL=date-range-picker.js.map