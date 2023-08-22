import BaseCol from "@components/base-col"
import { BaseRow } from "@components/base-row"

import IElementProps from "@interfaces/element-props"
import {
  BASE_BUTTON_CLS,
  CENTERED_BUTTON_CLS,
  FOCUS_RING_CLS,
  PILL_BUTTON_CLS,
} from "@theme"
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react"
import cn from "../lib/class-names"
import { BaseButton } from "./button/base-button"

export const PILL_CLS = cn(
  BASE_BUTTON_CLS,
  FOCUS_RING_CLS,
  PILL_BUTTON_CLS,
  CENTERED_BUTTON_CLS,
  "px-4 py-2 text-xs font-bold",
)

export const SELECTED_PILL_CLS =
  "trans-300 absolute bottom-0 left-0 top-0 z-0 block h-full rounded-full bg-theme-100 transition-all dark:bg-gray-600"

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

export default function PillTabs({
  tabs,
  activeTabIndex = 0,
  onTabClick,
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
      <BaseCol className="gap-y-1">
        <div className="relative">
          <BaseRow className="relative z-10 gap-x-1">
            {tabs.map((tab, idx) => {
              return (
                <BaseButton
                  key={idx}
                  ref={(el: HTMLElement|null) => (tabsRef.current[idx] = el)}
                  className={cn(PILL_CLS, [
                    idx === activeTabIndex,
                    "text-theme-500 dark:text-gray-50",
                    "hover:bg-accent",
                  ])}
                  onClick={(e: MouseEvent) => _onClick(e, idx)}
                >
                  {tab.tab}
                </BaseButton>
              )
            })}
          </BaseRow>
          <span
            className={SELECTED_PILL_CLS}
            style={{
              left: tabUnderlineProps[0],
              width: tabUnderlineProps[1],
            }}
          />
        </div>

        {tabs[activeTabIndex].content && tabs[activeTabIndex].content}
      </BaseCol>
    </>
  )
}
