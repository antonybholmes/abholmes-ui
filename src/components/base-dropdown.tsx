import type IChildProps from "@interfaces/child-props"

import { KeyboardEvent } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export const DROPDOWN_CLS = "left-0"

interface IProps extends IChildProps {
  dropDownVisible: boolean
  onClose?: () => void
  menuClassName?: string
  onOpenAutoFocus?: (e: Event) => void
}

export default function BaseDropDown({
  dropDownVisible = false,
  onClose,
  onOpenAutoFocus,
  menuClassName,
  className,
  children,
}: IProps) {
  // const ref = useOutsideListener<HTMLDivElement>(
  //   dropDownVisible,
  //   () => onClose && onClose(),
  // )
  // const hide = useDelayHide(dropDownVisible)

  // useWindowClickListener((e: { target: any }) => {
  //   if (ref.current && !ref.current.contains(e.target)) {
  //     onClose && onClose()
  //   }
  // })

  // const transitions = useTransition(dropDownVisible, {
  //   from: { opacity: 0, top: "90%" },
  //   enter: { opacity: 1, top: "100%" },
  //   leave: { opacity: 0, top: "90%" },
  // })

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape" && onClose) {
      onClose()
    }
  }

  function _onClose() {
    if (onClose) {
      onClose()
    }
  }

  return (
    <Popover open={dropDownVisible}>
      <PopoverTrigger asChild>{children[0]}</PopoverTrigger>
      <PopoverContent
        onInteractOutside={() => _onClose()}
        onEscapeKeyDown={() => _onClose()}
        onOpenAutoFocus={onOpenAutoFocus}
        className={menuClassName}
      >
        {children[1]}
      </PopoverContent>
    </Popover>
  )

  {
    /* return (
    <div ref={ref} className={cn("relative", className)} onKeyDown={onKeyDown}>
      {children[0]}

      {(dropDownVisible || !hide) && (
        <BaseCol
          className={cn(
            BASE_DROPDOWN_CLS,
            "duration-300 ease-in-out fill-mode-forwards",
            [
              dropDownVisible,
              "animate-in fade-in slide-in-from-top-1",
              "animate-out fade-out slide-out-to-top-1",
            ],
            menuClassName,
          )}
        >
          {children[1]}
        </BaseCol>
      )}
    </div>
  ) */
  }
}
