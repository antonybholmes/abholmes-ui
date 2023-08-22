import { IDivProps } from "@interfaces/div-props"
import { clns } from "@lib/class-names"
import { ForwardedRef, forwardRef } from "react"

export const ROW_CLS = "flex flex-row"

export const BaseRow = forwardRef(function BaseRow(
  { className, children, ...props }: IDivProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={clns(ROW_CLS, className)} {...props}>
      {children}
    </div>
  )
})