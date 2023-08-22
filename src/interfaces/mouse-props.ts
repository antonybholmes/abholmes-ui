import type { MouseEvent } from "react"

export default interface IMouseProps {
  onPress?: (e: MouseEvent) => void
  onClick?: (e: MouseEvent) => void
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  onMouseUp?: (e: MouseEvent) => void
}
