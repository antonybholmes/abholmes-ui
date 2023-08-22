import { STATUS_SUCCESS } from "@/consts"
import type IQueryStatus from "@/interfaces/query-status"
import HCenterRow from "@components/h-center-row"
import type IClassProps from "@interfaces/class-props"
import { cn } from "../../lib/class-names"

interface IProps extends IClassProps {
  alert: IQueryStatus | null | undefined
}

export const CLS_ALERT = "h-10 shrink-0 text-sm font-semibold items-center"

export const CLS_GREEN_ALERT =
  "bg-green-200 text-green-600 dark:bg-green-200/10"

export const CLS_RED_ALERT =
  "bg-red-100 text-red-500 dark:bg-red-500/10 dark:text-red-700"

export default function Alert({ alert, className }: IProps) {
  return (
    <HCenterRow
      className={cn(
        CLS_ALERT,
        [
          alert !== null && alert !== undefined,
          [alert?.status === STATUS_SUCCESS, CLS_GREEN_ALERT, CLS_RED_ALERT],
        ],
        className,
      )}
    >
      {alert && alert.message}
    </HCenterRow>
  )
}
