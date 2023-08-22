import BaseCol from "@components/base-col"
import { BaseRow } from "@components/base-row"

import IElementProps from "@interfaces/element-props"
import cn from "@lib/class-names"
import {
    BASE_BUTTON_CLS,
    CENTERED_BUTTON_CLS,
    FOCUS_RING_CLS,
    ROUNDED_BUTTON_CLS,
} from "@theme"
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react"
import BaseButton from "./button/base-button"

export type ITabClick = (e: MouseEvent, index: number) => void

export interface ITab {
  tab: ReactNode
  content?: ReactNode | null
}

interface IProps extends IElementProps {
  tabs: ITab[]
  activeTabIndex: number
  onTabClick?: ITabClick
}

const TAB_CLS = cn(
  BASE_BUTTON_CLS,
  FOCUS_RING_CLS,
  CENTERED_BUTTON_CLS,
  ROUNDED_BUTTON_CLS,
  "px-2 py-3.5 text-xs font-semibold",
)

const LINE_CLS =
  "trans-300 absolute bottom-0 left-0 z-0 block bg-theme-400 transition-all dark:bg-gray-600"

export default function LineTabs({
  tabs,
  activeTabIndex = 0,
  onTabClick,
  className,
}: IProps) {
  const [tabUnderlineProps, setTabUnderlineProps] = useState([0, 0])

  const tabsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex]
      const pl = 0 //parseFloat(currentTab?.style?.paddingLeft ?? "0")
      const w = currentTab?.clientWidth ?? 0 //- 2 * pl
      setTabUnderlineProps([(currentTab?.offsetLeft ?? 0) + pl, w])
      //onClick && onClick(activeTabIndex)
    }

    setTabPosition()

    window.addEventListener("resize", setTabPosition)

    return () => window.removeEventListener("resize", setTabPosition)
  }, [activeTabIndex])

  function _onClick(e: MouseEvent, index: number) {
    onTabClick && onTabClick(e, index)
  }

  return (
    <>
      <BaseCol className={cn("gap-y-1", className)}>
        <div className="relative">
          <BaseRow className="relative z-10 gap-x-1">
            {tabs.map((tab, idx) => {
              return (
                <BaseButton
                  key={idx}
                  ref={el => (tabsRef.current[idx] = el)}
                  className={cn(TAB_CLS, [
                    idx === activeTabIndex,
                    "text-theme-500 dark:text-gray-50",
                    "hover:bg-accent",
                  ])}
                  onClick={e => _onClick(e, idx)}
                >
                  {tab.tab}
                </BaseButton>
              )
            })}
          </BaseRow>
          <span
            className={LINE_CLS}
            style={{
              left: tabUnderlineProps[0],
              width: tabUnderlineProps[1],
              height: 2,
            }}
          />
        </div>

        {tabs[activeTabIndex].content && tabs[activeTabIndex].content}
      </BaseCol>
    </>
  )
}
