import ILinkProps from "@interfaces/link-props"
import cn from "@lib/class-names"
import { MENU_BUTTON_CLS } from "@theme"
import { Children } from "react"
import BaseLink from "../link/base-link"

export default function MenuButtonLink({
  className,
  children,
  ...props
}: ILinkProps) {
  const c = Children.toArray(children)

  return (
    <BaseLink className={cn(MENU_BUTTON_CLS, className)} {...props}>
      {c.length > 1 && (
        <span className="flex w-5 shrink-0 flex-row justify-center">
          {c[0]}
        </span>
      )}

      <span className="grow">{c[c.length - 1]}</span>

      <span className="w-5 shrink-0"></span>
    </BaseLink>
  )
}
