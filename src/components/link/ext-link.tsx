import type ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { ForwardedRef, forwardRef } from "react"

export const UNDERLINE_CLS =
  "underline trans-300 transition-colors decoration-transparent hover:decoration-current"

const ExtLink = forwardRef(function ExtLink(
  {
    href,
    target = "_blank",
    underline = false,
    className,
    children,
    ...props
  }: ILinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <a
      ref={ref}
      href={href}
      target={target}
      className={cn([underline, UNDERLINE_CLS], className)}
      {...props}
    >
      {children}
    </a>
  )
})

export default ExtLink
