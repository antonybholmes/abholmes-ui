"use client";
import { DEFAULT_PAGE_RANGE, } from "..lib/types";
import BaseCol from "@components/base-col";
import InventoryList from "@components/content/inventory-list";
import InventoryTypeAutocompleteSelect from "@components/content/inventory-type-autocomplete-select";
import VendorAutocompleteSelect from "@components/content/vendor-autocomplete-select";
import PrimaryButtonLink from "@components/link/primary-button-link";
import SearchBar from "@components/search-bar";
import Toolbar from "@components/toolbar/toolbar";
import SideLayout from "@layouts/side-layout";
import { useState } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ORDER_ITEM_TEXT, ORDER_ROUTE } from "src/consts";
export default function InventoryPage(_a) {
    var session = _a.session, vendors = _a.vendors, inventoryTypes = _a.inventoryTypes, _b = _a.pages, pages = _b === void 0 ? DEFAULT_PAGE_RANGE : _b;
    var _c = useState(new Set()), types = _c[0], setTypes = _c[1];
    var _d = useState(""), search = _d[0], setSearch = _d[1];
    var _e = useState(new Set()), selectedVendors = _e[0], setSelectedVendors = _e[1];
    function _onVendorClick(selected) {
        setSelectedVendors(new Set(selected.map(function (item) { return item.name; })));
    }
    function _onTypeClick(selected) {
        setTypes(new Set(selected.map(function (item) { return item.name; })));
    }
    // function _onMemberClick(e: MouseEvent, selected: IDBItem[]) {
    //   setRequestedBy(selected.map(item=>item.uuid64) )
    // }
    function _onSearchChange(e) {
        // only search on at least 2 letters
        setSearch(e.target.value);
    }
    function _onSearchClick(e) {
        setSearch(e.currentTarget.value);
    }
    return (_jsxs(_Fragment, { children: [_jsx(Toolbar, { session: session, tab: "Inventory", showAlert: false, middle: _jsx(SearchBar, { id: "inventory-search", search: search, onChange: _onSearchChange, onClick: _onSearchClick, onClearClick: function () { return setSearch(""); }, placeholder: "Search inventory...", className: "text-sm" }) }), _jsxs(SideLayout, { children: [_jsxs("div", { className: "flex flex-col gap-y-12 text-xs", slot: "side", children: [_jsx(PrimaryButtonLink, { "aria-label": ORDER_ITEM_TEXT, className: "w-full", href: ORDER_ROUTE, children: ORDER_ITEM_TEXT }), _jsxs(BaseCol, { className: "gap-y-2", children: [_jsx(VendorAutocompleteSelect, { vendors: vendors, onClick: _onVendorClick }), _jsx(InventoryTypeAutocompleteSelect, { inventoryTypes: inventoryTypes, onClick: _onTypeClick })] })] }), _jsx(InventoryList, { session: session, search: search, types: types, vendors: selectedVendors, pages: pages, inventoryTypes: inventoryTypes, onSearchChange: _onSearchChange, onSearchClick: _onSearchClick })] })] }));
}
//# sourceMappingURL=inventory-page.js.map