"use client"

import BaseCol from "@components/base-col"
import OrderStatusAutocompleteSelect from "@components/content/order-status-autocomplete-select"
import OrdersList from "@components/content/order/orders-list"

import SideLayout from "@layouts/side-layout"

import PrimaryButtonLink from "@components/link/primary-button-link"
import SearchBar from "@components/search-bar"
import Toolbar from "@components/toolbar/toolbar"
import {
  DEFAULT_PAGE_RANGE,
  IDBItem,
  IDateRange,
  IPageRange,
  ISessionUser,
  IUserDBItem,
} from "@lib/types"
import { ChangeEvent, MouseEvent, useState } from "react"
import { ORDER_ITEM_TEXT, ORDER_ROUTE } from "src/consts"
import MemberAutocompleteSelect from "../content/member-autocomplete-select"
import VendorAutocompleteSelect from "../content/vendor-autocomplete-select"

interface IProps {
  session: ISessionUser
  vendors: IDBItem[]
  members: IUserDBItem[]
  orderStatuses: IDBItem[]
  urlDates: IDateRange
  urlPages?: IPageRange
  urlStatus?: Set<string>
}

export default function OrdersPage({
  session,
  vendors,
  members,
  orderStatuses,
  urlDates,
  urlPages = DEFAULT_PAGE_RANGE,
  urlStatus = new Set(),
}: IProps) {
  const [selectedVendors, setSelectedVendors] = useState<Set<string>>(new Set())
  const [requestedBy, setRequestedBy] = useState<Set<string>>(new Set())
  const [status, setStatus] = useState<Set<string>>(urlStatus)
  const [search, setSearch] = useState<string>("")

  function _onVendorClick(selected: IDBItem[]) {
    setSelectedVendors(new Set(selected.map(item => item.name)))
  }

  function _onMemberClick(selected: IDBItem[]) {
    setRequestedBy(new Set(selected.map(item => item.name)))
  }

  function _onStatusClick(selected: IDBItem[]) {
    setStatus(new Set(selected.map(item => item.name)))
  }

  function _onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    // only search on at least 2 letters
    setSearch((e.target as HTMLInputElement).value)
  }

  function _onSearchClick(e: MouseEvent) {
    setSearch((e.currentTarget as HTMLInputElement).value)
  }

  return (
    <>
      <Toolbar
        session={session}
        tab="Orders"
        showAlert={false}
        middle={
          <SearchBar
            id="orders-search"
            search={search}
            onChange={_onSearchChange}
            onClick={_onSearchClick}
            onClearClick={() => setSearch("")}
          />
        }
        small={
          <SearchBar
            id="orders-search-small"
            search={search}
            onChange={_onSearchChange}
            onClick={_onSearchClick}
            onClearClick={() => setSearch("")}
          />
        }
      />

      <SideLayout>
        <div className="flex flex-col gap-y-12 text-xs" slot="side">
          <PrimaryButtonLink
            aria-label={ORDER_ITEM_TEXT}
            className="w-full"
            href={ORDER_ROUTE}
          >
            {ORDER_ITEM_TEXT}
          </PrimaryButtonLink>

          {/* <Card>
        <Group session={session} />
        </Card> */}
          {/* <SideSearchBar
          value={search}
          onChange={_onSearchChange}
          onClick={_onSearchClick}
        /> */}

          <BaseCol className="gap-y-2">
            <VendorAutocompleteSelect
              vendors={vendors}
              onClick={_onVendorClick}
            />

            <MemberAutocompleteSelect
              name="Requested By"
              members={members}
              onClick={_onMemberClick}
            />

            <OrderStatusAutocompleteSelect
              items={orderStatuses}
              onClick={_onStatusClick}
              selectedMap={status}
            />
          </BaseCol>
        </div>

        <OrdersList
          search={search}
          status={status}
          session={session}
          urlDates={urlDates}
          urlPages={urlPages}
          selectedVendors={selectedVendors}
          requestedBy={requestedBy}
          onStatusClick={_onStatusClick}
          orderStatuses={orderStatuses}
          onSearchChange={_onSearchChange}
          onSearchClick={_onSearchClick}
        />
      </SideLayout>
    </>
  )
}
