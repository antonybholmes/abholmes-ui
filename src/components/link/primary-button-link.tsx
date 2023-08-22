import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { DEFAULT_BUTTON_SIZE_CLS, PRIMARY_BUTTON_CLS } from "@theme"
import ButtonLink from "./button-link"

export default function PrimaryButtonLink({
  className,
  children,
  ...props
}: ILinkProps) {
  return (
    <ButtonLink
      className={cn(PRIMARY_BUTTON_CLS, DEFAULT_BUTTON_SIZE_CLS, className)}
      {...props}
    >
      {children}
    </ButtonLink>
  )
}

//font-bold bg-theme-600 hover:bg-theme-600 text-white shadow-md rounded px-5 py-3 trans"
