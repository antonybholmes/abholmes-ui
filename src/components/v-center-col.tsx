
import { IDivProps } from "../interfaces/div-props"
import { clns } from "../lib/class-names"
import { BaseCol } from "./base-col"

const VCenterCol = ({ className = "", children, ...props }: IDivProps) => {
  return (
    <BaseCol className={clns("justify-center", className)} {...props}>
      {children}
    </BaseCol>
  )
}

export default VCenterCol
