import { BaseButton } from "@components/button/base-button"
import BlueLinkButton from "@components/button/blue-link-button"

import ChevronRightIcon from "@icons/chevron-right"
import cn from "@lib/class-names"
import { IDateRange } from "@lib/types"
import { addMonths, format, getDay, getDaysInMonth, subMonths } from "date-fns"
import { range } from "lodash"
import { MouseEvent, useEffect, useRef, useState } from "react"
import { CHEVRON_CLS } from "src/consts"
import BaseCol from "./base-col"

import {
    CENTERED_BUTTON_CLS,
    FOCUS_BORDER_CLS,
    MENU_BUTTON_CLS,
    PILL_BUTTON_CLS,
    PRIMARY_FOCUS_BORDER_CLS,
} from "@theme"
import { BaseRow } from "./base-row"
import HCenterRow from "./h-center-row"

import { sortDateRange } from "@lib/utils"
import ToolbarButton from "./toolbar/toolbar-button"
import ToolbarIconButton from "./toolbar/toolbar-icon-button"

const SHORT_DAYS = ["S", "M", "T", "W", "T", "F", "S"]

const SIZE = "h-8 w-8"

const W = "14rem"

export interface IDateUpdate extends IDateRange {
  // whether to trigger the ui to update the dates.
  // When using the mouse on the months, this should
  // be set to false to prevent clicking on different
  // months triggering a refresh since this is jarring
  // shift in the ui.
  update: boolean
}

// function getDaysInMonth(date:Date) {
//   let year = date.getFullYear()
//   let month = date.getMonth() + 1

//   if (month === 12) {
//     month = 0
//     ++year
//   }

//   return new Date(year, month, 0)
// }

function getPrevMonthAsDate(date: Date) {
  const d = subMonths(date, 1)
  return new Date(d.getFullYear(), d.getMonth(), 1) // month to display
}

function getNextMonthAsDate(date: Date) {
  const d = addMonths(date, 1)
  return new Date(d.getFullYear(), d.getMonth(), 1)
}

/**
 * returns days in month as array
 * @param {number} month the month to display
 * @param {number} year the year to display
 */
function getDaysGrid(startDate: Date): {
  date: Date
  enabled: boolean
}[] {
  let calendar = []

  const year = startDate.getFullYear()
  const month = startDate.getMonth()
  const monthDate = new Date(year, month, 1) // month to display

  const prevMonthDate = getPrevMonthAsDate(monthDate)
  const nextMonthDate = getNextMonthAsDate(monthDate)

  //const prevFirstDay = new Date(prevYear, prevMonth, 1).getDay() // first weekday of month

  const prevLastDate = new Date(
    prevMonthDate.getFullYear(),
    prevMonthDate.getMonth(),
    0,
  ).getDate() // last day of month

  //const nextFirstDay = new Date(nextYear, nextMonth, 1).getDay() // first weekday of month
  //const nextLastDate = new Date(nextYear, nextMonth + 1, 0).getDate() // last date of month

  const firstDay = getDay(monthDate) // first weekday of month
  const lastDate = getDaysInMonth(monthDate) // last date of month

  let day: number = 1

  // the calendar is 7*6 fields big, so 42 loops
  for (let i = 0; i < 42; i++) {
    if (i < firstDay) {
      // prev
      calendar.push({
        date: new Date(
          prevMonthDate.getFullYear(),
          prevMonthDate.getMonth(),
          prevLastDate - (firstDay - i),
        ),
        enabled: false,
      })
    } else if (day > lastDate) {
      calendar.push({
        date: new Date(
          nextMonthDate.getFullYear(),
          nextMonthDate.getMonth(),
          i - lastDate - firstDay + 1,
        ),
        enabled: false,
      })
    } else {
      const date = new Date(year, month, day)

      calendar.push({
        date: date,
        enabled: true,
      })
      ++day
    }
  }

  return calendar
}

interface IMonthViewProps {
  date: Date
  now: Date
  dateRange: IDateRange
  rangeMode: boolean
  onDayClick: (date: Date) => void
  onDayHover?: (date: Date) => void
}

const DAY_BUTTON_CLS = cn(
  CENTERED_BUTTON_CLS,
  PILL_BUTTON_CLS,
  SIZE,
  FOCUS_BORDER_CLS,
  PRIMARY_FOCUS_BORDER_CLS,
  "relative shrink-0 grow-0 border-2",
)

function MonthView({
  date,
  now,
  dateRange,
  rangeMode,
  onDayClick,
  onDayHover,
}: IMonthViewProps) {
  const days = getDaysGrid(date)
  const lastDay = getDaysInMonth(date)
  const [hover, setHover] = useState(false)

  return (
    <BaseCol
      className="gap-y-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <HCenterRow>{format(date, "LLLL")}</HCenterRow>
      <div className="grid grid-cols-7 gap-y-1 " style={{ width: W }}>
        {SHORT_DAYS.map((day, di) => (
          <div
            key={di}
            className={cn(
              CENTERED_BUTTON_CLS,
              SIZE,
              "text-xs font-semibold text-slate-400 dark:text-gray-400",
            )}
          >
            {day}
          </div>
        ))}

        {days.map((day, di) => {
          const selected =
            day.date.getTime() === dateRange.from.getTime() ||
            day.date.getTime() === dateRange.to.getTime()

          const highlighted =
            (hover || !rangeMode) &&
            day.enabled &&
            day.date.getTime() >= dateRange.from.getTime() &&
            day.date.getTime() <= dateRange.to.getTime()

          const today = day.date.getTime() === now.getTime()

          return (
            <div
              key={di}
              className={cn(
                "relative text-xs",
                SIZE,
                CENTERED_BUTTON_CLS,
                [highlighted, "bg-theme-100 dark:bg-gray-600 "],
                [di % 7 === 0 || day.date.getDate() === 1, "rounded-l-full"],
                [
                  di % 7 === 6 || day.date.getDate() === lastDay,
                  "rounded-r-full",
                ],
              )}
            >
              {day.date.getTime() === dateRange.from.getTime() && (
                <span className="bg-popover absolute left-0 top-0 h-full w-1/2" />
              )}
              {day.date.getTime() === dateRange.to.getTime() && (
                <span className="bg-popover absolute right-0 top-0 h-full w-1/2" />
              )}

              {day.enabled && (
                <BaseButton
                  className={cn(
                    DAY_BUTTON_CLS,
                    [today, "text-theme-500 font-bold"],
                    [
                      selected,
                      "bg-theme-600 font-semibold text-white",

                      "hover:border-theme-300 dark:hover:border-gray-600",
                    ],
                  )}
                  onClick={e => onDayClick && onDayClick(day.date)}
                  onMouseEnter={e => onDayHover && onDayHover(day.date)}
                  onFocus={e => onDayHover && onDayHover(day.date)}
                  aria-label="Select date"
                >
                  {day.date.getDate()}
                </BaseButton>
              )}
            </div>
          )
        })}
      </div>
    </BaseCol>
  )
}

interface IProps {
  currentDateRange: IDateUpdate
  onDatesChange?: (dates: IDateUpdate) => void
  onClose?: () => void
}

export function DateRangePicker({
  currentDateRange,
  onDatesChange,
  onClose,
}: IProps) {
  // represents today when user is looking at calendar
  const [now, setNow] = useState<Date>(currentDateRange.from)

  // which dates to highlight. This can be the same as currentDateRange
  // if currentDateRange.update = true. This determines which
  //const [highlightDateRange, setHighlightDateRange] =
  //  useState<IDateRange>(currentDateRange)

  const [highlightDateRange, setHighlightDateRange] =
    useState<IDateRange>(currentDateRange)

  // the start date the user picks
  const [startMonthDate, setStartMonthDate] = useState<Date>(
    currentDateRange.from,
  )
  const [endMonthDate, setEndMonthDate] = useState<Date>(currentDateRange.from)
  //const [displayMonth, setDisplayMonth] = useState(0)
  //const [displayYear, setDisplayYear] = useState(EPOCH_YEAR)
  const [yearMode, setYearMode] = useState(false)
  const [rangeMode, setRangeMode] = useState(false)
  const [years, setYears] = useState<number[]>([])
  const yearMenuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const now = new Date()

    // now must ignore time so that comparison of time stamps is based
    // on date diffs and not time
    setNow(new Date(now.getFullYear(), now.getMonth(), now.getDate()))

    // display some years
    //setYears(range(now.getFullYear() - 10, now.getFullYear() + 10))
    setYears(range(now.getFullYear() - 10, now.getFullYear() + 1).reverse())
  }, [])

  useEffect(() => {
    if (currentDateRange.update) {
      setStartMonthDate(currentDateRange.from)
    }

    setHighlightDateRange(sortDateRange(currentDateRange))
  }, [currentDateRange])

  useEffect(() => {
    // when start date changes, change the end month on display
    setEndMonthDate(getNextMonthAsDate(startMonthDate))
  }, [startMonthDate])

  // useEffect(() => {
  //   setSortedHighlightDateRange(sortDateRange(highlightDateRange))
  // }, [highlightDateRange])

  useEffect(() => {
    if (yearMode) {
      yearMenuRef?.current?.scrollTo(0, (now.getFullYear() - years[0]) * 30)
    }
  }, [now, yearMode, years])

  function closeDatePicker() {
    onClose && onClose()
  }

  /**
   * Gets fired when a day gets clicked.
   */
  function onStartDayClick(date: Date) {
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
      : { from: date, to: date, update: false }
    //setHighlightDateRange(d)

    setRangeMode(!rangeMode)

    onDatesChange && onDatesChange(d)
  }

  function onDayHover(date: Date) {
    // update the state
    //setStartMonthDate(date)

    //onDateChange && onDateChange(date)

    //e.stopPropagation()

    let d = {
      ...sortDateRange({ from: currentDateRange.from, to: date }),
      update: false,
    }

    if (rangeMode) {
      setHighlightDateRange(d)
    }

    return d
  }

  /**
   * Display previous month by updating state
   */
  function displayPrevMonth(e: MouseEvent) {
    e.stopPropagation()
    setYearMode(false)
    setStartMonthDate(subMonths(startMonthDate, 1))
  }

  function displayNextMonth(e: MouseEvent) {
    e.stopPropagation()
    setYearMode(false)
    setStartMonthDate(addMonths(startMonthDate, 1))
  }

  /**
   * Display the selected month (gets fired when clicking on the date string)
   */
  function displaySelectedMonth(e: MouseEvent) {
    if (yearMode) {
      toggleYearSelector(e)
    }
  }

  function toggleYearSelector(e: MouseEvent) {
    e.stopPropagation()
    setYearMode(!yearMode)
  }

  function changeDisplayYear(e: MouseEvent, year: number) {
    toggleYearSelector(e)

    const date = new Date(year, 0, 1)

    onDateClick(date)
  }

  function onDateClick(date: Date) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    setStartMonthDate(date)

    onStartDayClick(date)
  }

  return (
    <div className="p-2">
      {/* <div>
          <h3
            style={{
              color: yearMode
                ? "rgba(255,255,255,.87)"
                : "rgba(255,255,255,.57)",
            }}
            onClick={toggleYearSelector}
          >
            {_currentDate.getFullYear()}
          </h3>
          <h2
            style={{
              color: !yearMode
                ? "rgba(255,255,255,.87)"
                : "rgba(255,255,255,.57)",
            }}
            //onClick={displaySelectedMonth}
          >
            {DAYS[_currentDate.getDay()]},{" "}
            {MONTHS_SHORT[_currentDate.getMonth()]} {_currentDate.getDate()}
          </h2>
        </div> */}

      <nav
        className="flex flex-row items-center justify-center gap-x-1 font-semibold"
        onClick={() => setYearMode(false)}
      >
        <ToolbarIconButton
          onClick={displayPrevMonth}
          aria-label="Previous month"
        >
          <ChevronRightIcon
            className={cn(CHEVRON_CLS, "rotate-180")}
            size="w-3"
          />
        </ToolbarIconButton>

        <ToolbarButton onClick={toggleYearSelector} aria-label="Change year">
          {startMonthDate.getFullYear()}
        </ToolbarButton>

        <ToolbarIconButton onClick={displayNextMonth} aria-label="Next month">
          <ChevronRightIcon className={CHEVRON_CLS} size="w-3" />
        </ToolbarIconButton>
      </nav>

      <div className="relative py-2">
        {/* <VCenterRow className="gap-x-1"> */}
        {/* <Button
            onClick={displayPrevMonth}
            aria-label="Previous month"
            className={cn(
              PILL_BUTTON_CLS,
              DROPDOWN_BG_CLS,
              PRIMARY_FOCUS_RING_CLS,
              INPUT_BORDER_CLS,
              INPUT_DARK_BORDER_CLS,
              "-ml-6 p-3 shadow-lg border",
            )}
          >
            <ChevronRightIcon
              className={cn(CHEVRON_CLS, "rotate-180")}
              size="w-3"
            />
          </Button> */}
        <BaseRow className="gap-x-8">
          <MonthView
            date={startMonthDate}
            dateRange={highlightDateRange}
            rangeMode={rangeMode}
            now={now}
            onDayClick={onStartDayClick}
            onDayHover={onDayHover}
          />
          <MonthView
            date={endMonthDate}
            dateRange={highlightDateRange}
            rangeMode={rangeMode}
            now={now}
            onDayClick={onStartDayClick}
            onDayHover={onDayHover}
          />
        </BaseRow>
        {/* <Button onClick={displayNextMonth} aria-label="Next month" className={cn(
              PILL_BUTTON_CLS,
              DROPDOWN_BG_CLS,
              PRIMARY_FOCUS_RING_CLS,
              INPUT_BORDER_CLS,
              INPUT_DARK_BORDER_CLS,
              "-mr-6 p-3 shadow-lg border",
            )}>
            <ChevronRightIcon className={CHEVRON_CLS} size="w-3" />
          </Button> */}
        {/* </VCenterRow> */}
        <div className="px-2 py-2">
          <BlueLinkButton
            onClick={e => onDateClick(new Date())}
            aria-label="Today"
            className="text-sm"
          >
            Today
          </BlueLinkButton>
        </div>

        {yearMode && (
          <ul
            ref={yearMenuRef}
            className="bg-popover absolute left-0 top-0 flex h-full w-full flex-col overflow-y-auto font-semibold"
          >
            {years.map(year => (
              <li key={year}>
                <BaseButton
                  id={`year-${year}`}
                  className={cn(MENU_BUTTON_CLS, "shrink-0", [
                    year === now.getFullYear(),
                    "text-theme-500",
                  ])}
                  onClick={e => changeDisplayYear(e, year)}
                  aria-label={`Select ${year}`}
                >
                  {year}
                </BaseButton>
              </li>
            ))}
          </ul>
        )}

        {/* {!yearMode && (
            <div className="datePicker--actions">
              <BaseButton onClick={closeDatePicker}>CANCEL</BaseButton>
              <BaseButton onClick={passDateToParent}>OK</BaseButton>
            </div>
          )} */}
      </div>
    </div>
  )
}
