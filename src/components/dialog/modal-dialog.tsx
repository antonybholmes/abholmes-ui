import useDelayHide from "@hooks/use-delay-hide"
import type IChildrenProps from "@interfaces/children-props"
import { MouseEvent, useCallback, useEffect, useRef } from "react"
import { cn } from "../../lib/class-names"
import ModalBgScreen from "./modal-bg-screen"

export interface IModalProps extends IChildrenProps {
  visible?: boolean
  onCancel?: (e: MouseEvent | KeyboardEvent) => void
}

export default function ModalDialog({
  visible = false,
  onCancel,
  className,
  children,
}: IModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const hide = useDelayHide(visible)

  // useEffect(() => {
  //   if (visible) {
  //     gsap
  //       .timeline()
  //       .to(bgRef.current, { display: "block" }, 0)
  //       .to(
  //         bgRef.current,
  //         { opacity: 1, duration: DURATION, ease: EASE },
  //         DURATION,
  //       )
  //       .to(ref.current, { display: "flex" }, 0)
  //       .to(
  //         ref.current,
  //         { opacity: 1, duration: DURATION, ease: EASE },
  //         DURATION,
  //       )
  //       .to(
  //         ref.current,
  //         {
  //           transform: "translate(-50%, -50%)",
  //           duration: DURATION,
  //           ease: EASE,
  //         },
  //         DURATION,
  //       )
  //   } else {
  //     gsap
  //       .timeline()
  //       .to(bgRef.current, { opacity: 0, duration: DURATION, ease: EASE }, 0)
  //       .to(bgRef.current, { display: "none" }, DURATION)
  //       .to(ref.current, { opacity: 0, duration: DURATION, ease: EASE }, 0)
  //       .to(
  //         ref.current,
  //         {
  //           transform: "translate(-50%, -60%)",
  //           duration: DURATION,
  //           ease: EASE,
  //         },
  //         0,
  //       )
  //       .to(ref.current, { display: "none" }, DURATION)
  //   }
  // }, [visible])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onCancel && onCancel(e)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", onKeyDown)
    } else {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [visible])

  useEffect(() => {
    // force focus onto modal
    if (visible) {
      ref.current?.focus()
    }
  }, [visible, ref])

  if (visible || !hide) {
    return (
      <ModalBgScreen
        visible={visible}
        onClick={(e: MouseEvent) => onCancel && onCancel(e)}
        className="flex flex-row items-center justify-center"
      >
        <div
          className={cn(
            "flex flex-col rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700",
            className,
          )}
          onClick={e =>
            // if user clicks inside dialog, prevent it triggering exit and closing
            e.stopPropagation()
          }
          tabIndex={0}
          ref={ref}
        >
          {/* <BaseRow className="justify-end w-full">
              <SecondaryButton aria-label="Close dialog"><CloseIcon className="stroke-gray-500"/></SecondaryButton>
            </BaseRow> */}
          {children}
        </div>
      </ModalBgScreen>
    )
  } else {
    return <></>
  }
}
