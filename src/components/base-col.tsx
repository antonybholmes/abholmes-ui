import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react"
import { cn } from "../lib/class-names"

const BaseCol = forwardRef(function BaseCol(
  { className, children, ...props }: ComponentPropsWithoutRef<"div">,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  )
})

export default BaseCol
