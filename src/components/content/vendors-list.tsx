import BaseCol from "@components/base-col"
import CheckBox from "@components/button/check-box"
import Pagination from "@components/pagination"
import useBreakPoint, { BREAKPOINT_XL } from "@hooks/use-breakpoint"
import { makeAuthBearerHeader } from "@lib/auth"
import cn from "@lib/class-names"

import BaseRow from "@components/base-row"
import BaseButton from "@components/button/base-button"
import BasicButton from "@components/button/basic-button"
import OKCancelDialog from "@components/dialog/ok-cancel-dialog"
import { DynamicTooltip } from "@components/dynamic-tooltip"
import VCenterRow from "@components/v-center-row"
import TrashIcon from "@icons/trash"
import {
  DEFAULT_PAGE_RANGE,
  IDBItem,
  IPageRange,
  ISessionUser,
  IVendorDBItem,
} from "@lib/types"
import { fetchPost, fetchPostJsonArrayQuery } from "@lib/url"
import { uuidFromBase64 } from "@lib/utils"
import { format, parseISO } from "date-fns"
import { ChangeEvent, Fragment, MouseEvent, useEffect, useState } from "react"
import {
  ALT_TEXT_CLS,
  NO_RESULTS_TEXT,
  REMOVE_VENDORS_URL,
  TABLE_CLS,
  VENDORS_URL,
} from "src/consts"
import HCenterRow from "../h-center-row"
import {
  ALT_ROW_CLS,
  CELL_CLS_1,
  CELL_CLS_12,
  CELL_CLS_16,
  CELL_CLS_3,
  TABLE_BODY_CLS,
  TABLE_HEADER_CLS,
} from "./order/orders-list"
import SearchResults from "./search-results"

interface IProps {
  session: ISessionUser
  search: string
  pages: IPageRange
  baseUrl?: string
}

export default function VendorList({
  session,
  search = "",
  pages = DEFAULT_PAGE_RANGE,
  baseUrl = VENDORS_URL,
}: IProps) {
  const [_search, setSearch] = useState<string>("")
  const [_pages, setPages] = useState<IPageRange>(pages)
  const [records, setRecords] = useState(0)
  const [items, setItems] = useState<IVendorDBItem[]>([])
  const [selectedMap, setSelectedMap] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [showAskRemoveVendors, setShowAskRemoveVendors] = useState<IDBItem[]>(
    [],
  )
  const breakPoint = useBreakPoint()

  async function fetch() {
    const config = makeAuthBearerHeader(session)

    const body = {
      //group:user.groups[0].uuid64,
      search: _search.length > 1 ? _search : "",
      pages: [
        {
          offset: (_pages.page - 1) * _pages.pageSize,
          pageSize: _pages.pageSize,
        },
      ],
    }

    const { totalItems, items } = await fetchPostJsonArrayQuery(
      baseUrl,
      body,
      config,
    )

    setRecords(totalItems)
    setItems(
      items.map((item: any) => ({
        ...item,
        date: parseISO(item.date),
      })),
    )
  }

  useEffect(() => {
    fetch()
  }, [_search, _pages])

  useEffect(() => {
    setSearch(search)
  }, [search])

  function _onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    // only search on at least 2 letters
    setSearch((e.target as HTMLInputElement).value)
  }

  function _onSearchClick(e: MouseEvent) {
    // only search on at least 2 letters
    setSearch(
      (e.currentTarget as HTMLInputElement).value.length > 1
        ? (e.currentTarget as HTMLInputElement).value
        : "",
    )
  }

  function _onPageClick(page: IPageRange) {
    setPages(page)
  }

  async function askDelete(vendors: IDBItem[]) {
    setShowAskRemoveVendors(vendors)
  }

  async function removeVendors(vendors: IDBItem[]) {
    const config = makeAuthBearerHeader(session)

    // let response = await axios.post(GROUP_USERS_URL, config)

    // setUsers(
    //   Object.fromEntries(
    //     response.data.map((user: IUserDBItem) => [user.uuid64, user])
    //   )
    // )

    await fetchPost(
      REMOVE_VENDORS_URL,
      { ids: vendors.map(order => order.uuid64) },
      config,
    )

    fetch()

    setShowAskRemoveVendors([])
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

          <div className={CELL_CLS_16}>Item Name</div>

          <div className={CELL_CLS_12}>Added</div>
          <div className={CELL_CLS_3}></div>
        </div>

        <div className={TABLE_BODY_CLS}>
          {items.map((item, ri) => (
            <Fragment key={ri}>
              <div className={CELL_CLS_1}>
                <CheckBox
                  aria-label={`Remove ${item.name}`}
                  isSelected={selectedMap.has(item.uuid64)}
                  onCheckClick={e => _onSelectClick(item)}
                />
              </div>
              <div className={CELL_CLS_16}>
                <p>{item.name}</p>
                <p className={cn("text-xs", ALT_TEXT_CLS)}>
                  #{uuidFromBase64(item.uuid64)}
                </p>
              </div>

              <div className={CELL_CLS_12}>{format(item.date, "MM/dd/yy")}</div>
              <BaseRow
                className={cn(
                  CELL_CLS_3,
                  "items-start justify-end text-xs font-semibold",
                )}
              >
                <DynamicTooltip content="Delete">
                  <BasicButton
                    aria-label="Delete vendor"
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

  function _smallList() {
    return (
      <ul>
        {items.map((item, ri) => (
          <li
            key={ri}
            className={cn("flex flex-col gap-y-2 py-3", [
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
              </ul>
              {session.user?.isAdmin && (
                <BaseButton
                  aria-label="Delete product"
                  onClick={() => askDelete([item])}
                  className="fill-gray-400 hover:fill-red-400"
                >
                  <TrashIcon size="w-4" />
                </BaseButton>
              )}
            </VCenterRow>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <OKCancelDialog
        visible={showAskRemoveVendors.length > 0}
        title="Are you sure you want to delete the selected vendors?"
        text="This action cannot be undone and will permanently delete the selected items."
        onClick={() => removeVendors(showAskRemoveVendors)}
        onCancel={() => setShowAskRemoveVendors([])}
        className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
      />

      <BaseCol className="gap-y-4 text-sm">
        <div className="grid grid-cols-3 items-center">
          <SearchResults count={records} search={_search} />
          <div>
            {/* <SearchBar
          value={_search}
          onChange={_onSearchChange}
          onClick={_onSearchClick}
        /> */}
          </div>
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
