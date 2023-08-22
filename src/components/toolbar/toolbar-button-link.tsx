import BaseLink from "@components/link/base-link"

import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { TOOLBAR_BUTTON_CLS } from "@theme"

export default function ToolbarButtonLink({
  className,
  children,
  ...props
}: ILinkProps) {
  //const [hover, setHover] = useState(false)
  //const [down, setDown] = useState(false)

  return (
    <BaseLink className={cn(TOOLBAR_BUTTON_CLS, className)} {...props}>
      {children}
    </BaseLink>
  )
}
