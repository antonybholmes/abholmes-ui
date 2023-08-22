import IButtonProps from "@interfaces/button-props"
import cn from "@lib/class-names"
import { PRIMARY_BUTTON_CLS } from "@theme"
import RedButton from "./red-button"

export default function PrimaryRedButton({
  className,
  children,
  ...props
}: IButtonProps) {
  return (
    <RedButton className={cn(PRIMARY_BUTTON_CLS, className)} {...props}>
      {children}
    </RedButton>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
