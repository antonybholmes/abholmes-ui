import IDivProps from "@interfaces/div-props"
import cn from "@lib/class-names"
import BaseRow from "./base-row"

export default function HCenterRow({
  className = "",
  children,
  ...props
}: IDivProps) {
  return (
    <BaseRow className={cn("justify-center", className)} {...props}>
      {children}
    </BaseRow>
  )
}
