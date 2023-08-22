"use client"

import BaseCol from "@components/base-col"
import ProductsList from "@components/content/products-list"
import SearchBar from "@components/search-bar"
import Toolbar from "@components/toolbar/toolbar"
import SideLayout from "@layouts/side-layout"

import PrimaryButtonLink from "@components/link/primary-button-link"
import {
  DEFAULT_PAGE_RANGE,
  IDBItem,
  IPageRange,
  ISessionUser,
} from "@lib/types"
import { ChangeEvent, MouseEvent, useState } from "react"
import { ORDER_ITEM_TEXT, ORDER_ROUTE } from "src/consts"
import VendorAutocompleteSelect from "../content/vendor-autocomplete-select"

interface IProps {
  session: ISessionUser
  vendors: IDBItem[]
  dates?: Date[]
  pages?: IPageRange
  status?: string[]
}

export default function ProductsPage({
  session,
  vendors,
  pages = DEFAULT_PAGE_RANGE,
}: IProps) {
  const [search, setSearch] = useState<string>("")
  const [selectedVendors, setSelectedVendors] = useState<Set<string>>(new Set())

  function _onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    // only search on at least 2 letters
    setSearch((e.target as HTMLInputElement).value)
  }

  function _onSearchClick(e: MouseEvent) {
    // only search on at least 2 letters
    setSearch((e.currentTarget as HTMLInputElement).value)
  }

  function _onVendorClick(selected: IDBItem[]) {
    setSelectedVendors(new Set(selected.map(item => item.name)))
  }

  return (
    <>
      <Toolbar
        session={session}
        tab="Products"
        middle={
          <SearchBar
            id="products-search"
            search={search}
            onChange={_onSearchChange}
            placeholder="Search products..."
            onClick={_onSearchClick}
            onClearClick={() => setSearch("")}
            className="text-sm"
          />
        }
      />
      <SideLayout>
        <div className="flex flex-col gap-y-12 text-xs" slot="side">
          {/* <Group session={session} /> */}

          <PrimaryButtonLink
            aria-label={ORDER_ITEM_TEXT}
            className="w-full"
            href={ORDER_ROUTE}
          >
            {ORDER_ITEM_TEXT}
          </PrimaryButtonLink>

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
          </BaseCol>
        </div>

        <ProductsList
          session={session}
          search={search}
          selectedVendors={selectedVendors}
          pages={pages}
          onSearchChange={_onSearchChange}
          onSearchClick={_onSearchClick}
        />
      </SideLayout>
    </>
  )
}
