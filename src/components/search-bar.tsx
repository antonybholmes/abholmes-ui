import cn from "@lib/class-names"

import {
  BASE_BUTTON_CLS,
  INPUT_BORDER_CLS,
  INPUT_DARK_BG_CLS,
  INPUT_DARK_BORDER_CLS,
  ROUNDED_BUTTON_CLS,
} from "@theme"
import { useState } from "react"
import BaseSearchBar, { ISearchBarProps } from "./base-search-bar"

const SEARCH_CLS = cn(
  BASE_BUTTON_CLS,
  ROUNDED_BUTTON_CLS,
  INPUT_BORDER_CLS,
  INPUT_DARK_BORDER_CLS,
  INPUT_DARK_BG_CLS,
  "border hover:border-gray-300 dark:border-transparent w-full",
)

export default function SearchBar({
  className,
  showClearButton = true,
  ...props
}: ISearchBarProps) {
  const [focus, setFocus] = useState(false)

  return (
    <BaseSearchBar
      showClearButton={showClearButton}
      className={cn(SEARCH_CLS, [focus, "ring-ring ring-2"], className)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    />
  )
}
