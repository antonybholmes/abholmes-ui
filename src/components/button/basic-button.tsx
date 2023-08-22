import IButtonProps from "@interfaces/button-props"

import cn from "@lib/class-names"
import { FOCUS_RING_CLS } from "@theme"
import { ForwardedRef, forwardRef } from "react"
import { BaseButton } from "./base-button"

export const BasicButton = forwardRef(function BasicButton(
  { className, children, ...props }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <BaseButton ref={ref} className={cn(FOCUS_RING_CLS, className)} {...props}>
      {children}
    </BaseButton>
  )
})

