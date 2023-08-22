import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { BASE_PRIMARY_BUTTON_CLS } from "@theme"
import { ForwardedRef, forwardRef } from "react"
import BaseLink from "./base-link"

const ButtonLink = forwardRef(function ButtonLink(
  { className, children, ...props }: ILinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <BaseLink
      ref={ref}
      className={cn(BASE_PRIMARY_BUTTON_CLS, className)}
      {...props}
    >
      {children}
    </BaseLink>
  )
})

export default ButtonLink
//font-bold bg-theme-600 hover:bg-theme-500 text-white shadow-md rounded px-5 py-3 trans"
