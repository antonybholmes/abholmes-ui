import IElementProps from "@interfaces/element-props"
import {
  TooltipContent,
  Tooltip as TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface IProps extends IElementProps {
  direction?: string
  delay?: number
}

// export const TOOLTIP_CLS = cn(
//   "absolute z-overlay whitespace-nowrap rounded-md pointer-events-none",
//   "bg-gray-600 px-3 py-2 text-white shadow-lg dark:bg-gray-600",
//   "duration-300 ease-in-out fill-mode-forwards",
// )

// export const clsMap: IStringMap = {
//   bottom: TOOLTIP_CLS + " left-1/2 mt-2 top-full",
//   left: TOOLTIP_CLS + " -ml-2 left-0 top-1/2",
//   bottom_right: TOOLTIP_CLS + " mt-2 right-0",
// }

// export const animationClsMap: IFieldMap = {
//   show: {
//     bottom: "animate-tooltip-show-bottom",
//     left: "animate-tooltip-show-left",
//   },
//   hide: {
//     bottom: "animate-tooltip-hide-bottom",
//     left: "animate-tooltip-hide-left",
//   },
// }

export function Tooltip({ content, children }: IProps) {
  // let timeout: NodeJS.Timeout | undefined = undefined
  // const [active, setActive] = useState(false)

  // const ref = useOutsideListener<HTMLDivElement>(active, () => hideTip())

  // const hide = useDelayHide(active)

  // function showTip() {
  //   timeout = setTimeout(() => {
  //     setActive(true)
  //   }, delay)
  // }

  // function hideTip() {
  //   clearInterval(timeout)
  //   setActive(false)
  // }

  // // const transitions = useTransition(active, {
  // //   from: { opacity: 0 },
  // //   enter: { opacity: 1 },
  // //   leave: { opacity: 0 },
  // // })

  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="bottom">
          <p>{content}</p>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  )
}
