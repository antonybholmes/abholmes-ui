import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { ForwardedRef, forwardRef } from "react"
import { BASE_PRIMARY_LINK_CLS } from "./base-primary-link"
import ButtonLink from "./button-link"

export const PRIMARY_LINK_CLS = BASE_PRIMARY_LINK_CLS

const PrimaryLink = forwardRef(function PrimaryLink(
  { className, children, ...props }: ILinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <ButtonLink
      ref={ref}
      className={cn(PRIMARY_LINK_CLS, className)}
      {...props}
    >
      {children}
    </ButtonLink>
  )
})

export default PrimaryLink
