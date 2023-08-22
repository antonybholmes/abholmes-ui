import { OUTLINE_BUTTON_LINK_CLS } from "@components/link/outline-button-link"
import IButtonProps from "@interfaces/button-props"
import cn from "@lib/class-names"
import BaseButton from "./base-button"

export default function OutlineButton({
  className,
  children,
  ...props
}: IButtonProps) {
  return (
    <BaseButton className={cn(OUTLINE_BUTTON_LINK_CLS, className)} {...props}>
      {children}
    </BaseButton>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
