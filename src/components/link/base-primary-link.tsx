import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { FOCUS_RING_CLS, PRIMARY_LINK_CLS } from "@theme"
import { ForwardedRef, forwardRef } from "react"
import BaseLink from "./base-link"

export const BASE_PRIMARY_LINK_CLS = cn(
  PRIMARY_LINK_CLS,
  FOCUS_RING_CLS,
  "inline-block",
)

const BasePrimaryLink = forwardRef(function BasePrimaryLink(
  { className, children, ...props }: ILinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <BaseLink
      ref={ref}
      className={cn(BASE_PRIMARY_LINK_CLS, className)}
      {...props}
    >
      {children}
    </BaseLink>
  )
})

export default BasePrimaryLink
