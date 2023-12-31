import IButtonProps from "@interfaces/button-props"

import cn from "@lib/class-names"
import { ForwardedRef, forwardRef, useRef } from "react"
import ToolbarIconButton from "./toolbar-icon-button"

const X1 = 2
const X2 = 14
const Y1 = 4
const Y2 = 8
const Y3 = 12

export interface IMenuButtonProps extends IButtonProps {
  showMenu: boolean
}

const SideMenuButton = forwardRef(function SideMenuButton(
  { showMenu, className, children, ...props }: IMenuButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const ref1 = useRef<SVGLineElement>(null)
  //const ref2 = useRef<SVGLineElement>(null)
  const ref3 = useRef<SVGLineElement>(null)

  //const [hover, setHover] = useState(false)

  // useEffect(() => {
  //   if (showMenu) {

  //     gsap
  //       .timeline()
  //       .to(
  //         ref1.current,
  //         {
  //           duration: DURATION,
  //           attr: { y1: Y2, y2: Y2 },
  //         },
  //         0
  //       )
  //       .to(
  //         ref3.current,
  //         {
  //           duration: DURATION,
  //           attr: { y1: Y2, y2: Y2 },
  //         },
  //         0
  //       )

  //       .to(
  //         ref1.current,
  //         {
  //           duration: DURATION,
  //           rotate: 45,
  //           transformOrigin: "50% 50%",
  //         },
  //         DURATION
  //       )
  //       .to(
  //         ref3.current,
  //         {
  //           duration: DURATION,
  //           rotate: -45,
  //           transformOrigin: "50% 50%",
  //         },
  //         DURATION
  //       )
  //   } else {

  //     gsap
  //       .timeline()
  //       .to(
  //         ref1.current,
  //         {
  //           duration: DURATION,
  //           rotate: 0,
  //           transformOrigin: "50% 50%",
  //         },
  //         0
  //       )
  //       .to(
  //         ref3.current,
  //         {
  //           duration: DURATION,
  //           rotate: 0,
  //           transformOrigin: "50% 50%",
  //         },
  //         0
  //       )
  //       // .to(
  //       //   ref2.current,
  //       //   {
  //       //     duration: DURATION,
  //       //     opacity: 1,
  //       //   },
  //       //   0
  //       // )
  //       .to(
  //         ref1.current,
  //         {
  //           duration: DURATION,
  //           attr: { y1: Y1, y2: Y1 },
  //         },
  //         DURATION
  //       )
  //       .to(
  //         ref3.current,
  //         {
  //           duration: DURATION,
  //           attr: { y1: Y3, y2: Y3 },
  //         },
  //         DURATION
  //       )

  //   }
  // }, [ref1, ref3, showMenu])

  // function onMouseEnter() {
  //   setHover(true)
  // }

  // function onMouseLeave() {
  //   setHover(false)
  // }

  // function onFocus() {
  //   setFocus(true)
  // }

  // function onBlur() {
  //   setFocus(false)
  // }

  props["aria-label"] = showMenu ? "Close Menu" : "Open Menu"

  return (
    <ToolbarIconButton
      ref={ref}
      className={cn("relative shrink-0 grow-0", className)}
      {...props}
    >
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-foreground h-4 w-4"
      >
        <line
          ref={ref1}
          x1={X1}
          y1={Y2}
          x2={X2}
          y2={Y2}
          rotate={45}
          shapeRendering="crispEdges"
          strokeLinecap="round"
          strokeWidth={2}
          className={cn("origin-center rotate-45 fill-mode-forwards", [
            showMenu,
            "animate-menu-button-line1-hide",
            "animate-menu-button-line1-show",
          ])}
        />
        {/* <line ref={ref2} x1={X1} y1={Y2} x2={X2} y2={Y2} className={cls} /> */}

        <line
          ref={ref3}
          x1={X1}
          y1={Y2}
          x2={X2}
          y2={Y2}
          strokeWidth={2}
          shapeRendering="crispEdges"
          strokeLinecap="round"
          className={cn("origin-center -rotate-45 fill-mode-forwards", [
            showMenu,
            "animate-menu-button-line2-hide",
            "animate-menu-button-line2-show",
          ])}
        />
      </svg>
    </ToolbarIconButton>
  )
})

export default SideMenuButton
