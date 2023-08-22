import IndexArrow from "@icons/index-arrow"

import ILinkProps from "@interfaces/link-props"
import BaseLink from "./base-link"

export default function ArrowLink({
  className,
  children,
  ...props
}: ILinkProps) {
  return (
    <BaseLink className={className} {...props}>
      {children}

      <IndexArrow className="w-4 stroke-2" />
    </BaseLink>
  )
}
