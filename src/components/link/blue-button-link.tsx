import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import ColorButtonLink from "./color-button-link"

export const BLUE_BUTTON_CLS = "bg-theme-600 hover:bg-theme-700"

export default function BlueButtonLink({
  className,
  children,
  ...props
}: ILinkProps) {
  return (
    <ColorButtonLink className={cn(BLUE_BUTTON_CLS, className)} {...props}>
      {children}
    </ColorButtonLink>
  )
}
