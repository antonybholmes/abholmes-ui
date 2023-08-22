import IUnderlineLinkProps from "@interfaces/underline-link-props"
import cn from "@lib/class-names"
import BaseLink from "./base-link"

export default function ToBlackLink({
  className,
  children,
  ...props
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      className={cn(
        `trans-300 fill-theme-600 text-theme-600 transition-colors hover:fill-gray-900 hover:text-gray-900`,
        className,
      )}
      {...props}
    >
      {children}
    </BaseLink>
  )
}
