import { Button } from "@components/ui/button"
import IButtonProps from "@interfaces/button-props"
import { ForwardedRef, forwardRef } from "react"

const SecondaryButton = forwardRef(function SecondaryButton(
  { children, ...props }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  //const [hover, setHover] = useState(false)
  //const [down, setDown] = useState(false)

  return (
    <Button ref={ref} variant="secondary" {...props}>
      {children}
    </Button>
  )
})

export default SecondaryButton
