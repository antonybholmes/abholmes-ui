import ButtonLink from "@components/link/button-link"
import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { DEFAULT_BUTTON_SIZE_CLS, SECONDARY_BUTTON_CLS } from "@theme"

export default function SecondaryButtonLink({
  className,
  children,
  ...props
}: ILinkProps) {
  return (
    <ButtonLink
      className={cn(SECONDARY_BUTTON_CLS, DEFAULT_BUTTON_SIZE_CLS, className)}
      {...props}
    >
      {children}
    </ButtonLink>
  )
}
