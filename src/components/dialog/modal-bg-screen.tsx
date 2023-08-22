import IDivProps from "../../interfaces/div-props"
import cn from "../../lib/class-names"

interface IProps extends IDivProps {
  visible: boolean
}

export const SCREEN_CLS = cn(
  "fixed left-0 top-0 z-100 h-screen w-screen",
  "bg-gray-500/50 duration-300 ease-in-out",
  "fill-mode-forwards dark:bg-gray-900/50",
  "backdrop-blur-sm",
)

export default function ModalBgScreen({
  visible,
  className,
  children,
  ...props
}: IProps) {
  console.log(visible)
  return (
    <div
      className={cn(
        SCREEN_CLS,
        [visible, "animate-in fade-in", "animate-out fade-out"],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
