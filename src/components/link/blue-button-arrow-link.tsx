import cn from "@lib/class-names"
import ArrowButtonLink from "./arrow-button-link"
import { BLUE_BUTTON_CLS } from "./blue-button-link"
import { IIndexLinkProps } from "./blue-index-link"

export default function BlueButtonArrowLink({
  className,
  children,
  ...props
}: IIndexLinkProps) {
  return (
    <ArrowButtonLink className={cn(BLUE_BUTTON_CLS, className)} {...props}>
      {children}
    </ArrowButtonLink>
  )
}
