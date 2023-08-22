"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import VendorList from "@components/content/vendors-list";
import PrimaryButtonLink from "@components/link/primary-button-link";
import SearchBar from "@components/search-bar";
import Toolbar from "@components/toolbar/toolbar";
import SideLayout from "@layouts/side-layout";
import { DEFAULT_PAGE_RANGE, } from "@lib/types";
import { useState } from "react";
import { ORDER_ITEM_TEXT, ORDER_ROUTE, VENDORS_URL } from "src/consts";
export default function VendorsPage(_a) {
    var session = _a.session, _b = _a.urlPages, urlPages = _b === void 0 ? DEFAULT_PAGE_RANGE : _b;
    var _c = useState(""), search = _c[0], setSearch = _c[1];
    var _d = useState(urlPages), pages = _d[0], setPags = _d[1];
    var _e = useState(new Set()), selectedVendors = _e[0], setSelectedVendors = _e[1];
    function _onSearchChange(e) {
        // only search on at least 2 letters
        setSearch(e.target.value);
    }
    function _onSearchClick(e) {
        // only search on at least 2 letters
        setSearch(e.currentTarget.value.length > 1
            ? e.currentTarget.value
            : "");
    }
    function _onVendorClick(e, selected) {
        setSelectedVendors(new Set(selected.map(function (item) { return item.uuid64; })));
    }
    return (_jsxs(_Fragment, { children: [_jsx(Toolbar, { session: session, tab: "Vendors", middle: _jsx(SearchBar, { id: "vendors-search", search: search, placeholder: "Search vendors...", onChange: _onSearchChange, onClick: _onSearchClick, onClearClick: function () { return setSearch(""); }, className: "text-sm" }) }), _jsxs(SideLayout, { children: [_jsx("div", { className: "flex flex-col gap-y-12 text-xs", slot: "side", children: _jsx(PrimaryButtonLink, { "aria-label": ORDER_ITEM_TEXT, href: ORDER_ROUTE, children: ORDER_ITEM_TEXT }) }), _jsx(VendorList, { session: session, search: search, pages: pages, baseUrl: VENDORS_URL })] })] }));
}
//# sourceMappingURL=vendors-page.js.map