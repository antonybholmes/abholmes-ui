import { ICON_CLS, IIconProps } from "../interfaces/icon-props"
import { clns } from "../lib/class-names"

export function CloseIcon({ size = "w-4", className }: IIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={clns(ICON_CLS, size, className)}
      style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      <path d="M 8,8 L 24,24" />
      <path d="M 8,24 L 24,8" />
    </svg>
  )
}
