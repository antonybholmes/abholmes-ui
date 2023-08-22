import { clns } from "@lib/class-names"
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react"

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

