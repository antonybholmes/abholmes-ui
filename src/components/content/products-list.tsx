import BaseCol from "@components/base-col"
import CheckBox from "@components/button/check-box"
import HCenterRow from "@components/h-center-row"
import Pagination from "@components/pagination"
import useBreakPoint, { BREAKPOINT_XL } from "@hooks/use-breakpoint"
import { makeAuthBearerHeader } from "@lib/auth"
import cn from "@lib/class-names"

import BaseRow from "@components/base-row"

import BasicButton from "@components/button/basic-button"
import OKCancelDialog from "@components/dialog/ok-cancel-dialog"
import BasePrimaryLink from "@components/link/base-primary-link"

import { DynamicTooltip } from "@components/dynamic-tooltip"
import PrimaryLink from "@components/link/primary-link"
import VCenterRow from "@components/v-center-row"
import ShopIcon from "@icons/shop"
import TrashIcon from "@icons/trash"
import { productsFromRows } from "@lib/db"
import {
  DEFAULT_PAGE_RANGE,
  IPageRange,
  IProductDBItem,
  ISessionUser,
} from "@lib/types"
import { fetchPost, fetchPostJsonArrayQuery } from "@lib/url"
import { uuidFromBase64 } from "@lib/utils"
import { format } from "date-fns"
import { ChangeEvent, Fragment, MouseEvent, useEffect, useState } from "react"
import {
  ALT_TEXT_CLS,
  CHANGE_ORDER_STATUS_URL,
  NO_RESULTS_TEXT,
  ORDER_ROUTE,
  PRODUCTS_URL,
  REMOVE_PRODUCT_URL,
} from "src/consts"
import {
  ALT_ROW_CLS,
  CELL_CLS_1,
  CELL_CLS_10,
  CELL_CLS_3,
  CELL_CLS_7,
  CELL_CLS_8,
  TABLE_BODY_CLS,
  TABLE_CLS,
  TABLE_HEADER_CLS,
} from "./order/orders-list"
import SearchResults from "./search-results"

interface IProps {
  session: ISessionUser
  search?: string
  selectedVendors?: Set<string>
  pages?: IPageRange

  onSearchClick?: (e: MouseEvent) => void
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function ProductsList({
  session,
  search = "",
  selectedVendors = new Set(),
  pages = DEFAULT_PAGE_RANGE,

  onSearchClick,
  onSearchChange,
}: IProps) {
  const [_pages, setPages] = useState<IPageRange>(pages)
  const [records, setRecords] = useState(0)
  const [items, setItems] = useState<IProductDBItem[]>([])
  const [selectedMap, setSelectedMap] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [showAskRemoveProducts, setShowAskRemoveProducts] = useState<
    IProductDBItem[]
  >([])
  const breakPoint = useBreakPoint()

  async function fetch() {
    const config = makeAuthBearerHeader(session)

    const body = {
      search: search.length > 1 ? search : "",
      pages: [
        {
          offset: (_pages.page - 1) * _pages.pageSize,
          pageSize: _pages.pageSize,
        },
      ],
      vendors: Array.from(selectedVendors).sort(),
    }

    console.log(body, config)

    const { totalItems, items } = await fetchPostJsonArrayQuery(
      PRODUCTS_URL,
      body,
      config,
    )

    setRecords(totalItems)
    setItems(productsFromRows(items))

    // setOrders(
    //   response.data.map((order: IOrderDBItem) => ({
    //     ...order,
    //     history: order.history.map(h => ({ ...h, date: new Date(h.date) })),
    //   }))
    // )
  }

  // useEffect(() => {
  //   fetchCount()
  // }, [])

  useEffect(() => {
    fetch()
  }, [search, selectedVendors, _pages])

  useEffect(() => {
    setSelectedMap(new Set())
  }, [items])

  async function _changeOrderStatus(orders: IProductDBItem[], status: string) {
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

  async function askDelete(products: IProductDBItem[]) {
    setShowAskRemoveProducts(products)
  }

  async function removeProducts(products: IProductDBItem[]) {
    const config = makeAuthBearerHeader(session)

    // let response = await axios.post(GROUP_USERS_URL, config)

    // setUsers(
    //   Object.fromEntries(
    //     response.data.map((user: IUserDBItem) => [user.uuid64, user])
    //   )
    // )

    await fetchPost(
      REMOVE_PRODUCT_URL,
      { ids: products.map(order => order.uuid64) },
      config,
    )

    fetch()

    setShowAskRemoveProducts([])
  }

  // function _onSearchChange(e: ChangeEvent<HTMLInputElement>) {
  //   // only search on at least 2 letters
  //   setSearch((e.target as HTMLInputElement).value)
  // }

  // function _onSearchClick(e: MouseEvent) {
  //   // only search on at least 2 letters
  //   setSearch((e.currentTarget as HTMLInputElement).value)
  // }

  function _onPageClick(page: IPageRange) {
    setPages(page)
  }

  function _onSelectClick(item: IProductDBItem) {
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

  function _largeList() {
    return (
      <BaseCol className={TABLE_CLS}>
        <div className={TABLE_HEADER_CLS}>
          <div className={CELL_CLS_1}>
            <CheckBox
              aria-label={`Select All`}
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

          <div className={CELL_CLS_10}>Item Name</div>
          <div className={CELL_CLS_7}>Catalog</div>
          <div className={CELL_CLS_8}>Vendor</div>

          <div className={CELL_CLS_3}>Added</div>
          <div className={CELL_CLS_3}></div>
        </div>

        <div className={TABLE_BODY_CLS}>
          {items.map((item, ri) => (
            <Fragment key={ri}>
              <div className={cn(CELL_CLS_1, [ri % 2 == 1, ALT_ROW_CLS])}>
                <CheckBox
                  aria-label={`Remove ${item.name}`}
                  isSelected={selectedMap.has(item.uuid64)}
                  onCheckClick={() => _onSelectClick(item)}
                />
              </div>

              <div className={cn(CELL_CLS_10, [ri % 2 == 1, ALT_ROW_CLS])}>
                <p>{item.name}</p>
                <p className={cn("text-xs", ALT_TEXT_CLS)}>
                  #{uuidFromBase64(item.uuid64)}
                </p>
              </div>
              <div className={cn(CELL_CLS_7, [ri % 2 == 1, ALT_ROW_CLS])}>
                {item.catalog}
              </div>
              <div className={cn(CELL_CLS_8, [ri % 2 == 1, ALT_ROW_CLS])}>
                {item.vendor}
              </div>
              <div className={cn(CELL_CLS_3, [ri % 2 == 1, ALT_ROW_CLS])}>
                {format(item.date, "MM/dd/yyyy")}
              </div>

              <BaseRow
                className={cn(
                  CELL_CLS_3,
                  "items-start justify-end gap-x-4 text-xs font-semibold",
                  [ri % 2 == 1, ALT_ROW_CLS],
                )}
              >
                <DynamicTooltip content="Order">
                  <BasePrimaryLink
                    href={`${ORDER_ROUTE}?id=${item.uuid64}&type=product`}
                    aria-label={`Order ${item.name}`}
                    className="hover:fill-primary fill-gray-400"
                  >
                    <ShopIcon size="w-4.5" />
                  </BasePrimaryLink>
                </DynamicTooltip>

                {/* <BlueLink
                  href={`${ADD_INVENTORY_ITEM_ROUTE}?id=${item.uuid64}&type=product`}
                  aria-label="Add To Inventory"
                >
                  Inventory
                </BlueLink> */}

                {session.user?.isAdmin && (
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

  function _smallList() {
    return (
      <ul>
        {items.map((item, ri) => (
          <li
            key={ri}
            className={cn("flex flex-col gap-y-2 py-4", [
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
              </ul>

              {session.user?.isAdmin && (
                <BasicButton
                  aria-label="Delete product"
                  onClick={() => askDelete([item])}
                  className="fill-gray-400 hover:fill-red-400"
                >
                  <TrashIcon size="w-4" />
                </BasicButton>
              )}
            </VCenterRow>
            <BaseRow>
              <PrimaryLink
                href={`/request?id=${item.uuid64}`}
                aria-label={`Request ${item.name}`}
                className="font-semibold"
              >
                Request
              </PrimaryLink>
            </BaseRow>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <OKCancelDialog
        visible={showAskRemoveProducts.length > 0}
        title="Are you sure you want to delete the selected products?"
        text="This action cannot be undone and will permanently delete the selected items."
        onClick={() => removeProducts(showAskRemoveProducts)}
        onCancel={() => setShowAskRemoveProducts([])}
        className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
      />

      <BaseCol className="gap-y-8 text-sm">
        {/* <SearchBar
          id="small-search"
          search={search}
          onChange={onSearchChange}
          onClick={onSearchClick}
          className="lg:hidden"
        /> */}

        <div className="grid grid-cols-2 items-center">
          <SearchResults count={records} search={search} />

          <div></div>
        </div>

        {_makeList()}

        <HCenterRow>
          <Pagination
            totalCount={records}
            page={_pages}
            onPageClick={_onPageClick}
          />
        </HCenterRow>
      </BaseCol>
    </>
  )
}
