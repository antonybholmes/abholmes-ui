"use client"

import CheckBox from "@components/button/check-box"
import HCenterRow from "@components/h-center-row"
import Dropdown from "@components/item-dropdown"
import useBreakPoint, { BREAKPOINT_XL } from "@hooks/use-breakpoint"
import type IClassProps from "@interfaces/class-props"
import { makeAuthBearerHeader } from "@lib/auth"
import cn from "@lib/class-names"

import BaseRow from "@components/base-row"
import BaseButton from "@components/button/base-button"
import BasicButton from "@components/button/basic-button"
import OKCancelDialog from "@components/dialog/ok-cancel-dialog"
import TrashIcon from "@icons/trash"
import { IDBItem, IPageRange, ISessionUser, IUserDBItem } from "@lib/types"
import { fetchPost, fetchPostJsonArrayQuery } from "@lib/url"
import { uuidFromBase64 } from "@lib/utils"
import { Fragment, useEffect, useMemo, useState } from "react"
import {
  ALT_TEXT_CLS,
  CHANGE_MEMBER_TYPE_URL,
  DELETE_USERS_URL,
  GROUP_MEMBERS_URL,
  NO_RESULTS_TEXT,
  TABLE_CLS,
  USER_TYPES_URL,
} from "src/consts"
import {
  ALT_ROW_CLS,
  CELL_CLS_1,
  CELL_CLS_11,
  CELL_CLS_12,
  CELL_CLS_3,
  CELL_CLS_5,
  TABLE_BODY_CLS,
  TABLE_HEADER_CLS,
} from "./order/orders-list"

interface IProps extends IClassProps {
  session: ISessionUser
  search?: string
  pages?: IPageRange
}

export default function MembersList({ session, search = "" }: IProps) {
  const [memberTypes, setMemberTypes] = useState<IUserDBItem[]>([])
  const [members, setMembers] = useState<IUserDBItem[]>([])
  const [selectedMap, setSelectedMap] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const breakPoint = useBreakPoint()
  const [showAskRemoveMembers, setShowAskRemoveMembers] = useState<
    IUserDBItem[]
  >([])

  async function fetchMembers() {
    const config = makeAuthBearerHeader(session)
    const body = {
      //group:user.groups[0].uuid64,
      s: search,
    }

    const { items } = await fetchPostJsonArrayQuery(
      GROUP_MEMBERS_URL,
      body,
      config,
    )

    setMembers(items.filter((item: { isDeleted: boolean }) => !item.isDeleted))
  }

  useEffect(() => {
    async function fetch() {
      const config = makeAuthBearerHeader(session)
      try {
        const { items } = await fetchPostJsonArrayQuery(
          USER_TYPES_URL,
          {},
          config,
        )

        setMemberTypes(items)
      } catch (e) {
        console.error(e)
      }
    }

    fetch()
  }, [session])

  useEffect(() => {
    fetchMembers()
  }, [search, session])

  useEffect(() => {
    setSelectedMap(new Set())
  }, [members])

  const ditems = useMemo(
    () =>
      memberTypes.map(item => ({ id: item.uuid64, label: item.name, item })),
    [memberTypes],
  )

  async function _onMemberClick(user: IUserDBItem, item: IDBItem) {
    const config = makeAuthBearerHeader(session)
    const body = {
      ids: [user.uuid64],
      typeId: item.uuid64,
    }

    try {
      // force update
      await fetchPost(CHANGE_MEMBER_TYPE_URL, body, config)

      fetchMembers()
    } catch (e) {
      console.error(e)
    }
  }

  function _onSelectClick(item: IUserDBItem) {
    if (selectedMap.has(item.uuid64)) {
      setSelectedMap(new Set([...selectedMap].filter(x => x !== item.uuid64)))
    } else {
      setSelectedMap(new Set([...selectedMap, item.uuid64]))
    }
  }

  function _makeList() {
    if (members.length > 0) {
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
        {members.map((member, ri) => (
          <li
            key={ri}
            className={cn("flex flex-col items-start gap-y-2 py-4", [
              ri % 2 == 1,
              ALT_ROW_CLS,
            ])}
          >
            <ul className="flex flex-col gap-y-2">
              <li className="flex flex-col gap-y-1">
                <p>{member.name}</p>
                <p className={cn("text-xs", ALT_TEXT_CLS)}>
                  #{uuidFromBase64(member.uuid64)}
                </p>
              </li>
              <li>{member.email}</li>
              <li>{member.type}</li>
            </ul>

            {session.user?.isAdmin && (
              <BaseButton
                aria-label="Delete order"
                onClick={() =>
                  askRemoveMembers(session.user ? [session.user] : [])
                }
                className="fill-gray-400 hover:fill-red-400"
              >
                <TrashIcon size="w-3.5" />
              </BaseButton>
            )}
          </li>
        ))}
      </ul>
    )
  }

  function _largeList() {
    return (
      <div className={TABLE_CLS}>
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
                    : new Set(members.map(member => member.uuid64)),
                )
              }}
            />
          </div>

          <div className={CELL_CLS_12}>Name</div>
          <div className={CELL_CLS_11}>Email</div>
          <div className={CELL_CLS_5}>Type</div>
          <div className={CELL_CLS_3}></div>
        </div>

        <div className={TABLE_BODY_CLS}>
          {members.map((member, ri) => (
            <Fragment key={ri}>
              <div className={CELL_CLS_1}>
                <CheckBox
                  aria-label={`Remove ${member.name}`}
                  isSelected={selectedMap.has(member.uuid64)}
                  onCheckClick={e => _onSelectClick(member)}
                  className="py-1"
                />
              </div>

              <div className={cn(CELL_CLS_12, "flex flex-col gap-y-1")}>
                <p>{member.name}</p>
                <p className="text-xs text-gray-400">
                  #{uuidFromBase64(member.uuid64)}
                </p>
              </div>
              <div className={CELL_CLS_11}>{member.email}</div>

              <div className={CELL_CLS_5}>
                {session.user?.isAdmin ? (
                  <Dropdown
                    items={ditems}
                    name={member.type}
                    onDropClick={(
                      index: number,
                      id: string | number,
                      label: string,
                      item: IDBItem,
                    ) => {
                      _onMemberClick(member, item)
                    }}
                    className="w-28"
                  />
                ) : (
                  member.type
                )}
              </div>

              <BaseRow
                className={cn(CELL_CLS_3, "items-start justify-end text-xs")}
              >
                {session.user?.isAdmin && (
                  <BasicButton
                    aria-label="Delete order"
                    onClick={() =>
                      askRemoveMembers(session.user ? [session.user] : [])
                    }
                    className="fill-gray-400 hover:fill-red-400"
                  >
                    <TrashIcon size="w-3.5" />
                  </BasicButton>
                )}
              </BaseRow>
            </Fragment>
          ))}
        </div>
      </div>
    )
  }

  async function askRemoveMembers(orders: IUserDBItem[]) {
    setShowAskRemoveMembers(orders)
  }

  async function deleteMembers(orders: IUserDBItem[]) {
    const config = makeAuthBearerHeader(session)

    // let response = await axios.post(GROUP_USERS_URL, config)

    // setUsers(
    //   Object.fromEntries(
    //     response.data.map((user: IUserDBItem) => [user.uuid64, user])
    //   )
    // )

    await fetchPost(
      DELETE_USERS_URL,
      { ids: orders.map(order => order.uuid64) },
      config,
    )

    fetchMembers()

    setShowAskRemoveMembers([])
  }

  return (
    <>
      <OKCancelDialog
        visible={showAskRemoveMembers.length > 0}
        title="Are you sure you want to delete the selected members?"
        text="This action cannot be undone and will permanently delete the selected members."
        onClick={() => deleteMembers(showAskRemoveMembers)}
        onCancel={() => setShowAskRemoveMembers([])}
        className="w-1/4"
      />

      {_makeList()}
    </>
  )
}
