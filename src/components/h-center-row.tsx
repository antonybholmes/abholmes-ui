
import { IDivProps } from "../interfaces/div-props"
import { clns } from "../lib/class-names"
import { BaseRow } from "./base-row"

export default function HCenterRow({
  className = "",
  children,
  ...props
}: IDivProps) {
  return (
    <BaseRow className={clns("justify-center", className)} {...props}>
      {children}
    </BaseRow>
  )
}
