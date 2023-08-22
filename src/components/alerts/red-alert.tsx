import type IChildrenProps from "../../interfaces/children-props"
import { clns } from "../../lib/class-names"

export const CLS_ALERT =
  "bg-red-100 text-red-500 p-3 rounded text-sm font-semibold text-center"

export default function RedAlert({ className, children }: IChildrenProps) {
  return <div className={clns(CLS_ALERT, className)}>{children}</div>
}
