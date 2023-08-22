import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import ButtonLink from "./button-link"

export const BLUE_TEXT_CLS = "text-theme-500 dark:text-gray-100"
export const BLUE_FOCUS_RING_CLS = "focus:ring-theme-200"
export const BLUE_FOCUS_VISIBLE_BUTTON_CLS = "focus-visible:ring-theme-200"

export default function BlueLink({
  underline = true,
  className,
  children,
  ...props
}: ILinkProps) {
  return (
    <ButtonLink
      className={cn(BLUE_TEXT_CLS, className)}
      underline={underline}
      {...props}
    >
      {children}
    </ButtonLink>
  )
}
