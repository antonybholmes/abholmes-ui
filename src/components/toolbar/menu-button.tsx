import { Button } from "@components/ui/button"
import IButtonProps from "@interfaces/button-props"
import cn from "@lib/class-names"

import { Children } from "react"

export default function MenuButton({
  className,
  children,
  ...props
}: IButtonProps) {
  const c = Children.toArray(children)

  return (
    <Button variant="menu" className={cn("w-full grow", className)} {...props}>
      {c.length > 1 && <span className="w-5 shrink-0">{c[0]}</span>}

      {c[c.length - 1]}

      <span className="w-5 shrink-0"></span>
    </Button>
  )
}
