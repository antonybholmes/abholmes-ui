import * as Switch from "@radix-ui/react-switch"

import { ForwardedRef, forwardRef } from "react"
import { clns } from "../../lib/class-names"
import { BUTTON_W_CLS, FOCUS_RING_CLS } from "../../theme"
import VCenterRow from "../v-center-row"
import { type ICheckBoxProps } from "./check-box"

const TOGGLE_CLS = clns(
  FOCUS_RING_CLS,
  BUTTON_W_CLS,
  "overflow-hidden rounded-full outline-none",
  "data-[state=checked]:bg-primary data-[state=checked]:hover:bg-primary/80",
  "data-[state=unchecked]:bg-input data-[state=unchecked]:hover:bg-secondary/80",
)

const THUMB_CLS = clns(
  "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0",
  "trans-300 ease-in-out transition-transform",
  "data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
)

export const ToggleSwitch = forwardRef(function ToggleSwitch(
  { index = -1, onCheckClick, isSelected, className, children }: ICheckBoxProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  function _onClick(state: boolean) {
    onCheckClick && onCheckClick(index, state)
  }

  return (
    <VCenterRow className="gap-x-2">
      <Switch.Root
        ref={ref}
        checked={isSelected}
        onCheckedChange={_onClick}
        className={clns(TOGGLE_CLS, className)}
        style={{ padding: 2 }}
      >
        <Switch.Thumb className={THUMB_CLS} />
      </Switch.Root>
      <span>{children}</span>
    </VCenterRow>
  )
})