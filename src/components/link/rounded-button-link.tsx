import ButtonLink from "@components/link/button-link"
import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { ROUNDED_BUTTON_CLS } from "@theme"

export default function RoundedButtonLink({
  className,
  children,
  ...props
}: ILinkProps) {
  return (
    <ButtonLink className={cn(ROUNDED_BUTTON_CLS, className)} {...props}>
      {children}
    </ButtonLink>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
