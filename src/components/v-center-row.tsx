import { ForwardedRef, forwardRef } from "react"
import { IDivProps } from "../interfaces/div-props"
import { clns } from "../lib/class-names"
import { BaseRow } from "./base-row"

export const V_CENTER_ROW_CLS = "flex flex-row items-center"

const VCenterRow = forwardRef(function VCenterRow(
  { className, children, ...props }: IDivProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseRow ref={ref} className={clns(V_CENTER_ROW_CLS, className)} {...props}>
      {children}
    </BaseRow>
  )
})

export default VCenterRow
