import { BLUE_BUTTON_CLS } from "@components/link/blue-button-link"
import cn from "@lib/class-names"

import IButtonProps from "@interfaces/button-props"
import ColorButton from "./color-button"

export default function BlueButton({
  className,
  children,
  ...props
}: IButtonProps) {
  return (
    <ColorButton className={cn(BLUE_BUTTON_CLS, className)} {...props}>
      {children}
    </ColorButton>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
