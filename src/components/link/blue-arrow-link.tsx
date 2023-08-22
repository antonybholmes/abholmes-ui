import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import ArrowLink from "./arrow-link"
import { BLUE_TEXT_CLS } from "./blue-link"

const BlueArrowLink = ({ className, children, ...props }: ILinkProps) => (
  <ArrowLink className={cn(BLUE_TEXT_CLS, className)} {...props}>
    {children}
  </ArrowLink>
)

export default BlueArrowLink
