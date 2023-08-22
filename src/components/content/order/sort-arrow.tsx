import BasicButton from "@components/button/basic-button"
import ChevronRightIcon from "@icons/chevron-right"
import type IClassProps from "@interfaces/class-props"
import cn from "@lib/class-names"
import { ISort } from "@lib/types"

import { MouseEvent } from "react"

export type SortClick = (e: MouseEvent, column: string) => void

export const SORT_ARROW_CLS = "stroke-gray-500 trans-300 transition-transform"

interface IProps extends IClassProps {
  title: string
  column: string
  sort: ISort
  onClick: SortClick
}

export default function SortArrow({
  title,
  column,
  sort,
  onClick,
  className,
}: IProps) {
  return (
    <BasicButton
      aria-label={`Sort by ${title}`}
      className={className}
      onClick={e => onClick(e, column)}
    >
      {`${title} `}
      {sort.column === column && (
        <ChevronRightIcon
          size="w-2.5"
          className={cn(SORT_ARROW_CLS, [sort.desc, "rotate-270", "rotate-90"])}
        />
      )}
    </BasicButton>
  )
}
