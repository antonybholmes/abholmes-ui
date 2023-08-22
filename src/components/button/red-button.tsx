import { RED_BUTTON_CLS } from "@components/link/red-button-link"
import IButtonProps from "@interfaces/button-props"
import cn from "@lib/class-names"
import ColorButton from "./color-button"

export default function RedButton({
  className,
  children,
  ...props
}: IButtonProps) {
  return (
    <ColorButton className={cn(RED_BUTTON_CLS, className)} {...props}>
      {children}
    </ColorButton>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
