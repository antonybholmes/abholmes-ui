import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import BaseLink from "./base-link"

export default function WhiteLink({
  className,
  children,
  ...props
}: ILinkProps) {
  return (
    <BaseLink className={cn("text-white", className)} {...props}>
      {children}
    </BaseLink>
  )
}
