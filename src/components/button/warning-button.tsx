import { ForwardedRef, forwardRef } from "react"
import IButtonProps from "../../interfaces/button-props"
import { Button } from "../ui/button"

export const WarningButton = forwardRef(function PrimaryButton(
  { children, ...props }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button ref={ref} variant="destructive" {...props}>
      {children}
    </Button>
  )
})

