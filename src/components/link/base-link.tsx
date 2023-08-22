import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { BASE_BUTTON_CLS } from "@theme"
import Link from "next/link"
import { ForwardedRef, forwardRef } from "react"
import ExtLink, { UNDERLINE_CLS } from "./ext-link"

const BaseLink = forwardRef(function BaseLink(
  {
    href,
    underline = false,
    target = "_blank",
    className,
    children,
    ...props
  }: ILinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  if (!props["aria-label"]) {
    props["aria-label"] = `Click to visit ${href}`
  }

  // Test if we use the NextJS router link or a regular a for external urls
  const isExt = href.startsWith("http") || href.startsWith("www")

  if (isExt) {
    return (
      <ExtLink
        ref={ref}
        href={href}
        className={cn(BASE_BUTTON_CLS, className)}
        target={target}
        underline={underline}
        {...props}
      >
        {children}
      </ExtLink>
    )
  } else {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(BASE_BUTTON_CLS, [underline, UNDERLINE_CLS], className)}
        {...props}
      >
        {children}
      </Link>
    )
  }
})

export default BaseLink
