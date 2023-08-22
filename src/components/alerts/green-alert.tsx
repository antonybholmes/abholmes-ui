import type IChildrenProps from "@interfaces/children-props"

export const CLS_ALERT =
  "bg-green-200 text-green-600 p-3 rounded text-sm font-semibold text-center"

export default function GreenAlert({ className, children }: IChildrenProps) {
  return <div className={clns(CLS_ALERT, className)}>{children}</div>
}
