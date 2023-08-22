
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react"
import { clns } from "../lib/class-names"

export const BaseCol = forwardRef(function BaseCol(
  { className, children, ...props }: ComponentPropsWithoutRef<"div">,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={clns("flex flex-col", className)} {...props}>
      {children}
    </div>
  )
})

