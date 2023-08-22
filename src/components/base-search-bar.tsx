import VCenterRow from "@components/v-center-row"
import { CloseIcon } from "@icons/close"
import { SearchIcon } from "@icons/search"

import { FocusEvent, MouseEvent, useRef } from "react"

import { IElementProps } from "@interfaces/element-props"
import { clns } from "@lib/class-names"
import { ICON_BUTTON_CLS } from "@theme"
import { BaseButton } from "./button/base-button"

export interface ISearchBarProps extends IElementProps {
  id: string
  search: string
  placeholder?: string
  showClearButton?: boolean
  onClearClick?: (e: MouseEvent) => void
}

export default function BaseSearchBar({
  id,
  search,
  placeholder,
  onChange,
  onClick,
  onClearClick,
  onKeyDown,
  showClearButton = false,
  onFocus,
  onBlur,
  className,
}: ISearchBarProps) {
  const ref = useRef<HTMLInputElement>(null)

  function _onFocus(e: FocusEvent<HTMLDivElement>) {
    //ref.current?.focus()
    onFocus && onFocus(e)
  }

  return (
    <VCenterRow
      className={clns("group shrink-0 gap-x-1", className)}
      onFocus={_onFocus}
      onBlur={onBlur}
    >
      <BaseButton
        onClick={onClick}
        aria-label="Search"
        className={clns("focus-visible:bg-accent", ICON_BUTTON_CLS)}
      >
        <SearchIcon className="trans-300 transition-color fill-gray-500 group-hover:fill-gray-800 dark:fill-gray-500 dark:group-hover:fill-gray-400" />
      </BaseButton>
      <input
        ref={ref}
        id={id}
        name={id}
        onChange={onChange}
        onKeyDown={onKeyDown}
        aria-label="Search"
        className="w-full grow bg-transparent outline-none"
        placeholder={placeholder}
        value={search}
        autoFocus
      />
      {showClearButton && search.length > 0 && (
        <BaseButton
          onClick={onClearClick}
          aria-label="Search"
          className={clns("focus-visible:bg-accent", ICON_BUTTON_CLS)}
        >
          <CloseIcon className="trans-300 transition-color stroke-gray-500 stroke-2 group-hover:stroke-gray-800 dark:stroke-gray-500 dark:group-hover:fill-gray-400" />
        </BaseButton>
      )}
    </VCenterRow>
  )
}
