import { clns } from "@lib/class-names"
import { ForwardedRef, forwardRef } from "react"
import { Button } from "../../components/ui/button"
import IButtonProps from "../../interfaces/button-props"

const ToolbarButton = forwardRef(function ToolbarButton(
  { size = "default", className, children, ...props }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  //const [hover, setHover] = useState(false)
  //const [down, setDown] = useState(false)

  return (
    <Button
      ref={ref}
      variant="ghost"
      size={size}
      className={clns("gap-x-2", className)}
      {...props}
    >
      {children}
    </Button>
  )
})

export default ToolbarButton
