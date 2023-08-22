import { CHEVRON_CLS } from "@/consts"
import * as Checkbox from "@radix-ui/react-checkbox"
import { ForwardedRef, forwardRef } from "react"

import IButtonProps from "@interfaces/button-props"
import { clns } from "@lib/class-names"
import {
  BASE_BUTTON_CLS,
  GROUP_FOCUS_RING_CLS,
  INPUT_BORDER_CLS,
  INPUT_DARK_BORDER_CLS,
  ROUNDED_BUTTON_CLS,
} from "@theme"

export type ICheckClick = (index: number, selected: boolean) => void

export interface ICheckBoxProps extends IButtonProps {
  index?: number
  isSelected?: boolean
  onCheckClick?: ICheckClick
}

export const CHECK_CLS = clns(
  BASE_BUTTON_CLS,
  ROUNDED_BUTTON_CLS,

  "shrink-0 cursor-pointer gap-x-2 whitespace-nowrap text-left",
)

export const TICK_CLS = clns(
  INPUT_BORDER_CLS,
  INPUT_DARK_BORDER_CLS,
  GROUP_FOCUS_RING_CLS,
  "bg-white dark:bg-transparent border border-input rounded",
  "h-4.5 w-4.5",
)

const CheckBox = forwardRef(function CheckBox(
  {
    index = -1,
    isSelected = false,
    onCheckClick,
    className,
    children,
  }: ICheckBoxProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  function _onClick(state: Checkbox.CheckedState) {
    const v = state === true || state !== "indeterminate"
    onCheckClick && onCheckClick(index, v)
  }

  return (
    <Checkbox.Root
      ref={ref}
      checked={isSelected}
      onCheckedChange={_onClick}
      className={clns(CHECK_CLS, className)}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={TICK_CLS}
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
        }}
      >
        {isSelected && (
          <path
            d="M 5,12.5 L 10,18 L 19,6"
            className={clns(CHEVRON_CLS, "stroke-3")}
          />
        )}
      </svg>

      <span>{children}</span>
    </Checkbox.Root>
  )
})

export default CheckBox
