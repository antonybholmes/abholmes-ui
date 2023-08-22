import type IUnderlineLinkProps from "@interfaces/underline-link-props"
import cn from "@lib/class-names"
import ArrowLink from "./arrow-link"

export interface IIndexLinkProps extends IUnderlineLinkProps {}

export default function BlueArrowLink({
  underline = false,
  className,
  children,
  ...props
}: IIndexLinkProps) {
  return (
    <ArrowLink
      underline={underline}
      className={cn("stroke-theme-500 text-theme-500", className)}
      {...props}
    >
      {children}
    </ArrowLink>
  )
}
