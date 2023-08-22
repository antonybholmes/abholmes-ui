import IndexArrow from "@icons/index-arrow"
import IUnderlineLinkProps from "@interfaces/underline-link-props"
import cn from "@lib/class-names"

import { COLOR_BUTTON_CLS } from "./color-button-link"
import PillButtonLink from "./pill-button-link"

const ARROW_BUTTON_CLS = "justify-between px-4 py-2"

export default function ArrowButtonLink({
  underline = false,
  className,
  children,
  ...props
}: IUnderlineLinkProps) {
  // const iconEl

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       iconEl.current,
  //       { x: hover ? "0.15rem" : 0, ease: "power3.out", duration: 0.2 },
  //       0
  //     )
  // }, [hover])

  return (
    <PillButtonLink
      className={cn(ARROW_BUTTON_CLS, COLOR_BUTTON_CLS, className)}
      {...props}
    >
      <span>{children}</span>

      <IndexArrow className="w-4 stroke-2" />
    </PillButtonLink>
  )
}
