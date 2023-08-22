import type { ISelectClick } from "@components/autocomplete-select"
import BaseCol from "@components/base-col"
import BlueLinkButton from "@components/button/blue-link-button"
import CheckBox from "@components/button/check-box"
import HCenterRow from "@components/h-center-row"
import VCenterRow from "@components/v-center-row"
import useBreakPoint, { BREAKPOINT_XL } from "@hooks/use-breakpoint"
import type IStringMap from "@interfaces/string-map"
import { makeAuthBearerHeader } from "@lib/auth"
import cn from "@lib/class-names"

import BaseRow from "@components/base-row"

import ToggleSwitch from "@components/button/toggle-switch"
import { IDateUpdate } from "@components/date-range-picker"
import OKCancelDialog from "@components/dialog/ok-cancel-dialog"
import { DynamicDateRangePicker } from "@components/dynamic-date-range-picker"

import BasicButton from "@components/button/basic-button"
import LineTabs from "@components/line-tabs"
import BasePrimaryLink from "@components/link/base-primary-link"
import SecondaryButtonLink from "@components/link/secondary-button-link"
import Pagination from "@components/pagination"
import ToolbarButton from "@components/toolbar/toolbar-button"

import { DynamicTooltip } from "@components/dynamic-tooltip"
import DownloadIcon from "@icons/download"
import ShopIcon from "@icons/shop"
import TrashIcon from "@icons/trash"
import { ordersFromRows } from "@lib/db"
import {
  DEFAULT_PAGE_RANGE,
  IDBItem,
  IDateRange,
  IOrderDBItem,
  IPageRange,
  ISessionUser,
  ISort,
} from "@lib/types"
import { fetchPost, fetchPostBlob, fetchPostJsonArrayQuery } from "@lib/url"
import { uuidFromBase64 } from "@lib/utils"
import { INPUT_BORDER_CLS, INPUT_DARK_BORDER_CLS, ROUNDED_CLS } from "@theme"
import { format } from "date-fns"
import {
  ChangeEvent,
  Fragment,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  ALT_TEXT_CLS,
  CHANGE_ORDER_STATUS_URL,
  DOWNLOAD_QUARTZY_URL,
  NO_RESULTS_TEXT,
  ORDERS_URL,
  ORDER_ITEM_TEXT,
  ORDER_ROUTE,
  REMOVE_ORDER_URL,
} from "src/consts"
import OrderStatusesDropdown from "../order-status-dropdown"
import SearchResults from "../search-results"
import SortArrow from "./sort-arrow"

const CHANGE_STATUSES = [
  "Requested",
  "Approved",
  "Ordered",
  "Backordered",
  "Received",
  "Cancelled",
]

//const ORDER_STATUSES = ["All", ...CHANGE_STATUSES]

const STATUS_ACTION: IStringMap = {
  Requested: "Requested",
  Approve: "Approved",
  Backorder: "Backordered",
  Order: "Ordered",
  Receive: "Received",
  Cancel: "Cancelled",
}

const NEXT_STATUSES: IStringMap = {
  Requested: "Approved",
  Approved: "Ordered",
  Backordered: "Received",
  Ordered: "Received",
  Received: "Received",
  Cancelled: "Cancelled",
}

export const TABLE_CLS = "w-full text-sm"
export const TABLE_ROW_CLS = "grid grid-cols-32"
export const TABLE_HEADER_CLS = cn(
  TABLE_ROW_CLS,
  "font-semibold text-gray-500 dark:text-gray-500 text-xs ",
  INPUT_DARK_BORDER_CLS,
)
export const TABLE_BODY_CLS = TABLE_ROW_CLS

export const CELL_CLS = cn(
  "px-2 pt-3 pb-2 text-truncate border-b",
  INPUT_BORDER_CLS,
  INPUT_DARK_BORDER_CLS,
)

//export const ALT_ROW_CLS = "bg-gray-100/80 dark:bg-white/5"
export const ALT_ROW_CLS = ""

export const CELL_CLS_16 = cn(CELL_CLS, "col-span-16")
export const CELL_CLS_14 = cn(CELL_CLS, "col-span-14")
export const CELL_CLS_12 = cn(CELL_CLS, "col-span-12")
export const CELL_CLS_11 = cn(CELL_CLS, "col-span-11")
export const CELL_CLS_10 = cn(CELL_CLS, "col-span-10")
export const CELL_CLS_9 = cn(CELL_CLS, "col-span-9")
export const CELL_CLS_8 = cn(CELL_CLS, "col-span-8")
export const CELL_CLS_7 = cn(CELL_CLS, "col-span-7")
export const CELL_CLS_6 = cn(CELL_CLS, "col-span-6")
export const CELL_CLS_5 = cn(CELL_CLS, "col-span-5")
export const CELL_CLS_3 = cn(CELL_CLS, "col-span-3")
export const CELL_CLS_4 = cn(CELL_CLS, "col-span-4")
export const CELL_CLS_2 = cn(CELL_CLS, "col-span-2")
export const CELL_CLS_1 = cn(CELL_CLS, "col-span-1")

// export function downloadOrders(
//   df: IOrderDBItem[],
//   downloadRef: any,
//   file: string = "table.txt",
//   sep: string = "\t",
// ) {
//   const s = [
//     [
//       "Item Name",
//       "Vendor",
//       "Catalog",
//       "Total",
//       "Requested By",
//       "Requested On",
//     ].join(sep),
//     df
//       .map(order => {
//         const date = format(order.date, "MM/dd/yyyy")
//         return [
//           order.name,
//           order.vendor,
//           order.catalog,
//           `\$${order.total}`,
//           order.requestedBy,
//           date,
//         ].join(sep)
//       })
//       .join("\n"),
//   ].join("\n")

//   const blob = new Blob([s], { type: "text/plain" })
//   const url = URL.createObjectURL(blob)
//   if (downloadRef && downloadRef.current) {
//     downloadRef.current.href = url
//     downloadRef.current.download = file
//     //document.body.appendChild(element); // Required for this to work in FireFox
//     downloadRef.current.click()
//   }
// }

export function downloadQuartzyExcelOrders(
  blob: Blob | null,
  downloadRef: any,
  file: string = "orders.xlsx",
) {
  if (blob) {
    const url = URL.createObjectURL(blob)
    if (downloadRef && downloadRef.current) {
      downloadRef.current.href = url
      downloadRef.current.download = file
      //document.body.appendChild(element); // Required for this to work in FireFox
      downloadRef.current.click()
    }
  }
}

interface IProps {
  session: ISessionUser
  orderStatuses: IDBItem[]
  search?: string
  urlDates: IDateRange
  urlPages?: IPageRange
  selectedVendors?: Set<string>
  requestedBy?: Set<string>
  status: Set<string>
  onStatusClick?: ISelectClick<IDBItem>
  onSearchClick?: (e: MouseEvent) => void
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function OrdersList({
  session,
  search = "",
  urlDates,
  urlPages = DEFAULT_PAGE_RANGE,
  status,
  onStatusClick,
  selectedVendors = new Set(),
  requestedBy = new Set(),
  orderStatuses,
  onSearchClick,
  onSearchChange,
}: IProps) {
  //const [_search, setSearch] = useState("")

  //const [_date1, setDate1] = useState<Date>(urlDates.from)
  //const [_date2, setDate2] = useState<Date>(urlDates.to)

  const [_dates, setDates] = useState<IDateUpdate>({
    ...urlDates,
    update: true,
  })

  const [_filterByDates, setFilterByDates] = useState(false)
  //const [_status, setStatus] = useState<Set<string>>(new Set())
  const [pages, setPages] = useState<IPageRange>(urlPages)
  const [_sort, setSort] = useState<ISort>({ column: "date", desc: true }) //{ column: "from", desc: false }])
  const downloadRef = useRef<HTMLAnchorElement>(null)
  const [records, setRecords] = useState(0)
  //const [users, setUsers] = useState<{ [key: string]: IUserDBItem }>({})
  const [items, setItems] = useState<IOrderDBItem[]>([])
  const [selectedMap, setSelectedMap] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [showAskRemoveOrders, setShowAskRemoveOrders] = useState<
    IOrderDBItem[]
  >([])
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  // show just the orders for a user (quicker than filters)
  const [showMyOrders, setShowMyOrders] = useState<boolean>(false)

  const breakPoint = useBreakPoint()

  async function fetch() {
    const config = makeAuthBearerHeader(session)

    const people: string[] = (
      activeTabIndex > 0 && session.user ? [session.user.name] : []
    ).concat(Array.from(requestedBy).sort())

    const body = {
      search: search.length > 1 ? search : "",
      dates: _filterByDates
        ? [
            {
              from: format(_dates.from, "yyyy-MM-dd"),
              to: format(_dates.to, "yyyy-MM-dd"),
            },
          ]
        : [],
      sort: [_sort],
      status: Array.from(status).sort(),
      vendors: Array.from(selectedVendors).sort(),
      requestedBy: people,
      pages: [
        {
          offset: (pages.page - 1) * pages.pageSize,
          pageSize: pages.pageSize,
        },
      ],
    }

    const { totalItems, items } = await fetchPostJsonArrayQuery(
      ORDERS_URL,
      body,
      config,
    )

    setRecords(totalItems)

    setItems(ordersFromRows(items))
  }

  async function fetchDownload(
    callBack: (blob: Blob | null, downloadRef: any) => void,
  ) {
    const config = makeAuthBearerHeader(session)

    const blob = await fetchPostBlob(
      DOWNLOAD_QUARTZY_URL,
      {
        search,
        ids: Array.from(selectedMap).sort(),
        dates: [
          {
            from: format(_dates.from, "yyyy-MM-dd"),
            to: format(_dates.to, "yyyy-MM-dd"),
          },
        ],
        status,
        format: "quartzy",
      },
      config,
    )

    callBack(blob, downloadRef)
  }

  // useEffect(() => {
  //   setSearch(search)
  // }, [search])

  // useEffect(() => {
  //   if (status) {
  //     setStatus(status)
  //   }
  // }, [status])

  useEffect(() => {
    fetch()
  }, [
    search,
    pages,
    _dates,
    _filterByDates,
    status,
    _sort,
    requestedBy,
    selectedVendors,
    activeTabIndex,
    showMyOrders,
  ])

  useEffect(() => {
    setSelectedMap(new Set())
  }, [items])

  function onDateRangeChange(dates: IDateUpdate) {
    // if (type === "from") {
    //   setDate1(date)
    // } else {
    //   setDate2(date)
    // }

    setDates(dates)
  }

  function getSelectedItems() {
    return items.filter(order => selectedMap.has(order.uuid64))
  }

  async function changeOrderStatus(status: string) {
    const selectedOrders = getSelectedItems()

    if (selectedOrders.length > 0) {
      _changeOrderStatus(selectedOrders, status)
    }
  }

  async function _changeOrderStatus(orders: IOrderDBItem[], status: string) {
    const config = makeAuthBearerHeader(session)

    // let response = await axios.post(GROUP_USERS_URL, config)

    // setUsers(
    //   Object.fromEntries(
    //     response.data.map((user: IUserDBItem) => [user.uuid64, user])
    //   )
    // )

    await fetchPost(
      CHANGE_ORDER_STATUS_URL,
      { status, ids: orders.map(order => order.uuid64) },
      config,
    )

    fetch()
  }

  async function askDelete(orders: IOrderDBItem[]) {
    setShowAskRemoveOrders(orders)
  }

  async function removeOrders(orders: IOrderDBItem[]) {
    const config = makeAuthBearerHeader(session)

    // let response = await axios.post(GROUP_USERS_URL, config)

    // setUsers(
    //   Object.fromEntries(
    //     response.data.map((user: IUserDBItem) => [user.uuid64, user])
    //   )
    // )

    await fetchPost(
      REMOVE_ORDER_URL,
      { ids: orders.map(order => order.uuid64) },
      config,
    )

    fetch()

    setShowAskRemoveOrders([])
  }

  // function _onSearchChange(e: ChangeEvent<HTMLInputElement>) {
  //   // only search on at least 2 letters
  //   setSearch((e.target as HTMLInputElement).value)
  // }

  // function _onSearchClick(e: MouseEvent) {
  //   // only search on at least 2 letters
  //   setSearch((e.currentTarget as HTMLInputElement).value)
  // }

  function _onPageClick(pages: IPageRange) {
    setPages(pages)
  }

  function _onSortClick(e: MouseEvent, column: string) {
    if (column === _sort.column) {
      setSort({ ..._sort, desc: !_sort.desc })
    } else {
      setSort({ column, desc: false })
    }
  }

  function _onSelectClick(item: IDBItem) {
    if (selectedMap.has(item.uuid64)) {
      setSelectedMap(new Set([...selectedMap].filter(x => x !== item.uuid64)))
    } else {
      setSelectedMap(new Set([...selectedMap, item.uuid64]))
    }
  }

  function _makeList() {
    if (items.length > 0) {
      if (breakPoint.px >= BREAKPOINT_XL.px) {
        return _largeList()
      } else {
        return _smallList()
      }
    } else {
      return <HCenterRow className="text-xs">{NO_RESULTS_TEXT}</HCenterRow>
    }
  }

  function _smallList() {
    return (
      <ul>
        {items.map((item, ri) => (
          <li
            key={ri}
            className={cn("flex flex-col items-start gap-y-2 py-4", [
              ri % 2 == 1,
              ALT_ROW_CLS,
            ])}
          >
            <VCenterRow className="w-full justify-between">
              <ul className="flex flex-col gap-y-2">
                <li className="flex flex-col gap-y-1">
                  <p>{item.name}</p>
                  <p className={cn("text-xs", ALT_TEXT_CLS)}>
                    #{uuidFromBase64(item.uuid64)}
                  </p>
                </li>
                <li>
                  {item.vendor} {item.catalog}
                </li>
                <li>Total: ${item.total.toFixed(2)}</li>
              </ul>
              {(session.user?.isAdmin || item.own) && (
                <BasicButton
                  aria-label="Delete order"
                  onClick={() => askDelete([item])}
                  className="fill-gray-400 hover:fill-red-400"
                >
                  <TrashIcon size="w-4" />
                </BasicButton>
              )}
            </VCenterRow>

            {session.user?.isAdmin && (
              <BlueLinkButton
                aria-label="Change order status"
                onClick={() =>
                  _changeOrderStatus([item], NEXT_STATUSES[item.status])
                }
              >
                {NEXT_STATUSES[item.status]}
              </BlueLinkButton>
            )}
          </li>
        ))}
      </ul>
    )
  }

  function _largeList() {
    return (
      <BaseCol className={TABLE_CLS}>
        <div className={TABLE_HEADER_CLS}>
          <div className={CELL_CLS_1}>
            <CheckBox
              aria-label="Select All"
              isSelected={selectAll}
              onCheckClick={() => {
                setSelectAll(!selectAll)
                setSelectedMap(
                  selectAll
                    ? new Set()
                    : new Set(items.map(order => order.uuid64)),
                )
              }}
            />
          </div>

          <SortArrow
            title="Item Name"
            column="item"
            sort={_sort}
            onClick={_onSortClick}
            className={CELL_CLS_8}
          />

          <SortArrow
            title="Vendor"
            column="vendor"
            sort={_sort}
            onClick={_onSortClick}
            className={CELL_CLS_6}
          />

          <SortArrow
            title="Total"
            column="price"
            sort={_sort}
            onClick={_onSortClick}
            className={CELL_CLS_3}
          />

          <SortArrow
            title="From"
            column="from"
            sort={_sort}
            onClick={_onSortClick}
            className={CELL_CLS_5}
          />

          <SortArrow
            title="Status"
            column="status"
            sort={_sort}
            onClick={_onSortClick}
            className={CELL_CLS_3}
          />

          <SortArrow
            title="Submitted"
            column="date"
            sort={_sort}
            onClick={_onSortClick}
            className={CELL_CLS_4}
          />

          <div className={CELL_CLS_2}></div>
        </div>

        <div className={TABLE_BODY_CLS}>
          {items.map((item, ri) => (
            <Fragment key={ri}>
              <div className={cn(CELL_CLS_1, [ri % 2 == 1, ALT_ROW_CLS])}>
                <CheckBox
                  aria-label={`Remove ${item.name}`}
                  isSelected={selectedMap.has(item.uuid64)}
                  onCheckClick={e => _onSelectClick(item)}
                  className="py-1"
                />
              </div>

              <div
                className={cn(CELL_CLS_8, "flex flex-col gap-y-1", [
                  ri % 2 == 1,
                  ALT_ROW_CLS,
                ])}
              >
                <p>{item.name}</p>
                <p className={cn("text-xs", ALT_TEXT_CLS)}>
                  #{uuidFromBase64(item.uuid64)}
                </p>
              </div>
              <div
                className={cn(CELL_CLS_6, "flex flex-col gap-y-1", [
                  ri % 2 == 1,
                  ALT_ROW_CLS,
                ])}
              >
                <p>{item.vendor}</p>
                <p className="text-xs">{item.catalog}</p>
              </div>
              {/* <div
                  className={cn(CELL_CLS_3, [ri % 2 == 1, ALT_ROW_CLS])}
                >
                  {item.type}
                </div> */}
              <div className={cn(CELL_CLS_3, [ri % 2 == 1, ALT_ROW_CLS])}>
                ${item.total.toFixed(2)}
              </div>

              <div
                className={cn(CELL_CLS_5, "flex flex-col gap-y-1", [
                  ri % 2 == 1,
                  ALT_ROW_CLS,
                ])}
              >
                {/* <p>{`${
                    item.history[item.history.length - 1].user.firstName
                  } ${item.history[item.history.length - 1].user.lastName}`}</p> */}

                <p>{item.requestedBy}</p>

                <p className="text-xs">{item.type}</p>
              </div>
              <div className={cn(CELL_CLS_3, [ri % 2 == 1, ALT_ROW_CLS])}>
                {item.status}
              </div>
              <div className={cn(CELL_CLS_4, [ri % 2 == 1, ALT_ROW_CLS])}>
                {format(item.date, "MMM dd, yyyy")}
              </div>

              <BaseRow
                className={cn(
                  CELL_CLS_2,
                  "items-start justify-end gap-x-4 text-xs font-semibold",
                  [ri % 2 == 1, ALT_ROW_CLS],
                )}
              >
                {/* {session.user?.isAdmin && (
                  <OrderActionButton
                    onClick={() =>
                      _changeOrderStatus([item], NEXT_STATUSES[item.status])
                    }
                  >
                    {NEXT_STATUSES[item.status]}
                  </OrderActionButton>
                )} */}

                {/* <BlueLink
                  href={`${ORDER_ROUTE}?id=${item.uuid64}&type=order`}
                  aria-label="Request item"
                >
                  Reorder
                </BlueLink> */}
                <DynamicTooltip content="Order">
                  <BasePrimaryLink
                    href={`${ORDER_ROUTE}?id=${item.uuid64}&type=order`}
                    aria-label={`Order ${item.name}`}
                    className="hover:fill-primary fill-gray-400"
                  >
                    <ShopIcon size="w-4.5" />
                  </BasePrimaryLink>
                </DynamicTooltip>

                {(session.user?.isAdmin || item.own) && (
                  // <RedLinkButton
                  //   onClick={() => askRemoveOrders([item])}
                  //   aria-label="Delete order"
                  //   className="text-left"
                  // >
                  //   {DELETE_TEXT}
                  // </RedLinkButton>
                  <DynamicTooltip content="Delete">
                    <BasicButton
                      aria-label="Delete order"
                      onClick={() => askDelete([item])}
                      className="fill-gray-400 hover:fill-red-400"
                    >
                      <TrashIcon size="w-3.5" />
                    </BasicButton>
                  </DynamicTooltip>
                )}
              </BaseRow>
            </Fragment>
          ))}
        </div>
      </BaseCol>
    )
  }

  function onMyOrdersClick(e: MouseEvent, index: number, selected: boolean) {
    setShowMyOrders(!showMyOrders)
  }

  async function _onOrderStatusClick(
    index: number,
    id: string | number,
    label: string,
    item: IDBItem,
  ) {
    changeOrderStatus(item.name)
  }

  // function updateStatus(status: string) {
  //   const add = !_status.has(status)

  //   if (add) {
  //     setStatus(new Set([...Array.from(_status), status]))
  //   } else {
  //     setStatus(new Set([...Array.from(_status).filter(x => x !== status)]))
  //   }
  // }

  // function _onStatusClick(e: MouseEvent, selected: IDBItem[]) {
  //   setStatus(new Set(selected.map(item => item.name)))
  // }

  return (
    <>
      <OKCancelDialog
        visible={showAskRemoveOrders.length > 0}
        title="Are you sure you want to delete the selected orders?"
        text="This action cannot be undone and will permanently delete the selected items."
        onClick={() => removeOrders(showAskRemoveOrders)}
        onCancel={() => setShowAskRemoveOrders([])}
        className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
      />

      <BaseCol className="gap-y-4 text-sm">
        <LineTabs
          tabs={[
            { tab: "All", content: null },
            { tab: "My Orders", content: null },
          ]}
          activeTabIndex={activeTabIndex}
          onTabClick={(e, index) => setActiveTabIndex(index)}
          className=""
        />

        <VCenterRow className="justify-between">
          <SearchResults count={records} search={search} />

          <SecondaryButtonLink
            aria-label={ORDER_ITEM_TEXT}
            href={ORDER_ROUTE}
            className="text-xs lg:hidden"
          >
            {ORDER_ITEM_TEXT}
          </SecondaryButtonLink>
        </VCenterRow>

        <VCenterRow className="hidden gap-x-4 text-xs lg:flex">
          {/* <ToggleSwitch
              aria-label="My orders"
              isSelected={showMyOrders}
              onCheckClick={onMyOrdersClick}
              className="font-semibold"
            >
              My Orders
            </ToggleSwitch> */}

          {session.user?.isAdmin && (
            <>
              <VCenterRow className="gap-x-1">
                <OrderStatusesDropdown
                  items={orderStatuses}
                  onDropClick={_onOrderStatusClick}
                  className={cn(
                    "box-border border px-2",
                    ROUNDED_CLS,
                    INPUT_BORDER_CLS,
                    INPUT_DARK_BORDER_CLS,
                  )}
                />

                <ToolbarButton
                  aria-label="Excel"
                  onClick={() => fetchDownload(downloadQuartzyExcelOrders)}
                >
                  <DownloadIcon />
                  <span>Export</span>
                </ToolbarButton>

                <DynamicTooltip content="Delete selected orders">
                  <ToolbarButton
                    size="icon"
                    aria-label="Delete orders"
                    onClick={() => askDelete(getSelectedItems())}
                  >
                    <TrashIcon />
                    {/* <span>Delete</span> */}
                  </ToolbarButton>
                </DynamicTooltip>
              </VCenterRow>
              <div
                className="h-3/4 border-l border-gray-200 dark:border-gray-500"
                style={{ width: 1 }}
              />
            </>
          )}

          <VCenterRow className="gap-x-4">
            <VCenterRow className="justify-end gap-x-2">
              <DynamicTooltip content="Filter results by date range">
                <ToggleSwitch
                  aria-label="My orders"
                  isSelected={_filterByDates}
                  onCheckClick={() => setFilterByDates(!_filterByDates)}
                  className="font-semibold"
                >
                  Dates
                </ToggleSwitch>
              </DynamicTooltip>
              <DynamicDateRangePicker
                dates={_dates}
                onDatesChange={onDateRangeChange}
              />
            </VCenterRow>
          </VCenterRow>
        </VCenterRow>

        {_makeList()}

        <HCenterRow>
          <Pagination
            totalCount={records}
            page={pages}
            onPageClick={_onPageClick}
          />
        </HCenterRow>

        <a ref={downloadRef} href="#" className="hidden" />
      </BaseCol>
    </>
  )
}
