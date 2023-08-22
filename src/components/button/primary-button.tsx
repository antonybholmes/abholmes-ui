import { ForwardedRef, forwardRef } from "react"
import IButtonProps from "../../interfaces/button-props"
import { Button } from "../ui/button"

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
