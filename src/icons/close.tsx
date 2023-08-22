import type IIconProps from "../interfaces/icon-props"
import { ICON_CLS } from "../interfaces/icon-props"
import cn from "../lib/class-names"

export function CloseIcon({ size = "w-4", className }: IIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(ICON_CLS, size, className)}
      style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      <path d="M 8,8 L 24,24" />
      <path d="M 8,24 L 24,8" />
    </svg>
  )
}
