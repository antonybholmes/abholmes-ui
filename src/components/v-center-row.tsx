import IDivProps from "@interfaces/div-props"
import { ForwardedRef, forwardRef } from "react"
import cn from "../lib/class-names"
import { BaseRow } from "./base-row"

export const V_CENTER_ROW_CLS = "flex flex-row items-center"

const VCenterRow = forwardRef(function VCenterRow(
  { className, children, ...props }: IDivProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseRow ref={ref} className={cn(V_CENTER_ROW_CLS, className)} {...props}>
      {children}
    </BaseRow>
  )
})

export default VCenterRow
