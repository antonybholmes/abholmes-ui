import IDivProps from "@interfaces/div-props"
import cn from "../lib/class-names"
import BaseCol from "./base-col"

export default function HCenterCol({
  className = "",
  children,
  ...props
}: IDivProps) {
  return (
    <BaseCol className={cn("items-center", className)} {...props}>
      {children}
    </BaseCol>
  )
}
