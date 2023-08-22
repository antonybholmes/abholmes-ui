"use client"

import BaseCol from "@components/base-col"
import InventoryList from "@components/content/inventory-list"
import InventoryTypeAutocompleteSelect from "@components/content/inventory-type-autocomplete-select"
import VendorAutocompleteSelect from "@components/content/vendor-autocomplete-select"
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
import { ORDER_ITEM_TEXT, ORDER_ROUTE } from "src/consts"

interface IProps {
  session: ISessionUser
  vendors: IDBItem[]
  inventoryTypes: IDBItem[]
  pages?: IPageRange
}

export default function InventoryPage({
  session,
  vendors,
  inventoryTypes,
  pages = DEFAULT_PAGE_RANGE,
}: IProps) {
  const [types, setTypes] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState<string>("")
  const [selectedVendors, setSelectedVendors] = useState<Set<string>>(new Set())

  function _onVendorClick(selected: IDBItem[]) {
    setSelectedVendors(new Set(selected.map(item => item.name)))
  }

  function _onTypeClick(selected: IDBItem[]) {
    setTypes(new Set(selected.map(item => item.name)))
  }

  // function _onMemberClick(e: MouseEvent, selected: IDBItem[]) {
  //   setRequestedBy(selected.map(item=>item.uuid64) )
  // }

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
        tab="Inventory"
        showAlert={false}
        middle={
          <SearchBar
            id="inventory-search"
            search={search}
            onChange={_onSearchChange}
            onClick={_onSearchClick}
            onClearClick={() => setSearch("")}
            placeholder="Search inventory..."
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
            <InventoryTypeAutocompleteSelect
              inventoryTypes={inventoryTypes}
              onClick={_onTypeClick}
            />
          </BaseCol>

          {/* <div className="px-4">
          <MemberAutocompleteSelect
          name="Requested By"
            group={group}
            sessionToken={sessionToken}
            onClick={_onMemberClick}
          />
        </div> */}
        </div>

        <InventoryList
          session={session}
          search={search}
          types={types}
          vendors={selectedVendors}
          pages={pages}
          inventoryTypes={inventoryTypes}
          onSearchChange={_onSearchChange}
          onSearchClick={_onSearchClick}
        />
      </SideLayout>
    </>
  )
}
