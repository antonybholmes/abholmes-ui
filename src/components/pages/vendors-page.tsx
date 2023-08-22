"use client"

import VendorList from "@components/content/vendors-list"
import PrimaryButtonLink from "@components/link/primary-button-link"
import SearchBar from "@components/search-bar"
import Toolbar from "@components/toolbar/toolbar"
import SideLayout from "@layouts/side-layout"
import {
  DEFAULT_PAGE_RANGE,
  IDBItem,
  IPageRange,
  ISessionUser,
} from "@lib/types"

import { ChangeEvent, MouseEvent, useState } from "react"
import { ORDER_ITEM_TEXT, ORDER_ROUTE, VENDORS_URL } from "src/consts"

interface IProps {
  session: ISessionUser
  urlPages?: IPageRange
}

export default function VendorsPage({
  session,
  urlPages = DEFAULT_PAGE_RANGE,
}: IProps) {
  const [search, setSearch] = useState<string>("")
  const [pages, setPags] = useState<IPageRange>(urlPages)
  const [selectedVendors, setSelectedVendors] = useState<Set<String>>(new Set())

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

  function _onVendorClick(e: MouseEvent, selected: IDBItem[]) {
    setSelectedVendors(new Set(selected.map(item => item.uuid64)))
  }

  return (
    <>
      <Toolbar
        session={session}
        tab="Vendors"
        middle={
          <SearchBar
            id="vendors-search"
            search={search}
            placeholder="Search vendors..."
            onChange={_onSearchChange}
            onClick={_onSearchClick}
            onClearClick={() => setSearch("")}
            className="text-sm"
          />
        }
      />
      <SideLayout>
        <div className="flex flex-col gap-y-12 text-xs" slot="side">
          {/* <Group session={session} /> */}

          <PrimaryButtonLink aria-label={ORDER_ITEM_TEXT} href={ORDER_ROUTE}>
            {ORDER_ITEM_TEXT}
          </PrimaryButtonLink>

          {/* <SideSearchBar
            search={search}
            onChange={_onSearchChange}
            onClick={_onSearchClick}
          /> */}
        </div>

        <VendorList
          session={session}
          search={search}
          pages={pages}
          baseUrl={VENDORS_URL}
        />
      </SideLayout>
    </>
  )
}
