import cn from "@lib/class-names"

export const ROUNDED_CLS = `rounded-md`

export const INPUT_BORDER_CLS = "border-gray-200/90"
export const INPUT_DARK_BORDER_CLS = "dark:border-gray-700/80"

export const INPUT_BG_CLS = "bg-gray-100"
export const INPUT_DARK_BG_CLS = "dark:bg-gray-700"

export const BASE_INPUT_DARK_CLS = cn(
  "trans-300 transition-colors",
  INPUT_BG_CLS,
  INPUT_DARK_BG_CLS,
  "dark:hover:bg-gray-600",
)

export const INPUT_DARK_CLS = cn(
  INPUT_BORDER_CLS,
  BASE_INPUT_DARK_CLS,
  INPUT_DARK_BORDER_CLS,
)

export const DROPDOWN_BG_CLS = "bg-white dark:bg-gray-700"

export const PRIMARY_BUTTON_BG_CLS = "bg-primary-500 hover:bg-primary-600"
export const PRIMARY_FOCUS_RING_CLS =
  "focus-visible:ring-primary-300/80 dark:focus-visible:ring-gray-200"
export const PRIMARY_FOCUS_BORDER_CLS =
  "focus-visible:border-primary-300/80 dark:focus-visible:border-gray-200"

export const BUTTON_H_CLS = "min-h-9"
export const BUTTON_W_CLS = "min-w-9"
export const PRIMARY_BUTTON_W_CLS = "min-w-24"

export const PRIMARY_TEXT_CLS = "text-primary-500 dark:text-gray-100"
export const PRIMARY_LINK_CLS = cn(PRIMARY_TEXT_CLS, "hover:text-primary-600")

export const BASE_BUTTON_CLS = `trans-300 transition-all group`
export const ROW_BUTTON_CLS = "flex flex-row items-center"
export const COL_BUTTON_CLS = "flex flex-col"
export const FOCUS_RING_CLS = "outline-none focus-visible:ring-2"
export const FOCUS_BORDER_CLS = "outline-none border-2 border-transparent"
export const CENTERED_BUTTON_CLS = "flex flex-row items-center justify-center"
export const ROUNDED_BUTTON_CLS = ROUNDED_CLS
export const BUTTON_PADDING = "gap-x-2 px-3"
export const PILL_BUTTON_CLS = `rounded-full overflow-hidden`

export const BASE_PRIMARY_BUTTON_CLS = cn(
  BUTTON_H_CLS,
  ROW_BUTTON_CLS,
  ROUNDED_BUTTON_CLS,
  PRIMARY_BUTTON_W_CLS,
  CENTERED_BUTTON_CLS,
)

export const PRIMARY_BUTTON_CLS = cn(
  BUTTON_PADDING,
  BASE_PRIMARY_BUTTON_CLS,
  PRIMARY_BUTTON_BG_CLS,
  "font-semibold text-white",
)

export const SECONDARY_BUTTON_CLS = cn(
  BASE_PRIMARY_BUTTON_CLS,
  PRIMARY_FOCUS_RING_CLS,
  "font-semibold",
  "bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500",
)

export const BASE_TOOLBAR_BUTTON_CLS = cn(
  BASE_BUTTON_CLS,
  BUTTON_H_CLS,
  ROW_BUTTON_CLS,
  PRIMARY_FOCUS_RING_CLS,
  "hover:bg-gray-200/70 dark:hover:bg-gray-600",
)

export const TOOLBAR_ICON_BUTTON_CLS = cn(
  BASE_TOOLBAR_BUTTON_CLS,
  BUTTON_W_CLS,
  ROUNDED_BUTTON_CLS,
  "justify-center",
)

export const TOOLBAR_BUTTON_CLS = cn(
  BASE_TOOLBAR_BUTTON_CLS,
  BUTTON_PADDING,
  ROUNDED_BUTTON_CLS,
  "justify-center",
)

export const MENU_BUTTON_CLS = cn(
  BASE_TOOLBAR_BUTTON_CLS,
  ROUNDED_BUTTON_CLS,
  BUTTON_PADDING,
  "w-full text-left whitespace-nowrap",
)
