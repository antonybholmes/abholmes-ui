import { Button } from "@components/ui/button"
import IButtonProps from "@interfaces/button-props"
import { ForwardedRef, forwardRef } from "react"

const PrimaryButton = forwardRef(function PrimaryButton(
  { children, ...props }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button ref={ref} {...props}>
      {children}
    </Button>
  )
})

export default PrimaryButton

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
