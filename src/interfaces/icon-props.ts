import type IClassProps from "./class-props"
import type IMouseProps from "./mouse-props"

export const ICON_CLS = "shrink-0"

export default interface IIconProps extends IClassProps, IMouseProps {
  size?: string
}
