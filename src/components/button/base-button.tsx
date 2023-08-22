import useMouseUpListener from "../../hooks/use-mouseup-listener"
import IButtonProps from "../../interfaces/button-props"

import { ForwardedRef, forwardRef } from "react"
import { cn } from "../../lib/class-names"
import { BASE_BUTTON_CLS } from "../../theme"

export type ButtonType = "button" | "submit" | "reset" | undefined

export const BaseButton = forwardRef(function BaseButton(
  {
    onMouseUp,
    isSelected = false,
    selectedClassName,
    unSelectedClassName,
    className,
    children,
    ...props
  }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  useMouseUpListener(onMouseUp)

  return (
    <button
      ref={ref}
      className={cn(BASE_BUTTON_CLS, className, [
        isSelected,
        selectedClassName,
        unSelectedClassName,
      ])}
      {...props}
    >
      {children}
    </button>
  )
})