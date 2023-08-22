import IUnderlineLinkProps from "@interfaces/underline-link-props"
import cn from "@lib/class-names"
import BaseLink from "./base-link"

export default function ToBlueLink({
  className,
  children,
  ...props
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      className={cn(
        `trans-300 hover:text-theme-600 transition-colors`,
        className,
      )}
      {...props}
    >
      {children}
    </BaseLink>
  )
}
