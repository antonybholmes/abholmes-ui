import { IDivProps } from "@interfaces/div-props"
import { BaseCol } from "./base-col"

export default function HCenterCol({
  className = "",
  children,
  ...props
}: IDivProps) {
  return (
    <BaseCol className={clns("items-center", className)} {...props}>
      {children}
    </BaseCol>
  )
}
