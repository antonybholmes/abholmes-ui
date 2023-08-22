"use client";
import { DEFAULT_PAGE_RANGE, } from "..lib/types";
import { BaseCol } from "@components/base-col";
import ProductsList from "@components/content/products-list";
import PrimaryButtonLink from "@components/link/primary-button-link";
import SearchBar from "@components/search-bar";
import Toolbar from "@components/toolbar/toolbar";
import SideLayout from "@layouts/side-layout";
import { useState } from "react";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ORDER_ITEM_TEXT, ORDER_ROUTE } from "src/consts";
import VendorAutocompleteSelect from "../content/vendor-autocomplete-select";
export default function ProductsPage(_a) {
    var session = _a.session, vendors = _a.vendors, _b = _a.pages, pages = _b === void 0 ? DEFAULT_PAGE_RANGE : _b;
    var _c = useState(""), search = _c[0], setSearch = _c[1];
    var _d = useState(new Set()), selectedVendors = _d[0], setSelectedVendors = _d[1];
    function _onSearchChange(e) {
        // only search on at least 2 letters
        setSearch(e.target.value);
    }
    function _onSearchClick(e) {
        // only search on at least 2 letters
        setSearch(e.currentTarget.value);
    }
    function _onVendorClick(selected) {
        setSelectedVendors(new Set(selected.map(function (item) { return item.name; })));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Toolbar, { session: session, tab: "Products", middle: _jsx(SearchBar, { id: "products-search", search: search, onChange: _onSearchChange, placeholder: "Search products...", onClick: _onSearchClick, onClearClick: function () { return setSearch(""); }, className: "text-sm" }) }), _jsxs(SideLayout, { children: [_jsxs("div", { className: "flex flex-col gap-y-12 text-xs", slot: "side", children: [_jsx(PrimaryButtonLink, { "aria-label": ORDER_ITEM_TEXT, className: "w-full", href: ORDER_ROUTE, children: ORDER_ITEM_TEXT }), _jsx(BaseCol, { className: "gap-y-2", children: _jsx(VendorAutocompleteSelect, { vendors: vendors, onClick: _onVendorClick }) })] }), _jsx(ProductsList, { session: session, search: search, selectedVendors: selectedVendors, pages: pages, onSearchChange: _onSearchChange, onSearchClick: _onSearchClick })] })] }));
}
//# sourceMappingURL=products-page.js.map