import { CHEVRON_CLS } from "@/consts"
import BaseButton from "@components/button/base-button"
import { DOTS, IPaginationProps, usePagination } from "@hooks/use-pagination"
import ChevronRightIcon from "@icons/chevron-right"
import type IClassProps from "@interfaces/class-props"
import type IFieldMap from "@interfaces/field-map"
import cn from "@lib/class-names"
import { IPageRange } from "@lib/types"
import { CENTERED_BUTTON_CLS, FOCUS_RING_CLS, PILL_BUTTON_CLS } from "@theme"

export type PageClick = (page: IPageRange) => void

interface IProps extends IClassProps, IPaginationProps {
  prefix?: string
  params?: IFieldMap
  onPageClick: PageClick
}

const BASE_BUTTON_CLS = cn(
  CENTERED_BUTTON_CLS,
  PILL_BUTTON_CLS,
  FOCUS_RING_CLS,
  "w-8 h-8",
)

const BUTTON_CLS = cn(
  BASE_BUTTON_CLS,
  CHEVRON_CLS,
  "hover:stroke-theme-500 trans-300 transition-color hover:text-theme-500",
)

function makeUrlParams(params: IFieldMap) {
  return Object.entries(params)
    .map(kv => `${kv[0]}=${kv[1]}`)
    .join("&")
}

export default function Pagination({
  totalCount,
  page,
  siblingCount = 1,
  onPageClick,
  className,
}: IProps) {
  const paginationRange = usePagination({
    page,
    totalCount,
    siblingCount,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (!paginationRange || page.page === 0 || paginationRange.length < 2) {
    return <></>
  }

  // const onNext = () => {
  //   onPageChange(currentPage + 1);
  // };

  // const onPrevious = () => {
  //   onPageChange(currentPage - 1);
  // };

  //const pages = Math.ceil(totalCount / pageSize)
  const lastPage = paginationRange[paginationRange.length - 1]
  const prevPage = Math.max(1, page.page - 1)
  const nextPage = Math.min(page.page + 1, lastPage as number)

  return (
    <ul className={cn("flex flex-row items-center gap-x-2 py-4", className)}>
      <li>
        <BaseButton
          onClick={() =>
            onPageClick({ page: prevPage, pageSize: page.pageSize })
          }
          aria-label={`Goto page ${Math}`}
          className={BUTTON_CLS}
        >
          <ChevronRightIcon className="rotate-180 " size="w-3" />
        </BaseButton>
      </li>

      {paginationRange.map((pageNumber, pi) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pi} className="pagination-item dots">
              ...
            </li>
          )
        }

        return (
          <li key={pi}>
            <BaseButton
              onClick={() =>
                onPageClick({
                  page: pageNumber as number,
                  pageSize: page.pageSize,
                })
              }
              aria-label={`Goto page ${pageNumber}`}
              className={cn(BASE_BUTTON_CLS, [
                pageNumber === page.page,
                "bg-theme-500 text-white",
                "trans-300 transition-color hover:text-theme-500",
              ])}
            >
              {pageNumber}
            </BaseButton>
          </li>
        )
      })}

      <li>
        <BaseButton
          onClick={() =>
            onPageClick({ page: nextPage, pageSize: page.pageSize })
          }
          aria-label={`Goto page ${nextPage}`}
          className={BUTTON_CLS}
        >
          <ChevronRightIcon size="w-3" />
        </BaseButton>
      </li>
    </ul>
  )
}
