import { ICON_CLS, IIconProps } from "../interfaces/icon-props"
import { clns } from "../lib/class-names"

export function ChevronRightIcon({
  size = "w-4",
  className,
}: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={clns(ICON_CLS, "stroke-2", size, className)}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <path d="M 5,1 L 12,8 L 5,15" />
    </svg>
  )
}
