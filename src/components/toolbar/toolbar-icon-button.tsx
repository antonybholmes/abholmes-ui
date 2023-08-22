import { ForwardedRef, forwardRef } from "react"
import IButtonProps from "../../interfaces/button-props"
import cn from "../../lib/class-names"
import { TOOLBAR_ICON_BUTTON_CLS } from "../../theme"
import ToolbarButton from "./toolbar-button"

const ToolbarIconButton = forwardRef(function ToolbarIconButton(
  { className, children, ...props }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <ToolbarButton
      ref={ref}
      size="icon"
      className={cn(TOOLBAR_ICON_BUTTON_CLS, className)}
      {...props}
    >
      {children}
    </ToolbarButton>
  )
})

export default ToolbarIconButton
