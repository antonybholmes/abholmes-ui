import cn from "@lib/class-names"

export const ROUNDED_CLS = `rounded-md`

export const INPUT_BORDER_CLS = "border-gray-200/90"
export const INPUT_DARK_BORDER_CLS = "dark:border-gray-700/80"

export const INPUT_BG_CLS = "bg-gray-100"
export const INPUT_DARK_BG_CLS = "dark:bg-gray-800"

export const BASE_INPUT_DARK_CLS = cn(
  "trans-300 transition-colors",
  INPUT_BG_CLS,
  INPUT_DARK_BG_CLS,
  "dark:hover:border-gray-500",
)

export const INPUT_DARK_CLS = cn(
  INPUT_BORDER_CLS,
  BASE_INPUT_DARK_CLS,
  INPUT_DARK_BORDER_CLS,
)

export const PRIMARY_BUTTON_BG_CLS = "bg-theme-500 hover:bg-theme-600"

export const PRIMARY_FOCUS_BORDER_CLS =
  "focus-visible:border-theme-300/80 dark:focus-visible:border-gray-200"

export const BUTTON_H_CLS = "min-h-9"
export const BUTTON_W_CLS = "min-w-9"
export const ICON_BUTTON_SIZE_CLS = cn("shrink-0", BUTTON_W_CLS, BUTTON_H_CLS)
export const PRIMARY_BUTTON_W_CLS = "min-w-24"
export const DEFAULT_BUTTON_SIZE_CLS = cn(BUTTON_H_CLS, "px-4 py-2")

export const PRIMARY_TEXT_CLS = "text-primary"
export const PRIMARY_LINK_CLS = cn(PRIMARY_TEXT_CLS, "hover:text-primary")

export const ROW_BUTTON_CLS = "inline-flex flex-row items-center"

export const COL_BUTTON_CLS = "flex flex-col"
export const FOCUS_RING_CLS = "focus-visible:ring-2 focus-visible:ring-ring"
export const GROUP_FOCUS_RING_CLS =
  "group-focus-visible:ring-2 group-focus-visible:ring-ring"
export const FOCUS_BORDER_CLS = "outline-none border-2 border-transparent"
export const CENTERED_BUTTON_CLS = "flex flex-row items-center justify-center"
export const ROUNDED_BUTTON_CLS = ROUNDED_CLS
export const BUTTON_PADDING = "gap-x-2 px-3"
export const PILL_BUTTON_CLS = `rounded-full overflow-hidden`

export const BASE_BUTTON_CLS = cn(
  ROW_BUTTON_CLS,
  "trans-300 transition-all group outline-none",
  "text-sm gap-x-2",
  "disabled:pointer-events-none disabled:opacity-50",
)

export const ICON_BUTTON_CLS = cn("justify-center", ICON_BUTTON_SIZE_CLS)

//export const FOCUS_BUTTON_CLS = cn(BASE_BUTTON_CLS, FOCUS_RING_CLS)

export const BASE_PRIMARY_BUTTON_CLS = cn(
  FOCUS_RING_CLS,
  ROUNDED_BUTTON_CLS,
  "font-medium",
)

export const PRIMARY_BUTTON_CLS = cn(
  ROUNDED_BUTTON_CLS,
  "bg-primary text-primary-foreground/95 shadow hover:bg-primary/90 justify-center",
)

export const SECONDARY_BUTTON_CLS = cn(
  ROUNDED_BUTTON_CLS,
  "bg-accent text-secondary-foreground shadow-sm hover:bg-accent/80 justify-center",
)

export const BASE_TOOLBAR_BUTTON_CLS = cn(
  BUTTON_H_CLS,
  ROW_BUTTON_CLS,
  FOCUS_RING_CLS,
  "hover:bg-accent",
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
