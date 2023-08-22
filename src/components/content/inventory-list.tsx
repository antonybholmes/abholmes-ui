import BaseCol from "@components/base-col"
import CheckBox from "@components/button/check-box"

import cn from "@lib/class-names"

import { uuidFromBase64 } from "@lib/utils"
import { format } from "date-fns"
import {
  ChangeEvent,
  Fragment,
  MouseEvent,
  useEffect,
  useMemo,
  useState,
} from "react"

import BaseRow from "@components/base-row"

import BasicButton from "@components/button/basic-button"
import OKCancelDialog from "@components/dialog/ok-cancel-dialog"
import HCenterRow from "@components/h-center-row"
import LineTabs from "@components/line-tabs"
import BasePrimaryLink from "@components/link/base-primary-link"
import PrimaryLink from "@components/link/primary-link"
import SecondaryButtonLink from "@components/link/secondary-button-link"

import { DynamicTooltip } from "@components/dynamic-tooltip"
import VCenterRow from "@components/v-center-row"
import useBreakPoint, { BREAKPOINT_XL } from "@hooks/use-breakpoint"
import ShopIcon from "@icons/shop"
import TrashIcon from "@icons/trash"
import { makeAuthBearerHeader } from "@lib/auth"
import { inventoryFromRows } from "@lib/db"
import {
  DEFAULT_PAGE_RANGE,
  IDBItem,
  IInventoryDBItem,
  IPageRange,
  ISessionUser,
} from "@lib/types"
import { fetchPost, fetchPostJsonArrayQuery } from "@lib/url"
import {
  ADD_INVENTORY_ITEM_ROUTE,
  ALT_TEXT_CLS,
  CHANGE_INVENTORY_TYPE_URL,
  INVENTORY_URL,
  NO_RESULTS_TEXT,
  ORDER_ROUTE,
  REMOVE_INVENTORY_ITEM_URL,
} from "src/consts"
import Dropdown from "../item-dropdown"
import Pagination from "../pagination"
import {
  ALT_ROW_CLS,
  CELL_CLS_1,
  CELL_CLS_10,
  CELL_CLS_3,
  CELL_CLS_4,
  CELL_CLS_8,
  TABLE_BODY_CLS,
  TABLE_CLS,
  TABLE_HEADER_CLS,
} from "./order/orders-list"
import SearchResults from "./search-results"

interface IProps {
  session: ISessionUser
  inventoryTypes: IDBItem[]
  types: Set<string>
  vendors?: Set<string>
  search?: string
  pages?: IPageRange
  onSearchClick?: (e: MouseEvent) => void
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InventoryList({
  session,
  inventoryTypes,
  types = new Set(),
  vendors = new Set(),
  search = "",
  onSearchClick,
  onSearchChange,
  pages = DEFAULT_PAGE_RANGE,
}: IProps) {
  const [items, setItems] = useState<IInventoryDBItem[]>([])
  //const [_types, setTypes] = useState<Set<string>>(new Set())
  const [_pages, setPages] = useState<IPageRange>(DEFAULT_PAGE_RANGE)
  const [records, setRecords] = useState(0)
  const [_search, setSearch] = useState<string>("")
  const [selectedMap, setSelectedMap] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const breakPoint = useBreakPoint()
  const [showAskRemoveItems, setShowAskRemoveItems] = useState<
    IInventoryDBItem[]
  >([])
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  async function fetch() {
    const config = makeAuthBearerHeader(session)

    const t = (
      activeTabIndex > 0 ? [inventoryTypes[activeTabIndex - 1].name] : []
    ).concat(Array.from(types).sort())

    const body = {
      //group:user.groups[0].uuid64,
      search: _search.length > 1 ? _search : "",
      types: t,
      vendors: Array.from(vendors).sort(),
      pages: [
        {
          offset: (_pages.page - 1) * _pages.pageSize,
          pageSize: _pages.pageSize,
        },
      ],
    }

    const { totalItems, items } = await fetchPostJsonArrayQuery(
      INVENTORY_URL,
      body,
      config,
    )

    setRecords(totalItems)

    setItems(inventoryFromRows(items))
  }

  useEffect(() => {
    setPages(pages)
  }, [pages])

  useEffect(() => {
    setSearch(search)
  }, [search])

  useEffect(() => {
    fetch()
  }, [_search, types, vendors, _pages, activeTabIndex])

  const ditems = useMemo(
    () =>
      inventoryTypes.map(item => ({ id: item.uuid64, label: item.name, item })),
    [inventoryTypes],
  )

  function _onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    // only search on at least 2 letters
    setSearch((e.target as HTMLInputElement).value)
  }

  function _onSearchClick(e: MouseEvent) {
    // only search on at least 2 letters
    setSearch((e.target as HTMLInputElement).value)
  }

  function _onPageClick(page: IPageRange) {
    setPages(page)
  }

  // function updateTypes(status: string) {
  //   const add = !_types.has(status)

  //   if (add) {
  //     setTypes(new Set([...Array.from(_types), status]))
  //   } else {
  //     setTypes(new Set([...Array.from(_types).filter(x => x !== status)]))
  //   }
  // }

  function _onSelectClick(item: IInventoryDBItem) {
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
                <li>Price: ${item.price.toFixed(2)}</li>
              </ul>

              {session.user?.isAdmin && (
                <BasicButton
                  aria-label="Delete order"
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

          <div className={CELL_CLS_8}>Vendor</div>
          <div className={CELL_CLS_4}>Type</div>

          <div className={CELL_CLS_3}>Price</div>
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
                  onCheckClick={e => _onSelectClick(item)}
                />
              </div>
              <div
                className={cn(CELL_CLS_10, "flex flex-col gap-y-1", [
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
                className={cn(CELL_CLS_8, "flex flex-col gap-y-1", [
                  ri % 2 == 1,
                  ALT_ROW_CLS,
                ])}
              >
                <p>{item.vendor}</p>
                <p className="text-xs">{item.catalog}</p>
              </div>
              <div className={cn(CELL_CLS_4, [ri % 2 == 1, ALT_ROW_CLS])}>
                {/* {item.type} */}

                <Dropdown
                  items={ditems}
                  name={item.type}
                  onDropClick={(
                    index: number,
                    id: string | number,
                    label: string,
                    typeItem: IDBItem,
                  ) => {
                    _onTypeClick(index, id, label, item, typeItem)
                  }}
                />
              </div>
              <div className={cn(CELL_CLS_3, [ri % 2 == 1, ALT_ROW_CLS])}>
                ${item.price}
              </div>
              <div className={cn(CELL_CLS_3, [ri % 2 == 1, ALT_ROW_CLS])}>
                {format(item.date, "MM/dd/yy")}
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
                    href={`${ORDER_ROUTE}?id=${item.uuid64}`}
                    aria-label={`Order ${item.name}`}
                    className={cn(
                      "hover:fill-theme-600 inline-block fill-gray-400",
                    )}
                  >
                    <ShopIcon size="w-4.5" />
                  </BasePrimaryLink>
                </DynamicTooltip>
                {/* <RedLinkButton
                  aria-label="Delete item"
                  onClick={() => askRemoveOrders([item])}
                >
                  {DELETE_TEXT}
                </RedLinkButton> */}
                <DynamicTooltip content="Delete">
                  <BasicButton
                    aria-label="Delete order"
                    onClick={() => askDelete([item])}
                    className="fill-gray-400 hover:fill-red-400"
                  >
                    <TrashIcon size="w-3.5" />
                  </BasicButton>
                </DynamicTooltip>
              </BaseRow>
            </Fragment>
          ))}
        </div>
      </BaseCol>
    )
  }

  async function _onTypeClick(
    index: number,
    id: string | number,
    label: string,
    item: IInventoryDBItem,
    typeItem: IDBItem,
  ) {
    const config = makeAuthBearerHeader(session)
    const body = {
      ids: [item.uuid64],
      type: typeItem.name,
    }

    await fetchPost(CHANGE_INVENTORY_TYPE_URL, body, config)

    fetch()
  }

  async function askDelete(orders: IInventoryDBItem[]) {
    setShowAskRemoveItems(orders)
  }

  async function removeItems(orders: IInventoryDBItem[]) {
    const config = makeAuthBearerHeader(session)

    await fetchPost(
      REMOVE_INVENTORY_ITEM_URL,
      { ids: orders.map(order => order.uuid64) },
      config,
    )

    fetch()

    setShowAskRemoveItems([])
  }

  return (
    <>
      <OKCancelDialog
        visible={showAskRemoveItems.length > 0}
        title="Are you sure you want to delete the selected items?"
        text="This action cannot be undone and will permanently delete the selected items."
        onClick={() => removeItems(showAskRemoveItems)}
        onCancel={() => setShowAskRemoveItems([])}
        className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
      />

      <BaseCol className="gap-y-4 text-sm">
        {/* <SearchBar
          id="small-search"
          search={search}
          onChange={onSearchChange}
          onClick={onSearchClick}
          className="lg:hidden"
        /> */}

        <LineTabs
          tabs={[
            { tab: "All", content: null },
            ...inventoryTypes.map(item => ({ tab: item.name, content: null })),
          ]}
          activeTabIndex={activeTabIndex}
          onTabClick={(e, index) => setActiveTabIndex(index)}
        />

        <VCenterRow className="items-center justify-between">
          <SearchResults count={records} search={_search} />

          <div className="text-xs">
            <SecondaryButtonLink
              aria-label="Add Item"
              className="w-full"
              href={ADD_INVENTORY_ITEM_ROUTE}
            >
              Add Item
            </SecondaryButtonLink>
          </div>
        </VCenterRow>

        <VCenterRow className="hidden justify-between text-xs lg:flex">
          {/* <VCenterRow className="gap-x-4">
            <ul className="flex flex-row items-center font-semibold gap-x-1">
              {inventoryTypes.map((s, si) => (
                <li key={si}>
                  <BaseButton
                    aria-label={`Show ${s.name}`}
                    onClick={() => updateTypes(s.name)}
                    className={cn(FILTER_BUTTON_CLS, [
                      types.has(s.name),
                      "bg-theme-100",
                      "hover:bg-theme-100",
                    ])}
                  >
                    {s.name}
                  </BaseButton>
                </li>
              ))}
            </ul>
          </VCenterRow>*/}
        </VCenterRow>

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
