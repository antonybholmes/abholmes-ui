import { IDivProps } from "@interfaces/div-props"
import { ForwardedRef, forwardRef } from "react"
import { cn } from "../lib/class-names"

export const ROW_CLS = "flex flex-row"

export const BaseRow = forwardRef(function BaseRow(
  { className, children, ...props }: IDivProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn(ROW_CLS, className)} {...props}>
      {children}
    </div>
  )
})